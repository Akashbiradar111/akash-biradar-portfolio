import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function TextLoop({
  children,
  interval = 2000,
  transition = {
    type: "spring",
    stiffness: 900,
    damping: 80,
    mass: 10,
  },
  variants,
  className = "",
}) {
  const items = Array.isArray(children) ? children : [children];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={variants?.initial}
          animate={variants?.animate}
          exit={variants?.exit}
          transition={transition}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}