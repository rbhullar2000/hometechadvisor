import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import Script from 'next/script';

export const metadata = {
  title: 'HomeTechAdvisor | Smart Home Reviews & Buying Guides',
  description: 'Expert reviews, guides, and comparisons of the best smart home gadgets of 2025.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Pinterest Domain Verification */}
       <Script id="pinterest-verify" strategy="afterInteractive">
  {`<meta name="p:domain_verify" content="6a57b0ad7afed46a3759ac7de61c1357" />`}
</Script>

        {/* Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QH4LVLW2LJ"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QH4LVLW2LJ');
          `}
        </Script>
      </head>
      <body className="bg-white text-gray-900">
        <CookieBanner />
        <div className="flex flex-col min-h-screen">
          {/* Fixed Navbar */}
          <div className="fixed top-0 left-0 w-full z-50 bg-[#0c0c2c]">
            <Navbar />
          </div>

          {/* Push content down so it's not hidden behind navbar */}
          <main className="flex-grow pt-16">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
