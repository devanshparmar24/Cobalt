'use client'
import Button from "../ui/Button";
export default function Contact() {
  return (
    <section className="relative bg-[#09090B] pt-32 pb-24 overflow-hidden">

      {/* Subtle dashboard glow */}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <div className="w-40 h-px bg-white/10 mx-auto mb-16" />

        <h2 className="text-4xl font-semibold leading-tight tracking-tight bg-gradient-to-b from-[#F4F4F5] to-[#52525B] bg-clip-text text-transparent">
          See where financial automation can
          <br />
          take your business.
        </h2>

        <p className="mt-6 text-white/60">
          The first financial tool you'll love. And the last one you'll ever need.
        </p>

        <div className="mt-10 flex justify-center">
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log("Email submitted");
    }}
    className="flex items-center bg-[#0F0F12] border border-white/10  rounded-full px-2 py-2 w-full max-w-md focus-within:border-white/20 transition"
  >
    {/* Email Input */}
    <input
      type="email"
      required
      placeholder="Enter your email"
      className="flex-1 bg-transparent outline-none  text-white placeholder:text-white/40 px-4 text-sm"
    />

    {/* Button */}
    <div className="ml-2">
      <Button />
    </div>
  </form>
</div>

      </div>
    </section>
  );
}