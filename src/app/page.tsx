import { getContent } from "@/lib/content";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Difference } from "@/components/sections/Difference";
import { Niche } from "@/components/sections/Niche";
import { Strengths } from "@/components/sections/Strengths";
import { Packages } from "@/components/sections/Packages";
import { RateCard } from "@/components/sections/RateCard";
import { Audience } from "@/components/sections/Audience";
import { MediaKit } from "@/components/sections/MediaKit";
import { Collab } from "@/components/sections/Collab";
import { Vision } from "@/components/sections/Vision";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const nav = getContent<{
    logo: string;
    logoHref: string;
    links: { label: string; href: string; cta?: boolean }[];
  }>("nav");
  const hero = getContent<{
    eyebrow: string;
    firstName: string;
    lastName: string;
    tagline: string;
    ctas: { label: string; href: string; variant: string }[];
    roles: string[];
    decoLetter?: string;
  }>("hero");
  const marquee = getContent<{ words: string[]; separator?: string }>("marquee");
  const about = getContent<{
    eyebrow: string;
    title: string;
    intersections: { num: string; title: string; description: string }[];
  }>("about");
  const difference = getContent<{
    eyebrow: string;
    title: string;
    pillars: { glyph: string; title: string; description: string }[];
  }>("difference");
  const niche = getContent<{
    eyebrow: string;
    title: string;
    description: string;
    cards: { glyph: string; title: string; description: string }[];
  }>("niche");
  const strengths = getContent<{
    eyebrow: string;
    title: string;
    body: string;
    skills: string[];
    whyPanel: { title: string; rows: { label: string; text: string }[] };
  }>("strengths");
  const packages = getContent<{
    eyebrow: string;
    title: string;
    intro: string;
    tabs: { id: string; label: string }[];
    panels: Record<
      string,
      {
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
      }[]
    >;
    customRow: { text: string; cta: string; ctaSubject: string };
    email: string;
  }>("packages");
  const ratecard = getContent<{
    eyebrow: string;
    title: string;
    intro: string;
    rows: { category: string; items: { service: string; details: string; rate: string }[] }[];
    note: string;
  }>("ratecard");
  const audience = getContent<{
    eyebrow: string;
    title: string;
    body: string;
    tags: string[];
    values: { title: string; description: string }[];
  }>("audience");
  const mediakit = getContent<{
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
  }>("mediakit");
  const collab = getContent<{
    eyebrow: string;
    title: string;
    intro: string;
    cards: { title: string; description: string }[];
    deliverables: { label: string; chips: string[] };
  }>("collab");
  const vision = getContent<{
    eyebrow: string;
    title: string;
    goals: string[];
  }>("vision");
  const contact = getContent<{
    eyebrow: string;
    title: string;
    body: string;
    powerLine: string;
    details: { label: string; value: string; href?: string; type: string }[];
    form: {
      title: string;
      description: string;
      fields: { name: string; label: string; type: string; placeholder?: string; options?: string[] }[];
      submitLabel: string;
    };
  }>("contact");
  const footer = getContent<{
    logo: string;
    tagline: string;
    links: { label: string; href: string }[];
  }>("footer");

  return (
    <main className="min-h-screen bg-[var(--warm-white)]">
      <Nav {...nav.data} />
      <Hero {...hero.data} />
      <Marquee {...marquee.data} />
      <About {...about.data} />
      <Difference {...difference.data} />
      <Niche {...niche.data} />
      <Strengths {...strengths.data} />
      <Packages {...packages.data} />
      <RateCard {...ratecard.data} />
      <Audience {...audience.data} />
      <MediaKit {...mediakit.data} />
      <Collab {...collab.data} />
      <Vision {...vision.data} />
      <Contact {...contact.data} />
      <Footer {...footer.data} />
    </main>
  );
}
