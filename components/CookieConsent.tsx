'use client';

import CookieConsentBanner from "react-cookie-consent";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAccept = () => {
    // Load Google Analytics when user accepts
    if (typeof window !== 'undefined') {
      // Add Google Analytics initialization here when you have the tracking ID
      console.log('Cookies accepted - Analytics can be loaded');

      // Example for future Google Analytics implementation:
      // window.gtag('consent', 'update', {
      //   'analytics_storage': 'granted'
      // });
    }
  };

  const handleDecline = () => {
    // Don't load analytics scripts
    if (typeof window !== 'undefined') {
      console.log('Cookies declined - Analytics will not be loaded');

      // Example for future Google Analytics implementation:
      // window.gtag('consent', 'update', {
      //   'analytics_storage': 'denied'
      // });
    }
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <CookieConsentBanner
      location="bottom"
      buttonText="Acceptera alla"
      declineButtonText="Avvisa"
      enableDeclineButton
      cookieName="adekvat-juridik-cookie-consent"
      style={{
        background: "#0C122B",
        borderTop: "1px solid rgba(196, 164, 112, 0.2)",
        padding: "20px",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}
      buttonStyle={{
        background: "#C4A470",
        color: "#000",
        fontSize: "11px",
        textTransform: "uppercase",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "2px",
        border: "none",
        cursor: "pointer",
        letterSpacing: "0.05em",
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "#fff",
        fontSize: "11px",
        textTransform: "uppercase",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "2px",
        cursor: "pointer",
        letterSpacing: "0.05em",
      }}
      buttonWrapperClasses="cookie-buttons-wrapper"
      contentStyle={{
        flex: "1 1 300px",
        margin: "0",
      }}
      expires={365}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      <span style={{ fontSize: "14px", color: "#fff", lineHeight: "1.6" }}>
        Vi använder cookies för att förbättra din upplevelse på vår webbplats.
        Genom att fortsätta använda webbplatsen samtycker du till vår användning av cookies.
        {" "}
        <Link
          href="/cookies"
          style={{
            color: "#C4A470",
            textDecoration: "underline",
            textUnderlineOffset: "2px"
          }}
        >
          Läs mer om cookies
        </Link>
      </span>
    </CookieConsentBanner>
  );
}
