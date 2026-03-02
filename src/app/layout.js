import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cobalt",
  description: "Unleash intuitive finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white min-h-screen relative overflow-x-hidden`}
      >
        {/* Base Dark Background */}
        <div className="fixed inset-0 -z-20 bg-[#050B14]" />

        {/* Top Glow */}
        <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#0E2A47] opacity-40 blur-[160px] rounded-full -z-10" />

        {/* Bottom Glow */}
        <div className="fixed bottom-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#0E2A47] opacity-40 blur-[160px] rounded-full -z-10" />

        {children}
      </body>
    </html>
  );
}