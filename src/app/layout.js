import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Oviya Nursery School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="flex flex-col min-h-screen overflow-x-hidden">

        {/* Navbar stays at top */}
        <header className="fixed top-0 left-0 w-full max-w-full z-50 bg-white shadow overflow-x-hidden">
          <Navbar />
        </header>

        {/* Push content below navbar */}
        <main className="flex-grow mt-[70px] w-full max-w-full overflow-x-hidden">
          {children}
        </main>

        {/* Footer always stays at bottom */}
        <footer className="w-full max-w-full overflow-x-hidden">
          <Footer />
        </footer>

      </body>
    </html>
  );
}
