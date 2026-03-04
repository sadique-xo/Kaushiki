"use client";

import { motion } from "framer-motion";

type AudienceValue = {
  title: string;
  description: string;
};

type AudienceProps = {
  eyebrow: string;
  title: string;
  body: string;
  tags: string[];
  values: AudienceValue[];
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-accent">{p}</em> : p
  );
}

export function Audience({
  eyebrow,
  title,
  body,
  tags,
  values,
}: AudienceProps) {
  return (
    <section id="audience" className="bg-ink">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <div className="grid gap-20 md:grid-cols-[6fr_5fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span
              className="inline-flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.26em] text-blush after:h-px after:w-7 after:bg-blush after:opacity-50"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {eyebrow}
            </span>
            <h2
              className="font-serif text-[clamp(34px,4.2vw,58px)] font-light leading-tight text-warm-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {parseTitle(title)}
            </h2>
            <p className="max-w-[500px] text-[15px] font-light leading-[1.88] text-[rgba(255,255,255,0.55)]">
              {body}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-default border border-[rgba(255,255,255,0.1)] px-4 py-2 text-[12px] text-[rgba(255,255,255,0.58)] transition-all hover:border-accent hover:bg-accent hover:text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-0"
          >
            {values.map((v) => (
              <li
                key={v.title}
                className="border-b border-[rgba(255,255,255,0.07)] py-5 first:border-t"
              >
                <h4
                  className="mb-1 font-serif text-[21px] font-normal text-warm-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {v.title}
                </h4>
                <p className="text-[12.5px] leading-[1.6] text-[rgba(255,255,255,0.38)]">
                  {v.description}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
