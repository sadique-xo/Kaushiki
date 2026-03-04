"use client";

import { motion } from "framer-motion";

type NicheCard = {
  glyph: string;
  title: string;
  description: string;
};

type NicheProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: NicheCard[];
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-accent">{p}</em> : p
  );
}

export function Niche({ eyebrow, title, description, cards }: NicheProps) {
  return (
    <section id="niche" className="bg-warm-white">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <div className="mb-14 grid gap-16 md:grid-cols-2 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-[380px] self-end text-[14px] leading-[1.82] text-muted-color"
          >
            {description}
          </motion.p>
        </div>
        <div className="grid gap-0.5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden bg-cream p-8 transition-transform hover:-translate-y-1 hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent after:origin-left after:scale-x-0 after:transition-transform after:duration-300"
            >
              <span
                className="absolute right-5 top-4 font-serif text-[46px] italic leading-none text-[rgba(235,76,76,0.11)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.glyph}
              </span>
              <h3
                className="mb-2.5 font-serif text-[21px] font-normal leading-tight text-ink"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.title}
              </h3>
              <p className="text-[13px] leading-[1.72] text-muted-color">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
