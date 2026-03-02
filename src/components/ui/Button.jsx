"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({ children, variant = "primary" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(
        "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          : "border border-white/20 text-white hover:bg-white hover:text-black"
      )}
    >
      {children}
    </motion.button>
  );
}