"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ImageTrail = dynamic(() => import("@/components/ImageTrail"), { ssr: false });

const KAUSHIKI_IMAGES = [
  "IMAGE 2026-03-04 05:44:53.jpg",
  "IMAGE 2026-03-04 05:45:00.jpg",
  "IMAGE 2026-03-04 05:45:04.jpg",
  "IMAGE 2026-03-04 05:45:18.jpg",
  "IMAGE 2026-03-04 05:45:33.jpg",
  "IMAGE 2026-03-04 05:45:39.jpg",
  "IMAGE 2026-03-04 05:45:44.jpg",
  "IMAGE 2026-03-04 05:45:53.jpg",
  "IMAGE 2026-03-04 05:45:57.jpg",
].map((filename) => `/images-kaushiki/${encodeURIComponent(filename)}`);

type HeroProps = {
  eyebrow: string;
  firstName: string;
  lastName: string;
  tagline: string;
  ctas: { label: string; href: string; variant: string }[];
  roles: string[];
  decoLetter?: string;
};

function parseEm(text: string) {
  const parts = text.split(/\*(.+?)\*/);
  return parts.map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-accent">{p}</em> : p
  );
}

export function Hero({
  eyebrow,
  firstName,
  lastName,
  tagline,
  ctas,
  roles,
  decoLetter = "K",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative grid min-h-screen grid-rows-[1fr_auto] bg-warm-white px-6 pt-16 md:px-14"
    >
      {decoLetter && (
        <span
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-serif text-[42vw] font-light leading-none text-transparent [-webkit-text-stroke:1px_rgba(235,76,76,0.065)] md:text-[600px]"
          style={{ fontFamily: "var(--font-heading)" }}
          aria-hidden
        >
          {decoLetter}
        </span>
      )}
      <div className="relative z-10 grid min-h-0 grid-cols-1 items-center gap-8 overflow-visible pt-14 lg:grid-cols-[1fr_1fr]">
        <div className="flex max-w-[800px] flex-col justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 font-mono text-[10px] uppercase tracking-[0.26em] text-accent"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mb-9 font-serif text-[clamp(72px,11.5vw,148px)] font-light leading-[0.91] tracking-[-0.03em] text-ink"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {firstName}
          <em className="block text-accent">{lastName}</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-[530px] font-serif text-[clamp(18px,2.3vw,26px)] font-light italic leading-[1.55] text-ink-soft"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-6"
        >
          {ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={
                cta.variant === "primary"
                  ? "inline-block bg-ink px-9 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-warm-white no-underline transition-all hover:bg-accent hover:-translate-y-0.5"
                  : cta.variant === "outline"
                    ? "inline-block border border-border-md px-7 py-3.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink-soft no-underline transition-colors hover:border-accent hover:text-accent"
                    : "border-b border-border-md pb-0.5 text-[10.5px] font-medium uppercase tracking-[0.15em] text-muted-color no-underline transition-colors hover:border-accent hover:text-accent"
              }
            >
              {cta.label}
            </Link>
          ))}
        </motion.div>
        </div>
        <div
          className="hidden h-[min(400px,50vh)] min-h-[280px] overflow-visible lg:block"
          style={{ position: "relative" }}
          aria-hidden
        >
          <ImageTrail items={KAUSHIKI_IMAGES} variant={1} />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-wrap items-center gap-x-9 border-t border-border-light py-7"
      >
        {roles.map((role, i) => (
          <span key={role} className="flex items-center gap-4">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-color"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {role}
            </span>
            {i < roles.length - 1 && (
              <span className="text-border-md">/</span>
            )}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
