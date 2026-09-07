# Tobams Group Training and Development

A responsive single-page training and development website for Tobams Group. The page presents the organisation's learning management system, corporate and individual training programmes, management development programme, Transformation Hub, training consultant offering, and testimonials.

## Live URL

Demo deployment: [https://tobams-group-task.vercel.app](https://tobams-group-task.vercel.app)

This is the draft demo URL for the assessment. Replace it with the final deployment URL if the project is deployed under a different Vercel project name.

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
- Next Font with Geist and Geist Mono

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
- The visual direction follows the supplied design with a deep plum base, coral accents, pale neutral surfaces, rounded content blocks, large photography, and high-contrast calls to action.
- Motion is intentionally limited to section reveals, hero loading, navigation transitions, and button hover feedback so the content remains easy to scan.
- Tailwind responsive prefixes such as `sm:`, `md:`, and `lg:` are used for the responsive layout. No custom CSS media-query workaround is used in `globals.css`.
- A few content-driven arbitrary Tailwind breakpoints are used, including `min-[1000px]`, `min-[986px]`, and `min-[864px]`. These thresholds were chosen where the actual image/text columns, footer contact details, or navigation content have enough room to sit side by side without crowding; below them, the layout intentionally stacks.
- The navbar and testimonial card count also use client-side viewport checks (`860px` and `740px`) because those components change interactive behavior, not just CSS layout. These values are kept close to the corresponding visual fit thresholds.
- Local images in `public/` are used for the main design imagery and the first three testimonial avatars. Two testimonial entries currently use external Random User image URLs as temporary content.

## GitHub Copilot Use

GitHub Copilot was used in a limited way for this assessment: to help structure the repetitive testimonial data and carousel content in the testimonial section, and to draft and organise this README. The generated suggestions were reviewed, edited, and aligned with the supplied design and the project's actual implementation.

## Assessment Deviations

The following items are known deviations from the assessment checklist and are documented here intentionally:

- The page currently uses standard `<img>` elements for the supplied static assets instead of `next/image`. This kept the existing Figma image sizing and cropping behavior straightforward during the static-page implementation, but the images should be migrated to `next/image` before a production release for optimization.
- The navbar and testimonial carousel use client-side `innerWidth`/`matchMedia` checks. These are used because the components change interactive behavior (mobile menu visibility and the number of visible cards), not only visual layout. They are a technical exception to the requirement to rely only on Tailwind responsive prefixes.
- Some layout decisions use arbitrary Tailwind breakpoints such as `min-[1000px]` where the content needed a little more room than the default breakpoint. The reason is to prevent the image/text and footer columns from becoming cramped; the layout stacks below those content-fit thresholds.
- The page content is currently wrapped in a styled `div` rather than one top-level `<main>` element because each content area was developed as an independent section component. The internal sections use semantic elements, but a final accessibility pass should add the page-level `<main>` landmark.
- Two unused font/component imports remain from the initial scaffold (`Nunito` and `Nunito_Sans` in `app/layout.tsx`, and `Image` in `app/page.tsx`). They are harmless to the rendered page but should be removed before final submission to meet the no-unused-imports requirement.
- The footer logo currently has an empty alt attribute because it is treated as decorative alongside the footer description. This should be changed to meaningful alternative text if the logo is considered informative.
- A public GitHub repository link has not been added because no verified repository URL is available in the project workspace. The actual public repository link must be added before submission.
- The listed Vercel address is a draft demo URL and has not been presented as a verified deployment. It must be replaced with a working deployment URL before submission.

## Known Issues

- The demo URL above is a placeholder deployment address and may need to be replaced with the final hosted URL.
- Several navigation links, account controls, assessment buttons, consultation buttons, and footer links are presentational placeholders and do not currently connect to application routes or forms.
- Some assets and copy are assessment content rather than production content. Social icons and footer details should be connected to verified Tobams Group destinations before release.
- The testimonial carousel and navbar use JavaScript viewport detection in addition to Tailwind responsiveness, so their breakpoint values should remain aligned if the layout is redesigned.
