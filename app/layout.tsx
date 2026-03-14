import ScrollReveal from "./components/ScrollReveal";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ScrollReveal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
