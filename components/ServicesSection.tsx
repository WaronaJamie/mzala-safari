"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const packages = [
  {
    number: "01",
    title: "1 Day Moremi Wildlife Reserve",
    subtitle: "Maun → Moremi → Maun",
    duration: "1 Day / 0 Nights",
    description:
      "Perfect for travelers short on time who still want the real safari feel. Begin with a dawn drive from Maun to South Gate, then game-drive across lagoons, plains, and woodlands before a picnic lunch in the park.",
    highlights: ["Dawn Game Drive", "Picnic in the Park", "Ideal for Time-Poor Travelers"],
  },
  {
    number: "02",
    title: "3 Days Okavango Delta",
    subtitle: "Maun to Kasane",
    duration: "3 Days / 2 Nights",
    description:
      "Dive into the heart of the Moremi Game Reserve, drift through the biodiversity hotspot of Khwai, and track predators across the legendary Savuti plains — all on a private, fully-supported camping safari.",
    highlights: ["Moremi Game Reserve", "Khwai Concession", "Savuti Predators"],
  },
  {
    number: "03",
    title: "5 Days Kalahari Safari",
    subtitle: "Maun → Kalahari → Maun",
    duration: "5 Days / 4 Nights",
    description:
      "Journey deep into the Central Kalahari for an experience of pure solitude and survival. Meet the San Bushmen, cross shimmering salt pans, and track oryx, cheetah, and lion across one of Africa's last true wildernesses.",
    highlights: ["Central Kalahari", "San Bushmen Culture", "Salt Pans"],
  },
  {
    number: "04",
    title: "7 Days Botswana Safari",
    subtitle: "Maun to Kasane (or reverse)",
    duration: "7 Days / 6 Nights",
    description:
      "The ultimate Botswana expedition. Glide through the Okavango Delta by mokoro, explore Moremi and Khwai, witness Savuti's predator drama, and finish on the Chobe River — home to Africa's largest elephant population.",
    highlights: ["Makgadikgadi Pans", "Okavango Delta", "Chobe National Park"],
  },
  {
    number: "05",
    title: "10 Days Botswana Safari",
    subtitle: "Maun to Kasane",
    duration: "10 Days / 9 Nights",
    description:
      "An immersive deep-dive combining the raw solitude of the Central Kalahari with the teeming life of the Delta. Days of game drives, San Bushmen stories, and predator tracking — all at a leisurely, unhurried pace.",
    highlights: ["Kalahari Immersion", "San Bushmen Interaction", "Delta & Savuti"],
  },
  {
    number: "06",
    title: "11 Days Kalahari & Delta",
    subtitle: "The Grand Expedition",
    duration: "11 Days / 10 Nights",
    description:
      "Our flagship journey. Five days in the Central Kalahari followed by mokoro rides in the Okavango, Big 5 territory in Moremi and Khwai, and river cruises through Chobe. The definitive Botswana safari.",
    highlights: ["Central Kalahari", "Big 5 Territory", "Chobe River Cruises"],
  },
];

function PackageSlide({
  pkg,
  index,
  total,
  scrollYProgress,
}: {
  pkg: (typeof packages)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;

  const fadeInStart = Math.max(0, start - segment * 0.15);
  const fadeInEnd = start + segment * 0.15;
  const fadeOutStart = end - segment * 0.15;
  const fadeOutEnd = Math.min(1, end + segment * 0.15);

  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0]
  );

  const y = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [index === 0 ? 0 : 60, 0, 0, index === total - 1 ? 0 : -60]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center px-6 md:px-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full max-w-7xl mx-auto">
        {/* Left: Numbered Meta */}
        <div className="md:col-span-1 flex flex-col">
          <p className="font-serif italic text-gray-500 text-sm mb-6">
            (The Safari)
          </p>
          <div className="border-t border-b border-white/15 py-6">
            <p className="text-5xl md:text-7xl font-bold text-white leading-none mb-4">
              {pkg.number}
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              {pkg.duration}
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            {pkg.highlights.map((h, i) => (
              <li
                key={i}
                className="text-xs text-gray-500 uppercase tracking-widest"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Big Content */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4">
            {pkg.title}
          </h3>
          <p className="font-serif italic text-[#D97B29] text-xl md:text-2xl mb-6">
            {pkg.subtitle}
          </p>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {pkg.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      ref={ref}
      className="relative h-[500vh] bg-[#1A1511]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section Header */}
        <div className="absolute top-24 left-0 w-full px-6 md:px-12 z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="font-serif italic text-[#D97B29] text-lg">
              (Our Safari Packages)
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-widest hidden md:block">
              Scroll to explore
            </p>
          </div>
        </div>

        {/* Slides */}
        <div className="relative h-full">
          {packages.map((pkg, i) => (
            <PackageSlide
              key={i}
              pkg={pkg}
              index={i}
              total={packages.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-[#D97B29] origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  );
}