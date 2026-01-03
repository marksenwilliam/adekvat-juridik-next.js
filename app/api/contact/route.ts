import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (resets on server restart)
// For production with multiple instances, use Redis instead
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 25; // Max requests per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 60 * 1000); // Clean up every hour

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting and Turnstile verification
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "unknown";

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "För många förfrågningar. Vänligen försök igen senare." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message, honeypot, formLoadTime, turnstileToken } = body;

    // Bot Protection Layer 1: Honeypot check - if this field is filled, it's a bot
    if (honeypot) {
      // Pretend success but don't send email
      return NextResponse.json({ success: true });
    }

    // Bot Protection Layer 2: Time check - form must be open for at least 3 seconds
    const minTime = 3000; // 3 seconds
    if (formLoadTime && Date.now() - formLoadTime < minTime) {
      // Too fast, likely a bot
      return NextResponse.json({ success: true });
    }

    // Bot Protection Layer 3: Verify Turnstile token (skip if timeout-fallback)
    if (turnstileToken && turnstileToken !== "timeout-fallback") {
      const turnstileResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
            remoteip: ip,
          }),
        }
      );

      const turnstileData = await turnstileResponse.json();

      if (!turnstileData.success) {
        console.log("Turnstile verification failed:", turnstileData);
        return NextResponse.json(
          { error: "Verifiering misslyckades. Vänligen försök igen." },
          { status: 400 }
        );
      }
    }
    // If turnstileToken is "timeout-fallback" or missing, we still allow submission
    // because honeypot, rate limiting, and time check provide baseline protection

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Vänligen fyll i alla obligatoriska fält.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ogiltig e-postadress." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Adekvat Juridik <onboarding@resend.dev>',
      to: ['info@adekvatjuridik.se'],
      replyTo: email,
      subject: `Nytt kontaktformulär: ${subject}`,
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Ämne:</strong> ${subject}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Ett fel uppstod vid skickande av meddelandet. Vänligen försök igen.' },
      { status: 500 }
    );
  }
}
