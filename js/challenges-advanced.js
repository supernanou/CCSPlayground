const CHALLENGES_ADVANCED = [
  {
    id: "adv-001",
    module: "1. Custom Properties & Theming",
    title: "Give the Tag a Signature Color",
    stage: "tag",
    brief: "Custom properties let you name a value once and reuse it anywhere with var(). Declare a --brand variable on .tag and paint the background with it.",
    hint: "Write --brand: #somecolor; inside .tag, then set background: var(--brand);.",
    starterCss: `
.tag {
  /* declare --brand here, then use var(--brand) for the background */
}
`,
    solutionCss: `
.tag {
  --brand: #ff6b35;
  background: var(--brand);
}
`,
    rules: [{"type": "varUsed", "name": "brand"}, {"type": "bgColor", "sel": ".tag", "color": "#ff6b35", "tolerance": 30}],
  },
  {
    id: "adv-002",
    module: "1. Custom Properties & Theming",
    title: "Ink the Badge with a Variable",
    stage: "badge",
    brief: "Rather than hardcoding a color, store it in a custom property so it can be reused or swapped later. Give the badge its text color through an --ink variable.",
    hint: "Declare --ink on .badge and apply it with color: var(--ink);.",
    starterCss: `
.badge {
  /* declare --ink here, then use var(--ink) for the text color */
}
`,
    solutionCss: `
.badge {
  --ink: #2c5282;
  color: var(--ink);
}
`,
    rules: [{"type": "varUsed", "name": "ink"}, {"type": "textColor", "sel": ".badge", "color": "#2c5282", "tolerance": 30}],
  },
  {
    id: "adv-003",
    module: "1. Custom Properties & Theming",
    title: "Frame the Card in a Custom Color",
    stage: "card",
    brief: "Borders can be themed with variables too. Declare a --frame custom property and use it to color a solid border around the card.",
    hint: "Something like border: 4px solid var(--frame); after declaring --frame.",
    starterCss: `
.card {
  /* declare --frame, then border: 4px solid var(--frame); */
}
`,
    solutionCss: `
.card {
  --frame: #38a169;
  border: 4px solid var(--frame);
}
`,
    rules: [{"type": "varUsed", "name": "frame"}, {"type": "borderColor", "sel": ".card", "color": "#38a169", "tolerance": 30}],
  },
  {
    id: "adv-004",
    module: "1. Custom Properties & Theming",
    title: "Trickle a Theme Down from :root",
    stage: "tag",
    brief: "Custom properties inherit, so a variable declared on :root is visible to every descendant, including a .tag nested deep inside the stage. Set --sunset at the root and consume it on the tag.",
    hint: "Declare --sunset inside a :root {} block, then read it with var(--sunset) on .tag's background.",
    starterCss: `
:root {
  /* declare --sunset here */
}

.tag {
  /* background: var(--sunset); */
}
`,
    solutionCss: `
:root {
  --sunset: #dd6b20;
}

.tag {
  background: var(--sunset);
}
`,
    rules: [{"type": "varUsed", "name": "sunset"}, {"type": "bgColor", "sel": ".tag", "color": "#dd6b20", "tolerance": 30}],
  },
  {
    id: "adv-005",
    module: "1. Custom Properties & Theming",
    title: "Fill the Badge with a Variable",
    stage: "badge",
    brief: "Give the badge a themeable fill by routing its background through a --lagoon custom property instead of a literal color.",
    hint: "Declare --lagoon on .badge and set background: var(--lagoon);.",
    starterCss: `
.badge {
  /* declare --lagoon, then background: var(--lagoon); */
}
`,
    solutionCss: `
.badge {
  --lagoon: #00b5d8;
  background: var(--lagoon);
}
`,
    rules: [{"type": "varUsed", "name": "lagoon"}, {"type": "bgColor", "sel": ".badge", "color": "#00b5d8", "tolerance": 30}],
  },
  {
    id: "adv-006",
    module: "1. Custom Properties & Theming",
    title: "Recolor the Card's Text",
    stage: "card",
    brief: "Swap the card's text color for a plum tone, but store the hex value in a --plum custom property rather than writing it inline.",
    hint: "Declare --plum on .card and use color: var(--plum);.",
    starterCss: `
.card {
  /* declare --plum, then color: var(--plum); */
}
`,
    solutionCss: `
.card {
  --plum: #6b46c1;
  color: var(--plum);
}
`,
    rules: [{"type": "varUsed", "name": "plum"}, {"type": "textColor", "sel": ".card", "color": "#6b46c1", "tolerance": 30}],
  },
  {
    id: "adv-007",
    module: "1. Custom Properties & Theming",
    title: "Outline the Tag with a Variable",
    stage: "tag",
    brief: "Give the tag a forest-green outline sourced from a --forest custom property.",
    hint: "Declare --forest on .tag, then border: 3px solid var(--forest);.",
    starterCss: `
.tag {
  /* declare --forest, then border: 3px solid var(--forest); */
}
`,
    solutionCss: `
.tag {
  --forest: #276749;
  border: 3px solid var(--forest);
}
`,
    rules: [{"type": "varUsed", "name": "forest"}, {"type": "borderColor", "sel": ".tag", "color": "#276749", "tolerance": 30}],
  },
  {
    id: "adv-008",
    module: "1. Custom Properties & Theming",
    title: "Give the Badge a Colored Edge",
    stage: "badge",
    brief: "Add a coral border to the badge, driven by a --coral custom property so the color lives in one place.",
    hint: "Declare --coral on .badge, then border: 3px solid var(--coral);.",
    starterCss: `
.badge {
  /* declare --coral, then border: 3px solid var(--coral); */
}
`,
    solutionCss: `
.badge {
  --coral: #e53e3e;
  border: 3px solid var(--coral);
}
`,
    rules: [{"type": "varUsed", "name": "coral"}, {"type": "borderColor", "sel": ".badge", "color": "#e53e3e", "tolerance": 30}],
  },
  {
    id: "adv-009",
    module: "1. Custom Properties & Theming",
    title: "Pour Gold into the Card",
    stage: "card",
    brief: "Theme the card's fill with a golden custom property named --gold.",
    hint: "Declare --gold on .card and set background: var(--gold);.",
    starterCss: `
.card {
  /* declare --gold, then background: var(--gold); */
}
`,
    solutionCss: `
.card {
  --gold: #d69e2e;
  background: var(--gold);
}
`,
    rules: [{"type": "varUsed", "name": "gold"}, {"type": "bgColor", "sel": ".card", "color": "#d69e2e", "tolerance": 30}],
  },
  {
    id: "adv-010",
    module: "1. Custom Properties & Theming",
    title: "One Variable, Two Jobs",
    stage: "card",
    brief: "A single custom property can drive multiple declarations at once. Define one --theme variable and use it for both the card's background and its border color.",
    hint: "Declare --theme once, then reference var(--theme) in both the background and border declarations.",
    starterCss: `
.card {
  /* declare --theme, then use var(--theme) twice: background and border */
}
`,
    solutionCss: `
.card {
  --theme: #3182ce;
  background: var(--theme);
  border: 3px solid var(--theme);
}
`,
    rules: [{"type": "varUsed", "name": "theme"}, {"type": "bgColor", "sel": ".card", "color": "#3182ce", "tolerance": 30}, {"type": "borderColor", "sel": ".card", "color": "#3182ce", "tolerance": 30}],
  },
  {
    id: "adv-011",
    module: "2. Modern Color",
    title: "Mix Two Colors for the Tag",
    stage: "tag",
    brief: "color-mix() blends two colors right inside CSS, no preprocessor needed. Mix a sunset orange with a warm yellow and use the result as the tag's background.",
    hint: "Try background: color-mix(in srgb, #ff6b35 50%, #ffd166 50%);.",
    starterCss: `
.tag {
  /* background: color-mix(in srgb, ..., ...); */
}
`,
    solutionCss: `
.tag {
  background: color-mix(in srgb, #ff6b35 50%, #ffd166 50%);
}
`,
    rules: [{"type": "cssIncludes", "text": "color-mix("}, {"type": "bgSet", "sel": ".tag"}],
  },
  {
    id: "adv-012",
    module: "2. Modern Color",
    title: "Mix a Custom Badge Fill",
    stage: "badge",
    brief: "Blend a blue toward white with color-mix() to give the badge a softened fill, all computed live by the browser.",
    hint: "Use color-mix(in srgb, #2b6cb0 60%, white 40%) as the background value.",
    starterCss: `
.badge {
  /* background: color-mix(in srgb, ..., ...); */
}
`,
    solutionCss: `
.badge {
  background: color-mix(in srgb, #2b6cb0 60%, white 40%);
}
`,
    rules: [{"type": "cssIncludes", "text": "color-mix("}, {"type": "bgSet", "sel": ".badge"}],
  },
  {
    id: "adv-013",
    module: "2. Modern Color",
    title: "Blend a Border for the Card",
    stage: "card",
    brief: "You can feed color-mix() output straight into a border. Mix a teal with itself (a nice way to prove the syntax works while keeping the result predictable) and border the card with it.",
    hint: "Something like border: 4px solid color-mix(in srgb, #319795 70%, #319795 30%);.",
    starterCss: `
.card {
  /* border: 4px solid color-mix(in srgb, ..., ...); */
}
`,
    solutionCss: `
.card {
  border: 4px solid color-mix(in srgb, #319795 70%, #319795 30%);
}
`,
    rules: [{"type": "cssIncludes", "text": "color-mix("}, {"type": "borderColor", "sel": ".card", "color": "#319795", "tolerance": 30}],
  },
  {
    id: "adv-014",
    module: "2. Modern Color",
    title: "Blend the Box's Text Color",
    stage: "gradientbox",
    brief: "color-mix() works for text color too. Mix a blue with itself so the math stays predictable, and apply it as the box's color.",
    hint: "color: color-mix(in srgb, #2b6cb0 65%, #2b6cb0 35%); sets the color exactly.",
    starterCss: `
.box {
  /* color: color-mix(in srgb, ..., ...); */
}
`,
    solutionCss: `
.box {
  color: color-mix(in srgb, #2b6cb0 65%, #2b6cb0 35%);
}
`,
    rules: [{"type": "cssIncludes", "text": "color-mix("}, {"type": "textColor", "sel": ".box", "color": "#2b6cb0", "tolerance": 30}],
  },
  {
    id: "adv-015",
    module: "2. Modern Color",
    title: "Paint the Tag with OKLCH",
    stage: "tag",
    brief: "OKLCH describes color as lightness, chroma and hue, and it's designed to interpolate more evenly than older color spaces. Use an oklch() value to fill the tag's background.",
    hint: "Try background: oklch(65% 0.15 30);.",
    starterCss: `
.tag {
  /* background: oklch(L% C H); */
}
`,
    solutionCss: `
.tag {
  background: oklch(65% 0.15 30);
}
`,
    rules: [{"type": "cssIncludes", "text": "oklch("}, {"type": "bgSet", "sel": ".tag"}],
  },
  {
    id: "adv-016",
    module: "2. Modern Color",
    title: "Give the Badge an OKLCH Glow",
    stage: "badge",
    brief: "Pick a teal-leaning hue in OKLCH and use it to fill the badge \u2014 good browser support now exists, though very old browsers will ignore it.",
    hint: "background: oklch(70% 0.12 200); is a good starting point.",
    starterCss: `
.badge {
  /* background: oklch(L% C H); */
}
`,
    solutionCss: `
.badge {
  background: oklch(70% 0.12 200);
}
`,
    rules: [{"type": "cssIncludes", "text": "oklch("}, {"type": "bgSet", "sel": ".badge"}],
  },
  {
    id: "adv-017",
    module: "2. Modern Color",
    title: "Border the Card in OKLCH",
    stage: "card",
    brief: "Use an oklch() color to border the card. Because exact OKLCH-to-sRGB conversion varies subtly by engine, this one just checks that a border shows up.",
    hint: "border: 4px solid oklch(55% 0.18 280); gives a solid purple-blue edge.",
    starterCss: `
.card {
  /* border: 4px solid oklch(L% C H); */
}
`,
    solutionCss: `
.card {
  border: 4px solid oklch(55% 0.18 280);
}
`,
    rules: [{"type": "cssIncludes", "text": "oklch("}, {"type": "borderSet", "sel": ".card"}],
  },
  {
    id: "adv-018",
    module: "2. Modern Color",
    title: "Theme the Checkbox Accent",
    stage: "checkbox",
    brief: "The accent-color property retints native form controls like checkboxes without any custom markup. Set it on the checkbox, and match the label's text color to the same pink.",
    hint: "Set accent-color on .check, and color on .option, to the same hex value.",
    starterCss: `
.check {
  /* accent-color: ...; */
}
.option {
  /* color: ...; */
}
`,
    solutionCss: `
.check {
  accent-color: #d53f8c;
}
.option {
  color: #d53f8c;
}
`,
    rules: [{"type": "cssIncludes", "text": "accent-color"}, {"type": "textColor", "sel": ".option", "color": "#d53f8c", "tolerance": 30}],
  },
  {
    id: "adv-019",
    module: "2. Modern Color",
    title: "Mix Colors in OKLCH Space",
    stage: "gradientbox",
    brief: "color-mix() lets you choose which color space to interpolate in \u2014 try mixing in oklch instead of the default srgb. Mixing a green with itself keeps the resulting hex predictable for grading.",
    hint: "border: 4px solid color-mix(in oklch, #2f855a 55%, #2f855a 45%); combines both features at once.",
    starterCss: `
.box {
  /* border: 4px solid color-mix(in oklch, ..., ...); */
}
`,
    solutionCss: `
.box {
  border: 4px solid color-mix(in oklch, #2f855a 55%, #2f855a 45%);
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["color-mix(", "oklch"]}, {"type": "borderColor", "sel": ".box", "color": "#2f855a", "tolerance": 30}],
  },
  {
    id: "adv-020",
    module: "2. Modern Color",
    title: "Color-Mix Capstone",
    stage: "card",
    brief: "Combine color-mix() and the oklch color space in one declaration to fill the card, mixing a pink with itself to keep the final color exact.",
    hint: "background: color-mix(in oklch, #d53f8c 60%, #d53f8c 40%); uses both features together.",
    starterCss: `
.card {
  /* background: color-mix(in oklch, ..., ...); */
}
`,
    solutionCss: `
.card {
  background: color-mix(in oklch, #d53f8c 60%, #d53f8c 40%);
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["color-mix(", "oklch"]}, {"type": "bgColor", "sel": ".card", "color": "#d53f8c", "tolerance": 30}],
  },
  {
    id: "adv-021",
    module: "3. Modern Selectors",
    title: "Style a List Because It Has Items",
    stage: "list",
    brief: ":has() lets a selector react to what's inside it \u2014 a true parent selector at last. Give the list a background only when it :has(li) children (support is now solid in every modern browser).",
    hint: "Try .list:has(li) { background: ...; }.",
    starterCss: `
.list {
  /* .list:has(li) { background: ...; } */
}
`,
    solutionCss: `
.list:has(li) {
  background: #90cdf4;
}
`,
    rules: [{"type": "cssIncludes", "text": ":has("}, {"type": "bgColor", "sel": ".list", "color": "#90cdf4", "tolerance": 30}],
  },
  {
    id: "adv-022",
    module: "3. Modern Selectors",
    title: "Light Up a Layout That Has a Sidebar",
    stage: "sidebar",
    brief: "Use :has() to check whether .layout contains a .side element, and background it when true.",
    hint: ".layout:has(.side) { background: ...; } does the trick.",
    starterCss: `
.layout {
  /* .layout:has(.side) { background: ...; } */
}
`,
    solutionCss: `
.layout:has(.side) {
  background: #fbd38d;
}
`,
    rules: [{"type": "cssIncludes", "text": ":has("}, {"type": "bgColor", "sel": ".layout", "color": "#fbd38d", "tolerance": 30}],
  },
  {
    id: "adv-023",
    module: "3. Modern Selectors",
    title: "Border a Card the Parent-Selector Way",
    stage: "card",
    brief: "Before :has(), CSS couldn't select an element based on its descendants. Use .stage:has(.card) .card to prove the card is present, then give it a border.",
    hint: "Write .stage:has(.card) .card { border: ...; }.",
    starterCss: `
.stage {
  /* .stage:has(.card) .card { border: 4px solid ...; } */
}
`,
    solutionCss: `
.stage:has(.card) .card {
  border: 4px solid #4299e1;
}
`,
    rules: [{"type": "cssIncludes", "text": ":has("}, {"type": "borderColor", "sel": ".card", "color": "#4299e1", "tolerance": 30}],
  },
  {
    id: "adv-024",
    module: "3. Modern Selectors",
    title: "Group a Selector with :is()",
    stage: "list",
    brief: ":is() lets you wrap a selector list so it reads cleanly, even with just one entry. Border the list using :is(.list).",
    hint: "Try :is(.list) { border: 3px solid ...; }.",
    starterCss: `
/* :is(.list) { border: 3px solid ...; } */
`,
    solutionCss: `
:is(.list) {
  border: 3px solid #38a169;
}
`,
    rules: [{"type": "cssIncludes", "text": ":is("}, {"type": "borderColor", "sel": ".list", "color": "#38a169", "tolerance": 30}],
  },
  {
    id: "adv-025",
    module: "3. Modern Selectors",
    title: "Zero-Specificity Styling with :where()",
    stage: "card",
    brief: ":where() matches exactly like :is() but always carries zero specificity, which is why it's paired with an ancestor selector here \u2014 otherwise it couldn't out-rank the stage's own card background. Recolor the card using .stage :where(.card).",
    hint: "Write .stage :where(.card) { background: ...; } \u2014 the ancestor keeps the specificity high enough to win.",
    starterCss: `
.stage {
  /* .stage :where(.card) { background: ...; } */
}
`,
    solutionCss: `
.stage :where(.card) {
  background: #9f7aea;
}
`,
    rules: [{"type": "cssIncludes", "text": ":where("}, {"type": "bgColor", "sel": ".card", "color": "#9f7aea", "tolerance": 30}],
  },
  {
    id: "adv-026",
    module: "3. Modern Selectors",
    title: "Notice When a Container Has Focus Inside It",
    stage: "input",
    brief: ":focus-within matches an element while any descendant has focus \u2014 handy for highlighting a whole form row when its input is active. This can't be demonstrated visually here since nothing gets real keyboard focus on render, so this check just looks for the syntax.",
    hint: "Write .stage:focus-within .field { border-color: ...; } somewhere in your CSS.",
    starterCss: `
.stage {
  /* .stage:focus-within .field { border-color: ...; } */
}
`,
    solutionCss: `
.stage:focus-within .field {
  border-color: #4299e1;
}
`,
    rules: [{"type": "cssIncludes", "text": ":focus-within"}],
  },
  {
    id: "adv-027",
    module: "3. Modern Selectors",
    title: "Style Two Panels at Once with :is()",
    stage: "sidebar",
    brief: ":is() accepts a comma-separated list, so one rule can target .side and .main together instead of repeating yourself.",
    hint: "Try :is(.side, .main) { border: 3px solid ...; }.",
    starterCss: `
/* :is(.side, .main) { border: 3px solid ...; } */
`,
    solutionCss: `
:is(.side, .main) {
  border: 3px solid #d53f8c;
}
`,
    rules: [{"type": "cssIncludes", "text": ":is("}, {"type": "borderColor", "sel": ".side", "color": "#d53f8c", "tolerance": 30}],
  },
  {
    id: "adv-028",
    module: "3. Modern Selectors",
    title: "Stack Two Modern Selectors",
    stage: "list",
    brief: "Selectors compose \u2014 chain :where() and :has() on the same rule to background the list only when it genuinely contains items.",
    hint: "Try .list:where(.list):has(li) { background: ...; }.",
    starterCss: `
/* .list:where(.list):has(li) { background: ...; } */
`,
    solutionCss: `
.list:where(.list):has(li) {
  background: #f6ad55;
}
`,
    rules: [{"type": "cssIncludesAll", "texts": [":where(", ":has("]}, {"type": "bgColor", "sel": ".list", "color": "#f6ad55", "tolerance": 30}],
  },
  {
    id: "adv-029",
    module: "3. Modern Selectors",
    title: "Focus-Within on a Card",
    stage: "card",
    brief: "Cards that act like little forms or menus often want to react when anything inside them is focused. Add a :focus-within rule to the card; since nothing is actually focused on render, this just checks for the syntax.",
    hint: "Write .card:focus-within { background: ...; }.",
    starterCss: `
/* .card:focus-within { background: ...; } */
`,
    solutionCss: `
.card:focus-within {
  background: #fefcbf;
}
`,
    rules: [{"type": "cssIncludes", "text": ":focus-within"}],
  },
  {
    id: "adv-030",
    module: "3. Modern Selectors",
    title: "Selector Combo Capstone",
    stage: "sidebar",
    brief: "Combine :has() and :is() in a single rule to background the whole layout only when it genuinely contains a .main panel.",
    hint: "Try .layout:has(.main):is(.layout) { background: ...; }.",
    starterCss: `
/* .layout:has(.main):is(.layout) { background: ...; } */
`,
    solutionCss: `
.layout:has(.main):is(.layout) {
  background: #68d391;
}
`,
    rules: [{"type": "cssIncludesAll", "texts": [":has(", ":is("]}, {"type": "bgColor", "sel": ".layout", "color": "#68d391", "tolerance": 30}],
  },
  {
    id: "adv-031",
    module: "4. Container Queries",
    title: "Query the Sidebar's Own Width",
    stage: "sidebar",
    brief: "Container queries let an element respond to the size of its container rather than the viewport \u2014 perfect for reusable components. Make .layout a container, then style .main once it reaches a minimum width. Support is modern-browsers-only, but very solid today.",
    hint: "Set container-type: inline-size on .layout, then write @container (min-width: 20px) { .main { background: ...; } }.",
    starterCss: `
.layout {
  /* container-type: inline-size; */
}

/* @container (min-width: 20px) {
  .main { background: ...; }
} */
`,
    solutionCss: `
.layout {
  container-type: inline-size;
}

@container (min-width: 20px) {
  .main {
    background: #805ad5;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "bgColor", "sel": ".main", "color": "#805ad5", "tolerance": 30}],
  },
  {
    id: "adv-032",
    module: "4. Container Queries",
    title: "Turn the Row into a Container",
    stage: "row-3",
    brief: "Set container-type on .row so its .item children can query its inline size, then background them once the container is wide enough.",
    hint: "container-type: inline-size on .row, then @container (min-width: 20px) { .item { background: ...; } }.",
    starterCss: `
.row {
  /* container-type: inline-size; */
}

/* @container (min-width: 20px) {
  .item { background: ...; }
} */
`,
    solutionCss: `
.row {
  container-type: inline-size;
}

@container (min-width: 20px) {
  .item {
    background: #2c7a7b;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "bgColor", "sel": ".item", "color": "#2c7a7b", "tolerance": 30}],
  },
  {
    id: "adv-033",
    module: "4. Container Queries",
    title: "Switch to Flex Inside a Container Query",
    stage: "sidebar",
    brief: "@container blocks can change more than color \u2014 flip .side to a flex display once its container is wide enough.",
    hint: "Inside @container (min-width: 20px) {}, set .side { display: flex; }.",
    starterCss: `
.layout {
  /* container-type: inline-size; */
}

/* @container (min-width: 20px) {
  .side { display: flex; }
} */
`,
    solutionCss: `
.layout {
  container-type: inline-size;
}

@container (min-width: 20px) {
  .side {
    display: flex;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "propEquals", "sel": ".side", "prop": "display", "value": "flex"}],
  },
  {
    id: "adv-034",
    module: "4. Container Queries",
    title: "Center Items via a Container Query",
    stage: "row-3",
    brief: "Make .stage a query container, then use @container to switch its .row child to flex and center its items horizontally. (A container can't query its own size to style itself — the container-type has to live on an ancestor of what you're styling.)",
    hint: "Set container-type: inline-size; on .stage, then inside @container (min-width: 20px) { .row { display: flex; justify-content: center; } }.",
    starterCss: `
.stage {
  /* container-type: inline-size; */
}

/* @container (min-width: 20px) {
  .row { display: flex; justify-content: center; }
} */
`,
    solutionCss: `
.stage {
  container-type: inline-size;
}

@container (min-width: 20px) {
  .row {
    display: flex;
    justify-content: center;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "propEquals", "sel": ".row", "prop": "justifyContent", "value": "center"}],
  },
  {
    id: "adv-035",
    module: "4. Container Queries",
    title: "Raise the Container Query Threshold",
    stage: "sidebar",
    brief: "Try a higher min-width condition this time \u2014 40px instead of 20px \u2014 and background .main in a fresh pink once it's met.",
    hint: "@container (min-width: 40px) { .main { background: ...; } } after making .layout a container.",
    starterCss: `
.layout {
  /* container-type: inline-size; */
}

/* @container (min-width: 40px) {
  .main { background: ...; }
} */
`,
    solutionCss: `
.layout {
  container-type: inline-size;
}

@container (min-width: 40px) {
  .main {
    background: #d53f8c;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "bgColor", "sel": ".main", "color": "#d53f8c", "tolerance": 30}],
  },
  {
    id: "adv-036",
    module: "4. Container Queries",
    title: "Border Items Once the Container Grows",
    stage: "row-3",
    brief: "Give .item a colorful border, but only once its container (.row) passes a 40px width threshold.",
    hint: "container-type: inline-size on .row, then @container (min-width: 40px) { .item { border: 3px solid ...; } }.",
    starterCss: `
.row {
  /* container-type: inline-size; */
}

/* @container (min-width: 40px) {
  .item { border: 3px solid ...; }
} */
`,
    solutionCss: `
.row {
  container-type: inline-size;
}

@container (min-width: 40px) {
  .item {
    border: 3px solid #4299e1;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "borderColor", "sel": ".item", "color": "#4299e1", "tolerance": 30}],
  },
  {
    id: "adv-037",
    module: "4. Container Queries",
    title: "Border the Side Panel via Container Query",
    stage: "sidebar",
    brief: "Once .layout is a container, give .side a pink border only when the container passes 40px wide.",
    hint: "@container (min-width: 40px) { .side { border: 4px solid ...; } }.",
    starterCss: `
.layout {
  /* container-type: inline-size; */
}

/* @container (min-width: 40px) {
  .side { border: 4px solid ...; }
} */
`,
    solutionCss: `
.layout {
  container-type: inline-size;
}

@container (min-width: 40px) {
  .side {
    border: 4px solid #ed64a6;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "borderColor", "sel": ".side", "color": "#ed64a6", "tolerance": 30}],
  },
  {
    id: "adv-038",
    module: "4. Container Queries",
    title: "Fade Items with a Container Query",
    stage: "row-3",
    brief: "Container queries can drive any property, including opacity. Dim .item down once .row is wide enough to query.",
    hint: "Inside @container (min-width: 20px) {}, set .item { opacity: 0.5; }.",
    starterCss: `
.row {
  /* container-type: inline-size; */
}

/* @container (min-width: 20px) {
  .item { opacity: 0.5; }
} */
`,
    solutionCss: `
.row {
  container-type: inline-size;
}

@container (min-width: 20px) {
  .item {
    opacity: 0.5;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "numberMax", "sel": ".item", "prop": "opacity", "max": 0.6}],
  },
  {
    id: "adv-039",
    module: "4. Container Queries",
    title: "Switch the Main Panel to Grid",
    stage: "sidebar",
    brief: "Turn .main into a grid container once .layout's own width query passes, showing how @container can reshape layout, not just color.",
    hint: "Inside the @container block, set .main { display: grid; }.",
    starterCss: `
.layout {
  /* container-type: inline-size; */
}

/* @container (min-width: 20px) {
  .main { display: grid; }
} */
`,
    solutionCss: `
.layout {
  container-type: inline-size;
}

@container (min-width: 20px) {
  .main {
    display: grid;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "propEquals", "sel": ".main", "prop": "display", "value": "grid"}],
  },
  {
    id: "adv-040",
    module: "4. Container Queries",
    title: "Container Query Capstone",
    stage: "row-3",
    brief: "Bring it together one more time: make .row a container, and background its items in green once the query condition is met.",
    hint: "container-type: inline-size on .row, then @container (min-width: 20px) { .item { background: ...; } }.",
    starterCss: `
.row {
  /* container-type: inline-size; */
}

/* @container (min-width: 20px) {
  .item { background: ...; }
} */
`,
    solutionCss: `
.row {
  container-type: inline-size;
}

@container (min-width: 20px) {
  .item {
    background: #38a169;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["container-type", "@container"]}, {"type": "bgColor", "sel": ".item", "color": "#38a169", "tolerance": 30}],
  },
  {
    id: "adv-041",
    module: "5. Animation",
    title: "Spin the Star",
    stage: "icon",
    brief: "@keyframes defines the steps of a custom animation, and the animation shorthand plays it. Make the star icon spin forever.",
    hint: "Write @keyframes spin { to { transform: rotate(360deg); } } then animation: spin 2s linear infinite; on .icon.",
    starterCss: `
/* @keyframes spin {
  to { transform: rotate(360deg); }
} */

.icon {
  /* animation: spin 2s linear infinite; */
}
`,
    solutionCss: `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.icon {
  animation: spin 2s linear infinite;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".icon"}],
  },
  {
    id: "adv-042",
    module: "5. Animation",
    title: "Make the Badge Pulse",
    stage: "badge",
    brief: "Define a pulse keyframe that scales up and back down, then loop it on the badge to draw attention to it.",
    hint: "@keyframes pulse { 50% { transform: scale(1.15); } } then animation: pulse 1.4s ease-in-out infinite; on .badge.",
    starterCss: `
/* @keyframes pulse {
  50% { transform: scale(1.15); }
} */

.badge {
  /* animation: pulse 1.4s ease-in-out infinite; */
}
`,
    solutionCss: `
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.badge {
  animation: pulse 1.4s ease-in-out infinite;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".badge"}],
  },
  {
    id: "adv-043",
    module: "5. Animation",
    title: "Fade the Card In",
    stage: "card",
    brief: "A simple opacity keyframe is one of the friendliest animations to write. Animate the card from invisible to fully visible.",
    hint: "@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } then animation: fadeIn 1s ease-in; on .card.",
    starterCss: `
/* @keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
} */

.card {
  /* animation: fadeIn 1s ease-in; */
}
`,
    solutionCss: `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.card {
  animation: fadeIn 1s ease-in;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".card"}],
  },
  {
    id: "adv-044",
    module: "5. Animation",
    title: "Bounce the Star",
    stage: "icon",
    brief: "Translate the icon up and back down repeatedly to give it a gentle bounce.",
    hint: "@keyframes bounce { 50% { transform: translateY(-10px); } } then loop it with animation: bounce 0.8s ease-in-out infinite;.",
    starterCss: `
/* @keyframes bounce {
  50% { transform: translateY(-10px); }
} */

.icon {
  /* animation: bounce 0.8s ease-in-out infinite; */
}
`,
    solutionCss: `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.icon {
  animation: bounce 0.8s ease-in-out infinite;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".icon"}],
  },
  {
    id: "adv-045",
    module: "5. Animation",
    title: "Wiggle the Badge",
    stage: "badge",
    brief: "Rock the badge back and forth with a small rotation keyframe for a playful wiggle effect.",
    hint: "@keyframes wiggle { 50% { transform: rotate(4deg); } } then animation: wiggle 0.6s ease-in-out infinite; on .badge.",
    starterCss: `
/* @keyframes wiggle {
  50% { transform: rotate(4deg); }
} */

.badge {
  /* animation: wiggle 0.6s ease-in-out infinite; */
}
`,
    solutionCss: `
@keyframes wiggle {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}

.badge {
  animation: wiggle 0.6s ease-in-out infinite;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".badge"}],
  },
  {
    id: "adv-046",
    module: "5. Animation",
    title: "Let the Card Float",
    stage: "card",
    brief: "A slow up-and-down translateY loop gives the card a gentle floating feel.",
    hint: "@keyframes float { 50% { transform: translateY(-6px); } } then animation: float 2.5s ease-in-out infinite; on .card.",
    starterCss: `
/* @keyframes float {
  50% { transform: translateY(-6px); }
} */

.card {
  /* animation: float 2.5s ease-in-out infinite; */
}
`,
    solutionCss: `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.card {
  animation: float 2.5s ease-in-out infinite;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".card"}],
  },
  {
    id: "adv-047",
    module: "5. Animation",
    title: "Flicker the Star",
    stage: "icon",
    brief: "Animate opacity between two steps using the steps() timing function for a flickering, non-smooth effect.",
    hint: "@keyframes flicker { 50% { opacity: 0.3; } } then animation: flicker 1.2s steps(2, end) infinite; on .icon.",
    starterCss: `
/* @keyframes flicker {
  50% { opacity: 0.3; }
} */

.icon {
  /* animation: flicker 1.2s steps(2, end) infinite; */
}
`,
    solutionCss: `
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.icon {
  animation: flicker 1.2s steps(2, end) infinite;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".icon"}],
  },
  {
    id: "adv-048",
    module: "5. Animation",
    title: "Grow the Badge In",
    stage: "badge",
    brief: "Animate the badge from a slightly smaller scale up to full size once, without looping.",
    hint: "@keyframes grow { from { transform: scale(0.8); } to { transform: scale(1); } } then animation: grow 0.5s ease-out; on .badge.",
    starterCss: `
/* @keyframes grow {
  from { transform: scale(0.8); }
  to { transform: scale(1); }
} */

.badge {
  /* animation: grow 0.5s ease-out; */
}
`,
    solutionCss: `
@keyframes grow {
  from { transform: scale(0.8); }
  to { transform: scale(1); }
}

.badge {
  animation: grow 0.5s ease-out;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".badge"}],
  },
  {
    id: "adv-049",
    module: "5. Animation",
    title: "Slide the Card into View",
    stage: "card",
    brief: "Combine a translateX and an opacity fade in one keyframe so the card slides in from the left.",
    hint: "@keyframes slideIn { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } } then animation: slideIn 0.7s ease-out; on .card.",
    starterCss: `
/* @keyframes slideIn {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
} */

.card {
  /* animation: slideIn 0.7s ease-out; */
}
`,
    solutionCss: `
@keyframes slideIn {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.card {
  animation: slideIn 0.7s ease-out;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".card"}],
  },
  {
    id: "adv-050",
    module: "5. Animation",
    title: "Animation Capstone: Twinkle",
    stage: "icon",
    brief: "Combine a scale and a rotation in one keyframe for a twinkling star effect, looping forever.",
    hint: "@keyframes twinkle { 50% { transform: scale(1.2) rotate(15deg); } } then animation: twinkle 1.5s ease-in-out infinite; on .icon.",
    starterCss: `
/* @keyframes twinkle {
  50% { transform: scale(1.2) rotate(15deg); }
} */

.icon {
  /* animation: twinkle 1.5s ease-in-out infinite; */
}
`,
    solutionCss: `
@keyframes twinkle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(15deg); }
}

.icon {
  animation: twinkle 1.5s ease-in-out infinite;
}
`,
    rules: [{"type": "cssIncludes", "text": "@keyframes"}, {"type": "animationSet", "sel": ".icon"}],
  },
  {
    id: "adv-051",
    module: "6. Modern Motion & Accessibility",
    title: "Drive an Animation by Scroll Position",
    stage: "icon",
    brief: "animation-timeline lets an animation progress based on scroll position instead of a clock \u2014 a scroll-driven animation. Support is still landing across browsers, so treat this as a forward-looking preview; here we just check for the syntax.",
    hint: "Set animation-timeline: scroll(); alongside a normal animation shorthand on .icon.",
    starterCss: `
/* @keyframes spin { to { transform: rotate(360deg); } } */

.icon {
  /* animation: spin linear; */
  /* animation-timeline: scroll(); */
}
`,
    solutionCss: `
@keyframes spin {
  to { transform: rotate(360deg); }
}

.icon {
  animation: spin linear;
  animation-timeline: scroll();
}
`,
    rules: [{"type": "cssIncludes", "text": "animation-timeline"}],
  },
  {
    id: "adv-052",
    module: "6. Modern Motion & Accessibility",
    title: "Respect Reduced Motion",
    stage: "card",
    brief: "The prefers-reduced-motion media feature reports whether the user has asked their OS for less motion. Wrap an animation-disabling rule in that media query so motion-sensitive visitors are respected.",
    hint: "Wrap .card { animation: none; } inside @media (prefers-reduced-motion: reduce) { }.",
    starterCss: `
.card {
  /* animation: fadeIn 1s ease-in; */
}
/* @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } */

/* @media (prefers-reduced-motion: reduce) {
  .card { animation: none; }
} */
`,
    solutionCss: `
.card {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["prefers-reduced-motion", "@media"]}],
  },
  {
    id: "adv-053",
    module: "6. Modern Motion & Accessibility",
    title: "Tie an Animation to the Viewport",
    stage: "icon",
    brief: "The view() function ties animation-timeline to an element's position as it crosses the viewport \u2014 the basis for scroll-triggered reveals. It's a newer feature, so this check just looks for the syntax.",
    hint: "Set animation-timeline: view(); alongside an animation shorthand on .icon.",
    starterCss: `
/* @keyframes spin { to { transform: rotate(360deg); } } */

.icon {
  /* animation: spin 1s linear; */
  /* animation-timeline: view(); */
}
`,
    solutionCss: `
@keyframes spin {
  to { transform: rotate(360deg); }
}

.icon {
  animation: spin 1s linear;
  animation-timeline: view();
}
`,
    rules: [{"type": "cssIncludes", "text": "animation-timeline"}],
  },
  {
    id: "adv-054",
    module: "6. Modern Motion & Accessibility",
    title: "Turn Animation Off for Reduced Motion",
    stage: "card",
    brief: "Inside a prefers-reduced-motion media query, set animation to none to fully cancel any motion for people who've asked for it.",
    hint: "@media (prefers-reduced-motion: reduce) { .card { animation: none; } }.",
    starterCss: `
/* @media (prefers-reduced-motion: reduce) {
  .card { animation: none; }
} */
`,
    solutionCss: `
@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["prefers-reduced-motion", "none"]}],
  },
  {
    id: "adv-055",
    module: "6. Modern Motion & Accessibility",
    title: "Combine a Timeline with Keyframes",
    stage: "icon",
    brief: "Scroll-driven animations still need a @keyframes block to define what happens \u2014 animation-timeline just changes what drives the progress.",
    hint: "Define @keyframes grow, then use animation-timeline: scroll(); alongside animation: grow linear; on .icon.",
    starterCss: `
/* @keyframes grow { from { transform: scale(0.5); } to { transform: scale(1); } } */

.icon {
  /* animation: grow linear; */
  /* animation-timeline: scroll(); */
}
`,
    solutionCss: `
@keyframes grow {
  from { transform: scale(0.5); }
  to { transform: scale(1); }
}

.icon {
  animation: grow linear;
  animation-timeline: scroll();
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["animation-timeline", "@keyframes"]}],
  },
  {
    id: "adv-056",
    module: "6. Modern Motion & Accessibility",
    title: "Just Ask: Does the User Want Less Motion?",
    stage: "card",
    brief: "Sometimes the simplest accessible choice is to check prefers-reduced-motion at all before adding movement.",
    hint: "Add an @media (prefers-reduced-motion: reduce) { } block anywhere in your CSS.",
    starterCss: `
/* @media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
} */
`,
    solutionCss: `
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "prefers-reduced-motion"}],
  },
  {
    id: "adv-057",
    module: "6. Modern Motion & Accessibility",
    title: "Scroll the Root Timeline",
    stage: "icon",
    brief: "scroll() accepts an optional scroller argument like root to be explicit about which scrollable element drives the animation.",
    hint: "Write animation-timeline: scroll(root); alongside an animation shorthand.",
    starterCss: `
/* @keyframes spin { to { transform: rotate(360deg); } } */

.icon {
  /* animation: spin 1s linear infinite; */
  /* animation-timeline: scroll(root); */
}
`,
    solutionCss: `
@keyframes spin {
  to { transform: rotate(360deg); }
}

.icon {
  animation: spin 1s linear infinite;
  animation-timeline: scroll(root);
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["animation-timeline", "scroll("]}],
  },
  {
    id: "adv-058",
    module: "6. Modern Motion & Accessibility",
    title: "Cancel a Transition for Reduced Motion",
    stage: "card",
    brief: "prefers-reduced-motion can turn off transitions just as easily as animations. Give the card a transition, then neutralize it inside the media query.",
    hint: "Set a transition on .card, then override it to none inside @media (prefers-reduced-motion: reduce) { }.",
    starterCss: `
.card {
  /* transition: transform 0.3s ease; */
}

/* @media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
} */
`,
    solutionCss: `
.card {
  transition: transform 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["prefers-reduced-motion", "transition"]}],
  },
  {
    id: "adv-059",
    module: "6. Modern Motion & Accessibility",
    title: "Watch an Element Cross the Viewport",
    stage: "icon",
    brief: "view(block) scopes the view-progress timeline to the block axis as the element travels through the viewport.",
    hint: "Write animation-timeline: view(block); alongside an animation shorthand.",
    starterCss: `
/* @keyframes spin { to { transform: rotate(360deg); } } */

.icon {
  /* animation: spin 1s linear; */
  /* animation-timeline: view(block); */
}
`,
    solutionCss: `
@keyframes spin {
  to { transform: rotate(360deg); }
}

.icon {
  animation: spin 1s linear;
  animation-timeline: view(block);
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["animation-timeline", "view("]}],
  },
  {
    id: "adv-060",
    module: "6. Modern Motion & Accessibility",
    title: "Motion & Accessibility Capstone",
    stage: "card",
    brief: "Give the card a floating animation, then make sure it's fully disabled for anyone who prefers reduced motion.",
    hint: "Animate .card with @keyframes float, then set animation: none inside @media (prefers-reduced-motion: reduce) { }.",
    starterCss: `
.card {
  /* animation: float 2s ease-in-out infinite; */
}
/* @keyframes float { 50% { transform: translateY(-6px); } } */

/* @media (prefers-reduced-motion: reduce) {
  .card { animation: none; }
} */
`,
    solutionCss: `
.card {
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "prefers-reduced-motion"}],
  },
  {
    id: "adv-061",
    module: "7. Modern Layout",
    title: "Ratio the Placeholder 16:9",
    stage: "placeholder",
    brief: "aspect-ratio lets you lock a box's height to a ratio of its width without any padding-hack trickery. Give the placeholder a 16:9 ratio.",
    hint: "Set aspect-ratio: 16 / 9; on .ph.",
    starterCss: `
.ph {
  /* aspect-ratio: 16 / 9; */
}
`,
    solutionCss: `
.ph {
  aspect-ratio: 16 / 9;
}
`,
    rules: [{"type": "cssIncludes", "text": "aspect-ratio"}, {"type": "propMin", "sel": ".ph", "prop": "height", "minPx": 80}],
  },
  {
    id: "adv-062",
    module: "7. Modern Layout",
    title: "Make the Placeholder a Perfect Square",
    stage: "placeholder",
    brief: "A 1:1 aspect-ratio turns any box into a square, whatever its width happens to be.",
    hint: "Set aspect-ratio: 1 / 1; on .ph.",
    starterCss: `
.ph {
  /* aspect-ratio: 1 / 1; */
}
`,
    solutionCss: `
.ph {
  aspect-ratio: 1 / 1;
}
`,
    rules: [{"type": "cssIncludes", "text": "aspect-ratio"}, {"type": "propMin", "sel": ".ph", "prop": "height", "minPx": 140}],
  },
  {
    id: "adv-063",
    module: "7. Modern Layout",
    title: "Ratio the Placeholder 4:3",
    stage: "placeholder",
    brief: "Give the placeholder an old-school photo ratio of 4:3 using aspect-ratio.",
    hint: "Set aspect-ratio: 4 / 3; on .ph.",
    starterCss: `
.ph {
  /* aspect-ratio: 4 / 3; */
}
`,
    solutionCss: `
.ph {
  aspect-ratio: 4 / 3;
}
`,
    rules: [{"type": "cssIncludes", "text": "aspect-ratio"}, {"type": "propMin", "sel": ".ph", "prop": "height", "minPx": 100}],
  },
  {
    id: "adv-064",
    module: "7. Modern Layout",
    title: "Stretch the Placeholder to 3:1",
    stage: "placeholder",
    brief: "A wide banner-style ratio like 3:1 keeps a box short and long using nothing but aspect-ratio.",
    hint: "Set aspect-ratio: 3 / 1; on .ph.",
    starterCss: `
.ph {
  /* aspect-ratio: 3 / 1; */
}
`,
    solutionCss: `
.ph {
  aspect-ratio: 3 / 1;
}
`,
    rules: [{"type": "cssIncludes", "text": "aspect-ratio"}, {"type": "propMin", "sel": ".ph", "prop": "height", "minPx": 40}],
  },
  {
    id: "adv-065",
    module: "7. Modern Layout",
    title: "Ratio the Placeholder 2:1",
    stage: "placeholder",
    brief: "Give the placeholder a gentle 2:1 widescreen ratio.",
    hint: "Set aspect-ratio: 2 / 1; on .ph.",
    starterCss: `
.ph {
  /* aspect-ratio: 2 / 1; */
}
`,
    solutionCss: `
.ph {
  aspect-ratio: 2 / 1;
}
`,
    rules: [{"type": "cssIncludes", "text": "aspect-ratio"}, {"type": "propMin", "sel": ".ph", "prop": "height", "minPx": 60}],
  },
  {
    id: "adv-066",
    module: "7. Modern Layout",
    title: "Let the Paragraph Scale with the Viewport",
    stage: "text-block",
    brief: "clamp(min, preferred, max) picks a value that scales with the viewport but never shrinks below its floor or grows past its ceiling \u2014 ideal for fluid type. Give the paragraph a clamped font-size.",
    hint: "Try font-size: clamp(18px, 3vw, 30px); on .text.",
    starterCss: `
.text {
  /* font-size: clamp(18px, 3vw, 30px); */
}
`,
    solutionCss: `
.text {
  font-size: clamp(18px, 3vw, 30px);
}
`,
    rules: [{"type": "cssIncludes", "text": "clamp("}, {"type": "propMin", "sel": ".text", "prop": "fontSize", "minPx": 17}],
  },
  {
    id: "adv-067",
    module: "7. Modern Layout",
    title: "Give the Quote Fluid Type",
    stage: "quote",
    brief: "Use clamp() to let the blockquote's font-size grow with the viewport while staying within safe bounds.",
    hint: "Try font-size: clamp(20px, 4vw, 34px); on .quote.",
    starterCss: `
.quote {
  /* font-size: clamp(20px, 4vw, 34px); */
}
`,
    solutionCss: `
.quote {
  font-size: clamp(20px, 4vw, 34px);
}
`,
    rules: [{"type": "cssIncludes", "text": "clamp("}, {"type": "propMin", "sel": ".quote", "prop": "fontSize", "minPx": 19}],
  },
  {
    id: "adv-068",
    module: "7. Modern Layout",
    title: "Fine-Tune the Paragraph's Fluid Range",
    stage: "text-block",
    brief: "Pick a narrower clamp() range for the paragraph so its size barely changes across viewports, but never dips below a comfortable floor.",
    hint: "Try font-size: clamp(19px, 2.5vw, 26px); on .text.",
    starterCss: `
.text {
  /* font-size: clamp(19px, 2.5vw, 26px); */
}
`,
    solutionCss: `
.text {
  font-size: clamp(19px, 2.5vw, 26px);
}
`,
    rules: [{"type": "cssIncludes", "text": "clamp("}, {"type": "propMin", "sel": ".text", "prop": "fontSize", "minPx": 18}],
  },
  {
    id: "adv-069",
    module: "7. Modern Layout",
    title: "Give the Quote a Bigger Floor",
    stage: "quote",
    brief: "Raise the minimum bound of the quote's clamp() so it always reads large, even on the smallest screens.",
    hint: "Try font-size: clamp(22px, 5vw, 40px); on .quote.",
    starterCss: `
.quote {
  /* font-size: clamp(22px, 5vw, 40px); */
}
`,
    solutionCss: `
.quote {
  font-size: clamp(22px, 5vw, 40px);
}
`,
    rules: [{"type": "cssIncludes", "text": "clamp("}, {"type": "propMin", "sel": ".quote", "prop": "fontSize", "minPx": 21}],
  },
  {
    id: "adv-070",
    module: "7. Modern Layout",
    title: "Modern Layout Capstone",
    stage: "text-block",
    brief: "One more fluid-type pass on the paragraph, tying together everything clamp() offers: a floor, a fluid middle, and a ceiling.",
    hint: "Try font-size: clamp(21px, 3vw, 29px); on .text.",
    starterCss: `
.text {
  /* font-size: clamp(21px, 3vw, 29px); */
}
`,
    solutionCss: `
.text {
  font-size: clamp(21px, 3vw, 29px);
}
`,
    rules: [{"type": "cssIncludes", "text": "clamp("}, {"type": "propMin", "sel": ".text", "prop": "fontSize", "minPx": 20}],
  },
  {
    id: "adv-071",
    module: "8. CSS Architecture",
    title: "Declare Your First Layer",
    stage: "card",
    brief: "@layer groups rules into named buckets that resolve in a fixed, author-controlled order, independent of specificity \u2014 a big deal for taming large stylesheets. Border the card from inside a layer named base.",
    hint: "Wrap .card { border: 4px solid ...; } inside @layer base { }.",
    starterCss: `
/* @layer base {
  .card { border: 4px solid ...; }
} */
`,
    solutionCss: `
@layer base {
  .card {
    border: 4px solid #fbd38d;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "@layer"}, {"type": "borderColor", "sel": ".card", "color": "#fbd38d", "tolerance": 30}],
  },
  {
    id: "adv-072",
    module: "8. CSS Architecture",
    title: "Border the Tag from a Theme Layer",
    stage: "tag",
    brief: "Put a border rule for .tag inside a layer named theme, showing that layers can hold any kind of styling, not just resets.",
    hint: "Wrap .tag { border: 3px solid ...; } inside @layer theme { }.",
    starterCss: `
/* @layer theme {
  .tag { border: 3px solid ...; }
} */
`,
    solutionCss: `
@layer theme {
  .tag {
    border: 3px solid #2b6cb0;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "@layer"}, {"type": "borderColor", "sel": ".tag", "color": "#2b6cb0", "tolerance": 30}],
  },
  {
    id: "adv-073",
    module: "8. CSS Architecture",
    title: "A Utilities Layer for the Card",
    stage: "card",
    brief: "Give the card a border from inside a layer named utilities \u2014 a common pattern for small, single-purpose helper classes.",
    hint: "Wrap .card { border: 3px solid ...; } inside @layer utilities { }.",
    starterCss: `
/* @layer utilities {
  .card { border: 3px solid ...; }
} */
`,
    solutionCss: `
@layer utilities {
  .card {
    border: 3px solid #38a169;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "@layer"}, {"type": "borderSet", "sel": ".card"}],
  },
  {
    id: "adv-074",
    module: "8. CSS Architecture",
    title: "Border the Badge from a Components Layer",
    stage: "badge",
    brief: "Put a border rule for .badge inside a layer named components, mirroring how design systems often split base styles, components, and utilities.",
    hint: "Wrap .badge { border: 3px solid ...; } inside @layer components { }.",
    starterCss: `
/* @layer components {
  .badge { border: 3px solid ...; }
} */
`,
    solutionCss: `
@layer components {
  .badge {
    border: 3px solid #9f7aea;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "@layer"}, {"type": "borderColor", "sel": ".badge", "color": "#9f7aea", "tolerance": 30}],
  },
  {
    id: "adv-075",
    module: "8. CSS Architecture",
    title: "Declare Layer Order Explicitly",
    stage: "card",
    brief: "You can declare the order of your layers up front with a bare @layer statement before defining any of them, which is exactly how large systems keep cascade order predictable.",
    hint: "Write @layer base, theme; first, then define @layer theme { .card { border: 4px solid ...; } }.",
    starterCss: `
/* @layer base, theme; */

/* @layer theme {
  .card { border: 4px solid ...; }
} */
`,
    solutionCss: `
@layer base, theme;

@layer theme {
  .card {
    border: 4px solid #fed7d7;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "@layer"}, {"type": "borderColor", "sel": ".card", "color": "#fed7d7", "tolerance": 30}],
  },
  {
    id: "adv-076",
    module: "8. CSS Architecture",
    title: "Nest a Selector Inside Itself",
    stage: "card",
    brief: "Native CSS nesting lets you write child rules directly inside a parent block using the & nesting selector, no preprocessor required. Add a nested &.card rule that borders the card.",
    hint: "Inside .card { }, write &.card { border: 3px solid ...; }.",
    starterCss: `
.card {
  background: #fff;
  /* &.card {
    border: 3px solid ...;
  } */
}
`,
    solutionCss: `
.card {
  background: #fff;
  &.card {
    border: 3px solid #319795;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "&"}, {"type": "borderSet", "sel": ".card"}],
  },
  {
    id: "adv-077",
    module: "8. CSS Architecture",
    title: "Nest an Empty Selector for a Pill Button",
    stage: "button",
    brief: "The bare & selector on its own line refers right back to the parent, which is handy for grouping declarations. Use it to round the button into a pill.",
    hint: "Inside .btn { }, write & { border-radius: 999px; }.",
    starterCss: `
.btn {
  background: #1a202c;
  /* & {
    border-radius: 999px;
  } */
}
`,
    solutionCss: `
.btn {
  background: #1a202c;
  & {
    border-radius: 999px;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "&"}, {"type": "pill", "sel": ".btn"}],
  },
  {
    id: "adv-078",
    module: "8. CSS Architecture",
    title: "Nest a Background Change on the Card",
    stage: "card",
    brief: "Nest a &.card rule inside .card to change its background \u2014 nesting composes with the class it's inside, just like writing .card.card by hand.",
    hint: "Inside .card { }, write &.card { background: ...; }.",
    starterCss: `
.card {
  /* &.card {
    background: ...;
  } */
}
`,
    solutionCss: `
.card {
  &.card {
    background: #faf089;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "&"}, {"type": "bgColor", "sel": ".card", "color": "#faf089", "tolerance": 30}],
  },
  {
    id: "adv-079",
    module: "8. CSS Architecture",
    title: "Nest a Background Change on the Button",
    stage: "button",
    brief: "Recolor the button's background using a nested &.btn rule instead of repeating the .btn selector.",
    hint: "Inside .btn { }, write &.btn { background: ...; }.",
    starterCss: `
.btn {
  /* &.btn {
    background: ...;
  } */
}
`,
    solutionCss: `
.btn {
  &.btn {
    background: #2c7a7b;
  }
}
`,
    rules: [{"type": "cssIncludes", "text": "&"}, {"type": "bgColor", "sel": ".btn", "color": "#2c7a7b", "tolerance": 30}],
  },
  {
    id: "adv-080",
    module: "8. CSS Architecture",
    title: "Architecture Capstone: Layer Plus Nesting",
    stage: "card",
    brief: "Combine two architectural tools at once: put a nested &.card rule inside a components layer to border the card.",
    hint: "Wrap @layer components { .card { &.card { border: 3px solid ...; } } }.",
    starterCss: `
/* @layer components {
  .card {
    &.card {
      border: 3px solid ...;
    }
  }
} */
`,
    solutionCss: `
@layer components {
  .card {
    &.card {
      border: 3px solid #6b46c1;
    }
  }
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["@layer", "&"]}, {"type": "borderSet", "sel": ".card"}],
  },
  {
    id: "adv-081",
    module: "9. New Native Features",
    title: "Recolor the List Markers",
    stage: "list",
    brief: "::marker is a pseudo-element that targets a list item's bullet or number directly, letting you style it without extra markup.",
    hint: "Write .list li::marker { color: ...; }.",
    starterCss: `
/* .list li::marker {
  color: ...;
} */
`,
    solutionCss: `
.list li::marker {
  color: #d53f8c;
}
`,
    rules: [{"type": "cssIncludes", "text": "::marker"}],
  },
  {
    id: "adv-082",
    module: "9. New Native Features",
    title: "Swap the Bullet for an Arrow",
    stage: "list",
    brief: "::marker also accepts a content property, so you can replace the default bullet with any string you like.",
    hint: "Write .list li::marker { content: \"arrow \"; }.",
    starterCss: `
/* .list li::marker {
  content: "";
} */
`,
    solutionCss: `
.list li::marker {
  content: "-> ";
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["::marker", "content"]}],
  },
  {
    id: "adv-083",
    module: "9. New Native Features",
    title: "Bold the List Markers",
    stage: "list",
    brief: "A handful of properties, including font-weight, are allowed inside ::marker \u2014 enough to give bullets real presence.",
    hint: "Write .list li::marker { font-weight: 700; }.",
    starterCss: `
/* .list li::marker {
  font-weight: 700;
} */
`,
    solutionCss: `
.list li::marker {
  font-weight: 700;
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["::marker", "font-weight"]}],
  },
  {
    id: "adv-084",
    module: "9. New Native Features",
    title: "Flip the Quote to Vertical Text",
    stage: "quote",
    brief: "writing-mode changes the direction text flows \u2014 vertical-rl stacks lines top-to-bottom, reading right to left, useful for some scripts and decorative headlines alike.",
    hint: "Set writing-mode: vertical-rl; on .quote.",
    starterCss: `
.quote {
  /* writing-mode: vertical-rl; */
}
`,
    solutionCss: `
.quote {
  writing-mode: vertical-rl;
}
`,
    rules: [{"type": "cssIncludes", "text": "writing-mode"}],
  },
  {
    id: "adv-085",
    module: "9. New Native Features",
    title: "Try the Other Vertical Direction",
    stage: "quote",
    brief: "vertical-lr is writing-mode's other vertical option, stacking lines left to right instead of right to left.",
    hint: "Set writing-mode: vertical-lr; on .quote.",
    starterCss: `
.quote {
  /* writing-mode: vertical-lr; */
}
`,
    solutionCss: `
.quote {
  writing-mode: vertical-lr;
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["writing-mode", "vertical-lr"]}],
  },
  {
    id: "adv-086",
    module: "9. New Native Features",
    title: "Try Sideways Writing Mode",
    stage: "quote",
    brief: "sideways-lr rotates each line of text 90 degrees so it reads sideways while still flowing left to right \u2014 a more decorative writing-mode option.",
    hint: "Set writing-mode: sideways-lr; on .quote.",
    starterCss: `
.quote {
  /* writing-mode: sideways-lr; */
}
`,
    solutionCss: `
.quote {
  writing-mode: sideways-lr;
}
`,
    rules: [{"type": "cssIncludesAll", "texts": ["writing-mode", "sideways-lr"]}],
  },
  {
    id: "adv-087",
    module: "9. New Native Features",
    title: "Outline the Button on Keyboard Focus",
    stage: "button",
    brief: ":focus-visible only shows a focus ring when the browser thinks it's helpful \u2014 typically keyboard navigation \u2014 skipping the ring for mouse clicks. Give the button a visible outline for that case.",
    hint: "Write .btn:focus-visible { outline: 3px solid ...; }.",
    starterCss: `
/* .btn:focus-visible {
  outline: 3px solid ...;
} */
`,
    solutionCss: `
.btn:focus-visible {
  outline: 3px solid #4299e1;
}
`,
    rules: [{"type": "cssIncludesAll", "texts": [":focus-visible", "outline"]}],
  },
  {
    id: "adv-088",
    module: "9. New Native Features",
    title: "Give the Link a Keyboard-Only Outline",
    stage: "link",
    brief: "Add a dashed outline that only appears when the link receives keyboard focus, using :focus-visible.",
    hint: "Write .link:focus-visible { outline: 2px dashed ...; }.",
    starterCss: `
/* .link:focus-visible {
  outline: 2px dashed ...;
} */
`,
    solutionCss: `
.link:focus-visible {
  outline: 2px dashed #d53f8c;
}
`,
    rules: [{"type": "cssIncludesAll", "texts": [":focus-visible", "outline"]}],
  },
  {
    id: "adv-089",
    module: "9. New Native Features",
    title: "Recolor the Button on Keyboard Focus",
    stage: "button",
    brief: ":focus-visible isn't limited to outlines \u2014 use it to swap the button's background when it receives keyboard focus.",
    hint: "Write .btn:focus-visible { background: ...; }.",
    starterCss: `
/* .btn:focus-visible {
  background: ...;
} */
`,
    solutionCss: `
.btn:focus-visible {
  background: #2b6cb0;
}
`,
    rules: [{"type": "cssIncludes", "text": ":focus-visible"}],
  },
  {
    id: "adv-090",
    module: "9. New Native Features",
    title: "Underline the Link on Keyboard Focus",
    stage: "link",
    brief: "Add a text-decoration change that only appears for :focus-visible, keeping mouse users' experience untouched.",
    hint: "Write .link:focus-visible { text-decoration: underline; }.",
    starterCss: `
/* .link:focus-visible {
  text-decoration: underline;
} */
`,
    solutionCss: `
.link:focus-visible {
  text-decoration: underline;
}
`,
    rules: [{"type": "cssIncludesAll", "texts": [":focus-visible", "text-decoration"]}],
  },
  {
    id: "adv-091",
    module: "10. Real-World Combos",
    title: "Theme Plus Mix: The Tag",
    stage: "tag",
    brief: "Real components often stack several modern features together. Declare a --base custom property, then blend it toward white with color-mix() for the tag's background.",
    hint: "Declare --base, then background: color-mix(in srgb, var(--base) 70%, white 30%);.",
    starterCss: `
.tag {
  /* declare --base, then use color-mix(in srgb, var(--base) 70%, white 30%) */
}
`,
    solutionCss: `
.tag {
  --base: #3182ce;
  background: color-mix(in srgb, var(--base) 70%, white 30%);
}
`,
    rules: [{"type": "varUsed", "name": "base"}, {"type": "cssIncludes", "text": "color-mix("}, {"type": "bgSet", "sel": ".tag"}],
  },
  {
    id: "adv-092",
    module: "10. Real-World Combos",
    title: "Theme Plus OKLCH: The Card's Border",
    stage: "card",
    brief: "Store an OKLCH color in a custom property, then use that variable to border the card \u2014 two modern color features working together.",
    hint: "Declare --accent: oklch(...); and use it in border: 4px solid var(--accent);.",
    starterCss: `
.card {
  /* declare --accent as an oklch() value, then border: 4px solid var(--accent); */
}
`,
    solutionCss: `
.card {
  --accent: oklch(60% 0.15 300);
  border: 4px solid var(--accent);
}
`,
    rules: [{"type": "varUsed", "name": "accent"}, {"type": "cssIncludes", "text": "oklch("}, {"type": "borderSet", "sel": ".card"}],
  },
  {
    id: "adv-093",
    module: "10. Real-World Combos",
    title: "Theme Plus Mix: The Badge",
    stage: "badge",
    brief: "Declare a --tone variable, then mix it with a touch of black using color-mix() for the badge's background.",
    hint: "Declare --tone, then background: color-mix(in srgb, var(--tone) 60%, black 10%);.",
    starterCss: `
.badge {
  /* declare --tone, then use color-mix(in srgb, var(--tone) ..%, black ..%) */
}
`,
    solutionCss: `
.badge {
  --tone: #e53e3e;
  background: color-mix(in srgb, var(--tone) 60%, black 10%);
}
`,
    rules: [{"type": "varUsed", "name": "tone"}, {"type": "cssIncludes", "text": "color-mix("}, {"type": "bgSet", "sel": ".badge"}],
  },
  {
    id: "adv-094",
    module: "10. Real-World Combos",
    title: "Theme Plus OKLCH: The Tag's Fill",
    stage: "tag",
    brief: "Store an OKLCH sky-blue directly inside a custom property, then use that variable as the tag's background.",
    hint: "Declare --sky: oklch(...); and use background: var(--sky);.",
    starterCss: `
.tag {
  /* declare --sky as an oklch() value, then background: var(--sky); */
}
`,
    solutionCss: `
.tag {
  --sky: oklch(70% 0.1 220);
  background: var(--sky);
}
`,
    rules: [{"type": "varUsed", "name": "sky"}, {"type": "cssIncludes", "text": "oklch("}, {"type": "bgSet", "sel": ".tag"}],
  },
  {
    id: "adv-095",
    module: "10. Real-World Combos",
    title: "Theme Plus Mix: The Card's Edge",
    stage: "card",
    brief: "Declare a --line variable, then darken it slightly with color-mix() for the card's border.",
    hint: "Declare --line, then border: 3px solid color-mix(in srgb, var(--line) 80%, black 20%);.",
    starterCss: `
.card {
  /* declare --line, then use color-mix(in srgb, var(--line) ..%, black ..%) for a border */
}
`,
    solutionCss: `
.card {
  --line: #38a169;
  border: 3px solid color-mix(in srgb, var(--line) 80%, black 20%);
}
`,
    rules: [{"type": "varUsed", "name": "line"}, {"type": "cssIncludes", "text": "color-mix("}, {"type": "borderSet", "sel": ".card"}],
  },
  {
    id: "adv-096",
    module: "10. Real-World Combos",
    title: "Theme Plus OKLCH: The Badge's Edge",
    stage: "badge",
    brief: "Store an OKLCH red in a custom property, then border the badge with it.",
    hint: "Declare --edge: oklch(...); and use border: 3px solid var(--edge);.",
    starterCss: `
.badge {
  /* declare --edge as an oklch() value, then border: 3px solid var(--edge); */
}
`,
    solutionCss: `
.badge {
  --edge: oklch(50% 0.2 30);
  border: 3px solid var(--edge);
}
`,
    rules: [{"type": "varUsed", "name": "edge"}, {"type": "cssIncludes", "text": "oklch("}, {"type": "borderSet", "sel": ".badge"}],
  },
  {
    id: "adv-097",
    module: "10. Real-World Combos",
    title: "Triple Combo: Variable, Mix, and OKLCH",
    stage: "tag",
    brief: "Stack three modern color features on the tag at once: a custom property, color-mix(), and the oklch color space, all in one background declaration.",
    hint: "Declare --glow, then background: color-mix(in oklch, var(--glow) 65%, white 35%);.",
    starterCss: `
.tag {
  /* declare --glow, then color-mix(in oklch, var(--glow) 65%, white 35%) as the background */
}
`,
    solutionCss: `
.tag {
  --glow: #f6ad55;
  background: color-mix(in oklch, var(--glow) 65%, white 35%);
}
`,
    rules: [{"type": "varUsed", "name": "glow"}, {"type": "cssIncludesAll", "texts": ["color-mix(", "oklch"]}, {"type": "bgSet", "sel": ".tag"}],
  },
  {
    id: "adv-098",
    module: "10. Real-World Combos",
    title: "Triple Combo: The Card's Exact Fill",
    stage: "card",
    brief: "Mix a custom-property color with itself in the oklch space \u2014 the math stays exact, so you can verify the card lands on precisely the right hex.",
    hint: "Declare --brand2, then background: color-mix(in srgb, var(--brand2) 50%, var(--brand2) 50%);.",
    starterCss: `
.card {
  /* declare --brand2, then mix it with itself for the background */
}
`,
    solutionCss: `
.card {
  --brand2: #2c7a7b;
  background: color-mix(in srgb, var(--brand2) 50%, var(--brand2) 50%);
}
`,
    rules: [{"type": "varUsed", "name": "brand2"}, {"type": "cssIncludes", "text": "color-mix("}, {"type": "bgColor", "sel": ".card", "color": "#2c7a7b", "tolerance": 30}],
  },
  {
    id: "adv-099",
    module: "10. Real-World Combos",
    title: "Triple Combo: The Badge's Coral Glow",
    stage: "badge",
    brief: "Store an OKLCH coral tone in a custom property and fill the badge with it directly.",
    hint: "Declare --coral2: oklch(...); and use background: var(--coral2);.",
    starterCss: `
.badge {
  /* declare --coral2 as an oklch() value, then background: var(--coral2); */
}
`,
    solutionCss: `
.badge {
  --coral2: oklch(65% 0.19 25);
  background: var(--coral2);
}
`,
    rules: [{"type": "varUsed", "name": "coral2"}, {"type": "cssIncludes", "text": "oklch("}, {"type": "bgSet", "sel": ".badge"}],
  },
  {
    id: "adv-100",
    module: "10. Real-World Combos",
    title: "Grand Finale: Everything at Once",
    stage: "tag",
    brief: "For the last challenge, combine a custom property, color-mix(), and the oklch color space into one themeable tag background \u2014 the full toolkit from this playground in a single declaration.",
    hint: "Declare --finale, then background: color-mix(in oklch, var(--finale) 55%, white 45%);.",
    starterCss: `
.tag {
  /* declare --finale, then color-mix(in oklch, var(--finale) 55%, white 45%) as the background */
}
`,
    solutionCss: `
.tag {
  --finale: #805ad5;
  background: color-mix(in oklch, var(--finale) 55%, white 45%);
}
`,
    rules: [{"type": "varUsed", "name": "finale"}, {"type": "cssIncludesAll", "texts": ["color-mix(", "oklch"]}, {"type": "bgSet", "sel": ".tag"}],
  },
];
