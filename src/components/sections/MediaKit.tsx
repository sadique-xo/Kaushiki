"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type MediaKitProps = {
  eyebrow: string;
  title: string;
  intro: string;
  platform: { label: string; items: { label: string; value: string }[] };
  audience: { label: string; items: { label: string; value: string }[] };
  tone: { label: string; tags: string[] };
  formats: { label: string; items: { name: string; type: string }[] };
  deliverables: { label: string; items: string[] };
  upcoming: { label: string; tags: string[] };
  cta: {
    title: string;
    body: string;
    primaryCta: string;
    primarySubject: string;
    secondaryCta: string;
    instagramUrl: string;
    email: string;
  };
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-accent">{p}</em> : p
  );
}

function MkBlock({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] p-8 transition-colors hover:bg-[rgba(255,255,255,0.05)]"
    >
      <span
        className="mb-5 block font-mono text-[8.5px] uppercase tracking-[0.26em] text-blush"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {label}
      </span>
      {children}
    </motion.div>
  );
}

export function MediaKit({
  eyebrow,
  title,
  intro,
  platform,
  audience,
  tone,
  formats,
  deliverables,
  upcoming,
  cta,
}: MediaKitProps) {
  return (
    <section
      id="mediakit"
      className="border-t border-[rgba(255,255,255,0.06)] bg-ink"
    >
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
          className="mb-5 font-serif text-[clamp(34px,4.2vw,58px)] font-light leading-tight text-warm-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {parseTitle(title)}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mb-14 max-w-[560px] text-[15px] leading-[1.85] text-[rgba(255,255,255,0.58)]"
        >
          {intro}
        </motion.p>

        <div className="mb-0.5 grid gap-0.5 md:grid-cols-2">
          <MkBlock label={platform.label} delay={0.1}>
            <ul className="space-y-0">
              {platform.items.map((item) => (
                <li
                  key={item.label}
                  className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-[rgba(255,255,255,0.06)] py-3 text-[13px] text-[rgba(255,255,255,0.65)]"
                >
                  <span className="shrink-0">{item.label}</span>
                  <span
                    className="min-w-0 text-right font-serif text-[17px] text-accent sm:whitespace-nowrap"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </MkBlock>
          <MkBlock label={audience.label} delay={0.1}>
            <ul className="space-y-0">
              {audience.items.map((item) => (
                <li
                  key={item.label}
                  className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-[rgba(255,255,255,0.06)] py-3 text-[13px] text-[rgba(255,255,255,0.65)]"
                >
                  <span className="shrink-0">{item.label}</span>
                  <span
                    className="min-w-0 text-right font-serif text-[17px] text-accent sm:whitespace-nowrap"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </MkBlock>
        </div>

        <div className="mb-14 grid gap-0.5 md:grid-cols-2 lg:grid-cols-3">
          <MkBlock label={tone.label} delay={0.18}>
            <div className="flex flex-wrap gap-2">
              {tone.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[rgba(255,255,255,0.1)] px-3.5 py-1.5 text-[11.5px] text-[rgba(255,255,255,0.58)] transition-all hover:border-accent hover:bg-accent hover:text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </MkBlock>
          <MkBlock label={formats.label} delay={0.18}>
            <div className="space-y-0">
              {formats.items.map((item) => (
                <div
                  key={item.name}
                  className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-[rgba(255,255,255,0.06)] py-3 text-[13px] text-[rgba(255,255,255,0.65)]"
                >
                  <span className="min-w-0">{item.name}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.1em] text-accent">
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </MkBlock>
          <MkBlock label={deliverables.label} delay={0.18}>
            <ul className="space-y-0">
              {deliverables.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-[rgba(255,255,255,0.06)] py-3 text-[12.5px] text-[rgba(255,255,255,0.65)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </MkBlock>
        </div>

        <MkBlock label={upcoming.label} delay={0.24}>
          <div className="flex flex-wrap gap-2">
            {upcoming.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[rgba(255,255,255,0.1)] px-3.5 py-1.5 text-[11.5px] text-[rgba(255,255,255,0.58)] transition-all hover:border-accent hover:bg-accent hover:text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </MkBlock>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-0.5 flex flex-wrap items-center justify-between gap-10 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-11"
        >
          <div>
            <h3
              className="mb-1.5 font-serif text-[30px] font-light italic text-warm-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {cta.title}
            </h3>
            <p className="text-[13px] leading-[1.6] text-[rgba(255,255,255,0.4)]">
              {cta.body}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`mailto:${cta.email}?subject=${encodeURIComponent(cta.primarySubject)}`}
              className="inline-block bg-accent px-7 py-3 text-[10.5px] font-medium uppercase tracking-[0.16em] text-warm-white no-underline transition-colors hover:bg-warm-white hover:text-ink"
            >
              {cta.primaryCta}
            </Link>
            <Link
              href={cta.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[rgba(255,255,255,0.18)] px-7 py-3 text-[10.5px] font-medium uppercase tracking-[0.16em] text-[rgba(255,255,255,0.65)] no-underline transition-colors hover:bg-[rgba(255,255,255,0.07)]"
            >
              {cta.secondaryCta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
