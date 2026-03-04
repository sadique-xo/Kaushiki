"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  type: string;
};

type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
};

type ContactProps = {
  eyebrow: string;
  title: string;
  body: string;
  powerLine: string;
  details: ContactDetail[];
  form: {
    title: string;
    description: string;
    fields: FormField[];
    submitLabel: string;
  };
};

function parseTitle(title: string) {
  return title.split(/\*(.+?)\*/).map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-[var(--accent)]">{p}</em> : p
  );
}

export function Contact({
  eyebrow,
  title,
  body,
  powerLine,
  details,
  form,
}: ContactProps) {
  return (
    <section id="contact" className="bg-[var(--warm-white)]">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-14">
        <div className="grid gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
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
            <p className="text-[15px] font-light leading-[1.85] text-[var(--ink-soft)]">
              {body}
            </p>
            <blockquote className="border-l-2 border-[var(--accent)] bg-[rgba(235,76,76,0.05)] py-4 pl-5 pr-5 font-serif text-xl italic leading-relaxed text-[var(--ink)]">
              {powerLine}
            </blockquote>
            <ul className="mt-10 space-y-0">
              {details.map((d) => (
                <li
                  key={d.label}
                  className="flex items-center gap-5 border-b border-[var(--border-light)] py-4 first:border-t"
                >
                  <span
                    className="min-w-[72px] font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-color)]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {d.label}
                  </span>
                  {d.href ? (
                    <Link
                      href={d.href}
                      className="text-[14px] text-[var(--ink)] no-underline transition-colors hover:text-[var(--accent)]"
                    >
                      {d.value}
                    </Link>
                  ) : (
                    <span className="text-[14px] text-[var(--ink)]">
                      {d.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-[var(--border-light)] bg-[var(--cream)] p-10"
          >
            <h3
              className="mb-2 font-serif text-[28px] font-normal text-[var(--ink)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {form.title}
            </h3>
            <p className="mb-7 text-[13px] leading-[1.65] text-[var(--muted-color)]">
              {form.description}
            </p>
            <form
              action="mailto:kashsupernova@gmail.com"
              method="get"
              encType="text/plain"
              className="space-y-4"
            >
              {form.fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-color)]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      className="w-full border border-[var(--border-md)] bg-[var(--warm-white)] px-4 py-3 text-[13.5px] text-[var(--ink)] outline-none transition-[border-color] focus:border-[var(--accent)]"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      placeholder={field.placeholder}
                      className="w-full resize-none border border-[var(--border-md)] bg-[var(--warm-white)] px-4 py-3 text-[13.5px] text-[var(--ink)] outline-none transition-[border-color] focus:border-[var(--accent)]"
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border border-[var(--border-md)] bg-[var(--warm-white)] px-4 py-3 text-[13.5px] text-[var(--ink)] outline-none transition-[border-color] focus:border-[var(--accent)]"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="mt-1.5 w-full bg-[var(--ink)] py-4 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--warm-white)] transition-colors hover:bg-[var(--accent)]"
              >
                {form.submitLabel} →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
