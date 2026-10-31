# Quranica Academy · Website Redesign V3

## Deliverables

- **Homepage**: `index.html` — general academy landing page, with no special prominence for a single course.
- **Learn Arabic Online course example**: `courses/arabic/index.html` — one reusable course page design.
- **`styles.css` / `site.js`** — all responsive styles and interaction scripts; no build step.
- **`assets/`** — original Quranica brand logo from the supplied files and locally stored decorative SVGs.
- **`menu-inventory.json`** — a cross-checkable inventory of the 35 original course/category menu links, plus all audience pathways and subject groups.

## Deploy on GitHub Pages

1. Download and unzip `Quranica-Academy-V3-GitHub-Pages.zip`.
2. Upload **the files inside the ZIP** to the root of a GitHub repository (not into an additional parent folder).
3. In your repository, select **Settings → Pages → Deploy from a branch**. Select the `main` branch and `/(root)` folder, then save.
4. Once deployed, visit the GitHub Pages URL. The course page is at `/courses/arabic/` under that same base URL.
5. For local inspection, launch `python -m http.server 8000` from the extracted directory.

All internal paths are relative, so this works on `username.github.io/repository-name/` as well as a custom domain. No installation or server-side WordPress components are needed.

## New menu structure

The top navigation contains `Home | Kids | Women | Adults | Our Courses | About | Fees | Resources` plus the **Start Free Trial** CTA.

- **Kids**: 8 original course links classified for children.
- **Women**: 4 original courses for ladies and sisters.
- **Adults**: 4 original courses explicitly for adults.
- **Our Courses**: **all 35 original course/category links** from the user-supplied old menu, shown under Quran Learning (14), Tajweed & Hifz (12), Arabic Learning (4), and Islamic Studies (5).

The audience dropdowns intentionally duplicate **some** links from Our Courses; this is navigation filtering, not duplicate URLs or duplicate published content. All URLs are preserved exactly as provided, except the redesigned Learn Arabic Online link points to the prototype course page instead of the original website. There is a separate `All Courses` catalog link at `https://quranica.com/courses/`. Checkout is not in the header; purchases remain on Quranica's official site.

### Important link issue

The older source menu uses `https://quranica.com/course/quran/` (singular `course`), while other course URLs use `/courses/`. The original is retained for parity, **not** verified as canonical. Check this URL and any legacy broken links before production migration or implementing redirects.

## Homepage content changes

- Clear academy-level Hero with Free Trial and Explore Programs CTAs.
- Learning paths by Kids, Women and Adults, and by Quran / Arabic / Islamic Studies.
- Balanced selection of four courses rather than a giant single featured course.
- Why Choose Quranica, How It Works, and an **actual Reviews section** featuring short excerpts and attribution to verified testimonials at `https://quranica.com/reviews/`. No invented review counts, aggregate stars or fake student names.
- **All six tutors** currently listed at `https://quranica.com/about-us/tutors/` in an automatically advancing, manually operable carousel. Motion pauses for mouse hover, focus and touch. Reduced-motion settings are respected. The source site reuses its generic female-teacher portrait for Salma Sayed and Menatullah Khaleel.
- Floating WhatsApp-style contact button.

### Tutor portraits / external image hosting

The teacher photos reference the original Quranica `wp-content/uploads` URLs so the downloadable prototype stays lightweight. **An internet connection and successful image access from Quranica are required to display those portraits** on GitHub Pages; if an image is unavailable, a styled initials fallback remains visible. Download and host approved photos locally before final site launch for maximum reliability.

### WhatsApp contact note

The prototype uses `https://wa.me/201011116328` based on the public phone number **+20 101 111 6328** displayed on the official Quranica contact page. **The site does not explicitly confirm that this phone number is a WhatsApp account.** Test the link with the client and replace it if their official WhatsApp number differs.

## Course page changes

- **Removed the separate, repetitive "At a Glance" card grid.** Answers are now part of the Hero (audience, skills, lesson format) and the adjacent enrollment card (duration, subscription, weekly sessions, class length, CTA).
- Rebuilt all **four curriculum levels** with expandable topic descriptions, activities and learning directions, based on the full course content at `https://quranica.com/courses/arabic/`.
- Added language skills, method, relevant teachers, official academy reviews, and course FAQs.
- The primary button opens the official Free Trial. The enroll button opens the official Arabic course page, which provides the actual Add to Cart route.
- Sticky Free Trial CTA on mobile; floating WhatsApp button is offset above it.

## Prototype data — must be verified

The following are **invented design placeholders**, not actual Quranica commercial terms:

| Field | Prototype value |
| --- | --- |
| Monthly fee | **$49/month** |
| Expected duration | **3–6 months** |
| Weekly sessions | **2** |
| Session length | **45 minutes** |
| Format | **Online 1-to-1** (prototype package assumption) |

All sample pricing/schedule data are marked with a visible SAMPLE label or an asterisk and disclosure. Do **not** publish these values on the live Quranica site until the client verifies them. No invented prices appear in structured data. The source course page currently displays a separate $7 (previously $9) course listing; do not treat this as the proposed $49 monthly subscription.

## SEO and prototype safety

- Descriptive `<title>` / meta descriptions, semantic headings and navigation, one H1 per page, descriptive CTA links, breadcrumbs, accessible native FAQ and curriculum disclosures.
- `Course` and `EducationalOrganization` schema markup **only with source-supported properties**; no made-up aggregate ratings or offers.
- `noindex,nofollow` is intentionally present in both pages to avoid search results indexing this demonstration as duplicate content. Remove only when formally migrating approved content onto the correct canonical URLs with appropriate redirects and SEO rules.
- No live checkout API, WooCommerce cart, Free Trial submission form, or tracking implementation is claimed; actions direct to Quranica's original pages.

## Reference sources

- Official homepage: https://quranica.com/
- Arabic course: https://quranica.com/courses/arabic/
- Teaching team: https://quranica.com/about-us/tutors/
- Academy reviews: https://quranica.com/reviews/
- Contact details: https://quranica.com/about-us/how-do-we-work/contact-us/
- User-supplied legacy menu HTML, SEO Audit PDF and earlier V2 prototype.

**Status:** Demonstration/prototype, not the live website.
