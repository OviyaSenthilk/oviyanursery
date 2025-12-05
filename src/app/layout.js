import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Oviya Nursery School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* Navbar stays at top */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
          <Navbar />
        </header>

        {/* Push content below navbar */}
        <main className="flex-grow mt-[70px]">
          {children}
        </main>

        {/* Footer always stays at bottom */}
        <footer>
          <Footer />
        </footer>

      </body>
    </html>
  );
}
