# Implementation Plan: Extreme Electronics Website

## Overview

Build a static single-page portfolio website for Extreme Electronics using HTML, Tailwind CSS (via CDN), and vanilla JavaScript. The implementation proceeds incrementally: project structure and base HTML first, then section-by-section content, followed by styling, interactivity, and final integration. No build step is required — all files are directly deployable to GitHub Pages.

## Tasks

- [x] 1. Set up project structure and base HTML document
  - Create `index.html` with HTML5 boilerplate, Tailwind CDN link, Google Fonts link, and references to `css/styles.css` and `js/main.js`
  - Create `css/styles.css` with CSS custom properties for the dark theme color palette (gray-900, blue-600, etc.) and base fallback styles
  - Create `js/main.js` as an empty file with a DOMContentLoaded listener scaffold
  - Create `images/` directory with placeholder `.gitkeep`
  - Ensure the HTML document includes proper meta tags (viewport, charset, description) and semantic structure (`<nav>`, `<main>`, `<footer>`)
  - _Requirements: 9.1, 9.2, 9.3_

- [x] 2. Implement Navigation Bar
  - [x] 2.1 Build the fixed navigation bar HTML structure
    - Add `<nav id="navbar">` with company logo/name link, desktop link list (Home, Projects, About, Contact), hamburger button for mobile, and hidden mobile menu
    - Apply Tailwind classes for fixed positioning, z-index, backdrop blur, and responsive show/hide (`md:flex`, `md:hidden`)
    - _Requirements: 2.1, 2.3, 2.4_

  - [x] 2.2 Implement mobile menu toggle and smooth scroll in JavaScript
    - In `js/main.js`, add `toggleMobileMenu()` function that shows/hides the mobile menu element
    - Add `scrollToSection(sectionId)` function using `element.scrollIntoView({ behavior: 'smooth' })`
    - Attach click event listeners to all nav links and the hamburger button
    - Close mobile menu after a link is clicked
    - _Requirements: 2.2, 2.4, 2.5, 8.3_

- [x] 3. Implement Hero Section
  - Add `<section id="hero">` with full viewport height, gradient background (gray-900 via blue-900 to gray-900)
  - Add company name as `<h1>`, tagline paragraph mentioning AI/ML, Electronics, and Mechatronics, and CTA button linking to `#projects`
  - Apply responsive text sizing (text-5xl on mobile, text-7xl on desktop)
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 4. Implement Project Showcase section
  - [x] 4.1 Create project data array and card rendering
    - In `js/main.js`, define the `projects` array with objects containing id, title, description, image, domains, and type fields
    - Include the apple sorting system project (AI/ML + Mechatronics, hardware + software) and drone project (Electronics + Mechatronics, hardware)
    - Add at least 4-6 total projects spanning all three domains
    - Write a `renderProjects()` function that generates project card HTML and inserts it into the `#project-grid` container
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [x] 4.2 Build the Projects section HTML structure
    - Add `<section id="projects">` with section heading, domain filter buttons (All, AI/ML, Electronics, Mechatronics), and an empty `<div id="project-grid">` with responsive grid classes (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
    - Add `data-filter` attributes to filter buttons
    - Include `<noscript>` fallback that renders all project cards in static HTML for progressive enhancement
    - _Requirements: 3.1, 7.2, 7.3, 7.4, 9.4_

  - [x] 4.3 Implement domain filtering logic
    - In `js/main.js`, add `filterProjects(domain)` function that shows/hides cards based on their `data-domain` attribute
    - Track `activeFilter` state and update active button styling
    - Add click event listeners to all `.filter-btn` elements
    - _Requirements: 4.1, 4.2, 4.3_

- [x] 5. Checkpoint - Verify navigation and project showcase
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement About Section
  - Add `<section id="about">` with a centered heading, mission statement paragraph, and a 3-column responsive grid of domain capability cards (AI/ML, Electronics, Mechatronics)
  - Each domain card has a heading (blue accent color) and description paragraph
  - Apply distinct background color (`bg-gray-800`) to differentiate from adjacent sections
  - _Requirements: 5.1, 5.2, 5.3_

- [x] 7. Implement Contact Section
  - Add `<section id="contact">` with heading, email link (`mailto:`), and social media icon links
  - Style with centered layout and blue accent colors for links
  - Ensure hover states provide visual feedback on links
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 8. Implement Footer
  - Add `<footer>` with navigation links mirroring the main nav (Home, Projects, About, Contact), copyright notice with "Extreme Electronics", and visually distinct styling (darker background, top border)
  - _Requirements: 10.1, 10.2, 10.3_

- [x] 9. Add custom styles and animations
  - [x] 9.1 Add custom CSS for theme and hover effects
    - In `css/styles.css`, define CSS custom properties for the color palette
    - Add hover transition styles for buttons, cards, and links (color change, scale, or shadow)
    - Add focus-visible styles for keyboard navigation accessibility
    - Style the filter buttons (active state, hover state)
    - Style project card hover effects (subtle lift/shadow)
    - _Requirements: 8.1, 8.2, 8.4_

  - [x] 9.2 Add filter transition animations
    - In `css/styles.css`, add CSS transitions for project card show/hide (opacity and transform)
    - In `js/main.js`, implement `animateCards()` that applies CSS classes for fade-in/fade-out transitions when filtering
    - _Requirements: 4.4_

- [x] 10. Implement progressive enhancement and accessibility
  - Add `scroll-behavior: smooth` in CSS as baseline for smooth scrolling
  - Ensure all images have descriptive `alt` attributes
  - Add `aria-label` to the hamburger menu button and `aria-expanded` state
  - Ensure all interactive elements are keyboard-focusable with visible focus indicators
  - Verify that without JavaScript, all project cards remain visible (static HTML fallback in `<noscript>` or rendered in HTML directly)
  - Ensure minimum body text size of 16px
  - _Requirements: 8.2, 8.3, 9.4_

- [x] 11. Final checkpoint - Verify complete site
  - Ensure all tests pass, ask the user if questions arise.
  - Verify responsive layout at 320px, 768px, 1024px, and 1440px breakpoints
  - Verify all navigation links scroll to correct sections
  - Verify domain filter shows/hides correct project cards
  - Verify mobile hamburger menu opens and closes correctly
  - Verify site works with JavaScript disabled (progressive enhancement)

## Notes

- No property-based tests are included as the design explicitly identifies this as a static UI project where PBT is not applicable
- All content is rendered in semantic HTML for progressive enhancement — JavaScript adds interactivity but is not required for content access
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at logical breakpoints
- The site requires no build step — all files are directly deployable to GitHub Pages
