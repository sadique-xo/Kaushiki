"use client";

import { motion } from "framer-motion";

type VisionProps = {
  eyebrow: string;
  title: string;
  goals: string[];
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-[var(--accent)]">{p}</em> : p
  );
}

export function Vision({ eyebrow, title, goals }: VisionProps) {
  return (
    <section id="vision" className="bg-[var(--cream)]">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[720px] space-y-6"
        >
          <span
            className="inline-flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.26em] text-[var(--accent)] after:h-px after:w-7 after:bg-[var(--accent)] after:opacity-50"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            {eyebrow}
          </span>
          <h2
            className="font-serif text-[clamp(34px,4.2vw,58px)] font-light leading-tight text-[var(--ink)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {parseTitle(title)}
          </h2>
          <p className="text-[15px] font-light leading-[1.88] text-[var(--ink-soft)]">
            I&apos;m not building a following. I&apos;m building a community that
            grows intelligently — not impulsively. One that treats emotional
            intelligence as aspirational, depth as attractive, and self-awareness
            as culturally relevant.
          </p>
          <p className="text-[15px] font-light leading-[1.88] text-[var(--ink-soft)]">
            This is a long game. And it&apos;s played with intention.
          </p>
          <ul className="mt-12 space-y-0">
            {goals.map((goal, i) => (
              <motion.li
                key={goal}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-5 border-b border-[var(--border-light)] py-5 font-serif text-[21px] italic leading-snug text-[var(--ink)] before:flex-shrink-0 before:text-[10px] before:text-[var(--accent)] before:content-['✦']"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {goal}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
