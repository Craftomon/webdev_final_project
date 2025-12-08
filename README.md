# 🎨 Craftomon Pixel Portfolio

## 🧩 Project Overview
<<<<<<< HEAD

=======
>>>>>>> 605cc9ca9556d988f4926d585f7954fda0c40bf4
A personal **pixel art portfolio website** showcasing original sprite artwork.  
Built with **HTML5**, **CSS3**, and **JavaScript**, the site will feature a responsive gallery, accessibility best practices, and a custom pixel-art viewer.

**Repository:** [https://github.com/Craftomon/pixel-portfolio](https://github.com/Craftomon/pixel-portfolio)  
**Live Site (GitHub Pages):** _coming soon_

---

## 🗓️ Week 1 — Project Setup & Structure

### 🎯 Goals
<<<<<<< HEAD

- Create the project repository and folder structure.
- Draft semantic HTML skeleton (`header`, `main`, `footer`, etc.).
- Link CSS and JS files correctly.
- Verify HTML validation and GitHub Pages readiness.

### ✅ Definition of Done

- [ ] Repo `Craftomon/pixel-portfolio` exists and is public.
- [ ] `README.md` includes project description and Week 1 progress.
- [ ] Semantic HTML structure complete with placeholders.
- [ ] CSS and JS linked correctly; no console errors.
- [ ] Folder structure created and committed.
- [ ] HTML passes W3C validation.
- [ ] ≥ 3 commits with meaningful messages.

---

## 📘 Week 1 Report — Craftomon Pixel Portfolio

Student: Craftomon
Course: Web Development
Project: Pixel Art Portfolio Website
Week: 1 — Project Setup & Structure

### 🧩 Overview

During Week 1, I focused on establishing the foundation of the Pixel Portfolio project. The goal for this week was to create the project repository, organize the file structure, draft the HTML skeleton, and ensure that GitHub synchronization and GitHub Pages deployment are functioning correctly.

All tasks centered around building a clean, semantic, and maintainable starting point for the website.

### ✅ Completed Tasks

1. GitHub Repository Setup

Created the repository pixel-portfolio under the Craftomon GitHub account.

Added a project description and Week 1 tasks into README.md.

Connected local files to the GitHub repo using Git Bash.

2. File & Folder Structure Created

Established the recommended structure:

pixel-portfolio/
│
├── index.html
│
├── /assets/
│ ├── /css/
│ │ └── style.css
│ ├── /js/
│ │ └── script.js
│ └── /img/
│ └── (placeholder images or .gitkeep)
│
└── README.md

Each folder was created using GitHub’s “Create New File” method by specifying paths like assets/css/style.css.

3. HTML Skeleton Drafted

Created the initial, fully semantic HTML structure including:

<header> with project title

<nav> with internal anchor links

<main> divided into <section> elements

Placeholder text and placeholder images

<footer> with dynamic year planned via JavaScript

Proper <meta> tags and linked external files

4. JavaScript File Linked and Tested

Wrote a functional and clean script.js containing:

A connection test with console.log

A DOMContentLoaded listener

Automatic year updating for the footer

A placeholder function for the Week 3 pixel viewer

JavaScript successfully loads with no console errors.

5. CSS File Linked

Added base styles (background, fonts, header/footer formatting) to confirm CSS is loading properly.

Verified visual changes in the browser.

6. Git & Version Control

Performed several commits using Git Bash.
Examples include:

“Add initial HTML structure”

“Create CSS and link to HTML”

“Add JavaScript file and footer year script”

Confirmed successful syncing with GitHub using git push.

7. HTML Validation

Uploaded index.html to W3C Validator.

Received confirmation of no errors.

Took a screenshot for submission artifacts.

8. GitHub Pages Setup

Enabled GitHub Pages under:

Branch: main

Folder: / (root)

Deployment is successful; site loads correctly at:
https://craftomon.github.io/pixel-portfolio/

### 📸 Week 1 Artifacts Collected

Screenshot: GitHub Repository Home Page

Screenshot: Browser view of HTML skeleton

Screenshot: W3C Validation “No errors found”

Screenshot or copy of commit log (≥ 3 commits)

Live site deployment link (GitHub Pages)

### 🎯 Week 1 Learning Outcomes Achieved

Correct use of semantic HTML structure

File and folder organization best practices

Introduction to version control workflows (commit, push, pull)

Connecting local environment to GitHub

Deploying static websites with GitHub Pages

Verifying basic accessibility and validation standards

### 📝 Summary

Week 1 successfully established the base foundation of the Pixel Portfolio project.
The repository, structure, HTML, CSS, and JS are properly set up and validated.
Git workflow and GitHub Pages are fully functional, positioning the project for Week 2’s focus on CSS styling and gallery layout.

---

## ✔️ Week 2 Checklist — Styling & Gallery Design

### 🎨 Visual Design

Choose color palette (2–4 core colors)

Import Google Font(s)

Set up CSS variables for theme (--bg, --text, --accent, etc.)

### 🧭 Layout & Navigation

Style header (padding, background, alignment)

Style navigation menu (horizontal list, spacing)

Add hover and focus styles for links

Style footer with consistent formatting

### 🖼️ Responsive Gallery

Add .gallery container in HTML

Implement CSS Grid with auto-fit + minmax()

Include 6–8 placeholder images

Ensure images use image-rendering: pixelated

Confirm the grid adjusts smoothly on mobile

### 🧱 Page Structure & Spacing

Add max-width to main content

Add padding/margin to sections

Improve typography and heading spacing

### 📱 Mobile Responsiveness

Test layout at phone size in browser tools

Ensure no horizontal scrolling / overflow

Confirm nav and gallery both display cleanly

### 🧪 Validation

HTML passes W3C validation

CSS passes W3C validation

### 🗂️ Version Control

At least 3–5 meaningful commits

All changes pushed to GitHub

Live GitHub Pages site reflects updates

### 📸 Week 2 Artifacts

Screenshot: desktop gallery

Screenshot: mobile view

Screenshot: W3C HTML validation

Screenshot: W3C CSS validation

Commit log screenshot or link

---

## 📘 Week 2 Report — Craftomon Pixel Portfolio

Student: Craftomon
Course: Web Development
Project: Pixel Art Portfolio Website
Week: 2 — Styling & Gallery Design

### 🧩 Overview

Week 2 focused on transforming the basic HTML skeleton created in Week 1 into a styled, readable, and responsive layout using CSS.
The main goals included setting up a visual theme, introducing a grid-based gallery layout, applying NES-style aesthetics, and ensuring the site behaved correctly on both desktop and mobile screens.

This week marks the first major visual evolution of the project — the site now looks like a real pixel-art portfolio rather than a plain HTML document.

### ✅ Completed Tasks

1. Established NES-Inspired Visual Theme

Added a full NES color palette using CSS variables.

Set up thematic colors within :root (background, text, accent colors).

Introduced NES-style elements like bold contrast and pixel-friendly borders.

2. Integrated Google Fonts

Added retro pixel-art font Press Start 2P for headings.

Added modern body font Inter for readability.

Applied appropriate font families across headings and body text.

3. Styled Navigation Bar (NES UI Aesthetic)

Fully designed and implemented a custom NES-style navigation bar.

Added:

Pixel-like borders

Inset shading (8-bit button feel)

Hover/active effects

Mobile responsiveness

Navigation now looks like an NES game menu.

4. Built Responsive Gallery Grid

Implemented .gallery using CSS Grid with auto-fit and minmax() for responsiveness.

Added 6 placeholder images to test scaling, spacing, and hover animation.

Ensured all images use image-rendering: pixelated for crisp pixel zooming.

5. Page Layout & Typography Improvements

Added global spacing using padding, margin, and max-width.

Styled sections for consistent spacing and readability.

Headings now use distinct, stylized formats matching retro themes.

6. Mobile Testing & Adjustments

Tested the gallery on mobile width (~360px).

Ensured no horizontal scroll or overflow.

Made nav bar stack vertically on small screens using media queries.

Confirmed gallery images adapt smoothly across screen sizes.

7. Validation

Ran updated HTML through W3C Validator — resolved minor formatting issues.

Ran CSS through W3C Validator — no critical errors found.

Recorded screenshots for submission.

8. GitHub Version Control

Committed frequently throughout development, including:

“Add NES color palette variables”

“Implement gallery grid and placeholder images”

“Add Google Fonts and typographic styles”

“Create NES-style navigation bar”

“Adjust mobile layout and fix spacing”

All changes pushed to GitHub; GitHub Pages site updated accordingly.

### 🎯 Week 2 Learning Outcomes Achieved

Applied professional CSS structure for styling and layout

Used CSS Grid to create responsive designs

Implemented semantic styling and consistent theming

Integrated external assets (Google Fonts)

Improved site readability and aesthetics

Completed mobile layout adjustments

Continued proficient use of Git & GitHub

### 📸 Week 2 Artifacts Collected

Screenshot: NES-style navigation bar

Screenshot: gallery layout (desktop view)

Screenshot: gallery on mobile

Screenshot: W3C HTML validation

Screenshot: W3C CSS validation

Git commit log showing 3–5 commits

Updated GitHub Pages live URL
=======
- Create the project repository and folder structure.  
- Draft semantic HTML skeleton (`header`, `main`, `footer`, etc.).  
- Link CSS and JS files correctly.  
- Verify HTML validation and GitHub Pages readiness.

### ✅ Definition of Done
- [ ] Repo `Craftomon/pixel-portfolio` exists and is public.  
- [ ] `README.md` includes project description and Week 1 progress.  
- [ ] Semantic HTML structure complete with placeholders.  
- [ ] CSS and JS linked correctly; no console errors.  
- [ ] Folder structure created and committed.  
- [ ] HTML passes W3C validation.  
- [ ] ≥ 3 commits with meaningful messages.

### 🧱 Folder Structure
>>>>>>> 605cc9ca9556d988f4926d585f7954fda0c40bf4
