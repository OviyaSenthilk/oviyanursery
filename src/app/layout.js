import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sunshine Nursery",
  description: "A joyful place for young minds to grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-yellow-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
