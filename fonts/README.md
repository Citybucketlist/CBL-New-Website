# citybucketlist.com — Brand Fonts

All four open-source font families used across the CBL design system,
packaged as `.woff2` (latin subset) and ready for self-hosting.

## Families

| Role | Family | Weights included |
|---|---|---|
| Display (headlines, CTAs, all-caps slabs) | **Barlow Condensed** | 600 · 700 · 800 · 900 |
| Body / UI | **Inter** | 400 · 500 · 600 · 700 · 800 · 900 |
| Editorial italic accent ("slowly", "field notes") | **Playfair Display** | 400 italic · 600 · 600 italic · 700 |
| Mono / eyebrow / coordinates | **JetBrains Mono** | 400 · 500 |

All four are under the **SIL Open Font License 1.1** — free for commercial use,
embedding, and self-hosting. License files:

- https://fonts.google.com/specimen/Barlow+Condensed/license
- https://fonts.google.com/specimen/Inter/license
- https://fonts.google.com/specimen/Playfair+Display/license
- https://fonts.google.com/specimen/JetBrains+Mono/license

## Use

Drop the `brand_fonts/` folder onto your web host and include `fonts.css`:

```html
<link rel="stylesheet" href="/brand_fonts/fonts.css">
```

Then reference via CSS variables from `colors_and_type.css`:

```css
--cbl-font-display: "Barlow Condensed", "Myriad Pro", sans-serif;
--cbl-font-body:    "Inter", system-ui, sans-serif;
--cbl-font-serif:   "Playfair Display", Georgia, serif;
--cbl-font-mono:    "JetBrains Mono", "Courier New", monospace;
```

## Myriad Pro (optional, licensed)

The original CBL brand uses **Myriad Pro Condensed** (Adobe Fonts / licensed `.otf`)
for display type. Barlow Condensed is the open-source fallback in this kit —
metrics and proportions are a close match, so most layouts hold up without change.

If you license Myriad Pro, drop the `.otf` or `.woff2` files into
`brand_fonts/myriad-pro/` and the font stack above will automatically prefer it.
