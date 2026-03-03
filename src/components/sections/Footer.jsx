import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#09090B] pb-20 ">

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 mb-[129px]">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Left Content */}
          <div className="text-sm text-white/60 space-y-4 max-w-2xl">

            <div className="flex flex-wrap gap-6 text-white/70">
              <span>© 2023 Cobalt Financial Technologies Inc.</span>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Use
              </a>
            </div>

            <p>
              Cobalt is a trademark or registered trademark of Cobalt Financial
              Technologies Inc. Any other trademarks are the property of their
              respective owners. Unless otherwise noted, use of third party
              logos does not imply endorsement of, sponsorship of, or affiliation
              with Cobalt.
            </p>

            <p>
              Cobalt is a financial technology company, not a bank. Banking
              services are provided by Celtic Bank and Evolve Bank & Trust®,
              Members FDIC.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-start gap-6 text-white/60 text-lg ">
            <a href="#" className="hover:text-white transition"><Image src='/x.png' alt="x" width={16} height={16} /></a>
            <a href="#" className="hover:text-white transition"><Image src='/linkedin.png' alt="In" width={16} height={16}/></a>
            <a href="#" className="hover:text-white transition"><Image src='/facebook.png' alt="fb" width={16} height={16}/></a>
          </div>

        </div>
      </div>
    </footer>
  );
}