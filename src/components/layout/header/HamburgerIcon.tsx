"use client";
import { motion } from "motion/react";
export default function HamburgerIcon({ toggle }: { toggle?: boolean }) {
  const span_1 = toggle ? { translateY: 6, rotate: 45 } : {};
  const span_2 = toggle ? { opacity: 0 } : {};
  const span_3 = toggle ? { translateY: -6, rotate: -45 } : {};
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <motion.span
          className="w-5 h-0.5 rounded-full bg-main"
          animate={index === 0 ? span_1 : index === 1 ? span_2 : span_3}
          key={index}
        />
      ))}
    </>
  );
}
