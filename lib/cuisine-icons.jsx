// Cuisine + Meal icons — wired to the real SVGs in assets/food-icons/
// Extracted from Keith's EATS & DRINKS ICONS_FOOD.ai.
//
// RENDERING NOTE: each icon is built from interleaved BLACK and WHITE
// filled paths. On a BLACK background (the CBL app background) the
// white paths form the visible "line drawing" and the black paths
// disappear — exactly what the _contact-sheet.png reference shows.
// So the right move is: render the SVG as-is on a black surface.
// No recoloring needed.
//
// A handful of icons are exported differently:
//   * cake.svg       — simple white-fill icon (renders fine on black)
//   * breakfast.svg  — mostly white fills (renders fine on black)
//   * breakfast-sandwich.svg — has NO fill colors set (paths default
//     to black) → invisible on black bg. Don't use.

const ICON_BASE = 'assets/food-icons/';

function FoodIcon({ file, size = 72, alt = '' }) {
  return (
    <span
      role="img"
      aria-label={alt}
      style={{
        width: size, height: size,
        display: 'inline-block', flexShrink: 0,
        background: `url("${ICON_BASE}${file}") center/contain no-repeat`,
      }}
    />
  );
}

const CuisineIcons = {
  TACOS:      <FoodIcon file="taco.svg"        alt="Tacos" />,
  PIZZA:      <FoodIcon file="pizza-slice.svg" alt="Pizza" />,
  CHINESE:    <FoodIcon file="chinese.svg"     alt="Chinese" />,
  VEGETARIAN: <FoodIcon file="vegetarian.svg"  alt="Vegetarian" />,
  SUSHI:      <FoodIcon file="sushi-bars.svg"  alt="Sushi" />,
  THAI:       <FoodIcon file="thai.svg"        alt="Thai" />,
  AMERICAN:   <FoodIcon file="american.svg"    alt="American" />,
  SEAFOOD:    <FoodIcon file="seafood.svg"     alt="Seafood" />,
  BURGERS:    <FoodIcon file="burgers.svg"     alt="Burgers" />,
  ITALIAN:    <FoodIcon file="italian.svg"     alt="Italian" />,
  COFFEE:     <FoodIcon file="coffee-toast.svg" alt="Coffee" />,
  SANDWICHES: <FoodIcon file="sandwiches.svg"  alt="Sandwiches" />,
  KOREAN:     <FoodIcon file="korean.svg"      alt="Korean" />,
  JAPANESE:   <FoodIcon file="japanese.svg"    alt="Japanese" />,
  VIETNAMESE: <FoodIcon file="vietnamese.svg"  alt="Vietnamese" />,
  INDIAN:     <FoodIcon file="pretzel.svg"     alt="Pretzel" />, // cropped from indian.svg (left half)
  MEXICAN:    <FoodIcon file="mexican.svg"     alt="Mexican" />,
};

// Meal-time tabs (top of Eats & Drinks landing).
// NOTE: wine-bread.svg has small "FrenchFood" label text baked into
// the vector paths (slipped through the AI label-stripping pass).
// Using japanese.svg (ramen bowl) for Dinner until Keith can re-export
// a clean wine-bread or supply a dedicated dinner glyph.
const MealIcons = {
  BREAKFAST: <FoodIcon file="coffee-toast.svg"  size={56} alt="Breakfast" />,
  LUNCH:     <FoodIcon file="burger-double.svg" size={56} alt="Lunch" />,
  DINNER:    <FoodIcon file="japanese.svg"      size={56} alt="Dinner" />,
  DESSERT:   <FoodIcon file="cake-final.svg"  size={56} alt="Dessert" />,
};

Object.assign(window, { CuisineIcons, MealIcons, FoodIcon, ICON_BASE });
