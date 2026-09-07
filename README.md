# Tobams Group Training and Development

A responsive single-page training and development website for Tobams Group. The page presents the organisation's learning management system, corporate and individual training programmes, management development programme, Transformation Hub, training consultant offering, and testimonials.

## Live URL

Demo deployment: [https://tobamsgroup-task.vercel.app](https://tobamsgroup-task.vercel.app)

## Design Reference

The implementation was based on the provided Figma design:

[Frontend Intern Assessment in Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS v4 through `@tailwindcss/postcss`
- Framer Motion for entrance and hover animations
- AOS for scroll-triggered section animations
- Lucide React and local SVG components for icons
- Next Font with Nunito and Nunito Sans

## Setup

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Useful production checks:

```bash
npm run lint
npm run build
npm run start
```

## Design and Technical Decisions

- The page is composed from focused sections in `components/`, with the App Router entry point in `app/page.tsx` and shared navigation/footer in the root layout.
- The visual direction follows the supplied design , coral accents, pale neutral surfaces, rounded content blocks, large photography, and high-contrast calls to action.
- Motion is intentionally limited to section reveals, hero loading, navigation transitions, and button hover feedback so the content remains easy to scan.
- Tailwind responsive prefixes such as `sm:`, `md:`, and `lg:` are used for the responsive layout. No custom CSS media-query workaround is used in `globals.css`.
- A few content-driven arbitrary Tailwind breakpoints are used, including `min-[1000px]`, `min-[986px]`, and `min-[864px]`. These thresholds were chosen where the actual image/text columns, footer contact details, or navigation content have enough room to sit side by side without crowding; below them, the layout intentionally stacks.
- The navbar and testimonial card count also use client-side viewport checks (`860px` and `740px`) because those components change interactive behavior, not just CSS layout. These values are kept close to the corresponding visual fit thresholds.
- Local images in `public/` are used for the main design imagery and the first three testimonial avatars. Two testimonial entries currently use external Random User image URLs as temporary content.

## GitHub Copilot Use

GitHub Copilot was used in a limited way for this assessment: to help structure the repetitive testimonial data and carousel content in the testimonial section, and to draft and organise this README. The generated suggestions were reviewed, edited, and aligned with the supplied design and the project's actual implementation.

## Assessment Deviations

The following items are known deviations from the assessment checklist and are documented here intentionally:

- The hero background image in the `WhatWeDo` section remains a standard `<img>` because it is intentionally used as a full-bleed background layer behind the overlay content. A `next/image` migration in this case would require a different composition and is not a straightforward one-to-one swap while preserving the exact Figma treatment.
- The navbar and testimonial carousel use client-side `innerWidth`/`matchMedia` checks. These are used because the components change interactive behavior (mobile menu visibility and the number of visible cards), not only visual layout. They are a technical exception to the requirement to rely only on Tailwind responsive prefixes.
- Some layout decisions use arbitrary Tailwind breakpoints such as `min-[1000px]` where the content needed a little more room than the default breakpoint. The reason is to prevent the image/text and footer columns from becoming cramped; the layout stacks below those content-fit thresholds.
- The page content is currently wrapped in a styled `div` rather than one top-level `<main>` element because each content area was developed as an independent section component. The internal sections use semantic elements, but a final accessibility pass should add the page-level `<main>` landmark.

## Known Issues

- Several navigation links, account controls, assessment buttons, consultation buttons, and footer links are presentational placeholders and do not currently connect to application routes or forms. This is expected in the current single-page mockup because the provided Figma contains only one layout and no target pages or routes to reference.
- The testimonial carousel and navbar use JavaScript viewport detection in addition to Tailwind responsiveness, so their breakpoint values should remain aligned if the layout is redesigned.
