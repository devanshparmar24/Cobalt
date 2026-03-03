import Image from "next/image";
import FeatureCard from "../ui/FeatureCard";

export default function Feature2() {
  return (
    <section className="bg-[#09090B] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight bg-gradient-to-b from-white to-zinc-500  bg-clip-text text-transparent">
            Meet Genius
          </h2>

          <p className="mt-6 text-white/60 leading-relaxed">
            Our AI-driven assistant is designed to decode complex financial
            figures and illuminate key trends in your business.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          <FeatureCard
            image="/img7.png"
            alt="Smart forecasting"
            title="Smart forecasting"
            description="Harness the power of Cobalt's predictive analytics to map out the financial future of your business."
            colSpan="md:col-span-1"
            imageHeight="h-56 md:h-64"
          />

          <FeatureCard
            image="/img8.png"
            alt="Chat with Genius"
            title="Chat with Genius"
            description="Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless."
            colSpan="md:col-span-1"
            imageHeight="h-56 md:h-64"
          />

        </div>
      </div>
    </section>
  );
}