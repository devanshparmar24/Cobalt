"use client";

import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo Image */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Cobalt Logo"
            width={120}
            height={32}
            priority
            className="h-7 w-auto"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8 text-sm">
          <a
            href="#"
            className="text-white/70 hover:text-white transition"
          >
            Blog
          </a>

          <Button variant="secondary">
            Join the waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}