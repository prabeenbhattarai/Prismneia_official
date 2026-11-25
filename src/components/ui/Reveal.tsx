"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
