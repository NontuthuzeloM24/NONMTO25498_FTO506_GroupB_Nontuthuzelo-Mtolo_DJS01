🎧 DJS01: Vanilla JS Podcast App
🚀 Overview

Welcome to the Vanilla JS Podcast App — a fully responsive web application where users can browse podcast shows 🎙️ and view detailed information in an elegant modal 🎨 — all without page reloads.

This project demonstrates strong frontend architecture, modular JavaScript, and clean UI/UX principles, combining OOP, Functional Programming, and SOLID design for maintainable, scalable code.

✨ What’s New

✅ Modular JavaScript Structure

Split into data.js, dom.js, modal.js, and events.js for clean separation of concerns.

Implemented OOP and FP principles — reusable functions, clear abstractions, and JSDoc documentation.

✅ Modern UI/UX Improvements

Fully responsive design 📱💻 using CSS Grid & Flexbox.

Smooth hover transitions, adaptive modal layouts, and mobile-first design.

Accessible close buttons, readable text, and consistent color scheme.

✅ Dynamic Content Rendering

Podcasts are generated dynamically from data — no static HTML duplication.

Modal dynamically populates show details and season info.

✅ Improved Maintainability

Clear code architecture following SOLID principles.

JSDoc comments for all major functions and modules.

Modular import/export using ES6 syntax.

🧠 Core Features
🎵 Landing Page – Podcast Previews

Each podcast preview includes:

🎧 Cover image

🏷️ Title

📆 Last updated date

🗂️ Genre tags

🎬 Number of seasons

💡 Modal View – Show Details

When a podcast preview is clicked:

Displays a larger cover image

Shows the podcast title & description

Lists genre tags and last updated date

Includes all season titles + number of episodes

Modal closes via ✖️ button or background click

🧩 Architecture & Design Principles

🧱 OOP (Object-Oriented Programming) — classes and encapsulated modules for reusable logic.

⚙️ Functional Programming — pure functions for rendering and filtering.

🧼 SOLID Principles — single responsibility, open/closed modularity, dependency inversion, etc.

🧾 JSDoc — added for key functions, ensuring clarity and maintainability.

File structure:

📁 podcast-app
│
├── index.html           # Main entry page
├── style.css            # Responsive styles (mobile-first)
└── /js
    ├── data.js          # Podcast data (or data fetching)
    ├── dom.js           # Handles DOM rendering
    ├── modal.js         # Modal logic
    └── events.js        # App controller & event management

🧑‍💻 Technical Details

💻 Tech Stack: HTML5, CSS3, Vanilla JavaScript (ES6 Modules)

⚡ Dynamic Rendering: JS populates podcast list & modal content.

🔁 No Reloads: All interactions handled client-side.

🎨 Responsive Design: Works beautifully on mobile, tablet, and desktop.

🎨 Design & UX Goals

Consistent layout, color scheme, and typography.

Clear visual hierarchy and hover/active feedback.

Accessible: high contrast, readable text, keyboard-friendly modal.

Responsive: optimized breakpoints for all device sizes.

💡 Check the /wireframe reference images/ folder for desktop and mobile design guidance.

📸 Wireframe Reference

Desktop modal view:


🧾 Deliverables

✅ Fully functional and responsive podcast web application.

🧩 Modular, maintainable, and documented source code.

🧠 Demonstration of strong JS fundamentals, OOP, and FP design.

Enjoy exploring the podcasts! 🎧

👨‍💻 Author

Project: DJS01 – Vanilla JS Podcast App
Built with ❤️ and clean code principles.
