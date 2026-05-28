"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export function SectionReveal({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"section">) {
  return (
    <motion.section
      className={className}
      {...props}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-96px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
