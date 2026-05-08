# CBL Icon Library

Source SVGs for the CBL service icon set. These are the canonical assets — when adding new screens to this design system, lift the path data from these files (re-stroked to white at strokeWidth ~9 with `fill="none"` to match the existing dashboard).

| File | Used in dashboard as |
|---|---|
| `cbl-transportation.svg` | `RDBus` — alt ground-transport icon (NOT used in current dashboard; the Travel slot uses an airplane glyph drawn in `RDPlane`) |
| `cbl-eats.svg` | `RDForkKnife` — Eats |
| `cbl-stays.svg` | `RDBed` — Stays |
| `cbl-todo.svg` | `RDPinMap` — To Do (current — route + dropped pins) |
| `cbl-todo-old.svg` | (archived — the previous To Do icon) |
| `cbl-directory.svg` | `RDDirectory` — Directory |
| `cbl-blog.svg` | `RDBlog` — Blog |

All icons share viewBox `0 0 288 227.01`. Render them in JSX from `lib/rider-dashboard.jsx` (the `RD*` icon components export through `window`), or copy the path data directly into a new component if a different stroke / fill / size is needed.
