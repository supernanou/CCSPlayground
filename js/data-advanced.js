const ADVANCED_LESSONS = [
  {
    id: "adv-001",
    module: "1. Custom Properties & Theming",
    title: "What custom properties are and why they matter",
    summary: "Custom properties (often called CSS variables) are author-defined values declared with a double-dash prefix that get resolved at computed-value time, not parse time — which means they can change live in response to media queries, class toggles, or JavaScript without a rebuild step. That single trait is what separates them from preprocessor variables and makes them the foundation of dynamic, themeable CSS.",
    code: `:root {
  --brand-color: #f3d98b;
  --spacing-unit: 8px;
}

.card {
  background: var(--brand-color);
  padding: calc(var(--spacing-unit) * 2);
}`
  },
  {
    id: "adv-002",
    module: "1. Custom Properties & Theming",
    title: "Declaring and using var()",
    summary: "Any property accepts var() as a value, and you can even use it inside shorthand or other functions like calc() and color-mix(). Property names must start with two dashes, are case-sensitive, and can hold any valid CSS token stream — including invalid-looking fragments that only become valid once substituted.",
    code: `.button {
  --btn-padding: 0.75em 1.25em;
  padding: var(--btn-padding);
  border-radius: var(--radius, 6px);
}`
  },
  {
    id: "adv-003",
    module: "1. Custom Properties & Theming",
    title: "Fallback values in var()",
    summary: "The second argument to var() is a fallback used when the custom property is unset or invalid, and it can itself contain commas as long as you nest them correctly — var(--gap, 1px, solid) reads the fallback as everything after the first comma. This makes components resilient to being dropped into a page that never defines the theme tokens they expect.",
    code: `.badge {
  color: var(--badge-color, #333);
  border: var(--badge-border, 1px solid #ccc);
}

/* Nested fallback: comma inside the fallback itself */
.grid {
  gap: var(--grid-gap, var(--spacing-unit, 16px));
}`
  },
  {
    id: "adv-004",
    module: "1. Custom Properties & Theming",
    title: "Scoping custom properties to components",
    summary: "Because custom properties inherit and cascade like any other property, declaring them on a component root scopes them to that subtree — a --card-bg set on .card is invisible outside it unless a descendant explicitly reads it. This lets you build components that expose a small, intentional set of themeable \"slots\" without leaking implementation details globally.",
    code: `.card {
  --card-bg: white;
  --card-fg: #222;
  background: var(--card-bg);
  color: var(--card-fg);
}

.card--inverted {
  --card-bg: #222;
  --card-fg: white;
}`
  },
  {
    id: "adv-005",
    module: "1. Custom Properties & Theming",
    title: "Custom properties and the cascade",
    summary: "Custom properties follow normal cascade and specificity rules for where they're declared, but the value substituted by var() is resolved fresh at the point of use — so a property can inherit down, get overridden by a more specific selector, and still be read correctly by every descendant that uses var(). Understanding this two-stage process (cascade of the declaration, then substitution at use) avoids a lot of theming confusion.",
    code: `:root { --link-color: blue; }

nav { --link-color: navy; }

a {
  color: var(--link-color);
}
/* Links inside nav get navy; everywhere else gets blue */`
  },
  {
    id: "adv-006",
    module: "1. Custom Properties & Theming",
    title: "Building a light/dark theme with custom properties",
    summary: "The classic pattern: define semantic tokens like --surface and --text at the root, redefine them under a [data-theme=\"dark\"] attribute selector (or prefers-color-scheme), and let every component reference the semantic token instead of a raw color. Components never need to know which theme is active — they just read the variable.",
    code: `:root {
  --surface: #ffffff;
  --text: #1a1a1a;
}

[data-theme="dark"] {
  --surface: #1a1a1a;
  --text: #f5f5f5;
}

body {
  background: var(--surface);
  color: var(--text);
}`
  },
  {
    id: "adv-007",
    module: "1. Custom Properties & Theming",
    title: "Custom properties in media queries",
    summary: "Custom properties cannot be used inside a media query's condition itself (@media (min-width: var(--bp)) is invalid), because media features are evaluated before the cascade resolves variables. What you can do is redefine a custom property's value inside a media query block, letting downstream var() calls adapt responsively.",
    code: `:root {
  --columns: 1;
}

@media (min-width: 60em) {
  :root {
    --columns: 3;
  }
}

.grid {
  grid-template-columns: repeat(var(--columns), 1fr);
}`
  },
  {
    id: "adv-008",
    module: "1. Custom Properties & Theming",
    title: "Custom properties with calc()",
    summary: "calc() and var() compose beautifully: you can build a fluid spacing scale from a single --base-unit, derive related tokens from one another, and let unit-less multipliers do the heavy lifting. Just remember calc() still enforces normal unit math — you can't multiply two lengths together, only a length by a unitless number.",
    code: `:root {
  --base: 8px;
  --space-sm: calc(var(--base) * 1);
  --space-md: calc(var(--base) * 2);
  --space-lg: calc(var(--base) * 4);
}

.stack > * + * {
  margin-top: var(--space-md);
}`
  },
  {
    id: "adv-009",
    module: "1. Custom Properties & Theming",
    title: "Custom properties vs Sass variables",
    summary: "Sass variables are compile-time text substitution — they vanish into static values in the output CSS and know nothing about the DOM. Custom properties are live, cascade-aware, and inspectable/editable at runtime via getComputedStyle and setProperty, which is exactly what you need for theming, user preferences, or JS-driven interaction — the two aren't competitors so much as tools for different jobs, and many codebases use Sass for build-time logic alongside CSS variables for runtime values.",
    code: null
  },
  {
    id: "adv-010",
    module: "1. Custom Properties & Theming",
    title: "Dynamic theming with JavaScript and CSS variables",
    summary: "Because custom properties are part of the live cascade, element.style.setProperty() lets JavaScript update a theme instantly without touching class lists or re-rendering — great for things like a color picker or a draggable brightness slider. Reading values back with getComputedStyle().getPropertyValue() closes the loop for syncing UI state with CSS.",
    code: `// JavaScript
document.documentElement.style.setProperty(
  "--brand-color",
  "#e07a5f"
);

// CSS
.header {
  background: var(--brand-color);
}`
  },
  {
    id: "adv-011",
    module: "2. Modern Color",
    title: "color-mix() for blending colors",
    summary: "color-mix() blends two colors in a specified color space and mixing percentage, so instead of hand-picking a \"lighter brand blue\" you can write color-mix(in oklch, var(--brand) 80%, white) and let the browser compute it — including recomputing automatically if the brand color changes. It's broadly supported in current browsers but still worth a quick @supports check if you need to support older ones.",
    code: `.button:hover {
  background: color-mix(in oklch, var(--brand) 85%, white);
}

.button:active {
  background: color-mix(in oklch, var(--brand) 70%, black);
}`
  },
  {
    id: "adv-012",
    module: "2. Modern Color",
    title: "Wide-gamut color: oklch() and oklab()",
    summary: "oklch() expresses color as perceptually uniform lightness, chroma, and hue, which means you can adjust just the lightness of a color and get a result that actually looks like a lighter version of it — unlike HSL, where equal lightness steps don't look equally spaced to the eye. It also naturally accesses the wider P3 gamut on capable displays, giving richer colors than sRGB-bound hex or rgb().",
    code: `:root {
  --brand: oklch(65% 0.15 250);
}

.button:hover {
  background: oklch(from var(--brand) calc(l + 0.1) c h);
}`
  },
  {
    id: "adv-013",
    module: "2. Modern Color",
    title: "Relative color syntax",
    summary: "Relative color syntax lets you derive a new color from an existing one by naming its channels — oklch(from var(--brand) l c h / 50%) — so you can tweak alpha, lightness, or a single channel without duplicating the whole value or reaching for a preprocessor. It's supported in current versions of major browsers but is one of the newer color features, so verify support against your audience's browser matrix before relying on it for anything critical.",
    code: `.overlay {
  --brand: #3a6ea5;
  background: rgb(from var(--brand) r g b / 40%);
}

.tinted-icon {
  color: hsl(from var(--brand) h s calc(l * 1.3));
}`
  },
  {
    id: "adv-014",
    module: "2. Modern Color",
    title: "accent-color for form controls",
    summary: "accent-color restyles the native checkmark/thumb color of checkboxes, radios, range sliders, and progress bars with one line, no custom-control hack required — the browser handles focus states, high-contrast mode, and platform conventions for you. It's widely supported and a nearly-free win for matching form controls to your brand palette.",
    code: `input[type="checkbox"],
input[type="radio"],
input[type="range"] {
  accent-color: var(--brand-color);
}`
  },
  {
    id: "adv-015",
    module: "2. Modern Color",
    title: "color-scheme for light/dark UI",
    summary: "Setting color-scheme: light dark tells the browser your page supports both modes, so it can automatically flip native UI — scrollbars, form controls, the default page background — to match the user's OS preference, even before your own custom-property theme kicks in. Pair it with prefers-color-scheme and meta name=\"color-scheme\" for a consistent experience across the whole chrome, not just your content.",
    code: `:root {
  color-scheme: light dark;
}

/* Opt a component out if it must stay light */
.brand-banner {
  color-scheme: light;
}`
  },
  {
    id: "adv-016",
    module: "2. Modern Color",
    title: "Gradients in depth: conic-gradient",
    summary: "conic-gradient() sweeps colors around a center point like a clock hand rather than along a line, which makes it the natural tool for pie charts, color wheels, and loading spinners — something linear and radial gradients simply can't do on their own. You control the starting angle and center position, and color stops are expressed as angles rather than lengths or percentages.",
    code: `.pie-chart {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    #f3d98b 0deg 90deg,
    #e07a5f 90deg 220deg,
    #3a6ea5 220deg 360deg
  );
}`
  },
  {
    id: "adv-017",
    module: "2. Modern Color",
    title: "Gradients in depth: repeating-linear-gradient",
    summary: "repeating-linear-gradient() tiles a gradient pattern infinitely once its color stops are defined, which is how you get stripes, hazard patterns, and subtle texture without an image file — the trick is keeping the stop distances precise so the repeat seam is invisible. It's pure CSS, scales losslessly, and themes instantly through custom properties.",
    code: `.striped {
  background: repeating-linear-gradient(
    45deg,
    var(--stripe-a) 0px,
    var(--stripe-a) 10px,
    var(--stripe-b) 10px,
    var(--stripe-b) 20px
  );
}`
  },
  {
    id: "adv-018",
    module: "2. Modern Color",
    title: "Building color palettes with custom properties",
    summary: "A scalable palette defines a small set of base hues as custom properties, then generates tints and shades from them with color-mix() or relative color syntax rather than hardcoding a dozen hex codes per color — change the base and the whole ramp updates. Naming the scale numerically (like --blue-100 through --blue-900) keeps it familiar to anyone who's used a design-token system before.",
    code: `:root {
  --blue-500: oklch(60% 0.15 250);
  --blue-300: color-mix(in oklch, var(--blue-500) 50%, white);
  --blue-700: color-mix(in oklch, var(--blue-500) 70%, black);
}`
  },
  {
    id: "adv-019",
    module: "2. Modern Color",
    title: "Accessible color contrast in practice",
    summary: "WCAG 2 contrast math is based on relative luminance, and the practical rule of thumb is 4.5:1 for normal text and 3:1 for large text or UI components — but perceptually uniform spaces like oklch make it much easier to hit a target contrast predictably, since lightness maps closer to perceived brightness than HSL's lightness does. Always check contrast on the actual rendered pair, including hover and disabled states, not just the base palette.",
    code: `:root {
  --text-on-brand: oklch(20% 0 0);
  --brand: oklch(80% 0.1 90);
}

.badge {
  background: var(--brand);
  color: var(--text-on-brand);
}`
  },
  {
    id: "adv-020",
    module: "2. Modern Color",
    title: "prefers-color-scheme media query",
    summary: "prefers-color-scheme reads the user's OS-level light/dark preference so your CSS can react without any JavaScript, and combining it with a manual override (a class or data attribute the user can toggle) gives you the best of both automatic and user-controlled theming. It has excellent support across modern browsers and is the backbone of nearly every dark-mode implementation today.",
    code: `@media (prefers-color-scheme: dark) {
  :root {
    --surface: #1a1a1a;
    --text: #f5f5f5;
  }
}`
  },
  {
    id: "adv-021",
    module: "3. Modern Selectors",
    title: ":is() for grouping selectors",
    summary: ":is() lets you group a list of selectors into one, so header nav a, header aside a, footer nav a, footer aside a collapses into :is(header, footer) :is(nav, aside) a — far less repetition and easier to maintain. Its specificity is that of its most specific argument, which is worth remembering since it can make a rule stronger than it looks at a glance.",
    code: `:is(h1, h2, h3) {
  font-family: var(--heading-font);
  line-height: 1.2;
}

:is(header, footer) :is(nav, aside) a {
  text-decoration: none;
}`
  },
  {
    id: "adv-022",
    module: "3. Modern Selectors",
    title: ":where() and zero specificity",
    summary: ":where() behaves exactly like :is() for matching purposes but always contributes zero specificity, which makes it the ideal tool for low-priority defaults — like a CSS reset or a component library's base styles — that consumers should be able to override with a single plain class. Reach for :is() when you want the grouping's specificity to count, and :where() when you explicitly don't.",
    code: `:where(ul, ol) {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* A single class easily beats zero specificity */
.bulleted {
  list-style: disc;
}`
  },
  {
    id: "adv-023",
    module: "3. Modern Selectors",
    title: ":has() — the parent selector",
    summary: ":has() matches an element based on what's inside or after it, finally giving CSS a way to style a parent based on its children — something authors have wanted for decades. It has broad support in current browsers (it shipped a bit later in Firefox than Chromium and Safari), so it's safe to use as a progressive enhancement but still worth checking against your minimum supported versions.",
    code: `/* Style a form field wrapper only when it contains an invalid input */
.field:has(input:invalid) {
  border-color: red;
}

/* Style a card differently if it contains an image */
.card:has(img) {
  grid-template-rows: auto 1fr;
}`
  },
  {
    id: "adv-024",
    module: "3. Modern Selectors",
    title: "Practical :has() patterns",
    summary: ":has() shines for things that used to require JavaScript: highlighting a label when its checkbox is checked, dimming siblings when one is hovered, counting children to switch layout, or detecting empty states. Because the argument to :has() can itself be a complex selector, you can combine it with :not(), attribute selectors, and combinators for very specific targeting.",
    code: `/* Style siblings while one is hovered */
.list:has(li:hover) li:not(:hover) {
  opacity: 0.5;
}

/* Detect an empty state without a JS-added class */
.results:not(:has(li)) {
  display: block;
}
.results:not(:has(li))::after {
  content: "No results found.";
}`
  },
  {
    id: "adv-025",
    module: "3. Modern Selectors",
    title: ":focus-within",
    summary: ":focus-within matches an element when it or any descendant has focus, which is exactly what you need to highlight a whole form field wrapper (label, input, and hint text together) as soon as the user tabs into the input inside it. It has near-universal modern support and requires no JavaScript to wire up.",
    code: `.field {
  border: 1px solid #ccc;
  transition: border-color 0.15s ease;
}

.field:focus-within {
  border-color: var(--brand-color);
}`
  },
  {
    id: "adv-026",
    module: "3. Modern Selectors",
    title: ":focus-visible vs :focus",
    summary: ":focus matches any focused element, including a button clicked with a mouse, while :focus-visible matches only when the browser's own heuristic decides a focus indicator should be shown — typically keyboard navigation. Using :focus-visible for your visible focus ring removes the 'ugly outline on click' complaint without sacrificing keyboard accessibility, which :focus alone can't do safely.",
    code: `button:focus {
  /* Reset the default outline everywhere */
  outline: none;
}

button:focus-visible {
  outline: 2px solid var(--brand-color);
  outline-offset: 2px;
}`
  },
  {
    id: "adv-027",
    module: "3. Modern Selectors",
    title: "Attribute selectors in depth",
    summary: "Beyond the basic [attr] and [attr=\"value\"], CSS offers substring matchers: [attr^=\"val\"] for starts-with, [attr$=\"val\"] for ends-with, [attr*=\"val\"] for contains, and [attr~=\"val\"] for a whitespace-separated word match — all of which can take an i flag for case-insensitive matching. They're especially handy for styling by href pattern, data attributes, or file-type icons without touching markup.",
    code: `a[href^="https://"] {
  color: teal;
}

a[href$=".pdf"]::after {
  content: " (PDF)";
}

[data-status~="urgent"] {
  color: crimson;
}`
  },
  {
    id: "adv-028",
    module: "3. Modern Selectors",
    title: ":nth-child() with the \"of S\" syntax",
    summary: "The of S syntax lets :nth-child() count only among elements matching a selector, so :nth-child(2 of .highlighted) means \"the second element that is both a child and matches .highlighted,\" rather than the plain second child. It's a precise way to style, say, every other visible item when some siblings are hidden or filtered — support is solid in current Chromium and Safari-based browsers and landed in Firefox more recently, so check your target matrix.",
    code: `/* Zebra-stripe only the .visible items, ignoring hidden ones */
.item:nth-child(odd of .visible) {
  background: var(--stripe-bg);
}`
  },
  {
    id: "adv-029",
    module: "3. Modern Selectors",
    title: "Combining modern selectors",
    summary: ":is(), :where(), :has(), and :not() nest inside one another freely, letting you express fairly sophisticated conditions in a single rule — like matching a card that has an image but not a badge, inside a section that isn't the hero. The tradeoff is readability: past two or three levels of nesting it's often kinder to future maintainers to split the selector into named custom properties or separate rules with a comment explaining intent.",
    code: `.card:has(img):not(:has(.badge)) {
  padding-top: 0;
}

:is(.sidebar, .footer):has(:where(a, button):focus-visible) {
  outline: 1px dashed var(--brand-color);
}`
  },
  {
    id: "adv-030",
    module: "3. Modern Selectors",
    title: "Browser support strategy for new selectors",
    summary: "Treat newer selectors as progressive enhancement: use @supports selector(:has(a)) to feature-detect before relying on :has() for anything load-bearing, keep a JavaScript fallback for critical interactions, and lean on :where() for base styles so overrides stay predictable regardless of support. Checking a current \"can I use\" style reference before shipping is cheaper than debugging a support gap in production.",
    code: `@supports selector(:has(*)) {
  .field:has(input:invalid) {
    border-color: red;
  }
}`
  },
  {
    id: "adv-031",
    module: "4. Layout: Container Queries",
    title: "Why container queries exist",
    summary: "Media queries respond to the viewport, but a component dropped into a narrow sidebar or a wide main column needs to respond to its own available space, not the whole page's — that's the gap container queries fill. They let you write genuinely reusable, context-aware components instead of duplicating layout logic per page template.",
    code: null
  },
  {
    id: "adv-032",
    module: "4. Layout: Container Queries",
    title: "container-type and container-name",
    summary: "container-type: inline-size turns an element into a query container along its inline axis (the axis children can query against), and container-name gives it a label so descendants can target that specific ancestor with @container name (...) rather than the nearest one. Without a name, @container queries the nearest ancestor that has a container-type set.",
    code: `.card-wrapper {
  container-type: inline-size;
  container-name: card;
}`
  },
  {
    id: "adv-033",
    module: "4. Layout: Container Queries",
    title: "Writing your first @container query",
    summary: "Once an ancestor is established as a container, @container (min-width: 400px) { ... } applies styles to its descendants based on that container's size, not the viewport's — the syntax deliberately mirrors @media so the mental model transfers directly. Support is broadly available in current browsers, making this safe to use for most modern projects.",
    code: `.card-wrapper {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: 0.5rem;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: auto 1fr;
  }
}`
  },
  {
    id: "adv-034",
    module: "4. Layout: Container Queries",
    title: "Container query units: cqw, cqh, cqi",
    summary: "cqw, cqh, cqi, and cqb are the container-relative counterparts of vw/vh — 1cqw is 1% of the query container's width — so you can size text or spacing proportionally to the component's own box instead of the viewport. clamp() combined with cq units gives you fluid typography that scales with the component's container, not the whole page.",
    code: `.card-wrapper {
  container-type: inline-size;
}

.card h2 {
  font-size: clamp(1rem, 5cqi, 2rem);
}`
  },
  {
    id: "adv-035",
    module: "4. Layout: Container Queries",
    title: "Component-driven responsive design",
    summary: "Container queries shift the unit of responsiveness from the page to the component: a product card can lay out in one column in a narrow sidebar and two columns in a wide grid cell, using the exact same markup and stylesheet. This is what finally makes truly portable, drop-anywhere components realistic in CSS.",
    code: `.product-card {
  container-type: inline-size;
}

@container (min-width: 320px) {
  .product-card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}`
  },
  {
    id: "adv-036",
    module: "4. Layout: Container Queries",
    title: "Container queries vs media queries",
    summary: "Media queries still matter for page-level concerns — overall layout shell, whether a sidebar exists at all, print vs screen — while container queries handle how a component behaves within whatever space it's given. In practice the two work together: a media query might decide the page uses a two-column shell, and a container query decides how each card inside those columns lays out.",
    code: null
  },
  {
    id: "adv-037",
    module: "4. Layout: Container Queries",
    title: "Nesting containers",
    summary: "An element can be a container for its own descendants while also living inside another container, and a descendant with an @container query targets the nearest ancestor container by default (or a specific named one if you use @container name (...)). This lets you build layout systems with independently responsive layers, like a page grid containing cards that are themselves containers for their internal content.",
    code: `.page-grid { container-type: inline-size; container-name: page; }
.card { container-type: inline-size; container-name: card; }

@container page (min-width: 800px) {
  .page-grid { grid-template-columns: repeat(3, 1fr); }
}

@container card (min-width: 300px) {
  .card { grid-template-columns: auto 1fr; }
}`
  },
  {
    id: "adv-038",
    module: "4. Layout: Container Queries",
    title: "Style queries (container style queries)",
    summary: "Style queries extend @container to match on a custom property's value rather than size — @container style(--variant: compact) { ... } — letting a component's internal layout react to a theming token set by a parent, independent of physical dimensions. This is a newer, less broadly supported piece of the container query spec, currently strongest in Chromium, so treat it as an enhancement rather than something to depend on yet.",
    code: `.card-wrapper {
  --variant: compact;
}

@container style(--variant: compact) {
  .card {
    padding: 0.5rem;
  }
}`
  },
  {
    id: "adv-039",
    module: "4. Layout: Container Queries",
    title: "Migrating a media-query layout to container queries",
    summary: "The migration pattern is: identify the wrapper you'd otherwise size against the viewport, give it container-type: inline-size, then swap each @media (min-width: ...) for @container (min-width: ...) using the same breakpoint values as a starting point. Expect to re-tune the breakpoints, since a component's natural size thresholds inside a container rarely match the page-level breakpoints you inherited.",
    code: `/* Before */
@media (min-width: 600px) {
  .sidebar-widget { display: flex; }
}

/* After */
.widget-slot { container-type: inline-size; }

@container (min-width: 300px) {
  .sidebar-widget { display: flex; }
}`
  },
  {
    id: "adv-040",
    module: "4. Layout: Container Queries",
    title: "Browser support and fallbacks",
    summary: "Size-based container queries have strong support across current Chromium, Firefox, and Safari, making them safe for most production use today, while style queries are still Chromium-leaning and less mature. Use @supports (container-type: inline-size) to detect support and provide a sane single-column fallback for the rare older browser in your audience.",
    code: `.card {
  display: block;
}

@supports (container-type: inline-size) {
  .card-wrapper { container-type: inline-size; }

  @container (min-width: 400px) {
    .card { display: grid; grid-template-columns: auto 1fr; }
  }
}`
  },
  {
    id: "adv-041",
    module: "5. Animation in Depth",
    title: "@keyframes syntax review",
    summary: "@keyframes defines named waypoints (from/to, or percentages) that an animation-name references, and any property can be animated as long as its values are interpolable — so mixing transform, opacity, and even custom properties (if registered) in one keyframe block is fine. Percentages don't need to be evenly spaced or start at 0%/end at 100%, which is handy for asymmetric easing effects.",
    code: `@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.badge {
  animation: pulse 1.5s ease-in-out infinite;
}`
  },
  {
    id: "adv-042",
    module: "5. Animation in Depth",
    title: "animation shorthand properties",
    summary: "The animation shorthand packs name, duration, timing-function, delay, iteration-count, direction, fill-mode, and play-state into one declaration, and order mostly doesn't matter except that the first time value found is duration and the second is delay. For anything beyond a trivial one-off, writing the longhand properties separately is usually more readable and easier to override selectively later.",
    code: `.toast {
  animation-name: slide-in;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

/* Equivalent shorthand */
.toast {
  animation: slide-in 0.3s ease-out forwards;
}`
  },
  {
    id: "adv-043",
    module: "5. Animation in Depth",
    title: "animation-timing-function in depth",
    summary: "Beyond the keyword easings (ease, linear, ease-in-out), cubic-bezier() lets you author a fully custom acceleration curve, and the newer linear() function accepts a series of points to approximate spring-like or bouncy motion without JavaScript. You can also set a different timing function per keyframe step, which changes the feel of each segment of a multi-stage animation independently.",
    code: `.pop-in {
  animation: pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes pop-in {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`
  },
  {
    id: "adv-044",
    module: "5. Animation in Depth",
    title: "animation-fill-mode",
    summary: "animation-fill-mode controls what an element looks like outside the time it's actively animating: forwards keeps the final keyframe's styles applied after it finishes, backwards applies the first keyframe's styles during any delay, and both does both. Without forwards, an element snaps back to its pre-animation styles the instant the animation ends, which is a very common source of \"my animation flickers at the end\" bugs.",
    code: `.reveal {
  opacity: 0;
  animation: fade-in 0.5s ease-out 0.2s forwards;
}

@keyframes fade-in {
  to { opacity: 1; }
}`
  },
  {
    id: "adv-045",
    module: "5. Animation in Depth",
    title: "Multiple animations on one element",
    summary: "animation accepts a comma-separated list, letting one element run several independent animations at once — each with its own timing, duration, and even different properties — as long as they don't fight over the same property. When two animations in the list do target the same property, the last one listed wins for that property.",
    code: `.icon {
  animation:
    spin 2s linear infinite,
    pulse 1s ease-in-out infinite alternate;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  from { opacity: 0.6; }
  to { opacity: 1; }
}`
  },
  {
    id: "adv-046",
    module: "5. Animation in Depth",
    title: "Animating with custom properties",
    summary: "Plain custom properties are treated as untyped strings by default, so browsers can't smoothly interpolate them in an animation without help — that's what @property is for, letting you register a custom property with a syntax type (like <length> or <color>) so it animates like a native property. This unlocks things like animating a gradient angle or a color stop that a plain var() animation would otherwise just snap between.",
    code: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.gradient-box {
  background: conic-gradient(from var(--angle), red, orange, red);
  animation: spin-gradient 3s linear infinite;
}

@keyframes spin-gradient {
  to { --angle: 360deg; }
}`
  },
  {
    id: "adv-047",
    module: "5. Animation in Depth",
    title: "Scroll-driven animations: animation-timeline",
    summary: "Setting animation-timeline: scroll() ties an animation's progress to a scrollable element's scroll offset instead of wall-clock time, so a progress bar or parallax effect advances as the user scrolls, with no scroll event listener or JavaScript involved. Support is currently strongest in Chromium-based browsers, with other engines catching up, so pair it with a static fallback state for now.",
    code: `.progress-bar {
  transform-origin: left;
  animation: grow-progress linear;
  animation-timeline: scroll(root);
}

@keyframes grow-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}`
  },
  {
    id: "adv-048",
    module: "5. Animation in Depth",
    title: "view-timeline for scroll-linked effects",
    summary: "view-timeline drives an animation based on a specific element's visibility within the scrollport (a scroll-driven \"view timeline\") rather than the whole scroller's offset — perfect for elements that should fade or slide in as they enter the viewport. Like scroll(), it's a newer feature that's most reliably supported in Chromium today, so use @supports to gate it and provide sensible default visibility as a fallback.",
    code: `.reveal-on-scroll {
  view-timeline-name: --card-enter;
  animation: fade-up linear;
  animation-timeline: --card-enter;
  animation-range: entry 0% cover 40%;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`
  },
  {
    id: "adv-049",
    module: "5. Animation in Depth",
    title: "Respecting prefers-reduced-motion",
    summary: "Some users experience motion sickness or distraction from animation, and the prefers-reduced-motion media query lets their OS-level accessibility setting reach your CSS so you can shorten, simplify, or fully disable non-essential animations. Wrapping decorative animation in @media (prefers-reduced-motion: no-preference) is friendlier than trying to detect and strip every animation individually with a reduce query.",
    code: `.pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .pulse {
    animation: none;
  }
}`
  },
  {
    id: "adv-050",
    module: "5. Animation in Depth",
    title: "Performance: which properties are cheap to animate",
    summary: "Animating transform and opacity is cheap because the browser can handle them on the compositor thread without recalculating layout or repainting the rest of the page, while animating properties like width, top, or box-shadow forces layout or paint work on every frame and is far more likely to drop frames. When you need to \"animate size,\" prefer transform: scale() over animating width/height, and use will-change sparingly to hint the browser ahead of an expensive animation.",
    code: `/* Cheap: compositor-only */
.card {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.card:hover {
  transform: translateY(-4px) scale(1.02);
}

/* Avoid animating layout-triggering properties like width/top */`
  },
  {
    id: "adv-051",
    module: "6. Modern Layout Techniques",
    title: "Intrinsic sizing: min-content, max-content, fit-content",
    summary: "min-content sizes a box to its smallest possible width without overflowing (typically the widest unbreakable word), max-content sizes it to fit its content on one line with no wrapping, and fit-content() clamps between those based on available space — three keywords that let you size boxes based on their actual content rather than a guessed pixel value. They're especially useful in grid track definitions and for sizing buttons or badges to their label exactly.",
    code: `.badge {
  width: fit-content;
  padding-inline: 0.75em;
}

.grid {
  display: grid;
  grid-template-columns: max-content 1fr min-content;
}`
  },
  {
    id: "adv-052",
    module: "6. Modern Layout Techniques",
    title: "The gap property across flex and grid",
    summary: "gap (with its row-gap/column-gap longhands) works in both flexbox and grid now, giving consistent spacing between items without the classic margin-based hacks that required negative margins or :last-child overrides. Unlike margin, gap never adds space around the outer edge of the container, which makes it much easier to reason about spacing in a component.",
    code: `.flex-row {
  display: flex;
  gap: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 1rem;
}`
  },
  {
    id: "adv-053",
    module: "6. Modern Layout Techniques",
    title: "aspect-ratio",
    summary: "aspect-ratio: 16 / 9 tells a box to maintain that width-to-height relationship even before content or images load, replacing the old \"padding-top percentage hack\" and eliminating layout shift for responsive media. It's overridden by explicit height if both are set, and it plays nicely with object-fit for images and video that need to be cropped to the ratio.",
    code: `.video-embed {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.avatar {
  aspect-ratio: 1;
  object-fit: cover;
}`
  },
  {
    id: "adv-054",
    module: "6. Modern Layout Techniques",
    title: "CSS Grid subgrid",
    summary: "subgrid lets a nested grid item inherit its parent's track definitions instead of creating its own independent grid, which is exactly what you need when cards in a row should align their internal labels and values to a shared set of columns or rows even though each card is its own grid container. Support has become broadly available across current major browsers, which was the last major gap in CSS Grid's feature set.",
    code: `.card-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
}`
  },
  {
    id: "adv-055",
    module: "6. Modern Layout Techniques",
    title: "Masonry-style layouts",
    summary: "True masonry layout — items packing into the shortest column like Pinterest — is being standardized as a value for grid-template-rows: masonry, currently implemented behind experimentation in Firefox and still under discussion elsewhere, so it isn't safe to rely on in production yet. Until it lands broadly, most teams fake the effect with multi-column layout (column-count) for simple cases or JavaScript libraries for full control over item order.",
    code: `/* Multi-column fallback approximation, not true masonry */
.gallery {
  column-count: 3;
  column-gap: 1rem;
}

.gallery > * {
  break-inside: avoid;
  margin-bottom: 1rem;
}`
  },
  {
    id: "adv-056",
    module: "6. Modern Layout Techniques",
    title: "Logical properties: inline vs block",
    summary: "Logical properties like margin-inline, padding-block, and inset-inline-start express direction relative to the text's writing mode rather than physical screen sides, so the same CSS automatically adapts when a page switches to a right-to-left or vertical writing mode. \"Inline\" is the axis text flows along (horizontal in English), and \"block\" is the axis blocks stack along (vertical in English) — reversed in vertical writing modes.",
    code: `.card {
  margin-block: 1rem;
  padding-inline: 1.5rem;
  border-inline-start: 3px solid var(--brand-color);
}`
  },
  {
    id: "adv-057",
    module: "6. Modern Layout Techniques",
    title: "Writing direction-aware layouts",
    summary: "Once a layout is built entirely from logical properties (inset-inline, margin-block, text-align: start/end instead of left/right), switching dir=\"rtl\" or writing-mode: vertical-rl on the document flips the whole layout correctly with zero additional CSS. This matters not just for internationalization but for any component library meant to be genuinely direction-agnostic.",
    code: `.sidebar {
  border-inline-end: 1px solid #ddd;
  padding-inline-start: 1rem;
  text-align: start;
}

html[dir="rtl"] .sidebar {
  /* No extra rules needed — logical properties adapt automatically */
}`
  },
  {
    id: "adv-058",
    module: "6. Modern Layout Techniques",
    title: "clamp() for fluid sizing",
    summary: "clamp(min, preferred, max) picks the preferred value but never lets it go below min or above max, which is the cleanest way to write fluid type or spacing that scales with the viewport (typically via a vw unit in the preferred slot) while staying within sane bounds on very small or very large screens. It collapses what used to require several media query breakpoints into a single declaration.",
    code: `h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);
}

.container {
  width: clamp(300px, 90%, 1200px);
}`
  },
  {
    id: "adv-059",
    module: "6. Modern Layout Techniques",
    title: "min() and max() functions",
    summary: "min() and max() pick the smallest or largest of a comma-separated list of values at compute time, which is handy for things like width: min(90%, 60ch) — never wider than 60 characters, but always shrinking to fit on narrow screens. They can mix units freely (percentages, rem, vw) in the same expression, something plain CSS custom properties can't do without calc().",
    code: `.prose {
  width: min(90%, 65ch);
  margin-inline: auto;
}

.sidebar {
  width: max(200px, 20vw);
}`
  },
  {
    id: "adv-060",
    module: "6. Modern Layout Techniques",
    title: "Fluid typography systems",
    summary: "A fluid type scale combines clamp() with a consistent ratio between steps, so headings and body text all scale smoothly between a minimum and maximum viewport rather than jumping at breakpoints — typically generated once with a type-scale tool and then expressed as custom properties like --step-0 through --step-5. Keep the scale grounded in rem for the min/max ends so it still respects the user's browser font-size setting, and use vw only in the preferred middle term.",
    code: `:root {
  --step-0: clamp(1rem, 0.9rem + 0.4vw, 1.25rem);
  --step-1: clamp(1.25rem, 1.1rem + 0.7vw, 1.75rem);
  --step-2: clamp(1.75rem, 1.4rem + 1.4vw, 2.75rem);
}

h1 { font-size: var(--step-2); }
h2 { font-size: var(--step-1); }
body { font-size: var(--step-0); }`
  },
  {
    id: "adv-061",
    module: "7. CSS Architecture at Scale",
    title: "BEM naming in depth",
    summary: "BEM's Block__Element--Modifier convention encodes structure directly in the class name, which keeps specificity flat (everything is a single class selector) and makes relationships explicit without needing nesting or context to understand what a class does. Its cost is verbosity in the markup, but that tradeoff tends to pay off as a codebase and team grow, since it removes the guesswork of 'where else does this style apply.'",
    code: `.card { }
.card__title { }
.card__title--large { }
.card--featured { }`
  },
  {
    id: "adv-062",
    module: "7. CSS Architecture at Scale",
    title: "Utility-first CSS: pros and cons",
    summary: "Utility-first CSS (small single-purpose classes like flex, gap-4, text-lg composed directly in markup) trades semantic class names for speed of iteration and a naturally capped stylesheet size, since utilities are reused rather than multiplied. The tradeoff is markup verbosity and a learning curve around the utility vocabulary — teams that value semantic HTML or have many non-developer contributors sometimes find BEM or component-scoped CSS a better cultural fit.",
    code: `<!-- Utility-first: layout expressed in markup -->
<div class="flex items-center gap-4 rounded-lg p-4 shadow-sm">
  <img class="h-10 w-10 rounded-full" />
  <span class="text-lg font-semibold">Name</span>
</div>`
  },
  {
    id: "adv-063",
    module: "7. CSS Architecture at Scale",
    title: "@layer and cascade layers",
    summary: "@layer lets you define named cascade layers whose order you control explicitly, so origin and specificity stop being the only tools for resolving conflicts — a layer declared later always beats one declared earlier, regardless of selector specificity within it. This is a huge win for combining a reset, a component library, and utility overrides predictably, since you can now say \"utilities always win over components\" once, up front.",
    code: `@layer reset, base, components, utilities;

@layer reset {
  * { margin: 0; padding: 0; }
}

@layer components {
  .btn { padding: 0.5em 1em; border-radius: 6px; }
}

@layer utilities {
  .p-0 { padding: 0; }
}`
  },
  {
    id: "adv-064",
    module: "7. CSS Architecture at Scale",
    title: "Managing specificity at scale",
    summary: "Specificity wars usually come from mixing ID selectors, deeply nested descendant selectors, and !important in an uncoordinated way — the fix is a deliberate policy: flat single-class selectors by default, :where() for anything that needs zero specificity, and cascade layers to express intentional priority instead of selector cleverness. Tools that visualize specificity graphs across a stylesheet can surface hot spots before they cause a production bug.",
    code: null
  },
  {
    id: "adv-065",
    module: "7. CSS Architecture at Scale",
    title: "Component-scoped CSS strategies",
    summary: "True component scoping in the browser (without a build tool) is now achievable with @scope, which limits a rule's reach to a subtree bounded by a start selector and an optional end/donor selector — no more accidentally leaking .title styles into a nested unrelated component. Before @scope, teams relied on build-time scoping (CSS Modules, styled-components) or naming discipline like BEM to simulate the same isolation.",
    code: `@scope (.card) to (.card-media) {
  .title {
    font-weight: 600;
  }
}`
  },
  {
    id: "adv-066",
    module: "7. CSS Architecture at Scale",
    title: "CSS custom properties as a design token system",
    summary: "Design tokens — color, spacing, radius, shadow, motion values — map naturally onto custom properties: a single source of truth like --space-4 or --color-surface can be generated from a design tool's token export and consumed identically across every component. This keeps design and code in sync without a build-time preprocessor, and it's the same mechanism that powers theming, so tokens and themes compose for free.",
    code: `:root {
  --space-4: 1rem;
  --radius-md: 8px;
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 10%);
}

.card {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}`
  },
  {
    id: "adv-067",
    module: "7. CSS Architecture at Scale",
    title: "Organizing a large stylesheet",
    summary: "At scale, a predictable file structure matters more than any single technique — separating tokens/settings, resets, base element styles, layout primitives, components, and utilities into their own layers or files (via @layer and @import, or a bundler) keeps the cascade legible even as the codebase grows. The goal is that any developer can guess where a given rule lives without grepping the whole project.",
    code: `@layer reset, tokens, base, layout, components, utilities;

@import url("reset.css") layer(reset);
@import url("tokens.css") layer(tokens);
@import url("components.css") layer(components);`
  },
  {
    id: "adv-068",
    module: "7. CSS Architecture at Scale",
    title: "Linting and enforcing CSS conventions",
    summary: "A tool like Stylelint enforces conventions automatically — naming patterns, property ordering, disallowing !important or magic numbers, requiring custom properties instead of raw hex values — turning style-guide documentation into something CI actually checks rather than something reviewers have to remember. Pairing it with a pre-commit hook catches drift before it ever reaches a pull request.",
    code: null
  },
  {
    id: "adv-069",
    module: "7. CSS Architecture at Scale",
    title: "Avoiding !important in large codebases",
    summary: "!important tends to spread because once one rule uses it, overriding that rule later requires another !important, and the arms race compounds until specificity is meaningless — the sustainable fix is usually cascade layers (put trusted overrides in a later layer instead of forcing importance) or reducing selector specificity everywhere so overrides work naturally. The rare legitimate use is overriding third-party or inline styles you don't control.",
    code: `@layer components, overrides;

@layer components {
  .btn { color: blue; }
}

@layer overrides {
  /* Wins without !important, because layers beat specificity */
  .btn { color: var(--brand-color); }
}`
  },
  {
    id: "adv-070",
    module: "7. CSS Architecture at Scale",
    title: "Documenting a CSS design system",
    summary: "Good design-system docs pair a living style guide — ideally generated from the same token files and components used in production, via a tool like Storybook — with plain-language usage guidance: when to use which spacing token, which component variant applies in which context. Docs that drift from the actual CSS are worse than no docs, so tying documentation generation to the source of truth (tokens, component files) keeps it honest.",
    code: null
  },
  {
    id: "adv-071",
    module: "8. New & Native Capabilities",
    title: "Nesting selectors natively (no preprocessor)",
    summary: "Native CSS nesting lets you write & to reference the parent selector and nest related rules inside a block, matching the ergonomics Sass popularized but resolved directly by the browser with no build step. It has strong support in current major browsers now; the main gotcha is that a nested rule starting with a plain element name (like nesting span directly) needs an explicit & prefix in some cases to avoid being misread as a declaration.",
    code: `.card {
  padding: 1rem;

  & .title {
    font-weight: 600;
  }

  &:hover {
    box-shadow: var(--shadow-md);
  }

  @media (min-width: 40em) {
    padding: 1.5rem;
  }
}`
  },
  {
    id: "adv-072",
    module: "8. New & Native Capabilities",
    title: "@scope for style isolation",
    summary: "@scope (start-selector) to (end-selector) bounds where a rule's selectors can match, giving you real style encapsulation without a naming convention or build tool — styles inside the block won't leak past the end boundary, and :scope refers to the starting root. It's newer and currently best supported in Chromium-based browsers, with other engines shipping support more recently, so verify against your target browsers before relying on it broadly.",
    code: `@scope (.card) to (.card__nested-widget) {
  :scope {
    border: 1px solid #ddd;
  }

  p {
    color: var(--text-muted);
  }
}`
  },
  {
    id: "adv-073",
    module: "8. New & Native Capabilities",
    title: "Anchor positioning basics",
    summary: "CSS anchor positioning lets one element (like a tooltip) position itself relative to another element (the anchor) declared with anchor-name, using anchor() functions in inset properties — no getBoundingClientRect() or JS positioning library required. As of now it's implemented in Chromium-based browsers but not yet in Firefox or Safari, so it's an exciting but not-yet-universal tool; plan a JS-based fallback for cross-browser support.",
    code: `.anchor-button {
  anchor-name: --my-anchor;
}

.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  top: anchor(bottom);
  left: anchor(center);
}`
  },
  {
    id: "adv-074",
    module: "8. New & Native Capabilities",
    title: "Building a tooltip with anchor positioning",
    summary: "Combining anchor positioning with position-try-fallbacks lets a tooltip automatically flip to the opposite side when it would otherwise overflow the viewport, all declared in CSS rather than recalculated in JavaScript on every scroll or resize. Again, this is currently a Chromium-only capability, so treat it as a progressive enhancement layered over an existing JS-positioned tooltip for other browsers.",
    code: `.tooltip {
  position: absolute;
  position-anchor: --btn;
  top: anchor(bottom);
  justify-self: anchor-center;
  position-try-fallbacks: flip-block;
}`
  },
  {
    id: "adv-075",
    module: "8. New & Native Capabilities",
    title: "Popover API and CSS",
    summary: "The popover attribute gives any element native show/hide-with-top-layer behavior (rendered above everything else, with light-dismiss on outside click by default), and CSS hooks into it via the :popover-open pseudo-class and the ::backdrop pseudo-element for styling the dimmed background. It's supported in all current major browsers and pairs naturally with anchor positioning for menus and tooltips that need to sit above the rest of the page.",
    code: `[popover] {
  border: none;
  border-radius: 12px;
  padding: 1.5rem;
}

[popover]::backdrop {
  background: rgb(0 0 0 / 40%);
}`
  },
  {
    id: "adv-076",
    module: "8. New & Native Capabilities",
    title: ":target and CSS-only tab panels",
    summary: ":target matches the element whose id matches the URL's current fragment identifier, which is enough to build tab panels, accordions, or lightboxes using plain anchor links and zero JavaScript — clicking a link that points to #panel-2 makes #panel-2:target match and become visible. The tradeoff is that it hijacks the URL fragment and only one target can be active at a time, so it suits simple cases better than complex interactive widgets.",
    code: `.panel {
  display: none;
}

.panel:target {
  display: block;
}`
  },
  {
    id: "adv-077",
    module: "8. New & Native Capabilities",
    title: "CSS counters in depth",
    summary: "counter-reset initializes a named counter, counter-increment advances it, and counter() or counters() renders its value in generated content — giving you numbered sections, nested outline numbering (1, 1.1, 1.2), or custom list numbering entirely in CSS. counters() (plural) is the one to reach for when you need the full nested chain, like '2.3.1', joined by a separator string you choose.",
    code: `ol.outline {
  counter-reset: section;
  list-style: none;
}

ol.outline li {
  counter-increment: section;
}

ol.outline li::before {
  content: counters(section, ".") " ";
}`
  },
  {
    id: "adv-078",
    module: "8. New & Native Capabilities",
    title: "Custom list markers with ::marker",
    summary: "::marker targets a list item's bullet or number directly, letting you style its color, font-size, or content without wrapping the marker in a span or resorting to list-style-image — you can even set content: on it to swap in an emoji or custom character per list. Support is solid in current browsers, though the set of properties ::marker accepts is intentionally limited to typography-related ones.",
    code: `li::marker {
  color: var(--brand-color);
  font-weight: bold;
}

li.done::marker {
  content: "✓ ";
}`
  },
  {
    id: "adv-079",
    module: "8. New & Native Capabilities",
    title: "writing-mode for vertical text",
    summary: "writing-mode: vertical-rl (or vertical-lr) rotates the entire block flow so text runs top-to-bottom, which is essential for authentic Japanese/Chinese vertical typesetting and also useful stylistically for things like sidebar labels or magazine-style pull quotes. Combine it with text-orientation to control whether individual glyphs stay upright or rotate with the flow, and remember it changes which axis is 'inline' for logical properties.",
    code: `.vertical-label {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}`
  },
  {
    id: "adv-080",
    module: "8. New & Native Capabilities",
    title: "CSS Houdini: a conceptual overview",
    summary: "Houdini is a family of low-level APIs (Paint API, Properties and Values API via @property, Layout API, Animation Worklet) that expose parts of the browser's rendering pipeline to JavaScript, so authors can extend CSS itself instead of only using what's built in. @property has become mainstream and broadly supported, while the Paint and Layout APIs remain more experimental with narrower browser support, so they're best thought of as a glimpse of where CSS extensibility is heading rather than a daily-driver toolkit yet.",
    code: `@property --gradient-stop {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}`
  },
  {
    id: "adv-081",
    module: "9. Performance & Maintainability",
    title: "Why CSS can cause layout thrashing",
    summary: "Layout thrashing happens when JavaScript repeatedly writes a style and then reads a layout-dependent value (like offsetHeight) in a tight loop, forcing the browser to synchronously recalculate layout on every iteration instead of batching it — CSS itself doesn't cause this alone, but certain properties (width, top, margin) are far more likely to trigger it when touched from script. Batching reads before writes, or using requestAnimationFrame, avoids forcing synchronous layout recalculation repeatedly.",
    code: null
  },
  {
    id: "adv-082",
    module: "9. Performance & Maintainability",
    title: "content-visibility for render performance",
    summary: "content-visibility: auto tells the browser to skip rendering work (layout, paint) for off-screen content until it's about to become visible, which can dramatically speed up initial render for long pages like article archives or big tables. Pair it with contain-intrinsic-size to give the browser a placeholder size estimate, so the page doesn't jump around as off-screen sections get measured for real once they scroll into view.",
    code: `.article-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}`
  },
  {
    id: "adv-083",
    module: "9. Performance & Maintainability",
    title: "will-change: when to use it (and when not to)",
    summary: "will-change hints to the browser that a property is about to change, letting it set up compositor layers ahead of time — but overusing it (applying it broadly, or leaving it on indefinitely) consumes memory and can hurt performance more than it helps. The right pattern is to apply it briefly right before an expensive animation starts (e.g., on :hover or via JS just before a transition) and remove it once the animation finishes, not as a blanket default on every animated element.",
    code: `.card {
  transition: transform 0.2s ease;
}

.card:hover {
  will-change: transform;
  transform: translateY(-4px);
}`
  },
  {
    id: "adv-084",
    module: "9. Performance & Maintainability",
    title: "Reducing specificity wars",
    summary: "High, inconsistent specificity is a maintainability tax as much as a performance one — every override becomes a guessing game of \"will this selector actually win?\" The fix is architectural: default to single-class selectors, push resets and library defaults into :where() or a low-priority @layer, and reserve higher-specificity selectors for genuinely exceptional cases, documented as such.",
    code: null
  },
  {
    id: "adv-085",
    module: "9. Performance & Maintainability",
    title: "Critical CSS basics",
    summary: "Critical CSS means inlining the minimal styles needed to render above-the-fold content directly in the HTML document's head, so the browser can paint immediately without waiting on a render-blocking external stylesheet request, then loading the rest of the CSS asynchronously. It meaningfully improves First Contentful Paint on slow connections, at the cost of some build complexity to extract and keep the critical subset in sync with the real stylesheet.",
    code: `<style>
  /* Critical, above-the-fold styles inlined here */
  header { display: flex; padding: 1rem; }
</style>
<link rel="stylesheet" href="main.css" media="print" onload="this.media='all'">`
  },
  {
    id: "adv-086",
    module: "9. Performance & Maintainability",
    title: "Minimizing repaints and reflows",
    summary: "Reflow (layout recalculation) is the expensive one and is triggered by geometry-affecting properties like width, margin, or font-size, while repaint (redrawing pixels without changing layout) is triggered by things like background-color or box-shadow and is cheaper but still not free — animating transform and opacity avoids both, since they're handled on the compositor. Grouping DOM/style changes and avoiding synchronous layout reads in between them is the practical habit that prevents most avoidable reflow cost.",
    code: null
  },
  {
    id: "adv-087",
    module: "9. Performance & Maintainability",
    title: "Auditing unused CSS",
    summary: "Browser devtools' Coverage panel shows exactly which rules in a loaded stylesheet were actually applied during a session, which is the fastest way to spot dead weight — legacy component styles nobody deleted, unused utility variants, vendor CSS you only need a fraction of. Automated tools can do this at build time across many pages, but a manual coverage pass on your most-trafficked templates often finds the biggest wins fastest.",
    code: null
  },
  {
    id: "adv-088",
    module: "9. Performance & Maintainability",
    title: "CSS containment (contain property)",
    summary: "The contain property tells the browser that a subtree's layout, paint, style, or size won't affect anything outside its box, letting the rendering engine skip recalculating the rest of the page when something changes inside it — contain: content is a common shorthand covering layout, style, and paint containment. It's a precise, more surgical relative of content-visibility, useful anywhere you have independent, self-contained widgets like cards in a feed or panels in a dashboard.",
    code: `.widget {
  contain: content;
}`
  },
  {
    id: "adv-089",
    module: "9. Performance & Maintainability",
    title: "Choosing between CSS-in-JS, utility CSS, and vanilla CSS",
    summary: "CSS-in-JS gives you colocated styles and dynamic values tied directly to component props, at the cost of runtime overhead (for runtime variants) and extra build tooling; utility CSS keeps the stylesheet small and predictable but pushes composition into markup; vanilla CSS with modern features (nesting, layers, custom properties) now covers a lot of what used to require a preprocessor or CSS-in-JS, with zero runtime cost. There's no universally correct answer — team size, how dynamic your styling needs to be, and existing tooling investment matter more than any one approach being objectively best.",
    code: null
  },
  {
    id: "adv-090",
    module: "9. Performance & Maintainability",
    title: "Progressive enhancement with @supports",
    summary: "@supports lets you feature-detect a property/value pair or a selector (via the selector() function) before relying on it, so you can layer newer CSS on top of a solid baseline instead of risking an unstyled or broken experience in browsers that lack support. The pattern is: write the safe fallback first as the default, then override it inside an @supports block for browsers that can handle the enhancement.",
    code: `.layout {
  display: block;
}

@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}`
  },
  {
    id: "adv-091",
    module: "10. Real-World Advanced Projects",
    title: "Building a themeable component library",
    summary: "A themeable library exposes a documented set of custom properties per component (--button-bg, --button-radius) layered under a low-priority @layer so consumers can override them with normal specificity, while internal implementation details stay unexposed. The discipline is treating those custom properties as a public API — changing their names or removing one is a breaking change, just like changing a function signature.",
    code: `@layer components {
  .btn {
    background: var(--btn-bg, oklch(55% 0.15 250));
    border-radius: var(--btn-radius, 6px);
    padding: var(--btn-padding, 0.6em 1.2em);
  }
}`
  },
  {
    id: "adv-092",
    module: "10. Real-World Advanced Projects",
    title: "Building a fully responsive dashboard layout with grid",
    summary: "A dashboard shell is a great real-world case for combining grid-template-areas (for the overall sidebar/header/main structure) with container queries on individual widgets, so the page reflows at wide breakpoints while each chart or stat card independently adapts to whatever grid cell it lands in. auto-fit with minmax() handles the widget grid itself so cards wrap naturally without a hardcoded column count.",
    code: `.dashboard {
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}

.widgets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}`
  },
  {
    id: "adv-093",
    module: "10. Real-World Advanced Projects",
    title: "Building an accessible custom select with :has()",
    summary: ":has() can drive a custom select's open/closed visual state directly from a checkbox or the trigger button's :focus-within, letting you style the whole widget declaratively based on its internal state rather than toggling classes with JavaScript for every interaction. Accessibility still needs real ARIA roles and keyboard handling underneath — :has() styles the outside, it doesn't replace the semantics a screen reader needs.",
    code: `.select:has(.trigger:focus-visible) {
  outline: 2px solid var(--brand-color);
}

.select:has(input[type="checkbox"]:checked) .options {
  display: block;
}`
  },
  {
    id: "adv-094",
    module: "10. Real-World Advanced Projects",
    title: "Building scroll-driven storytelling sections",
    summary: "Scrollytelling sections — where illustrations, text highlights, or progress indicators animate as the reader scrolls through a narrative — are a natural fit for view-timeline and animation-range, replacing what used to require a scroll-event library like ScrollMagic. Since this relies on scroll-driven animations, which are currently strongest in Chromium, ship a static, still-readable version of the content as the default so the story works everywhere even without the animation.",
    code: `.story-panel {
  view-timeline-name: --panel;
  animation: reveal linear;
  animation-timeline: --panel;
  animation-range: entry 10% cover 50%;
}

@keyframes reveal {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}`
  },
  {
    id: "adv-095",
    module: "10. Real-World Advanced Projects",
    title: "Building a design system's spacing scale with custom properties",
    summary: "A spacing scale defined once as a sequence of custom properties (--space-1 through --space-8, ideally on a consistent ratio) becomes the single source every margin, padding, and gap in the system pulls from, which is what makes a UI feel visually consistent instead of accumulating one-off pixel values. Naming by scale step rather than pixel value (--space-4, not --space-16px) keeps the token stable even if the underlying value is later tuned.",
    code: `:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
}

.stack { display: grid; gap: var(--space-4); }`
  },
  {
    id: "adv-096",
    module: "10. Real-World Advanced Projects",
    title: "Building print stylesheets",
    summary: "A @media print stylesheet should strip navigation, buttons, and backgrounds, expand link hrefs into visible text for reference, and use page-break-inside: avoid (or its logical equivalent break-inside) to keep cards and tables from splitting awkwardly across pages. Units matter too — print layouts read better in physical units like pt or in rather than viewport-relative units that mean nothing on paper.",
    code: `@media print {
  nav, .no-print, button {
    display: none;
  }

  a[href]::after {
    content: " (" attr(href) ")";
  }

  .card {
    break-inside: avoid;
  }
}`
  },
  {
    id: "adv-097",
    module: "10. Real-World Advanced Projects",
    title: "Debugging cross-browser CSS issues",
    summary: "Most cross-browser bugs trace back to one of a few usual suspects: a feature with partial support (check it against a current compatibility reference before assuming it's your code), a flexbox/grid edge case implemented slightly differently, or a vendor default (like form control styling) that differs per engine. Reproducing in the actual failing browser's devtools rather than guessing from a screenshot, and isolating the failure into the smallest possible reduced test case, resolves the majority of these faster than reading spec text.",
    code: null
  },
  {
    id: "adv-098",
    module: "10. Real-World Advanced Projects",
    title: "Auditing a stylesheet for accessibility",
    summary: "A CSS accessibility audit checks color contrast against WCAG thresholds, confirms focus indicators are visible and not stripped with outline: none without a :focus-visible replacement, verifies content reflows properly up to 400% zoom without loss of functionality, and checks that prefers-reduced-motion and prefers-contrast are respected. Automated tools catch contrast and some structural issues, but manual keyboard-only navigation and zoom testing catch the failures automated scanners miss.",
    code: null
  },
  {
    id: "adv-099",
    module: "10. Real-World Advanced Projects",
    title: "Preparing CSS for production (minification, autoprefixing concepts)",
    summary: "Minification strips whitespace, comments, and redundant syntax to shrink file size for transfer, while autoprefixing (via a tool like Autoprefixer, driven by a browserslist config) adds vendor prefixes only for the specific properties and browser versions you actually target, rather than prefixing everything defensively. Both are typically automated in a build pipeline rather than done by hand, and modern build tools bundle them by default so there's rarely a reason to skip either step before shipping.",
    code: null
  },
  {
    id: "adv-100",
    module: "10. Real-World Advanced Projects",
    title: "Where to go from here: staying current with CSS",
    summary: "CSS is shipping new capabilities faster than at almost any point in its history, so the sustainable habit is following the CSS Working Group's drafts, a browser compatibility reference, and a couple of trustworthy release-notes sources rather than trying to memorize everything today — treat @supports and progressive enhancement as permanent tools, not a temporary crutch, because there will always be a next wave of features arriving at different times across browsers. The fundamentals you've built through this track (cascade, specificity, layout models) stay stable even as the feature surface keeps growing.",
    code: null
  }
];
