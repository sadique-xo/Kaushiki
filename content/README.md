# Content — Kaushiki Website

Content extracted from the reference HTML into structured markdown files with YAML frontmatter.

## Files

| File | Section |
|------|---------|
| `hero.md` | Hero, name, tagline, CTAs, roles |
| `marquee.md` | Scrolling marquee words |
| `nav.md` | Navigation links |
| `about.md` | About section, intersections |
| `difference.md` | The Difference (dark), pillars |
| `niche.md` | Content World cards |
| `strengths.md` | Creative strengths, why panel |
| `packages.md` | Service packages (4 tabs) |
| `ratecard.md` | Rate table |
| `audience.md` | Audience tags, values |
| `mediakit.md` | Media kit blocks |
| `collab.md` | Brand collaboration cards |
| `vision.md` | Long-term vision |
| `contact.md` | Contact details, form |
| `footer.md` | Footer links |

## Usage

In Phase 3, components will load these files. For now you can use a simple markdown/YAML parser (e.g. `gray-matter`) to read frontmatter + body.

```ts
import matter from 'gray-matter';
import fs from 'fs';

const { data, content } = matter(fs.readFileSync('content/hero.md', 'utf-8'));
```
