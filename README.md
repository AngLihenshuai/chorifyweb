# Chorify Landing Page

A modern, single-page marketing site for [Chorify / EVA Project](https://github.com/ronategarcia/eva_project) —
the AI-powered dance coach with pose detection and Bluetooth haptic feedback.

## Run it

This is a static site — **no build step, no dependencies**.

### Easiest: just double-click

Unzip the folder, then double-click `index.html`. It opens in your default browser.

### Or serve it locally (recommended for fonts/CORS)

```bash
# Python 3
python3 -m http.server 8080

# or Node
npx serve .
```

Then visit http://localhost:8080

## Files

| File | Purpose |
| --- | --- |
| `index.html`        | Landing page markup |
| `styles.css`        | All styling (dark theme, gradients, animations) |
| `script.js`         | Scroll reveal, nav state, hero parallax |
| `privacy-policy.html` | Linked from the footer |

## Customize

- Brand colors live in `:root` at the top of `styles.css` (`--brand`, `--brand-2`, `--brand-3`).
- Copy is in `index.html` — search for the section you want to edit.
- The hero "live session" preview is pure SVG + CSS, no images required.

## License

Free to use and modify for the EVA / Chorify project.
