import Link from "next/link";
import Image from "next/image";

type FooterProps = {
  logo: string;
  logoImage?: string;
  tagline: string;
  links: { label: string; href: string }[];
};

export function Footer({ logo, logoImage, tagline, links }: FooterProps) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-[rgba(255,255,255,0.04)] bg-ink px-6 py-12 md:px-14">
      {logoImage ? (
        <Image
          src={logoImage}
          alt={logo}
          width={40}
          height={40}
          className="size-10 shrink-0 rounded-full object-cover object-center"
        />
      ) : (
        <span
          className="font-serif text-xl font-light tracking-wide text-warm-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {logo}
        </span>
      )}
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
              className="text-[10px] font-medium uppercase tracking-[0.16em] text-[rgba(255,255,255,0.3)] no-underline transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
