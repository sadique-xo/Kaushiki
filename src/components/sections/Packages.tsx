"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PackageCard = {
  tier: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaSubject: string;
  featured?: boolean;
  badge?: string;
};

type PackagesProps = {
  eyebrow: string;
  title: string;
  intro: string;
  tabs: { id: string; label: string }[];
  panels: Record<string, PackageCard[]>;
  customRow: { text: string; cta: string; ctaSubject: string };
  email: string;
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-[var(--accent)]">{p}</em> : p
  );
}

export function Packages({
  eyebrow,
  title,
  intro,
  tabs,
  panels,
  customRow,
  email,
}: PackagesProps) {
  return (
    <section id="packages" className="bg-[var(--warm-white)]">
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

        <Tabs defaultValue={tabs[0]?.id} className="w-full">
          <TabsList className="mb-14 h-auto w-full justify-start border-0 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid gap-0.5 md:grid-cols-2 lg:grid-cols-3">
                {(panels[tab.id] || []).map((card, i) => (
                  <motion.div
                    key={card.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`relative flex flex-col p-8 transition-transform hover:-translate-y-1 ${
                      card.featured
                        ? "bg-[var(--ink)]"
                        : "bg-[var(--cream)]"
                    }`}
                  >
                    {card.badge && (
                      <span className="absolute right-4 top-4 bg-[var(--accent)] px-3 py-1 text-[8.5px] font-semibold uppercase tracking-[0.16em] text-[var(--warm-white)]">
                        {card.badge}
                      </span>
                    )}
                    <span
                      className={`mb-2.5 font-mono text-[9px] uppercase tracking-[0.22em] ${
                        card.featured ? "text-[var(--blush)]" : "text-[var(--accent)]"
                      }`}
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {card.tier}
                    </span>
                    <h3
                      className={`mb-5 font-serif text-[28px] font-normal leading-tight ${
                        card.featured ? "text-[var(--warm-white)]" : "text-[var(--ink)]"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {card.name}
                    </h3>
                    <div
                      className={`mb-1 font-serif text-[46px] font-light leading-none ${
                        card.featured ? "text-[var(--accent)]" : "text-[var(--ink)]"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {card.price}
                    </div>
                    <div
                      className={`mb-5 text-[11px] italic ${
                        card.featured
                          ? "text-[rgba(255,255,255,0.38)]"
                          : "text-[var(--muted-color)]"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {card.period}
                    </div>
                    <p
                      className={`mb-6 text-[13px] leading-[1.72] ${
                        card.featured
                          ? "text-[rgba(255,255,255,0.52)]"
                          : "text-[var(--muted-color)]"
                      }`}
                    >
                      {card.description}
                    </p>
                    <ul className="mb-8 flex-1 space-y-0">
                      {card.features.map((f) => (
                        <li
                          key={f}
                          className={`flex gap-2.5 border-b py-2 text-[13px] leading-[1.5] before:flex-shrink-0 before:text-[8.5px] before:text-[var(--accent)] before:content-['✦'] ${
                            card.featured
                              ? "border-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.68)]"
                              : "border-[var(--border-light)] text-[var(--ink-soft)]"
                          }`}
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`mailto:${email}?subject=${encodeURIComponent(card.ctaSubject)}`}
                      className={`mt-auto block border py-3 text-center text-[10.5px] font-medium uppercase tracking-[0.15em] no-underline transition-all ${
                        card.featured
                          ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--warm-white)] hover:border-[var(--warm-white)] hover:bg-[var(--warm-white)] hover:text-[var(--ink)]"
                          : "border-[var(--border-md)] text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--warm-white)]"
                      }`}
                    >
                      {card.cta}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-between gap-10 border-l-4 border-[var(--accent)] bg-[var(--cream)] p-9"
        >
          <p
            className="max-w-[520px] font-serif text-xl italic leading-relaxed text-[var(--ink)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {customRow.text}
          </p>
          <Link
            href={`mailto:${email}?subject=${encodeURIComponent(customRow.ctaSubject)}`}
            className="whitespace-nowrap bg-[var(--ink)] px-9 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--warm-white)] no-underline transition-colors hover:bg-[var(--accent)]"
          >
            {customRow.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
