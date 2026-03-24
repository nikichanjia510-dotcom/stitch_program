```markdown
# Design System Document: Oriental Etherealism

## 1. Overview & Creative North Star: "The Living Scroll"
The North Star for this design system is **"The Living Scroll."** We are not building a static e-commerce interface; we are unfurling a digital experience that feels as fluid and intentional as a hand-painted ink landscape. 

To break the "template" look of modern apps, this system prioritizes **intentional asymmetry** and **tonal depth**. Layouts should mimic the "Liu Bai" (meaningful white space) found in traditional Chinese painting. By utilizing overlapping elements—such as an organic-shaped image bleeding over a parchment-textured container—we create a sense of immersion that feels curated, not generated.

---

## 2. Colors: A Palette of Earth and Mist
The color system moves away from digital vibrancy toward a natural, pigment-based philosophy.

### Core Palette
- **Primary (`#3e6842`) & Primary Container (`#8fbc8f`):** These represent the verdant hills of Qichun. Use the container for large soft surfaces and the deep primary for high-signal actions.
- **Surface (`#fff8f3`):** This is our "Antique White" parchment base. It is the literal paper upon which our experience is written.
- **Tertiary (`#874d5f`):** A soft "Dried Plum" tone used for cultural highlights, heritage markers, or luxury-tier pricing.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid hex-code borders to section content. Boundaries must be defined through color-blocking or texture shifts. 
*   *Example:* A product description in `surface-container-low` should sit directly against a `surface` background. The change in "paper weight" (tone) is the divider.

### The "Glass & Gradient" Rule
To bridge the gap between "Traditional" and "App," use **Glassmorphism**. Navigation bars and floating action buttons should utilize `surface` with 70% opacity and a `20px` backdrop-blur. 
*   **Signature Texture:** Main CTAs should not be flat. Apply a subtle linear gradient from `primary` to `primary-container` at a 45-degree angle to mimic the sheen of silk thread.

---

## 3. Typography: Editorial Serenity
We use a high-contrast pairing to balance heritage with modern legibility.

*   **Display & Headline (Noto Serif):** This font carries the "soul." Use `display-lg` (3.5rem) for hero cultural titles. The serif nature mimics brush-tip endings, providing a sense of authority and history.
*   **Body & Label (Manrope):** A modern sans-serif chosen for its clean, open apertures. It ensures that even at `body-sm` (0.75rem), descriptions of medicinal herbs or local crafts remain perfectly legible.
*   **Hierarchy Note:** Use `on-surface-variant` (`#424940`) for body text to maintain a soft, "faded ink" look. Reserve `on-surface` (`#221b0f`) strictly for headlines.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden. We define hierarchy through "Atmospheric Stacking."

### The Layering Principle
Think of the UI as layers of rice paper. 
1.  **Level 0 (Base):** `surface` (`#fff8f3`)
2.  **Level 1 (Sections):** `surface-container-low` (`#fff2e1`)
3.  **Level 2 (Cards):** `surface-container-lowest` (`#ffffff`) - This creates a "bright" lift that feels like light hitting a specific part of the scroll.

### Ambient Shadows & Ghost Borders
- **Shadows:** If a card must float (e.g., a map marker), use a shadow tinted with `surface-tint` (`#3e6842`) at 5% opacity with a `32px` blur.
- **The Ghost Border:** For accessibility on inputs, use `outline-variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components: Organic Craftsmanship

### Buttons
- **Primary:** Gradient fill (Primary to Primary-Container), `rounded-full` shape. No border.
- **Secondary:** `surface-container-highest` background with `primary` text.
- **Tertiary:** No background. Text uses `primary` with a custom brushstroke underline (SVG asset).

### Cards
- **The Organic Rule:** Cards must use `rounded-xl` (1.5rem) or custom "organic" corner radii (e.g., top-left: 2rem, bottom-right: 2rem) to avoid the mechanical feel of standard rectangles.
- **Spacing:** Use `spacing-6` (2rem) for internal padding to let imagery breathe.

### Navigation & Markers
- **Frosted Glass Nav:** Use `surface` at 80% opacity with `backdrop-filter: blur(12px)`.
- **Illustrative Map Markers:** Markers are not pins; they are hand-drawn ink icons of landmarks (pavilions, herbs, mountains) that scale slightly on hover.

### Inputs & Selection
- **Text Fields:** `surface-container-low` backgrounds with a bottom-only `outline-variant` (20% opacity) to mimic the lines in a calligraphy practice book.
- **Checkboxes:** Stylized as a "stamp" (Xiao Zhuan style). When checked, they reveal a `primary` ink-bleed effect.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place a high-quality hand-drawn illustration partially outside its container to create depth.
*   **Respect the Margin:** Use `spacing-8` (2.75rem) for exterior screen padding. Cultural luxury requires "wasted" space.
*   **Animate with Intent:** Transitions should mimic the "fade-in" of ink on wet paper or the slow unfurling of a scroll.

### Don’t:
*   **No "Pure" Grey:** Never use `#808080`. All neutrals must be tinted with sage (`#8FBC8F`) or parchment (`#FAEBD7`) to maintain the "Oriental" warmth.
*   **No Sharp Corners:** Avoid `rounded-none`. In nature and traditional Qichun aesthetics, there are no perfectly sharp 90-degree angles.
*   **No Dense Grids:** Forbid the use of divider lines between list items. Use `spacing-4` (1.4rem) gaps or subtle background shifts instead.

---

**Director’s Note:** Junior designers should remember that the user is an explorer, not just a shopper. Every interaction should feel as calm and deliberate as a tea ceremony. If a screen feels "busy," add more `surface` space and remove a border.```