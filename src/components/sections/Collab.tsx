"use client";

import { motion } from "framer-motion";

type CollabCard = {
  title: string;
  description: string;
};

type CollabProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: CollabCard[];
  deliverables: { label: string; chips: string[] };
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-[var(--accent)]">{p}</em> : p
  );
}

export function Collab({
  eyebrow,
  title,
  intro,
  cards,
  deliverables,
}: CollabProps) {
  return (
    <section id="collab" className="bg-[var(--warm-white)]">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <motion.span
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.26em] text-[var(--accent)] after:h-px after:w-7 after:bg-[var(--accent)] after:opacity-50"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {eyebrow}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-5 font-serif text-[clamp(34px,4.2vw,58px)] font-light leading-tight text-[var(--ink)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {parseTitle(title)}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mb-14 max-w-[560px] text-[15px] leading-[1.85] text-[var(--ink-soft)]"
        >
          {intro}
        </motion.p>

        <div className="mb-14 grid gap-0.5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-[var(--border-light)] bg-[var(--cream)] p-8 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <h4
                className="mb-2.5 font-serif text-[21px] font-normal leading-tight text-[var(--ink)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.title}
              </h4>
              <p className="text-[13px] leading-[1.7] text-[var(--muted-color)]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-[var(--border-light)] pt-12"
        >
          <h3
            className="mb-6 font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--muted-color)]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            {deliverables.label}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {deliverables.chips.map((chip) => (
              <span
                key={chip}
                className="border border-[var(--border-light)] px-5 py-2 text-[12.5px] text-[var(--ink-soft)] transition-all hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--warm-white)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
