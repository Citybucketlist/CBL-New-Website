# Food Icons — Extracted from EATS & DRINKS ICONS_FOOD.ai

24 individual SVG icons split out of Keith's Illustrator file, one file per
icon, **with the original baked-in label text stripped**. White strokes on
transparent background. Vector — sharp at any size.

## How to use in Figma Make / React

```jsx
// Drop an icon into an 80x80 Tailwind container
<div className="w-20 h-20 flex items-center justify-center">
  <svg viewBox="[from file]" className="w-full h-full" fill="none">
    {/* paste paths from tacos.svg */}
  </svg>
</div>
```

Or import as a file directly in Figma Make and let React handle it.

Each SVG has:
- `fill="none"` on the root
- Paths set with `fill:rgb(100%,100%,100%)` (white) — recolor via CSS `fill`
  or `currentColor`
- Snug `viewBox` around the icon content (labels trimmed out)
- `width="80" height="80"` default render size

## Sharpness

**These are pure vector files — they stay crisp at any size, from 16×16 favicons
to 512×512 hero graphics.** Any fuzziness you see in the `_contact-sheet.png`
preview is just the PNG rasterizing at fixed DPI; the underlying SVGs are
infinitely scalable.

## File list

### Meal categories (for the top sticky nav)
- `breakfast.svg` — egg/toast stack
- `burgers.svg` — single burger
- `burger-double.svg` — double-stack burger
- `pizza.svg` — whole pizza
- `pizza-slice.svg` — single pizza slice
- `coffee-toast.svg` — coffee cup + toast
- `breakfast-sandwich.svg` — stacked breakfast sandwich
- `wine-bread.svg` — wine bottle + baguette

### Cuisines (for the filter pills)
- `american.svg` — fries + hot dog
- `chinese.svg` — takeout box
- `french-food.svg` — takeout box with chopsticks
- `german-food.svg` — beer stein + pretzel
- `indian.svg` — Indian dish (small — may be low-detail)
- `italian.svg` — spaghetti bowl
- `japanese.svg` — ramen with chopsticks
- `korean.svg` — kimchi jar
- `mexican.svg` — taco (with chile)
- `thai.svg` — Thai noodle/curry bowl with chopsticks
- `vietnamese.svg` — pho bowl with herbs
- `sandwiches.svg` — sandwich
- `seafood.svg` — crab
- `sushi-bars.svg` — sushi platter on mat
- `taco.svg` — taco (standalone)
- `vegetarian.svg` — leaf in circle

## Notes

- Icons extracted at ~758×737 pt source size from the original .ai file.
- Labels stripped via gap-detection: within each grid cell, the bottom
  cluster of small (<120pt) paths separated by a >60pt vertical gap from
  the icon was identified as text and removed.
- If a filename doesn't match what the icon actually looks like, compare
  against `_contact-sheet.png` and rename.
- Raw (unstripped, labeled) copies are archived at
  `/sessions/dazzling-eloquent-cray/food-icons-split/` for reference.
