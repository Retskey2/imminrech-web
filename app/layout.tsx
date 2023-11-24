import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Immintech",
  description: "Immintech Website",
};

const floripa = localFont({
  src: [
    {
      path: "../assets/fonts/floripa/Floripa.ttf",
    },
  ],
  variable: "--font-floripa",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
