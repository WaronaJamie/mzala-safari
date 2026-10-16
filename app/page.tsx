"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Mail,
  MessageCircle,
  Menu,
  X,
  Leaf,
  Award,
  ShieldCheck,
  Heart,
  Waves,
  Footprints,
  Ship,
  Paintbrush,
  Sparkles,
  Check,
  ArrowRight,
  Plane,
  Users,
} from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import Marquee from "@/components/Marquee";
import AudioPlayer from "@/components/AudioPlayer";

const ScrollPuzzle = dynamic(() => import("@/components/ScrollPuzzle"), {
  ssr: false,
});

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Responsible tourism that conserves the environment and benefits local communities.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "The highest quality services and experiences for every guest, every trip.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Honesty, transparency, and respect for all our stakeholders.",
  },
  {
    icon: Heart,
    title: "Passion",
    text: "We live for Africa's wildlife, landscapes, and cultures — and it shows.",
  },
];

const specialExperiences = [
  {
    icon: Waves,
    title: "Mokoro Rides",
    image: "/images/mokoro-rides.webp",
    text: "Traditional dugout canoe trips with local guides through the quiet channels of the Okavango Delta.",
  },
  {
    icon: Footprints,
    title: "Bush Walks",
    image: "/images/bush-walks.webp",
    text: "Guided walking safaris focused on tracks, plants, and smaller wildlife you'd miss from a vehicle.",
  },
  {
    icon: Ship,
    title: "River Cruises",
    image: "/images/river-cruises.webp",
    text: "Chobe River boat trips to see elephants swimming and hippos basking at sunset.",
  },
  {
    icon: Plane,
    title: "Scenic Flights",
    image: "/images/scenic-flights.webp",
    text: "Soar above the Delta and beyond on a light aircraft flight — a bird's-eye view of Botswana's wildest landscapes.",
  },
  {
    icon: Users,
    title: "Village Tours",
    image: "/images/village-tours.webp",
    text: "Step into authentic Botswana life — meet local communities, share stories, and experience age-old traditions firsthand.",
  },
  {
    icon: Paintbrush,
    title: "Bushman Rock Art",
    image: "/images/bushman-rock-art.webp",
    text: "Visit ancient San rock paintings in the Savuti region — a window into millennia of culture.",
  },
  {
    icon: Sparkles,
    title: "Victoria Falls Extension",
    image: "/images/victoria-falls-extension.webp",
    text: "Add a night or two at Victoria Falls after your safari ends. The perfect finale.",
  },
];

const alwaysIncluded = [
  "Private Safari Vehicles (2 per group)",
  "All Meals & Snacks",
  "Unlimited Drinking Water",
  "Expert Local Safari Guides",
  "Fully Equipped Mobile Camping Setup",
  "Game Drive Permits & Park Fees",
  "Airport Pick-up / Drop-off",
  "Camp Crew & Logistics Team",
];

const whyUs = [
  {
    title: "Authentic Private Safaris",
    text: "No crowded vehicles, no rushed schedules. Every trip is designed exclusively for your group.",
  },
  {
    title: "Expert Local Knowledge",
    text: "Our guides were born and raised in Botswana's wilderness. They don't just find wildlife — they understand it.",
  },
  {
    title: "Comfort in the Wild",
    text: "Spacious tents, proper beds, bush showers, and freshly prepared meals. Camps fully set up before you arrive.",
  },
  {
    title: "Access to Botswana's Best",
    text: "From the Okavango to Savuti, Chobe, and the Central Kalahari — often to spots big groups can't reach.",
  },
  {
    title: "Sustainable & Responsible",
    text: "Local staff, community support, and eco-friendly camping practices on every journey.",
  },
  {
    title: "Seamless Planning",
    text: "Permits, equipment, meals, transfers, crew — we handle everything. You just show up.",
  },
];

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Safaris" },
    { href: "#booking", label: "Book Now" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-[#1A1511] md:hidden flex flex-col"
        >
          <div className="px-6 h-20 flex items-center justify-between">
            <img
              src="/images/logo.webp"
              alt="Mzala Tours & Safari"
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-white p-2"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-end px-8">
            <nav className="flex flex-col items-end gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group block text-right text-5xl sm:text-6xl font-bold tracking-tight text-white hover:text-[#D97B29] transition-colors duration-300 leading-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + links.length * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <Link
                href="#booking"
                onClick={onClose}
                className="inline-flex items-center gap-3 rounded-full bg-[#D97B29] text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#EAA023] transition-colors"
              >
                Book a Safari
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="px-6 pb-8 flex items-end justify-between text-xs tracking-widest uppercase">
            <p className="text-gray-500">Mzala Tours & Safari</p>
            <button
              onClick={onClose}
              className="text-white hover:text-[#D97B29] transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PushTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const taglineScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);
  const taglineY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div ref={ref} className="relative">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-[#1A1511] px-6 overflow-hidden">
        <motion.p
          style={{
            scale: taglineScale,
            opacity: taglineOpacity,
            y: taglineY,
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#D97B29] text-center max-w-4xl leading-tight"
        >
          "Safari with a Smile" isn't just our tagline — it's a promise.
        </motion.p>
      </div>

      <section className="relative z-10 bg-[#F5EFE6] text-[#1A1511] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="font-serif italic text-[#D97B29] text-lg mb-4">
              (Our Foundation)
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1A1511]">
              Driven by{" "}
              <span className="font-serif italic font-normal text-[#D97B29]">
                Purpose
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[#1A1511]/15 pt-8"
            >
              <p className="text-xs text-[#1A1511]/60 uppercase tracking-widest mb-4">
                Our Vision
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-[#1A1511]">
                To be the most trusted and immersive private safari experience
                provider in Southern Africa — known for excellence,
                conservation, and authentic cultural engagement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-[#1A1511]/15 pt-8"
            >
              <p className="text-xs text-[#1A1511]/60 uppercase tracking-widest mb-4">
                Our Mission
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-[#1A1511]">
                To deliver authentic, immersive, and sustainable safari
                experiences that exceed our clients' expectations — while
                preserving Botswana's natural and cultural heritage for future
                generations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-[#1A1511]/15 pt-6 group hover:border-[#D97B29] transition-colors"
              >
                <value.icon className="text-[#D97B29] mb-4" size={32} />
                <h3 className="text-lg font-bold mb-3 text-[#1A1511]">
                  {value.title}
                </h3>
                <p className="text-sm text-[#1A1511]/70 leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-[#1A1511] text-white selection:bg-[#D97B29] selection:text-white">

      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#1A1511]/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <Link href="#home" className="flex items-center">
            <img
              src="/images/logo.webp"
              alt="Mzala Tours & Safari"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase text-gray-200">
            <Link
              href="#home"
              className="relative transition-colors hover:text-white active:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#D97B29] after:transition-all after:duration-300 hover:after:w-full active:after:w-full"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="relative transition-colors hover:text-white active:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#D97B29] after:transition-all after:duration-300 hover:after:w-full active:after:w-full"
            >
              About
            </Link>
            <Link
              href="#services"
              className="relative transition-colors hover:text-white active:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#D97B29] after:transition-all after:duration-300 hover:after:w-full active:after:w-full"
            >
              Safaris
            </Link>
            <Link
              href="#booking"
              className="relative transition-colors hover:text-white active:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-[#D97B29] after:transition-all after:duration-300 hover:after:w-full active:after:w-full"
            >
              Book Now
            </Link>
          </div>

          <Button className="hidden md:inline-flex rounded-full bg-transparent border border-[#D97B29] text-[#D97B29] hover:bg-[#D97B29] hover:text-white px-8 py-5 text-xs tracking-widest uppercase transition-all">
            Book a Safari
          </Button>

          <button
            className="md:hidden text-white p-2 z-50"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen min-h-[600px] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tour.webp"
            alt="Mzala Safari"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1511] via-[#1A1511]/85 to-[#1A1511]/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1A1511] to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto w-full px-6 pt-24 pb-40 md:pb-44">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.85]">
            SAFARI <br />
            <span className="font-serif italic font-normal text-[#D97B29]">
              with a
            </span>{" "}
            <br />
            SMILE
          </h1>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-20 pb-4 md:pb-6">
          <div className="max-w-7xl mx-auto px-6 flex justify-end mb-4 md:mb-6">
            <Link href="#services">
              <Button className="rounded-full bg-[#D97B29] border border-[#D97B29] text-white hover:bg-[#EAA023] hover:border-[#EAA023] px-8 py-5 text-xs tracking-widest uppercase transition-all shadow-lg shadow-[#D97B29]/30">
                Explore Safaris
              </Button>
            </Link>
          </div>
          <Marquee text="Private, fully-supported safari adventures through Botswana — crafted for those who want the wild on their own terms. ✦" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pt-20">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the{" "}
            <span className="font-serif italic font-normal text-[#D97B29]">
              Wild
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Scroll down to see the magic of the Okavango Delta come together.
          </p>
        </div>

        <ScrollPuzzle />

        <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Born from the{" "}
            <span className="font-serif italic font-normal text-[#D97B29]">
              Wild
            </span>
            , Built for{" "}
            <span className="font-serif italic font-normal text-[#D97B29]">
              You
            </span>
            .
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              Mzala Tours & Safari isn't just a safari operator — we're
              storytellers, trackers, campfire chefs, and your personal gateway
              to the untamed heart of Southern Africa. Based in Botswana and
              roving through Namibia, Angola, and the UK, we craft private,
              fully-supported camping adventures that put you right in the
              middle of the action.
            </p>
            <p>
              Picture this: the sun sinking over the Okavango Delta, a chorus of
              hippos echoing across the water, and a cold drink in your hand as
              your guide swaps tales from a lifetime in the bush. That's not a
              holiday — that's a Mzala moment.
            </p>
            <p>
              From the predator-rich plains of Savuti to the endless salt pans
              of the Kalahari, every journey is tailored to your rhythm. No
              strangers sharing your Land Cruiser, no rushed itineraries — just
              you, your crew, and the wildest corners of Africa at your
              fingertips.
            </p>
          </motion.div>
        </div>

        <PushTransition />
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* SPECIAL EXPERIENCES — HORIZONTAL SCROLL */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="font-serif italic text-[#D97B29] text-lg mb-4">
              (Beyond the Game Drive)
            </p>
            <h2 className="text-4xl md:text-6xl font-bold">
              Special{" "}
              <span className="font-serif italic font-normal text-[#D97B29]">
                Experiences
              </span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs text-gray-500 uppercase tracking-widest flex-shrink-0 pb-2">
            <span>Drag to explore</span>
            <ArrowRight size={16} className="text-[#D97B29]" />
          </div>
        </div>

        <div
          className="overflow-x-auto overflow-y-hidden pb-6"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
          }}
        >
          <div className="flex gap-6 px-6 md:px-12" style={{ width: "max-content" }}>
            {specialExperiences.map((exp, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[480px] h-[520px] md:h-[600px] rounded-2xl overflow-hidden group"
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${exp.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1511] via-[#1A1511]/50 to-transparent" />
                <div className="absolute inset-0 bg-[#1A1511]/20 group-hover:bg-[#1A1511]/0 transition-colors duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div className="w-14 h-14 rounded-full bg-[#D97B29]/90 backdrop-blur-sm flex items-center justify-center">
                    <exp.icon className="text-white" size={26} />
                  </div>

                  <div>
                    <p className="text-xs text-[#D97B29] uppercase tracking-widest mb-3">
                      0{i + 1} / Special Experience
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {exp.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex-shrink-0 w-6 md:w-12" />
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED + WHY US */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-serif italic text-[#D97B29] text-lg mb-4">
              (Every Safari)
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10">
              What's Always{" "}
              <span className="font-serif italic font-normal text-[#D97B29]">
                Included
              </span>
            </h2>
            <ul className="space-y-4">
              {alwaysIncluded.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-b border-white/10 pb-4"
                >
                  <Check
                    className="text-[#D97B29] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif italic text-[#D97B29] text-lg mb-4">
              (The Difference)
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10">
              Why{" "}
              <span className="font-serif italic font-normal text-[#D97B29]">
                Mzala
              </span>
            </h2>
            <div className="space-y-8">
              {whyUs.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <p className="text-3xl md:text-4xl font-bold text-white/20 leading-none">
                    0{i + 1}
                  </p>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING & CONTACT */}
      <section
        id="booking"
        className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-white/10"
      >
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-3xl font-bold mb-6">
            Book Your{" "}
            <span className="font-serif italic font-normal text-[#D97B29]">
              Safari
            </span>
          </h3>
          <p className="text-gray-400 mb-8">
            Fill out the form below and we will get back to you within 24 hours.
          </p>

          <form
            action="https://formsubmit.co/seniorkebonang@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Safari Booking Request!"
            />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone / WhatsApp</label>
                <Input
                  name="phone"
                  required
                  placeholder="+267 71702021"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Date</label>
                <Input
                  name="date"
                  type="date"
                  required
                  className="bg-white/10 border-white/20 text-white [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Select Safari Package
              </label>
              <select
                name="package"
                className="w-full h-10 rounded-md bg-white/10 border border-white/20 text-white px-3"
              >
                <option value="1 Day Moremi Wildlife Reserve" className="bg-[#1A1511]">
                  1 Day Moremi Wildlife Reserve
                </option>
                <option value="3 Days Okavango Delta" className="bg-[#1A1511]">
                  3 Days Okavango Delta
                </option>
                <option value="5 Days Kalahari Safari" className="bg-[#1A1511]">
                  5 Days Kalahari Safari
                </option>
                <option value="7 Days Botswana Safari" className="bg-[#1A1511]">
                  7 Days Botswana Safari
                </option>
                <option value="10 Days Botswana Safari" className="bg-[#1A1511]">
                  10 Days Botswana Safari
                </option>
                <option value="11 Days Kalahari & Delta" className="bg-[#1A1511]">
                  11 Days Kalahari & Delta
                </option>
                <option value="Custom Safari" className="bg-[#1A1511]">
                  Custom Safari
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Special Requests / Message
              </label>
              <Textarea
                name="message"
                placeholder="Tell us about your group size, dietary needs, etc."
                className="bg-white/10 border-white/20 text-white min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#D97B29] hover:bg-[#EAA023] text-white py-6 text-lg"
            >
              Send Booking Request
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-4">Or chat with us directly</p>
            <a
              href="https://wa.me/26771702021?text=Hello%20Mzala%20Tours,%20I%20would%20like%20to%20book%20a%20safari."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-8">
          <h3 className="text-3xl font-bold">
            Get in{" "}
            <span className="font-serif italic font-normal text-[#D97B29]">
              Touch
            </span>
          </h3>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#D97B29] mt-1" />
              <div>
                <h4 className="font-bold">Botswana (Head Office)</h4>
                <p className="text-gray-400">Maun, Botswana</p>
                <p className="text-gray-400">+267 71702021</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-[#D97B29] mt-1" />
              <div>
                <h4 className="font-bold">Agent</h4>
                <p className="text-gray-400">72930594</p>
                <p className="text-gray-400">otismat97@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-[#D97B29] mt-1" />
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-400">seniorkebonang@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500">
        <p>© 2025 Mzala Tours & Safari. All rights reserved.</p>
        <p className="text-sm mt-2">
          Safari with a Smile. | Made by{" "}
          <a
            href="https://xlassicstudio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D97B29] hover:text-[#EAA023] underline transition-colors"
          >
            Xlassic Studio
          </a>
        </p>
      </footer>

      {/* FLOATING AUDIO PLAYER */}
      <AudioPlayer />
    </main>
  );
}