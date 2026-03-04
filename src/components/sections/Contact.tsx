"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  type: string;
};

type ContactProps = {
  eyebrow: string;
  title: string;
  body: string;
  powerLine: string;
  details: ContactDetail[];
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-accent">{p}</em> : p
  );
}

export function Contact({
  eyebrow,
  title,
  body,
  powerLine,
  details,
}: ContactProps) {
  return (
    <section id="contact" className="bg-warm-white">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[720px] space-y-6"
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
          <p className="text-[15px] font-light leading-[1.85] text-ink-soft">
            {body}
          </p>
          <blockquote className="border-l-2 border-accent bg-[rgba(235,76,76,0.05)] py-4 pl-5 pr-5 font-serif text-xl italic leading-relaxed text-ink">
            {powerLine}
          </blockquote>
          <ul className="mt-10 space-y-0">
            {details.map((d) => (
              <li
                key={d.label}
                className="flex items-center gap-5 border-b border-border-light py-4 first:border-t"
              >
                <span
                  className="min-w-[72px] font-mono text-[9px] uppercase tracking-[0.2em] text-muted-color"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {d.label}
                </span>
                {d.href ? (
                  <Link
                    href={d.href}
                    className="text-[14px] text-ink no-underline transition-colors hover:text-accent"
                  >
                    {d.value}
                  </Link>
                ) : (
                  <span className="text-[14px] text-ink">{d.value}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
