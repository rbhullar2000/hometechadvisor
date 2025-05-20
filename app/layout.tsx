import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
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
