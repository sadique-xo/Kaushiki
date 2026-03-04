"use client";

import React from "react";
import { motion } from "framer-motion";

type RateItem = {
  service: string;
  details: string;
  rate: string;
};

type RateCategory = {
  category: string;
  items: RateItem[];
};

type RateCardProps = {
  eyebrow: string;
  title: string;
  intro: string;
  rows: RateCategory[];
  note: string;
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-accent">{p}</em> : p
  );
}

export function RateCard({
  eyebrow,
  title,
  intro,
  rows,
  note,
}: RateCardProps) {
  return (
    <section id="ratecard" className="bg-cream">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <motion.span
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.26em] text-accent after:h-px after:w-7 after:bg-accent after:opacity-50"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {eyebrow}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-5 font-serif text-[clamp(34px,4.2vw,58px)] font-light leading-tight text-ink"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {parseTitle(title)}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mb-14 max-w-[560px] text-[15px] leading-[1.85] text-ink-soft"
        >
          {intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 w-full border-collapse overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-ink">
                <th className="px-6 py-4 text-left font-mono text-[9.5px] font-normal uppercase tracking-[0.22em] text-accent">
                  Service
                </th>
                <th className="px-6 py-4 text-left font-mono text-[9.5px] font-normal uppercase tracking-[0.22em] text-accent">
                  Details
                </th>
                <th className="px-6 py-4 text-left font-mono text-[9.5px] font-normal uppercase tracking-[0.22em] text-accent">
                  Starting Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((cat) => (
                <React.Fragment key={cat.category}>
                  <tr className="bg-[rgba(235,76,76,0.07)]">
                    <td
                      colSpan={3}
                      className="border-none px-6 py-2.5 font-mono text-[9px] font-normal uppercase tracking-[0.22em] text-accent"
                    >
                      ✦ &nbsp; {cat.category}
                    </td>
                  </tr>
                  {cat.items.map((item) => (
                    <tr
                      key={item.service}
                      className="transition-colors hover:bg-[rgba(235,76,76,0.04)]"
                    >
                      <td className="border-b border-border-light px-6 py-4 text-[14px] font-semibold text-ink">
                        {item.service}
                      </td>
                      <td className="border-b border-border-light px-6 py-4 text-[13.5px] leading-normal text-ink-soft">
                        {item.details}
                      </td>
                      <td className="whitespace-nowrap border-b border-border-light px-6 py-4 font-serif text-xl font-normal text-ink">
                        {item.rate}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border-light bg-warm-white p-6 text-[13px] italic leading-[1.75] text-muted-color"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: note
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                .replace(
                  /\[([^\]]+)\]\((mailto:[^)]+)\)/g,
                  '<a href="$2" class="text-accent no-underline">$1</a>'
                ),
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
