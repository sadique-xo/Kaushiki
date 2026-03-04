"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
  cta?: boolean;
};

type NavProps = {
  logo: string;
  logoHref: string;
  links: NavLink[];
};

function parseEm(text: string) {
  const parts = text.split(/\*(.+?)\*/);
  return parts.map((p, i) =>
    i % 2 === 1 ? <em key={i} className="text-[var(--accent)]">{p}</em> : p
  );
}

export function Nav({ logo, logoHref, links }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        id="mainNav"
        className="fixed top-0 left-0 right-0 z-[200] flex h-16 items-center justify-between border-b border-transparent bg-[rgba(255,255,255,0.88)] px-6 backdrop-blur-[14px] transition-[border-color] md:px-14"
      >
        <Link
          href={logoHref}
          className="font-serif text-[19px] font-normal tracking-[0.06em] text-[var(--ink)] no-underline"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {parseEm(logo)}
        </Link>
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) =>
            link.cta ? (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-none bg-[var(--ink)] px-5 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--warm-white)] no-underline transition-colors hover:bg-[var(--accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[10.5px] font-medium uppercase tracking-[0.15em] text-[var(--muted-color)] no-underline transition-colors hover:text-[var(--ink)]"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-[var(--ink)]" />
          ) : (
            <>
              <span className="block h-0.5 w-6 bg-[var(--ink)]" />
              <span className="block h-0.5 w-6 bg-[var(--ink)]" />
              <span className="block h-0.5 w-6 bg-[var(--ink)]" />
            </>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[190] flex flex-col items-center justify-center gap-8 bg-[var(--warm-white)] transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-serif text-3xl font-light tracking-wide text-[var(--ink)] no-underline transition-colors hover:text-[var(--accent)]"
            style={{ fontFamily: "var(--font-heading)" }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
