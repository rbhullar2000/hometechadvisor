import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Cookie Consent Banner */}
        <CookieBanner />

        <div className="flex flex-col min-h-screen">
          {/* Fixed Navbar */}
          <div className="fixed top-0 left-0 w-full z-50 bg-[#0c0c2c]">
            <Navbar />
          </div>

          {/* Main Content */}
          <main className="flex-grow pt-16">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}