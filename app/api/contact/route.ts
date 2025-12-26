import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Vänligen fyll i alla obligatoriska fält.' },
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
