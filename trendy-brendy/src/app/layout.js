import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Trendy Brendy",
  description: "Shop the trends. Own the vibe. Only at Trendy Brendy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
