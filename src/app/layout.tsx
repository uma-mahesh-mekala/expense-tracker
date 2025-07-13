import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
