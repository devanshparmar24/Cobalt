export default function Contact() {
  return (
    <section className="relative bg-[#050B14] pt-32 pb-24 overflow-hidden">

      {/* Subtle dashboard glow */}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <div className="w-40 h-px bg-white/10 mx-auto mb-16" />

        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          See where financial automation can
          <br />
          take your business.
        </h2>

        <p className="mt-6 text-white/60">
          The first financial tool you'll love. And the last one you'll ever need.
        </p>

        <div className="mt-10">
          <button className="px-6 py-3 rounded-full border border-white/20 text-sm hover:border-white/40 transition">
            Join the waitlist
          </button>
        </div>

      </div>
    </section>
  );
}