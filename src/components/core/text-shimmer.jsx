import { motion } from "motion/react";

export function TextShimmer({
  children,
  duration = 10,
  className = "",
}) {
  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        color: "var(--primary)",
        backgroundImage:
          "linear-gradient(90deg, var(--primary) 0%, var(--primary) 40%, #999 50%, var(--primary) 60%, var(--primary) 100%)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      animate={{
        backgroundPosition: ["200% 0%", "-200% 0%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}