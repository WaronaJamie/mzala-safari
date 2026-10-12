"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollPuzzle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const p1X = useTransform(scrollYProgress, [0, 0.6], [-200, 0]);
  const p1Y = useTransform(scrollYProgress, [0, 0.6], [0, 0]);
  const p2X = useTransform(scrollYProgress, [0, 0.6], [0, 0]);
  const p2Y = useTransform(scrollYProgress, [0, 0.6], [-200, 0]);
  const p3X = useTransform(scrollYProgress, [0, 0.6], [200, 0]);
  const p3Y = useTransform(scrollYProgress, [0, 0.6], [0, 0]);
  const p4X = useTransform(scrollYProgress, [0, 0.6], [0, 0]);
  const p4Y = useTransform(scrollYProgress, [0, 0.6], [200, 0]);
  const p5X = useTransform(scrollYProgress, [0, 0.6], [-200, 0]);
  const p5Y = useTransform(scrollYProgress, [0, 0.6], [-200, 0]);
  const p6X = useTransform(scrollYProgress, [0, 0.6], [200, 0]);
  const p6Y = useTransform(scrollYProgress, [0, 0.6], [-200, 0]);
  const p7X = useTransform(scrollYProgress, [0, 0.6], [-200, 0]);
  const p7Y = useTransform(scrollYProgress, [0, 0.6], [200, 0]);
  const p8X = useTransform(scrollYProgress, [0, 0.6], [200, 0]);
  const p8Y = useTransform(scrollYProgress, [0, 0.6], [200, 0]);
  const p9Scale = useTransform(scrollYProgress, [0, 0.6], [0.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[#1A1511]"
    >
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        {/* Piece 1: Top Left */}
        <motion.div
          style={{ x: p1X, y: p1Y, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:0%_0%]"
        />
        {/* Piece 2: Top Center */}
        <motion.div
          style={{ x: p2X, y: p2Y, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:50%_0%]"
        />
        {/* Piece 3: Top Right */}
        <motion.div
          style={{ x: p3X, y: p3Y, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:100%_0%]"
        />
        {/* Piece 4: Center Left */}
        <motion.div
          style={{ x: p4X, y: p4Y, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:0%_50%]"
        />
        {/* Piece 5: Center (scales in) */}
        <motion.div
          style={{ scale: p9Scale, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:50%_50%]"
        />
        {/* Piece 6: Center Right */}
        <motion.div
          style={{ x: p6X, y: p6Y, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:100%_50%]"
        />
        {/* Piece 7: Bottom Left */}
        <motion.div
          style={{ x: p7X, y: p7Y, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:0%_100%]"
        />
        {/* Piece 8: Bottom Center */}
        <motion.div
          style={{ x: p8X, y: p8Y, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:50%_100%]"
        />
        {/* Piece 9: Bottom Right */}
        <motion.div
          style={{ x: p8X, y: p8Y, opacity }}
          className="bg-[url('/images/wildlife.webp')] bg-[length:300%_300%] bg-[position:100%_100%]"
        />
      </div>
    </div>
  );
}