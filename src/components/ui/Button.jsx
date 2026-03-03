"use client";

export default function Button() {
  return (
    <button className="relative w-[136px] h-[36px] rounded-full bg-[rgba(9,9,11,1)] overflow-hidden group transition">
      
      {/* Subtle border */}
      <div className="absolute inset-0 rounded-full border border-white/10" />

      {/* Bottom gradient line (exact width & position) */}
      <div
        className="absolute h-[1px] w-[102px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[rgba(34,211,238,0)] via-[rgba(34,211,238,0.9)] to-[rgba(34,211,238,0)] opacity-80 group-hover:opacity-100 transition"
      />

      {/* Text */}
      <span className="relative z-10 text-white/70 text-sm font-medium">
        Join the waitlist
      </span>
    </button>
  );
}