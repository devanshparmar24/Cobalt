import Link from "next/link";
import Logo from "./Logo";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-dvw z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo Image */}
        <Logo className="h-9" />

        {/* Right: Navigation */}
        <div className="flex items-center gap-8">

          <Link
            href="#"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Blog
          </Link>

          <Button />
        </div>
      </div>
    </header>
  );
}