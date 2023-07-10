import "./globals.css";
import { NavBar, Footer } from "@/components";

export const metadata = {
  title: "Vroom Hub",
  description: "Book or rent a motorbike",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
