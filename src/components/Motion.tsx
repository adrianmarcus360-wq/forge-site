"use client";

import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { ReactNode, useRef, useEffect, useState, useCallback } from "react";

/* ─── FadeIn ─── */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  distance?: number;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", distance = 40 }: FadeInProps) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerContainer ─── */
export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: { children: ReactNode; className?: string; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem ─── */
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── TextReveal: letter-by-letter or word-by-word ─── */
export function TextReveal({ text, className = "", delay = 0, by = "word" }: { text: string; className?: string; delay?: number; by?: "word" | "letter" }) {
  const units = by === "word" ? text.split(" ") : text.split("");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: by === "word" ? 0.08 : 0.03, delayChildren: delay } } }}
      className={className}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {unit}{by === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── AnimatedCounter ─── */
export function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2, className = "" }: { target: number; suffix?: string; prefix?: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

/* ─── ParallaxSection ─── */
export function ParallaxSection({ children, className = "", speed = 0.3 }: { children: ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ─── ScrollProgress (vertical sidebar) ─── */
interface ScrollSection { id: string; label: string; number: string; }
export function ScrollProgress({ sections }: { sections: ScrollSection[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
      <div className="absolute left-[5px] top-0 bottom-0 w-px bg-white/10" />
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => handleClick(s.id)}
          className="group flex items-center gap-4 relative"
        >
          <div className={`w-[11px] h-[11px] rounded-full border-2 transition-all duration-500 relative z-10 ${
            i === active ? "border-teal bg-teal scale-110" : "border-white/20 bg-obsidian hover:border-white/40"
          }`} />
          <span className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-500 whitespace-nowrap ${
            i === active ? "text-teal opacity-100 translate-x-0" : "text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          }`}>
            {s.number} {s.label}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ─── HorizontalRule with glow ─── */
export function GlowDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/10 to-transparent blur-sm" />
    </div>
  );
}

/* ─── CrosshairMarker ─── */
export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" className={`text-teal/30 ${className}`}>
      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="0.5" />
      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}
