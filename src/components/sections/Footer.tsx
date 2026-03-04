import Link from "next/link";

type FooterProps = {
  logo: string;
  tagline: string;
  links: { label: string; href: string }[];
};

export function Footer({ logo, tagline, links }: FooterProps) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-[rgba(255,255,255,0.04)] bg-[var(--ink)] px-6 py-12 md:px-14">
      <span
        className="font-serif text-xl font-light tracking-wide text-[var(--warm-white)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {logo}
      </span>
      <span
        className="hidden font-serif text-sm italic text-[rgba(255,255,255,0.28)] md:inline"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {tagline}
      </span>
      <ul className="flex gap-7">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[10px] font-medium uppercase tracking-[0.16em] text-[rgba(255,255,255,0.3)] no-underline transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
