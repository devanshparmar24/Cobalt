import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="relative bg-[#09090B] pb-32">

      {/* Dashboard Image */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
          
          <Image
            src="/img1.png"
            alt="Cobalt dashboard preview"
            width={1400}
            height={900}
            className="w-full h-auto"
            priority
          />

        </div>
      </div>

      {/* Text Section Below */}
      <div className="max-w-6xl mx-auto px-6 mt-56 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Heading */}
        <h2 className="text-5xl font-semibold leading-tight tracking-tight bg-gradient-to-b from-white to-zinc-500  bg-clip-text text-transparent">
          Who said finance has to
          <br />
          be boring?
        </h2>

        {/* Right Paragraph */}
        <p className="text-white/60 leading-relaxed">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and puts the power of advanced financial management right at your
          fingertips. Say no to spreadsheets and tools designed in the 80s.
        </p>
      </div>

    </section>
  );
}