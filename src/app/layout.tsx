import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { defaultMetadata } from "@/lib/seo";
import { getLocalBusinessSchema } from "@/lib/schemas";
import { GA_MEASUREMENT_ID, GTM_ID, ADS_CONVERSION_ID, ADS_CONVERSION_LABEL } from "@/lib/analytics";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        {/* GTM */}
        {GTM_ID && (
          <>
            <Script id="gtm-base" strategy="afterInteractive">{`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}</Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        {/* GA4 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
            `}</Script>
          </>
        )}

        {/* Google Ads Enhanced Conversions (phone) */}
        {ADS_CONVERSION_ID && ADS_CONVERSION_LABEL && (
          <Script id="ads-enhanced-conv" strategy="afterInteractive">{`
            if (window.gtag) {
              gtag('config', '${ADS_CONVERSION_ID}/${ADS_CONVERSION_LABEL}', {
                enhanced_conversions: true,
                phone_conversion_number: '+1-941-555-0123',
                phone_conversion_callback: function(formatted_number, mobile_number) {
                  document.querySelectorAll('.phone-number').forEach(function(el){
                    if (el.tagName === 'A') { el.textContent = formatted_number; el.setAttribute('href', 'tel:' + mobile_number); }
                    else { el.textContent = formatted_number; }
                  });
                }
              });
            }
          `}</Script>
        )}

        {/* LocalBusiness JSON-LD */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />

        {children}
      </body>
    </html>
  );
}
