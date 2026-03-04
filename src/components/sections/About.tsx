"use client";

import React from "react";
import { motion } from "framer-motion";

type Intersection = {
  num: string;
  title: string;
  description: string;
};

type AboutProps = {
  eyebrow: string;
  title: string;
  intersections: Intersection[];
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) => {
    if (i % 2 === 1) return <em key={i} className="text-accent">{p}</em>;
    const parts = p.split("\n");
    return (
      <span key={i}>
        {parts.map((s, j) =>
          j > 0 ? (
            <React.Fragment key={j}>
              <br />
              {s}
            </React.Fragment>
          ) : (
            <React.Fragment key={j}>{s}</React.Fragment>
          )
        )}
      </span>
    );
  });
}

export function About({ eyebrow, title, intersections }: AboutProps) {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <div className="grid gap-20 md:grid-cols-[5fr_6fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <span
              className="inline-flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.26em] text-accent after:h-px after:w-7 after:bg-accent after:opacity-50"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {eyebrow}
            </span>
            <h2
              className="font-serif text-[clamp(34px,4.2vw,58px)] font-light leading-tight text-ink"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {parseTitle(title)}
            </h2>
            <p className="text-[15px] leading-[1.88] text-ink-soft">
              I&apos;m Kaushiki - a psychology student and digital creator
              building a platform where emotional depth meets aesthetic
              precision. Since 2021, I&apos;ve been studying human behavior
              academically and experientially, translating complex
              psychological insight into content that Gen Z actually wants to
              feel.
            </p>
            <p className="text-[15px] leading-[1.88] text-ink-soft">
              Most creators pick one: aesthetic or intelligence, structured or
              spiritual, logical or emotional. I&apos;ve never been interested in
              choosing.
            </p>
            <blockquote className="border-l-2 border-accent bg-[rgba(235,76,76,0.05)] py-4 pl-5 pr-5 font-serif text-xl italic leading-relaxed text-ink">
              I think in systems. I write in layers. I edit with intention. I
              don&apos;t just post - I architect.
            </blockquote>
            <p className="text-[15px] leading-[1.88] text-ink-soft">
              My work lives at the intersection of psychology, design, culture,
              and writing. It&apos;s not deep because it tries to be. It&apos;s
              deep because it&apos;s built that way.
            </p>
          </motion.div>
          <ul className="space-y-0">
            {intersections.map((item, i) => (
              <motion.li
                key={item.num}
                initial={{ opacity: 0, x: -22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-4 border-b border-border-light py-5 first:border-t"
              >
                <span
                  className="min-w-[22px] shrink-0 font-serif text-[13px] italic text-accent opacity-65"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.num}
                </span>
                <div>
                  <div className="mb-1 text-[14px] font-semibold text-ink">
                    {item.title}
                  </div>
                  <p className="text-[13px] leading-[1.6] text-muted-color">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
