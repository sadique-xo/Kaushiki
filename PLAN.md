# Kaushiki Kumari Website - Build Plan

A Next.js website for **Kaushiki Kumari** - Psychology Creator & Aesthetic Visionary. Clean, editorial, warm aesthetic.

---

## Phase 1: Project Setup ✅ DONE
- [x] Create Next.js 16 project (App Router, TypeScript, Tailwind v4)
- [x] Initialize shadcn/ui (components.json, Button component)
- [x] Install deps: clsx, tailwind-merge, framer-motion, lucide-react
- [x] Configure fonts: Cormorant Garamond, Syne, DM Mono
- [x] Set up design tokens (warm cream, accent, ink palette)
- [ ] Magic UI & Aceternity - add components in Phase 3 as needed

---

## Phase 2: Content Extraction ✅ DONE
Extract content from `reference.html` into markdown files:

| File | Content |
|------|---------|
| `content/hero.md` | Name, tagline, roles, CTAs |
| `content/marquee.md` | Scrolling words |
| `content/nav.md` | Nav links |
| `content/about.md` | Bio, power line, intersection list |
| `content/difference.md` | Differentiator copy, pillars |
| `content/niche.md` | Content world cards |
| `content/strengths.md` | Skills list, why-it-matters panel |
| `content/packages.md` | All 4 package tabs (Listening, Writing, Design, Brand) |
| `content/ratecard.md` | Rate table data |
| `content/audience.md` | Audience tags, values |
| `content/mediakit.md` | Platform info, tone, formats |
| `content/collab.md` | Brand collab cards, deliverables |
| `content/vision.md` | Long-term goals |
| `content/contact.md` | Contact details, form options |
| `content/footer.md` | Footer links |

---

## Phase 3: Build Website Sections ✅ DONE
Build each section using shadcn + Magic UI + Aceternity:

| Section | Components to Use |
|---------|-------------------|
| **Nav** | shadcn Sheet (mobile), custom nav |
| **Hero** | Magic UI text reveal / fade-in |
| **Marquee** | Magic UI Marquee or custom |
| **About** | shadcn Card, reveal animations |
| **Difference** | Dark section, Aceternity cards |
| **Niche** | shadcn Card grid, hover effects |
| **Strengths** | List + dark panel |
| **Packages** | shadcn Tabs, Card grid |
| **Rate Card** | shadcn Table |
| **Audience** | Tag cloud, value list |
| **Media Kit** | Grid blocks |
| **Collab** | Card grid, chips |
| **Vision** | Simple list |
| **Contact** | shadcn Form, Input, Select |
| **Footer** | Simple footer |

---

## Design Tokens (from reference)
```css
--warm-white:  #FAF8F4
--cream:       #F3EDE2
--ink:         #1A1714
--accent:      #C4956A
--sage:        #9BAF9A
--blush:       #CDB8A8
```

## Fonts
- **Cormorant Garamond** - Headlines, serif
- **Syne** - Body, sans
- **DM Mono** - Eyebrows, labels
