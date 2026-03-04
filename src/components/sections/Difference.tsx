"use client";

import React from "react";
import { motion } from "framer-motion";

type Pillar = {
  glyph: string;
  title: string;
  description: string;
};

type DifferenceProps = {
  eyebrow: string;
  title: string;
  pillars: Pillar[];
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) => {
    if (i % 2 === 1) return <em key={i} className="text-accent">{p}</em>;
    const parts = p.split("\n");
    return (
      <span key={i}>
        {parts.map((s, j) => (
          <React.Fragment key={j}>
            {j > 0 ? <><br />{s}</> : s}
          </React.Fragment>
        ))}
      </span>
    );
  });
}

export function Difference({ eyebrow, title, pillars }: DifferenceProps) {
  return (
    <section id="difference" className="bg-ink">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <motion.span
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.26em] text-blush after:h-px after:w-7 after:bg-blush after:opacity-50"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {eyebrow}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 max-w-[640px] font-serif text-[clamp(36px,4.5vw,62px)] font-light leading-tight text-warm-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {parseTitle(title)}
        </motion.h2>
        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="space-y-5"
          >
            <p className="text-[15px] font-light leading-[1.88] text-[rgba(255,255,255,0.55)]">
              The content landscape is full of people who are either
              aesthetically beautiful or intellectually sharp - rarely both.
              Either spiritual without logic, or analytical without soul.
            </p>
            <p className="text-[15px] font-light leading-[1.88] text-[rgba(255,255,255,0.55)]">
              I don&apos;t experience that tension. Psychology gave me structure.
              Creativity gave me language. Lived experience gave me resonance. I
              don&apos;t explain emotions - I design the experience around them.
            </p>
            <p className="text-[15px] font-light leading-[1.88] text-[rgba(255,255,255,0.55)]">
              I can write about attachment wounds and still drop a line that
              makes you smirk. That tonal intelligence is rare. And it&apos;s
              exactly what makes content stick - and what makes brands
              memorable.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="grid grid-cols-2 gap-0.5"
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                className="border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 transition-colors hover:bg-[rgba(235,76,76,0.08)]"
              >
                <span
                  className="mb-3 block font-serif text-3xl italic leading-none text-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {p.glyph}
                </span>
                <h4 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.07em] text-warm-white">
                  {p.title}
                </h4>
                <p className="text-[12.5px] leading-[1.65] text-[rgba(255,255,255,0.42)]">
                  {p.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
