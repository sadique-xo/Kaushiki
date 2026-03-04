"use client";

import { motion } from "framer-motion";

type WhyRow = {
  label: string;
  text: string;
};

type StrengthsProps = {
  eyebrow: string;
  title: string;
  body: string;
  skills: string[];
  whyPanel: {
    title: string;
    rows: WhyRow[];
  };
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-accent">{p}</em> : p
  );
}

export function Strengths({
  eyebrow,
  title,
  body,
  skills,
  whyPanel,
}: StrengthsProps) {
  return (
    <section id="strengths" className="bg-cream">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <div className="grid gap-20 md:grid-cols-[5fr_6fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-7"
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
            <p className="text-[14.5px] font-light leading-[1.85] text-ink-soft">
              {body}
            </p>
            <ul className="space-y-0">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 border-b border-border-light py-3 text-[13.5px] text-ink-soft transition-colors hover:text-ink before:shrink-0 before:text-[12px] before:text-accent before:content-['→']"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-ink p-10 md:p-12"
          >
            <h3
              className="mb-7 font-serif text-[28px] font-light italic leading-snug text-warm-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {whyPanel.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < whyPanel.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>
            <div className="space-y-0">
              {whyPanel.rows.map((row) => (
                <div
                  key={row.label}
                  className="border-b border-[rgba(255,255,255,0.07)] py-4 last:border-0"
                >
                  <strong className="text-accent">{row.label}</strong> -{" "}
                  <span className="text-[13.5px] leading-[1.68] text-[rgba(255,255,255,0.6)]">
                    {row.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
