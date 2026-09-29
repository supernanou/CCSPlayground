const INTERMEDIATE_LESSONS = [
  {
    id: "int-001",
    module: "1. Flexbox Fundamentals",
    title: "What problem flexbox solves",
    summary: "Before flexbox, centering things or evenly spacing a row of boxes meant fighting floats, negative margins, and fragile hacks. Flexbox gives you a layout mode built specifically for arranging items in a single row or column, handling spacing and alignment for you.",
    code: null
  },
  {
    id: "int-002",
    module: "1. Flexbox Fundamentals",
    title: "display: flex and the flex container",
    summary: "Setting display: flex on an element turns it into a flex container, and every direct child instantly becomes a flex item lined up in a row. This one declaration switches on a whole new set of alignment and spacing properties for that element.",
    code: `.container {
  display: flex;
}

.container > div {
  padding: 12px;
  background: #fff3c4;
}`
  },
  {
    id: "int-003",
    module: "1. Flexbox Fundamentals",
    title: "flex-direction",
    summary: "flex-direction controls which way the main axis runs: row (the default, left to right), row-reverse, column, or column-reverse. Changing it flips how justify-content and align-items behave, since they always follow the main and cross axis, not literal left/right.",
    code: `.stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
}`
  },
  {
    id: "int-004",
    module: "1. Flexbox Fundamentals",
    title: "justify-content",
    summary: "justify-content spaces out items along the main axis of a flex container, letting you push them to the start, end, center, or distribute the extra space between or around them. It only ever moves items, it does not resize them.",
    code: `.toolbar {
  display: flex;
  justify-content: space-between;
}`
  },
  {
    id: "int-005",
    module: "1. Flexbox Fundamentals",
    title: "align-items",
    summary: "align-items positions flex items along the cross axis, which is perpendicular to flex-direction. In a default row layout that means controlling vertical alignment, so it is the classic answer to 'how do I vertically center this'.",
    code: `.header {
  display: flex;
  align-items: center;
  height: 64px;
}`
  },
  {
    id: "int-006",
    module: "1. Flexbox Fundamentals",
    title: "align-self",
    summary: "align-self overrides align-items for one individual flex item, so a single child can sit at the top, bottom, or center of the cross axis while its siblings follow the container's default. It is handy when just one item needs special treatment.",
    code: `.item--highlight {
  align-self: flex-end;
}`
  },
  {
    id: "int-007",
    module: "1. Flexbox Fundamentals",
    title: "flex-wrap",
    summary: "By default, flex items squeeze onto a single line even if they overflow. flex-wrap: wrap lets items drop onto new lines once they run out of room, which is essential for building rows of cards or tags that adapt to the available width.",
    code: `.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}`
  },
  {
    id: "int-008",
    module: "1. Flexbox Fundamentals",
    title: "gap in flexbox",
    summary: "gap adds consistent spacing between flex items without the extra margin math that used to require negative margins or :not(:last-child) tricks. It only creates space between items, never around the outer edge of the container.",
    code: `.row {
  display: flex;
  gap: 16px;
}`
  },
  {
    id: "int-009",
    module: "1. Flexbox Fundamentals",
    title: "flex-grow, flex-shrink, flex-basis",
    summary: "flex-basis sets an item's starting size before extra space is distributed, flex-grow says how much of the leftover space it should soak up, and flex-shrink says how much it should shrink when space is tight. Together they decide exactly how flexible each item is.",
    code: `.sidebar {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 240px;
}

.main {
  flex-grow: 1;
}`
  },
  {
    id: "int-010",
    module: "1. Flexbox Fundamentals",
    title: "The flex shorthand",
    summary: "flex is shorthand for flex-grow, flex-shrink, and flex-basis in one declaration, and it quietly sets sensible defaults for whichever values you skip. flex: 1 is the most common pattern, meaning 'grow and shrink freely, starting from an automatic size'.",
    code: `.column {
  flex: 1;
}

.fixed-column {
  flex: 0 0 200px;
}`
  },
  {
    id: "int-011",
    module: "2. Flexbox in Practice",
    title: "Building a navbar with flexbox",
    summary: "A typical navbar is a logo on one side and links on the other, all vertically centered, which is exactly what justify-content: space-between and align-items: center were made for. Flexbox turns this once-fiddly layout into two lines of CSS.",
    code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}`
  },
  {
    id: "int-012",
    module: "2. Flexbox in Practice",
    title: "Building a card row with flexbox",
    summary: "A row of equal-width cards that wraps nicely on smaller screens comes from combining flex-wrap with a flex-basis on each card, so every card claims a minimum width but happily grows to fill the row.",
    code: `.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  flex: 1 1 220px;
}`
  },
  {
    id: "int-013",
    module: "2. Flexbox in Practice",
    title: "align-content vs align-items",
    summary: "align-items positions items within their own line, while align-content positions the lines themselves within the container when there is extra vertical space and the items have wrapped. If there is only one line, align-content has nothing to do.",
    code: `.grid-like {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 400px;
}`
  },
  {
    id: "int-014",
    module: "2. Flexbox in Practice",
    title: "order property",
    summary: "order lets you change the visual order of flex items without touching your HTML, which is great for reordering content at different breakpoints. Items default to order: 0 and are sorted from lowest to highest.",
    code: `.item--first-visually {
  order: -1;
}`
  },
  {
    id: "int-015",
    module: "2. Flexbox in Practice",
    title: "Centering anything with flexbox",
    summary: "Combining justify-content: center and align-items: center on a container centers its content both horizontally and vertically in one move, no matter the content's size. It is the most reached-for centering trick in modern CSS.",
    code: `.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}`
  },
  {
    id: "int-016",
    module: "2. Flexbox in Practice",
    title: "Flexbox for equal-height columns",
    summary: "Flex items stretch to match the tallest sibling by default, because align-items starts at 'stretch'. That single default quietly solves the classic equal-height-columns problem that used to need table layouts or JavaScript.",
    code: `.columns {
  display: flex;
}

.column {
  padding: 16px;
  background: #fff8e1;
}`
  },
  {
    id: "int-017",
    module: "2. Flexbox in Practice",
    title: "Responsive flex-wrap patterns",
    summary: "Pairing flex-wrap: wrap with a flex-basis expressed as a percentage or min-width lets a layout reflow from several columns down to one without a single media query, since items simply wrap when they no longer fit.",
    code: `.panels {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.panel {
  flex: 1 1 260px;
}`
  },
  {
    id: "int-018",
    module: "2. Flexbox in Practice",
    title: "Nesting flex containers",
    summary: "A flex item can itself be a flex container for its own children, and the two layouts operate completely independently. Nesting flex rows and columns like this is how most real interfaces are actually built, one small flex group at a time.",
    code: `.card {
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
}`
  },
  {
    id: "int-019",
    module: "2. Flexbox in Practice",
    title: "Common flexbox pitfalls",
    summary: "The usual surprises are items not shrinking because of a large min-width, images distorting because flex items stretch by default, and forgetting that percentage heights on flex children need an explicit height on the container to mean anything.",
    code: null
  },
  {
    id: "int-020",
    module: "2. Flexbox in Practice",
    title: "Flexbox vs inline-block: when to use which",
    summary: "inline-block was the old way to sit boxes side by side, but it leaves stray whitespace gaps in the markup and has no real alignment or spacing controls. Flexbox replaces it for almost every layout case; inline-block still has a niche for flowing text-like content such as inline tags within a paragraph.",
    code: null
  },
  {
    id: "int-021",
    module: "3. CSS Grid Fundamentals",
    title: "What problem grid solves",
    summary: "Flexbox is great at arranging items along one axis, but as soon as you need rows and columns to line up together, like a real page layout or a photo wall, you want a two-dimensional system. Grid lets you define both dimensions at once and place items anywhere inside that structure.",
    code: `.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}`
  },
  {
    id: "int-022",
    module: "3. CSS Grid Fundamentals",
    title: "display: grid and the grid container",
    summary: "display: grid turns an element into a grid container, and its direct children become grid items that get placed into the row and column structure you define. Without any template properties yet, it behaves like a single-column stack.",
    code: `.wrapper {
  display: grid;
  gap: 12px;
}`
  },
  {
    id: "int-023",
    module: "3. CSS Grid Fundamentals",
    title: "grid-template-columns",
    summary: "grid-template-columns defines how many column tracks your grid has and how wide each one is, using any mix of fixed units, percentages, or the flexible fr unit. It is the single property that shapes a grid's horizontal structure.",
    code: `.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`
  },
  {
    id: "int-024",
    module: "3. CSS Grid Fundamentals",
    title: "grid-template-rows",
    summary: "grid-template-rows works just like grid-template-columns but for the vertical tracks, letting you set explicit row heights instead of leaving every row to size itself automatically around its content.",
    code: `.page {
  display: grid;
  grid-template-rows: 80px 1fr 60px;
  height: 100vh;
}`
  },
  {
    id: "int-025",
    module: "3. CSS Grid Fundamentals",
    title: "The fr unit",
    summary: "The fr unit represents a fraction of the leftover space in a grid container after fixed-size tracks are accounted for, which makes it perfect for flexible columns that share space proportionally, like 2fr next to 1fr for a two-to-one split.",
    code: `.split {
  display: grid;
  grid-template-columns: 2fr 1fr;
}`
  },
  {
    id: "int-026",
    module: "3. CSS Grid Fundamentals",
    title: "gap in grid",
    summary: "gap in a grid container sets the space between rows and columns at once, or you can control them separately with row-gap and column-gap. It keeps tracks evenly spaced without adding margin to individual items.",
    code: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 12px;
}`
  },
  {
    id: "int-027",
    module: "3. CSS Grid Fundamentals",
    title: "grid-column and grid-row placement",
    summary: "grid-column and grid-row let an individual item span across specific grid lines, using a start / end syntax like grid-column: 1 / 3 to stretch across the first two columns. This is how you make one item bigger than the rest of the grid.",
    code: `.featured {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`
  },
  {
    id: "int-028",
    module: "3. CSS Grid Fundamentals",
    title: "repeat() and minmax()",
    summary: "repeat() avoids typing out the same track size over and over, and minmax() gives a track a floor and a ceiling so it never shrinks below or grows past a comfortable size. Combined, they are the backbone of most responsive grids.",
    code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 16px;
}`
  },
  {
    id: "int-029",
    module: "3. CSS Grid Fundamentals",
    title: "grid-template-areas",
    summary: "grid-template-areas lets you sketch a layout as a visual map of named regions right in your CSS, then assign each child to a named area with grid-area. It reads almost like ASCII art of the page, which makes complex layouts much easier to follow.",
    code: `.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }`
  },
  {
    id: "int-030",
    module: "3. CSS Grid Fundamentals",
    title: "Implicit vs explicit grid tracks",
    summary: "Explicit tracks are the rows and columns you define with grid-template-columns or grid-template-rows; implicit tracks are the extra ones grid creates automatically when items overflow that structure. grid-auto-rows and grid-auto-columns control the sizing of those implicit tracks.",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 120px;
}`
  },
  {
    id: "int-031",
    module: "4. CSS Grid in Practice",
    title: "Building a page layout with grid",
    summary: "A classic header, sidebar, main content, footer layout maps beautifully onto grid-template-areas, giving you a single readable block of CSS that describes the whole page skeleton instead of scattered floats and widths.",
    code: `.page {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
}`
  },
  {
    id: "int-032",
    module: "4. CSS Grid in Practice",
    title: "Building a photo gallery with grid",
    summary: "An even wall of photos comes from repeat() with a fixed column count and a set aspect ratio on each image, so every tile stays uniform no matter how many photos you add.",
    code: `.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.gallery img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}`
  },
  {
    id: "int-033",
    module: "4. CSS Grid in Practice",
    title: "Auto-fill vs auto-fit",
    summary: "Both auto-fill and auto-fit repeat as many tracks as will fit in the available space, but auto-fill keeps empty leftover tracks in place while auto-fit collapses them, letting existing items stretch to fill the row. That difference matters a lot when you have fewer items than columns.",
    code: `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}`
  },
  {
    id: "int-034",
    module: "4. CSS Grid in Practice",
    title: "Aligning items in a grid: justify-items and align-items",
    summary: "justify-items controls how each item sits horizontally within its own grid cell, and align-items controls how it sits vertically, both defaulting to stretch. They are the grid equivalent of flexbox's align-items, just applied per cell instead of along one axis.",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}`
  },
  {
    id: "int-035",
    module: "4. CSS Grid in Practice",
    title: "Aligning the whole grid: justify-content and align-content",
    summary: "When a grid's tracks add up to less than the container's size, justify-content and align-content decide how that whole block of tracks is positioned within the container, such as centering the entire grid rather than an individual item.",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
  width: 100%;
}`
  },
  {
    id: "int-036",
    module: "4. CSS Grid in Practice",
    title: "Grid vs flexbox: choosing the right tool",
    summary: "Reach for flexbox when you are arranging items in a single row or column and want their sizes to respond to content, and reach for grid when you need a real two-dimensional structure with rows and columns that line up together. Many real interfaces use both, grid for the overall page and flexbox inside individual components.",
    code: null
  },
  {
    id: "int-037",
    module: "4. CSS Grid in Practice",
    title: "Nested grids",
    summary: "A grid item can be a grid container in its own right, letting you build a card with its own internal row and column structure while still participating in the outer page grid. The two grids never interfere with each other's tracks.",
    code: `.outer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
}`
  },
  {
    id: "int-038",
    module: "4. CSS Grid in Practice",
    title: "Named grid lines",
    summary: "Instead of only referring to grid lines by number, you can name them in square brackets inside grid-template-columns or grid-template-rows, then place items using those names. It makes grid-column and grid-row declarations far more readable in a complex layout.",
    code: `.layout {
  display: grid;
  grid-template-columns: [full-start] 1fr [content-start] 3fr [content-end] 1fr [full-end];
}

.hero {
  grid-column: full-start / full-end;
}`
  },
  {
    id: "int-039",
    module: "4. CSS Grid in Practice",
    title: "Overlapping elements with grid",
    summary: "Because grid items are placed onto explicit lines, you can deliberately give two items the same grid-column and grid-row so they stack on top of each other, then use z-index to control which one appears on top. This is a clean way to layer text over an image.",
    code: `.hero {
  display: grid;
}

.hero img, .hero h1 {
  grid-column: 1;
  grid-row: 1;
}

.hero h1 {
  z-index: 1;
  align-self: end;
}`
  },
  {
    id: "int-040",
    module: "4. CSS Grid in Practice",
    title: "Responsive grids without media queries",
    summary: "repeat(auto-fit, minmax(200px, 1fr)) makes a grid that adds or removes columns on its own as the container width changes, giving you a fully responsive layout from a single declaration and no breakpoints at all.",
    code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}`
  },
  {
    id: "int-041",
    module: "5. Responsive Design",
    title: "What \"responsive\" actually means",
    summary: "Responsive design is about layouts that adapt to whatever screen or window they end up in, rather than being built for one fixed width. It is less about specific devices and more about writing CSS that reflows gracefully as space changes.",
    code: null
  },
  {
    id: "int-042",
    module: "5. Responsive Design",
    title: "Mobile-first vs desktop-first",
    summary: "Mobile-first CSS starts with simple, stacked styles for small screens and uses min-width media queries to add complexity as space grows, while desktop-first does the reverse with max-width queries. Mobile-first tends to produce leaner CSS since the base styles are already the simplest case.",
    code: `.card {
  display: block;
}

@media (min-width: 600px) {
  .card {
    display: flex;
  }
}`
  },
  {
    id: "int-043",
    module: "5. Responsive Design",
    title: "The viewport meta tag",
    summary: "Without the viewport meta tag, mobile browsers render pages at a wide desktop-like default width and zoom out, which breaks every media query you write. Adding it tells the browser to match the layout viewport to the actual device width.",
    code: `<meta name="viewport" content="width=device-width, initial-scale=1">`
  },
  {
    id: "int-044",
    module: "5. Responsive Design",
    title: "Writing your first media query",
    summary: "A media query wraps a block of CSS in a condition, most commonly a minimum or maximum viewport width, so those styles only apply when the condition is true. It is the core tool for changing a layout at different screen sizes.",
    code: `.container {
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 32px;
  }
}`
  },
  {
    id: "int-045",
    module: "5. Responsive Design",
    title: "Common breakpoints and why they're guidelines, not rules",
    summary: "Numbers like 480px, 768px, and 1024px show up everywhere as rough phone, tablet, and desktop breakpoints, but the best breakpoint is always wherever your own layout actually starts to look cramped or awkward. Design for the content, then add a breakpoint where it breaks, rather than picking numbers first.",
    code: null
  },
  {
    id: "int-046",
    module: "5. Responsive Design",
    title: "min-width vs max-width queries",
    summary: "A min-width query applies its styles once the viewport reaches or exceeds that width, which suits mobile-first design, while a max-width query applies below that width, suiting desktop-first design. Mixing both styles in the same project usually leads to confusing overlaps, so it is worth picking one approach and sticking with it.",
    code: `@media (min-width: 900px) {
  .sidebar { display: block; }
}

@media (max-width: 899px) {
  .sidebar { display: none; }
}`
  },
  {
    id: "int-047",
    module: "5. Responsive Design",
    title: "Responsive typography with clamp()",
    summary: "clamp() takes a minimum size, a preferred fluid size, and a maximum size, letting font sizes scale smoothly with the viewport while never getting too small to read or too large to look right. One line replaces a stack of media queries just for font-size.",
    code: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`
  },
  {
    id: "int-048",
    module: "5. Responsive Design",
    title: "Responsive images with max-width",
    summary: "Setting max-width: 100% and height: auto on images stops them from overflowing their container while still letting them shrink down proportionally on smaller screens, which is the simplest and most reliable responsive image rule there is.",
    code: `img {
  max-width: 100%;
  height: auto;
  display: block;
}`
  },
  {
    id: "int-049",
    module: "5. Responsive Design",
    title: "Hiding and showing content responsively",
    summary: "Wrapping display: none inside a media query is the standard way to hide an element at certain widths, such as swapping a full navbar for a mobile menu button. Remember that display: none removes the element from accessibility trees too, so use it thoughtfully.",
    code: `.mobile-menu-button {
  display: none;
}

@media (max-width: 700px) {
  .mobile-menu-button {
    display: block;
  }
  .full-nav {
    display: none;
  }
}`
  },
  {
    id: "int-050",
    module: "5. Responsive Design",
    title: "Testing responsiveness in DevTools",
    summary: "Browser DevTools include a device toolbar that lets you resize the viewport, simulate common device sizes, and drag the width freely to spot exactly where a layout breaks. Testing this way as you build is far faster than resizing an actual browser window by hand.",
    code: null
  },
  {
    id: "int-051",
    module: "6. Transitions & Transforms",
    title: "What CSS transitions do",
    summary: "A transition tells the browser to animate a property change smoothly over time instead of jumping instantly to the new value, turning a hover color change or a size shift into something that feels alive rather than abrupt.",
    code: `.button {
  background: #fdd835;
  transition: background 0.2s;
}

.button:hover {
  background: #fbc02d;
}`
  },
  {
    id: "int-052",
    module: "6. Transitions & Transforms",
    title: "The transition shorthand",
    summary: "The transition shorthand bundles property, duration, timing function, and delay into one declaration, in that order, so you can describe exactly how a change should animate in a single line.",
    code: `.card {
  transition: transform 0.3s ease 0.05s;
}`
  },
  {
    id: "int-053",
    module: "6. Transitions & Transforms",
    title: "Timing functions: ease, linear, cubic-bezier",
    summary: "The timing function shapes the speed curve of a transition: linear moves at a constant rate, ease starts and ends slower with a faster middle, and cubic-bezier lets you define a fully custom curve with four control points for bespoke motion.",
    code: `.box {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}`
  },
  {
    id: "int-054",
    module: "6. Transitions & Transforms",
    title: "Transitioning multiple properties",
    summary: "You can animate several properties at once by listing them comma-separated in the transition property, optionally giving each its own duration and easing, which is how a hover state can smoothly change color, size, and shadow together.",
    code: `.card {
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}`
  },
  {
    id: "int-055",
    module: "6. Transitions & Transforms",
    title: "transform: translate",
    summary: "translate() moves an element along the x and/or y axis without affecting document flow or triggering layout recalculation, which makes it a much cheaper and smoother way to shift an element than animating margin or position.",
    code: `.slide-in {
  transform: translateX(20px);
  transition: transform 0.3s ease;
}

.slide-in:hover {
  transform: translateX(0);
}`
  },
  {
    id: "int-056",
    module: "6. Transitions & Transforms",
    title: "transform: scale",
    summary: "scale() resizes an element by a multiplier around its transform-origin, so scale(1.1) makes something ten percent bigger, which is the go-to trick for a subtle hover grow effect on cards, buttons, and images.",
    code: `.thumbnail {
  transition: transform 0.2s ease;
}

.thumbnail:hover {
  transform: scale(1.05);
}`
  },
  {
    id: "int-057",
    module: "6. Transitions & Transforms",
    title: "transform: rotate",
    summary: "rotate() spins an element by a given angle around its transform-origin, commonly used to turn a chevron icon when a dropdown opens, or to add a playful tilt on hover.",
    code: `.chevron {
  transition: transform 0.2s ease;
}

.is-open .chevron {
  transform: rotate(180deg);
}`
  },
  {
    id: "int-058",
    module: "6. Transitions & Transforms",
    title: "transform: skew",
    summary: "skew() slants an element along the x and/or y axis, distorting its shape rather than rotating it as a whole. It is used sparingly, mostly for stylized banners, diagonal section dividers, or playful hover effects.",
    code: `.ribbon {
  transform: skewY(-3deg);
}`
  },
  {
    id: "int-059",
    module: "6. Transitions & Transforms",
    title: "Combining transforms",
    summary: "Multiple transform functions can be listed in one transform declaration and are applied in order, so transform: translateX(10px) rotate(5deg) scale(1.1) moves, rotates, and grows the element as a single combined operation rather than three separate ones.",
    code: `.card:hover {
  transform: translateY(-6px) scale(1.02) rotate(1deg);
}`
  },
  {
    id: "int-060",
    module: "6. Transitions & Transforms",
    title: "transform-origin",
    summary: "transform-origin sets the point around which rotation and scaling happen, defaulting to the center of the element. Moving it to a corner or edge, like top left, changes a rotation from spinning in place to swinging like a hinge.",
    code: `.flip-card {
  transform-origin: left center;
  transition: transform 0.4s ease;
}

.flip-card:hover {
  transform: rotateY(20deg);
}`
  },
  {
    id: "int-061",
    module: "7. Positioning & Stacking in Depth",
    title: "position: sticky",
    summary: "Sticky positioning acts like static positioning until the element crosses a scroll threshold you set with top, right, bottom, or left, at which point it sticks in place like it were fixed, only within the bounds of its containing block.",
    code: `.section-heading {
  position: sticky;
  top: 0;
  background: #fffde7;
}`
  },
  {
    id: "int-062",
    module: "7. Positioning & Stacking in Depth",
    title: "Building a sticky header",
    summary: "A header that stays visible while the page scrolls just needs position: sticky with top: 0 and a background color, so content behind it does not show through as it scrolls underneath.",
    code: `header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff8e1;
  padding: 16px;
}`
  },
  {
    id: "int-063",
    module: "7. Positioning & Stacking in Depth",
    title: "Stacking contexts explained",
    summary: "A stacking context is a self-contained layer where z-index values are only compared against siblings inside that same context, not against every z-index on the page. Certain properties, like position combined with z-index, opacity below 1, or transform, all create new stacking contexts.",
    code: null
  },
  {
    id: "int-064",
    module: "7. Positioning & Stacking in Depth",
    title: "z-index in nested contexts",
    summary: "A high z-index only wins within its own stacking context, so an element with z-index: 9999 can still end up behind something with a lower z-index if its parent created a context that itself sits underneath. Debugging stacking issues means tracing which ancestor created a new context, not just comparing raw numbers.",
    code: `.parent-a {
  position: relative;
  z-index: 1;
}

.parent-b {
  position: relative;
  z-index: 2;
}`
  },
  {
    id: "int-065",
    module: "7. Positioning & Stacking in Depth",
    title: "Absolute positioning inside a relative parent",
    summary: "An absolutely positioned element is placed relative to its nearest ancestor that has a position other than static, so giving a wrapper position: relative turns it into an anchor point for any absolutely positioned children inside it, like a badge in the corner of a card.",
    code: `.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}`
  },
  {
    id: "int-066",
    module: "7. Positioning & Stacking in Depth",
    title: "Centering with position and transform",
    summary: "Positioning an element at top: 50% and left: 50% moves its top-left corner to the center of its container, but you also need transform: translate(-50%, -50%) to shift it back by half its own size so the element itself is truly centered.",
    code: `.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`
  },
  {
    id: "int-067",
    module: "7. Positioning & Stacking in Depth",
    title: "Building a tooltip with positioning",
    summary: "A tooltip is usually an absolutely positioned element inside a relatively positioned trigger, hidden by default and revealed on hover, with a small transform to nudge it above or beside the element it describes.",
    code: `.tooltip-wrapper {
  position: relative;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}

.tooltip-wrapper:hover .tooltip {
  display: block;
}`
  },
  {
    id: "int-068",
    module: "7. Positioning & Stacking in Depth",
    title: "Building a modal overlay",
    summary: "A modal overlay is typically a fixed-position full-screen backdrop with a semi-transparent background, and the modal box itself centered on top of it with flexbox or absolute positioning, all raised above the rest of the page with z-index.",
    code: `.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}`
  },
  {
    id: "int-069",
    module: "7. Positioning & Stacking in Depth",
    title: "Building a dropdown menu",
    summary: "A dropdown menu is an absolutely positioned list anchored to a relatively positioned trigger button, hidden until a class or :hover state reveals it, so it floats over the surrounding content instead of pushing it down.",
    code: `.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
}

.dropdown.is-open .dropdown-menu {
  display: block;
}`
  },
  {
    id: "int-070",
    module: "7. Positioning & Stacking in Depth",
    title: "Common positioning bugs and fixes",
    summary: "The usual culprits are an absolutely positioned element escaping its intended parent because that parent never got position: relative, a sticky element that refuses to stick because a parent has overflow: hidden, and z-index fights caused by an unexpected stacking context.",
    code: null
  },
  {
    id: "int-071",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: "::before and ::after",
    summary: "::before and ::after insert a generated element just inside the start or end of an element's content, without adding anything to your HTML. They are commonly used for decorative icons, quotation marks, or little shapes like tooltip arrows.",
    code: `.required::after {
  content: " *";
  color: #e53935;
}`
  },
  {
    id: "int-072",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: "The content property in depth",
    summary: "The content property is what actually makes ::before and ::after render anything, accepting plain text in quotes, an empty string for pure styling, or values like attr() to pull in an attribute from the element itself.",
    code: `a[href]::after {
  content: " (" attr(href) ")";
  font-size: 0.8em;
  color: #757575;
}`
  },
  {
    id: "int-073",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: ":nth-child() patterns",
    summary: ":nth-child() selects elements based on their position among siblings using formulas like 2n for every even child, 2n+1 for odd ones, or a plain number for one specific position, all counted regardless of element type.",
    code: `li:nth-child(2n) {
  background: #fff8e1;
}

li:nth-child(3) {
  font-weight: bold;
}`
  },
  {
    id: "int-074",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: ":nth-of-type() vs :nth-child()",
    summary: ":nth-child() counts every sibling regardless of tag, while :nth-of-type() only counts siblings that share the same element type as the one being matched. When different tags are mixed together, this difference decides whether your pattern lands on the elements you expect.",
    code: `p:nth-of-type(2) {
  color: #6d4c41;
}`
  },
  {
    id: "int-075",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: ":first-of-type and :last-of-type",
    summary: ":first-of-type and :last-of-type match the first or last sibling of a particular tag within its parent, which is handy for trimming margins off the first or last item of a specific type without needing to count children manually.",
    code: `p:first-of-type {
  margin-top: 0;
}

p:last-of-type {
  margin-bottom: 0;
}`
  },
  {
    id: "int-076",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: ":not() for exclusions",
    summary: ":not() lets you select everything except elements matching the selector inside it, which is often cleaner than writing a more specific positive selector, especially for things like styling every button except the primary one.",
    code: `button:not(.primary) {
  background: transparent;
  border: 1px solid #ccc;
}`
  },
  {
    id: "int-077",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: ":checked for styling custom checkboxes",
    summary: ":checked matches a checkbox or radio input when it is selected, and combined with a sibling selector it lets you restyle a custom-looking box or label based purely on the real input's state, no JavaScript required.",
    code: `input[type="checkbox"] {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #999;
}

input[type="checkbox"]:checked {
  background: #fdd835;
  border-color: #fdd835;
}`
  },
  {
    id: "int-078",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: ":disabled and :required for forms",
    summary: ":disabled matches form controls that cannot be interacted with, useful for dimming them visually to match their inactive state, while :required matches inputs that must be filled in, letting you mark them clearly before the user even submits the form.",
    code: `input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input:required {
  border-left: 3px solid #fbc02d;
}`
  },
  {
    id: "int-079",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: "::placeholder styling",
    summary: "::placeholder targets the placeholder text inside an input or textarea, letting you adjust its color or style separately from the text the user actually types, which is useful for making placeholder text clearly distinguishable as a hint rather than real content.",
    code: `input::placeholder {
  color: #9e9e9e;
  font-style: italic;
}`
  },
  {
    id: "int-080",
    module: "8. Pseudo-classes & Pseudo-elements",
    title: "::selection styling",
    summary: "::selection lets you customize the background and text color of whatever a user highlights with their cursor, a small detail that can make selected text match your site's palette instead of the browser's default blue.",
    code: `::selection {
  background: #fff59d;
  color: #333;
}`
  },
  {
    id: "int-081",
    module: "9. Forms & Tables",
    title: "Styling text inputs consistently",
    summary: "Browsers render text inputs with wildly different default borders, padding, and fonts, so setting a consistent box-sizing, padding, border, and font-family across all your inputs is the first step toward a form that feels like one cohesive design.",
    code: `input[type="text"],
input[type="email"] {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font: inherit;
}`
  },
  {
    id: "int-082",
    module: "9. Forms & Tables",
    title: "Styling select dropdowns",
    summary: "Native select elements carry a lot of browser-specific chrome, and appearance: none strips that default arrow and styling away so you can apply your own border, padding, and background, often paired with a custom arrow icon to replace the one you removed.",
    code: `select {
  appearance: none;
  padding: 10px 32px 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
}`
  },
  {
    id: "int-083",
    module: "9. Forms & Tables",
    title: "Styling checkboxes and radio buttons",
    summary: "Checkboxes and radio buttons can be resized and colored with a handful of properties, and modern browsers even support accent-color as a quick way to recolor them to match your palette without rebuilding them from scratch.",
    code: `input[type="checkbox"],
input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: #fbc02d;
}`
  },
  {
    id: "int-084",
    module: "9. Forms & Tables",
    title: "Building an accessible custom checkbox",
    summary: "A fully custom checkbox keeps the real input in the markup but visually hides it, then styles a sibling element to represent it, using :checked and :focus-visible on the input to drive the sibling's appearance so keyboard and screen reader users are never left out.",
    code: `.checkbox input {
  position: absolute;
  opacity: 0;
}

.checkbox .box {
  width: 18px;
  height: 18px;
  border: 2px solid #999;
  border-radius: 4px;
}

.checkbox input:checked + .box {
  background: #fdd835;
  border-color: #fdd835;
}

.checkbox input:focus-visible + .box {
  outline: 2px solid #1976d2;
}`
  },
  {
    id: "int-085",
    module: "9. Forms & Tables",
    title: "Form layout with flexbox and grid",
    summary: "Flexbox is great for laying out a single row of label and input, or a row of buttons, while grid shines for aligning whole columns of labels against their inputs across multiple form rows so everything lines up neatly.",
    code: `.form-grid {
  display: grid;
  grid-template-columns: 120px 1fr;
  row-gap: 12px;
  column-gap: 16px;
  align-items: center;
}`
  },
  {
    id: "int-086",
    module: "9. Forms & Tables",
    title: "Validation styling with :valid and :invalid",
    summary: ":valid and :invalid match inputs based on whether their current value passes built-in HTML validation rules like required, type, or pattern, letting you give live visual feedback, such as a green or red border, without any JavaScript.",
    code: `input:invalid {
  border-color: #e53935;
}

input:valid {
  border-color: #43a047;
}`
  },
  {
    id: "int-087",
    module: "9. Forms & Tables",
    title: "Styling tables cleanly",
    summary: "border-collapse: collapse merges adjacent cell borders into single clean lines instead of doubled ones, and consistent padding on th and td gives a table breathing room, turning a dense default table into something easy to scan.",
    code: `table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 10px 12px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}`
  },
  {
    id: "int-088",
    module: "9. Forms & Tables",
    title: "Zebra-striping table rows",
    summary: "Applying a background color to every other row with tr:nth-child(even) makes wide tables much easier to read by giving the eye a visual guide across each row, without needing extra classes in the markup.",
    code: `tr:nth-child(even) {
  background: #fdf6e3;
}`
  },
  {
    id: "int-089",
    module: "9. Forms & Tables",
    title: "Responsive tables",
    summary: "Wrapping a table in a container with overflow-x: auto lets it scroll horizontally on narrow screens instead of breaking the page layout, which is the simplest fix; for more drastic cases, tables can be restyled entirely as stacked cards at small widths.",
    code: `.table-scroll {
  overflow-x: auto;
}

.table-scroll table {
  min-width: 600px;
}`
  },
  {
    id: "int-090",
    module: "9. Forms & Tables",
    title: "Styling file inputs and buttons",
    summary: "File inputs render an uneditable native button plus a filename label, but the ::file-selector-button pseudo-element lets you restyle that button portion directly, so it can match the rest of your form controls.",
    code: `input[type="file"]::file-selector-button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #fdd835;
  cursor: pointer;
}`
  },
  {
    id: "int-091",
    module: "10. Real Components",
    title: "Building a responsive navbar with a mobile menu",
    summary: "A responsive navbar typically shows a full flex row of links on wide screens, then swaps to a hamburger button that toggles a hidden menu at narrow widths, combining flexbox, a media query, and a simple class-toggle pattern.",
    code: `.nav-links {
  display: flex;
  gap: 20px;
}

.menu-button {
  display: none;
}

@media (max-width: 700px) {
  .nav-links {
    display: none;
  }
  .menu-button {
    display: block;
  }
}`
  },
  {
    id: "int-092",
    module: "10. Real Components",
    title: "Building a pricing card grid",
    summary: "Pricing tables usually line up as an evenly spaced grid of cards that reflows to a single column on mobile, a job perfectly suited to repeat(auto-fit, minmax()) combined with consistent internal card padding and flexbox for the card's own content.",
    code: `.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.pricing-card {
  padding: 24px;
  border: 1px solid #eee;
  border-radius: 12px;
}`
  },
  {
    id: "int-093",
    module: "10. Real Components",
    title: "Building an image gallery with hover effects",
    summary: "A gallery tile often combines object-fit: cover to keep images uniformly cropped, overflow: hidden on the wrapper to contain a hover scale, and a transition so the zoom feels smooth rather than instant.",
    code: `.tile {
  overflow: hidden;
  border-radius: 8px;
}

.tile img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tile:hover img {
  transform: scale(1.08);
}`
  },
  {
    id: "int-094",
    module: "10. Real Components",
    title: "Building a testimonial carousel layout (CSS-only)",
    summary: "A CSS-only carousel lays its slides out in a row with scroll-snap-type on the container and scroll-snap-align on each slide, so scrolling naturally settles each item into view without any JavaScript driving the motion.",
    code: `.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
}

.slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
}`
  },
  {
    id: "int-095",
    module: "10. Real Components",
    title: "Building a progress bar",
    summary: "A progress bar is just a track element containing a fill element whose width represents the percentage complete, with a transition on width so updates animate smoothly instead of snapping to the new value.",
    code: `.progress-track {
  width: 100%;
  height: 10px;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 60%;
  background: #fdd835;
  transition: width 0.3s ease;
}`
  },
  {
    id: "int-096",
    module: "10. Real Components",
    title: "Building a badge/tag system",
    summary: "Badges are usually small inline-flex boxes with padding, a rounded border-radius, and a modifier class or two that swap background and text color for different meanings, like status or category, while keeping the same base shape.",
    code: `.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  background: #eee;
}

.badge--warning {
  background: #fff3c4;
  color: #7a5c00;
}`
  },
  {
    id: "int-097",
    module: "10. Real Components",
    title: "Building a sticky footer layout",
    summary: "A sticky footer stays at the bottom of the viewport on short pages but still gets pushed down naturally on long ones, achieved by making the page a flex column with min-height: 100vh and letting the main content area grow with flex: 1.",
    code: `body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}`
  },
  {
    id: "int-098",
    module: "10. Real Components",
    title: "Debugging layout with outline: solid red",
    summary: "Applying a temporary outline to every element with a broad selector instantly reveals box boundaries, unexpected margins, and overflow issues, and because outline does not affect layout the way border does, it is a safe way to inspect a page without shifting anything.",
    code: `* {
  outline: 1px solid red;
}`
  },
  {
    id: "int-099",
    module: "10. Real Components",
    title: "Organizing CSS with a consistent naming system",
    summary: "A naming convention like BEM (block__element--modifier) keeps class names predictable and prevents styles from accidentally leaking between unrelated components as a project grows. Consistency matters more than which exact system you pick.",
    code: null
  },
  {
    id: "int-100",
    module: "10. Real Components",
    title: "What to learn next (bridging to Advanced)",
    summary: "With flexbox, grid, responsive patterns, transitions, positioning, and real components under your belt, you're ready for the deeper end of CSS: custom properties, animation keyframes, container queries, and more advanced selectors. The Advanced track picks up exactly where this one leaves off.",
    code: null
  }
];
