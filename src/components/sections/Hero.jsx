"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050B14]">
      
      {/* Top Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1B2A44_0%,_#050B14_65%)]" />

      {/* Star particles */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/3 left-2/3" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-1/4" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-2/3 left-1/5" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-3/4 left-3/4" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" text-[72px] leading-[77px] tracking-[-1.8px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#717A86]"
>
          Unleash the power of
          <br />
          intuitive finance
        </motion.h1>

        {/* Paragraph */}
        <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
          Say goodbye to the outdated financial tools. Every small business owner,
          regardless of the background, can now manage their business like a pro.
          Simple. Intuitive. And never boring.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <Button />
          <div className="flex flex-col items-center text-white/50 text-sm">
            <span>Learn more</span>
            <span className="mt-0 text-lg">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}