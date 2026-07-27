# DETTROIN-INT-Chahat-Website

## Dettroin Full Stack Developer Internship — Round 1: Website Redesign Challenge

**Full Name:** Chahat Khandelwal

**Email Address:** chahatkhandelwal2005@gmail.com
**GitHub Username:** Chahat-del
**Selected Website:** [Excellence International School](https://excellenceinternationalschool.com/)
**Live Demo Link:** [https://dettroin-int-chahat-website.vercel.app/](https://dettroin-int-chahat-website.vercel.app/)

---

## Technologies Used
- HTML5 (semantic markup)
- CSS3 (custom properties, Grid, Flexbox, animations, media queries)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Poppins, Inter)
- Font Awesome (icons)
- Deployed on Vercel

---

## Key Improvements Made

- **Complete visual redesign** — moved away from the original site's layout and color scheme to a custom ocean-blue and amber palette with consistent typography (Poppins for headings, Inter for body text), giving the site a more professional, cohesive look.

- **Flip-card interaction for Academics and Gallery** — replaced the original's long vertical, alternating text/image blocks with interactive flip cards. Visitors see a photo and title on the front, and can click/tap to reveal detailed information on the back — presenting the same content in far less scroll space while making the page more engaging.

- **Redesigned "Why Choose Us" section** — turned static information into a hexagon-icon card grid with hover animations, making key differentiators easier to scan at a glance.

- **New "Modern Infrastructure" section** — added an alternating-layout content block (not present in this form on the original) highlighting skill-based learning, community service, experiential learning, STREAM education, arts, and physical development, with scroll-triggered slide-in animations.

- **Testimonials carousel** — converted static testimonials into an auto-playing, swipeable carousel with avatar initials, star ratings, and dot navigation, adapting from 3 cards on desktop to 1 on mobile.

- **FAQ accordion** — added a frequently-asked-questions section (not present on the original) addressing common admission and safety questions, using a smooth expand/collapse accordion.

- **Redesigned enquiry form** — replaced the original's basic contact form with a card-style quick-enquiry form including academic year, grade selection, and validation styling.

- **Hero image slideshow** — added an auto-playing hero slideshow with manual arrow navigation, replacing a static hero banner.

- **Fully responsive design** — rebuilt layouts using CSS Grid and Flexbox with mobile-first breakpoints, tested across desktop, tablet, and mobile widths, including a collapsible hamburger navigation menu.

- **Scroll-based animations** — used IntersectionObserver to fade and slide content into view as the user scrolls, improving perceived polish and performance (animations only trigger once, avoiding unnecessary re-renders).

- **Single-page architecture** — consolidated the original's multi-page structure (Home, About, Academics, Admissions, Gallery, Blog, Contact as separate pages) into one fast-loading page with anchor-based navigation, reducing page loads and letting visitors browse all content without repeated clicks.

---

## Folder Structure
```
DETTROIN-INT-Chahat-Website/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── images/
    └── icons/
```