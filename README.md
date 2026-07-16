#  The Road to Doomsday

A dark, futuristic watch order tracker for the Marvel Cinematic Universe. Built for anyone trying to catch up before **Avengers: Doomsday** hits theaters on **December 18, 2026**.

[Live Demo →] https://mcu-doomsday-checklist.vercel.app/

## What is this?

A single scrolling timeline of every essential MCU film and series that feeds into *Avengers: Doomsday*. Grouped into six color coded phases, starting at *Iron Man* (2008) and running all the way through *The Fantastic Four: First Steps* (2025).

Each entry is a checkbox card you can click to mark as watched. Progress is saved locally in your browser, so it's still there next time you open the page.

## Features

- Six phase timeline covering Origins, Build Up, Infinity Saga Climax, The Multiverse Opens, The Doom Pivot, The Doorstep, and the Doomsday finale
- Color coded eras. Each phase has its own accent color that runs through the connecting spine, dots, and card borders
- Multiverse branching visual. The spine visually splits into braided threads from Phase 4 onward, then converges into a single point right before the finale
- Click to check cards. No JavaScript needed for the checking or styling itself, just CSS `:checked ~` sibling selectors
- Progress saved locally. Checkbox state persists across page reloads via `localStorage`
- Fully responsive. Works down to mobile and stacks into a single column on small screens
- Zero dependencies. No frameworks, no build step, just three files

## Tech stack

| File | Purpose |
|---|---|
| `index.html` | Page structure and content |
| `style.css` | All styling: colors, layout, animations |
| `script.js` | Saves and restores checkbox progress via `localStorage` |

Fonts: [Orbitron](https://fonts.google.com/specimen/Orbitron), [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), all via Google Fonts.

## Running it locally

No build step, no install. Just open the file.

## Credits

Built by Arika as a personal project. Not affiliated with Marvel Studios or Disney. Just a fan made tracker.
