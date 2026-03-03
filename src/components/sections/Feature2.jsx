import Image from "next/image";

export default function Feature2() {
  return (
    <section className="bg-[#09090B] py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Meet Genius
          </h2>

          <p className="mt-6 text-white/60 leading-relaxed">
            Our AI-driven assistant is designed to decode complex financial
            figures and illuminate key trends in your business.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-[#0D1523] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">

            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden mb-6">
              <Image
                src="/img7.png"  // change to your image name
                alt="Smart forecasting"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <h3 className="text-lg font-medium">
              Smart forecasting
            </h3>

            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Harness the power of Cobalt's predictive analytics to map out
              the financial future of your business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0D1523] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition">

            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden mb-6">
              <Image
                src="/img8.png"  // change to your image name
                alt="Chat with Genius"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <h3 className="text-lg font-medium">
              Chat with Genius
            </h3>

            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Just ask. With Genius by your side, navigating the financial
              maze becomes intuitive and effortless.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}