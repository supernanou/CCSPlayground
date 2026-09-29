const BEGINNER_LESSONS = [
  {
    id: "beg-001",
    module: "1. CSS Foundations",
    title: "What is CSS and why it matters",
    summary: "CSS stands for Cascading Style Sheets, and it's the language that tells a browser how your HTML should actually look — colors, spacing, fonts, layout, all of it. Without CSS, every page is just plain text stacked top to bottom in a boring default font.",
    code: null
  },
  {
    id: "beg-002",
    module: "1. CSS Foundations",
    title: "How CSS connects to HTML",
    summary: "HTML builds the structure and content of a page, while CSS decides how that structure is presented. CSS rules use selectors to find HTML elements and then apply styling to them, so the two languages always work as a pair.",
    code: `.intro {
  color: #6b4f2c;
  font-size: 18px;
}`
  },
  {
    id: "beg-003",
    module: "1. CSS Foundations",
    title: "Inline, internal, and external CSS",
    summary: "You can write CSS three ways: inline on a single element with a style attribute, internally in a style tag in your HTML's head, or externally in its own .css file linked to your page. External stylesheets are the cozy, tidy choice for anything beyond a quick test, since they keep style separate from structure.",
    code: `/* external.css, linked from your HTML */
body {
  background-color: #fffbe6;
  color: #3a3a3a;
}`
  },
  {
    id: "beg-004",
    module: "1. CSS Foundations",
    title: "Anatomy of a CSS rule",
    summary: "A CSS rule has two parts: a selector that says which elements to target, and a declaration block wrapped in curly braces that holds one or more property-value pairs. Each declaration ends with a semicolon, keeping things tidy and predictable.",
    code: `selector {
  property: value;
  another-property: another-value;
}`
  },
  {
    id: "beg-005",
    module: "1. CSS Foundations",
    title: "Selectors, properties, and values",
    summary: "The selector picks which elements to style, the property names what aspect of the element you're changing, and the value sets what that property should be. Together they read almost like a sentence: paragraphs, color, navy.",
    code: `p {
  color: navy;
  font-size: 16px;
}`
  },
  {
    id: "beg-006",
    module: "1. CSS Foundations",
    title: "Writing your first stylesheet",
    summary: "A stylesheet is just a plain text file full of CSS rules, one after another. Start small — a background color here, a heading color there — and build outward as you get comfortable.",
    code: `body {
  background-color: #fffbe6;
  font-family: sans-serif;
}

h1 {
  color: #333;
}`
  },
  {
    id: "beg-007",
    module: "1. CSS Foundations",
    title: "Comments in CSS",
    summary: "CSS comments start with /* and end with */, and the browser ignores everything in between. They're a friendly way to leave yourself notes about why a rule exists, without affecting how the page renders.",
    code: `/* This sets the main heading color */
h1 {
  color: darkslateblue;
}`
  },
  {
    id: "beg-008",
    module: "1. CSS Foundations",
    title: "How browsers read your CSS (the cascade, briefly)",
    summary: "When a browser loads a page, it reads every applicable CSS rule for each element and then works out which declarations win, using a set of rules called the cascade. Later rules, more specific selectors, and !important all play a part in deciding the final result — we'll unpack each of those properly soon.",
    code: null
  },
  {
    id: "beg-009",
    module: "1. CSS Foundations",
    title: "Linking a stylesheet correctly",
    summary: "To connect an external stylesheet, add a link tag inside your HTML's head with rel set to stylesheet and href pointing at your CSS file's path. Get the path wrong and your styles simply won't show up, so it's worth double-checking file names and folders.",
    code: `<link rel="stylesheet" href="styles.css">`
  },
  {
    id: "beg-010",
    module: "1. CSS Foundations",
    title: "Common beginner syntax mistakes",
    summary: "The usual culprits are a missing semicolon between declarations, a missing closing curly brace, or a typo in a property name — all small slips that can quietly break a whole rule. Every declaration needs its semicolon, and every selector's block needs its matching braces.",
    code: `/* Correct: every declaration ends in a semicolon,
   and the block is properly closed */
p {
  color: red;
  font-size: 14px;
}`
  },
  {
    id: "beg-011",
    module: "2. Selectors Basics",
    title: "The universal selector",
    summary: "The universal selector, written as an asterisk, matches every single element on the page. It's often used for small resets, like zeroing out default margin and padding before you set your own.",
    code: `* {
  margin: 0;
  padding: 0;
}`
  },
  {
    id: "beg-012",
    module: "2. Selectors Basics",
    title: "Type (element) selectors",
    summary: "A type selector targets every element of a given HTML tag, just by writing that tag's name. It's the simplest kind of selector and great for setting broad defaults, like styling every paragraph the same way.",
    code: `p {
  line-height: 1.5;
}`
  },
  {
    id: "beg-013",
    module: "2. Selectors Basics",
    title: "Class selectors",
    summary: "A class selector starts with a dot followed by the class name, and matches any element carrying that class attribute in your HTML. Classes are reusable, so the same styling can apply to many different elements across a page.",
    code: `.highlight {
  background-color: yellow;
}`
  },
  {
    id: "beg-014",
    module: "2. Selectors Basics",
    title: "ID selectors",
    summary: "An ID selector starts with a hash symbol and matches the one element on the page carrying that id attribute, since ids are meant to be unique. They're powerful, but their high specificity can make them tricky to override later, so classes are usually the friendlier everyday choice.",
    code: `#main-header {
  font-size: 2rem;
}`
  },
  {
    id: "beg-015",
    module: "2. Selectors Basics",
    title: "Grouping selectors with commas",
    summary: "When several selectors need the exact same declarations, you can list them together separated by commas instead of repeating the whole rule. This keeps your stylesheet shorter and easier to scan.",
    code: `h1,
h2,
h3 {
  font-family: Georgia, serif;
}`
  },
  {
    id: "beg-016",
    module: "2. Selectors Basics",
    title: "Descendant combinator",
    summary: "A space between two selectors creates a descendant combinator, matching any element nested anywhere inside another, no matter how many levels deep. It's one of the most common ways to scope styling to a particular section of a page.",
    code: `article p {
  color: #444;
}`
  },
  {
    id: "beg-017",
    module: "2. Selectors Basics",
    title: "Child combinator (>)",
    summary: "A greater-than sign between two selectors matches only direct children, not deeper descendants. This gives you tighter control than the plain descendant combinator when you only want to reach the elements immediately inside a parent.",
    code: `ul > li {
  list-style: square;
}`
  },
  {
    id: "beg-018",
    module: "2. Selectors Basics",
    title: "Adjacent sibling combinator (+)",
    summary: "A plus sign matches an element that sits immediately after another specific element, sharing the same parent. It's handy for things like removing extra space above a paragraph that directly follows a heading.",
    code: `h2 + p {
  margin-top: 0;
}`
  },
  {
    id: "beg-019",
    module: "2. Selectors Basics",
    title: "General sibling combinator (~)",
    summary: "A tilde matches any sibling that comes after a given element and shares the same parent, not just the very next one. It's a looser version of the adjacent sibling combinator, reaching every matching sibling further down.",
    code: `h2 ~ p {
  color: gray;
}`
  },
  {
    id: "beg-020",
    module: "2. Selectors Basics",
    title: "Choosing the right selector",
    summary: "Reach for element selectors for broad defaults, classes for anything reusable across your page, and ids sparingly for truly unique elements. A good rule of thumb: pick the simplest selector that clearly says what you mean, and your future self will thank you.",
    code: null
  },
  {
    id: "beg-021",
    module: "3. Cascade, Specificity & Inheritance",
    title: "What the cascade actually does",
    summary: "The cascade is how a browser resolves conflicts when multiple rules target the same element with the same property. It weighs three things in order: specificity, source order, and importance, to land on one final value for each property.",
    code: null
  },
  {
    id: "beg-022",
    module: "3. Cascade, Specificity & Inheritance",
    title: "How specificity is calculated",
    summary: "Specificity is a score based on what kinds of selectors you use: ids count for the most, classes and attribute selectors count for less, and plain element selectors count for the least. The rule with the higher score wins, regardless of which one appears later in the file.",
    code: `/* An id selector outscores a class selector */
#nav a {
  color: purple;
}

.menu a {
  color: green;
}`
  },
  {
    id: "beg-023",
    module: "3. Cascade, Specificity & Inheritance",
    title: "Source order as a tiebreaker",
    summary: "When two rules have identical specificity, the one that appears later in the stylesheet wins. This is why the order you write your CSS in can quietly matter, even when the selectors look equally strong.",
    code: `p {
  color: blue;
}

p {
  color: red;
}`
  },
  {
    id: "beg-024",
    module: "3. Cascade, Specificity & Inheritance",
    title: "The !important keyword (and why to avoid it)",
    summary: "Adding !important after a value forces that declaration to win over almost everything else, ignoring the usual specificity rules. It can feel like a quick fix, but it makes styles harder to override later, so it's best kept as a rare last resort rather than a habit.",
    code: `p {
  color: red !important;
}`
  },
  {
    id: "beg-025",
    module: "3. Cascade, Specificity & Inheritance",
    title: "What inheritance means in CSS",
    summary: "Inheritance means some property values pass down automatically from a parent element to its children, without you having to restate them. Set a font on the body, and paragraphs, spans, and other text inside it will pick it up for free.",
    code: `body {
  color: #333;
  font-family: sans-serif;
}`
  },
  {
    id: "beg-026",
    module: "3. Cascade, Specificity & Inheritance",
    title: "Which properties inherit by default",
    summary: "Text-related properties like color, font-family, font-size, and line-height inherit by default, while box-related properties like margin, padding, border, and background do not. Knowing this split saves a lot of head-scratching about why a border didn't show up where you expected it to inherit.",
    code: `body {
  font-family: sans-serif;
  color: #222;
}

/* p and span inside body inherit these automatically */`
  },
  {
    id: "beg-027",
    module: "3. Cascade, Specificity & Inheritance",
    title: "The inherit keyword",
    summary: "Setting a property to inherit forces it to take on its parent's computed value, even for properties that don't normally inherit on their own. It's a way of explicitly saying, whatever the parent is doing, do that too.",
    code: `a {
  color: inherit;
}`
  },
  {
    id: "beg-028",
    module: "3. Cascade, Specificity & Inheritance",
    title: "The initial keyword",
    summary: "Setting a property to initial resets it to that property's default value as defined by the CSS specification, ignoring both inheritance and any other rules. It's a clean way to say start fresh on just this one property.",
    code: `p {
  color: initial;
}`
  },
  {
    id: "beg-029",
    module: "3. Cascade, Specificity & Inheritance",
    title: "The unset keyword",
    summary: "Setting a property to unset acts like inherit for properties that naturally inherit, and like initial for ones that don't. It's a convenient, low-drama way to clear a value without needing to remember which category the property falls into.",
    code: `p {
  color: unset;
}`
  },
  {
    id: "beg-030",
    module: "3. Cascade, Specificity & Inheritance",
    title: "Debugging specificity conflicts",
    summary: "When a style isn't showing up the way you expect, open your browser's DevTools and check which rule is actually winning — it's usually a specificity or source order issue rather than a typo. Strikethrough declarations in the styles panel are your best clue, showing you exactly which rule got overridden and why.",
    code: null
  },
  {
    id: "beg-031",
    module: "4. Color & Units",
    title: "Color keywords",
    summary: "CSS understands a set of plain-English color names like red, tomato, and lavender, which are great for quick prototyping. They're readable and friendly, though for precise brand colors you'll usually reach for hex or rgb values instead.",
    code: `p {
  color: tomato;
  background-color: lavender;
}`
  },
  {
    id: "beg-032",
    module: "4. Color & Units",
    title: "Hex colors",
    summary: "A hex color is written as a hash symbol followed by six digits, representing the red, green, and blue channels two digits at a time. They're compact and extremely common, and most design tools will hand you a hex code directly.",
    code: `p {
  color: #ff6347;
}`
  },
  {
    id: "beg-033",
    module: "4. Color & Units",
    title: "rgb() and rgba()",
    summary: "rgb() sets a color using red, green, and blue values from 0 to 255, while rgba() adds a fourth alpha value for transparency, from 0 for fully see-through to 1 for fully opaque. It's an easy way to describe colors in numbers you can reason about, especially when you need partial transparency.",
    code: `p {
  color: rgb(255, 99, 71);
  background-color: rgba(0, 0, 0, 0.1);
}`
  },
  {
    id: "beg-034",
    module: "4. Color & Units",
    title: "hsl() and hsla()",
    summary: "hsl() describes a color by hue, saturation, and lightness, which many people find more intuitive than red, green, and blue values, since you can nudge lightness up or down directly. hsla() adds the same alpha channel for transparency that rgba() offers.",
    code: `p {
  color: hsl(9, 100%, 64%);
  background-color: hsla(9, 100%, 64%, 0.2);
}`
  },
  {
    id: "beg-035",
    module: "4. Color & Units",
    title: "currentColor",
    summary: "currentColor is a special keyword that refers to whatever value the color property currently has on that element. It's handy for keeping things like borders or fills in sync with the text color without repeating yourself.",
    code: `p {
  color: tomato;
  border: 2px solid currentColor;
}`
  },
  {
    id: "beg-036",
    module: "4. Color & Units",
    title: "Absolute units: px",
    summary: "Pixels are an absolute unit, meaning a value like 16px stays the same size regardless of context. They're simple and predictable, which makes them a natural starting point before you explore units that scale with context.",
    code: `p {
  font-size: 16px;
  margin: 8px;
}`
  },
  {
    id: "beg-037",
    module: "4. Color & Units",
    title: "Relative units: em",
    summary: "An em is relative to the font size of the element it's used on, so 1em always equals that element's current font size. This makes em great for spacing that should scale alongside text, like padding inside a button.",
    code: `.card {
  font-size: 1.2em;
  padding: 1em;
}`
  },
  {
    id: "beg-038",
    module: "4. Color & Units",
    title: "Relative units: rem",
    summary: "A rem is relative to the root element's font size, usually the html element, rather than to whatever element it's used on. This makes rem more predictable than em for consistent sizing across a whole page, since it doesn't compound as it inherits.",
    code: `html {
  font-size: 16px;
}

h1 {
  font-size: 2rem;
}`
  },
  {
    id: "beg-039",
    module: "4. Color & Units",
    title: "Percentage units",
    summary: "A percentage value is relative to some reference, most often the size of a parent element, so 50% width means half of whatever the parent's width happens to be. It's a flexible way to build layouts that adapt as the surrounding space changes.",
    code: `.container {
  width: 80%;
}`
  },
  {
    id: "beg-040",
    module: "4. Color & Units",
    title: "Viewport units: vw and vh",
    summary: "vw and vh are relative to the browser's viewport, where 1vw is one percent of the viewport's width and 1vh is one percent of its height. They're useful for elements that should scale with the screen itself, like a full-height hero section.",
    code: `.hero {
  width: 100vw;
  height: 50vh;
}`
  },
  {
    id: "beg-041",
    module: "5. The Box Model",
    title: "Content, padding, border, margin",
    summary: "Every element in CSS is a box made of four layers: the content itself, padding around that content, a border around the padding, and margin outside the border separating it from other elements. Understanding these four layers is the key that unlocks almost everything about CSS layout.",
    code: `.box {
  padding: 16px;
  border: 1px solid #ccc;
  margin: 24px;
}`
  },
  {
    id: "beg-042",
    module: "5. The Box Model",
    title: "Setting width and height",
    summary: "The width and height properties set the size of an element's content box by default, in whatever unit you choose. Combined with padding and border, they determine how much space the whole box actually takes up.",
    code: `.box {
  width: 300px;
  height: 150px;
}`
  },
  {
    id: "beg-043",
    module: "5. The Box Model",
    title: "Padding shorthand vs longhand",
    summary: "The padding shorthand lets you set all four sides in one line, following a top, right, bottom, left order, while the longhand properties let you target one side at a time. Both do the same job — shorthand is quicker, longhand is clearer when you only need to change one side.",
    code: `.box {
  padding: 10px 20px 10px 20px;
}

.box-longhand {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}`
  },
  {
    id: "beg-044",
    module: "5. The Box Model",
    title: "Margin shorthand vs longhand",
    summary: "Just like padding, margin has a shorthand that accepts up to four values in top, right, bottom, left order, alongside longhand properties for each individual side. Reach for shorthand when setting several sides at once, and longhand when adjusting just one.",
    code: `.box {
  margin: 10px 20px;
}

.box-longhand {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}`
  },
  {
    id: "beg-045",
    module: "5. The Box Model",
    title: "Margin collapsing",
    summary: "When two vertical margins meet between block elements, they don't add together — the browser collapses them down to the larger of the two. So a 20px bottom margin next to a 20px top margin produces a 20px gap, not 40px.",
    code: `p {
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Adjacent paragraphs end up with a 20px gap, not 40px */`
  },
  {
    id: "beg-046",
    module: "5. The Box Model",
    title: "Border style, width, and color",
    summary: "A border needs three things to actually show up: a style like solid or dashed, a width, and a color. Leave out the style and the border stays invisible even if you've set a width and color.",
    code: `.box {
  border-width: 2px;
  border-style: dashed;
  border-color: teal;
}`
  },
  {
    id: "beg-047",
    module: "5. The Box Model",
    title: "border-radius basics",
    summary: "border-radius rounds the corners of an element's box, and setting it to 50% on a square element turns it into a perfect circle. It's a small property that does a lot of visual heavy lifting, from soft card corners to avatar images.",
    code: `.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}`
  },
  {
    id: "beg-048",
    module: "5. The Box Model",
    title: "box-sizing: content-box vs border-box",
    summary: "By default, width and height only measure an element's content, so padding and border add extra size on top — that's content-box. Setting box-sizing to border-box instead makes width and height include the padding and border, so the box stays the exact size you specified.",
    code: `.box {
  width: 300px;
  padding: 20px;
  border: 5px solid #333;
  box-sizing: border-box;
}`
  },
  {
    id: "beg-049",
    module: "5. The Box Model",
    title: "Using a global box-sizing reset",
    summary: "Most developers apply border-box to every element right at the start of a stylesheet, since it makes sizing far more predictable throughout a whole project. It's one of the simplest, most widely recommended resets you can add.",
    code: `*,
*::before,
*::after {
  box-sizing: border-box;
}`
  },
  {
    id: "beg-050",
    module: "5. The Box Model",
    title: "Visualizing the box model with DevTools",
    summary: "Your browser's DevTools include a box model diagram that shows the exact content, padding, border, and margin values for any element you inspect. It's the fastest way to figure out why something looks bigger, smaller, or further away than you expected.",
    code: `.box {
  width: 200px;
  padding: 20px;
  border: 4px solid #444;
  margin: 10px;
}`
  },
  {
    id: "beg-051",
    module: "6. Backgrounds & Borders",
    title: "background-color",
    summary: "background-color fills an element's box with a solid color, sitting behind its content and padding. It accepts any color value — keywords, hex, rgb, or hsl — and is one of the fastest ways to add visual warmth to a page.",
    code: `.card {
  background-color: #fffbe6;
}`
  },
  {
    id: "beg-052",
    module: "6. Backgrounds & Borders",
    title: "background-image",
    summary: "background-image places an image behind an element's content, referenced with a url. By default it appears at its natural size and repeats to fill the box, which later properties let you control.",
    code: `.hero {
  background-image: url("hero.jpg");
}`
  },
  {
    id: "beg-053",
    module: "6. Backgrounds & Borders",
    title: "background-repeat",
    summary: "background-repeat controls whether a background image tiles to fill its box, and in which direction. Setting it to no-repeat shows the image just once, while repeat-x or repeat-y tiles along a single axis.",
    code: `.pattern {
  background-image: url("dots.png");
  background-repeat: repeat-x;
}`
  },
  {
    id: "beg-054",
    module: "6. Backgrounds & Borders",
    title: "background-position",
    summary: "background-position sets where a background image sits inside its box, using keywords like center and top or specific lengths and percentages. It's often paired with background-repeat: no-repeat so the image lands exactly where you want it.",
    code: `.hero {
  background-image: url("hero.jpg");
  background-position: center top;
}`
  },
  {
    id: "beg-055",
    module: "6. Backgrounds & Borders",
    title: "background-size",
    summary: "background-size controls how large a background image renders inside its box. The keyword cover scales the image to fill the whole box while keeping its proportions, cropping any overflow, which makes it a popular choice for hero images.",
    code: `.hero {
  background-image: url("hero.jpg");
  background-size: cover;
}`
  },
  {
    id: "beg-056",
    module: "6. Backgrounds & Borders",
    title: "The background shorthand",
    summary: "The background shorthand lets you combine color, image, repeat, position, and size into a single declaration. It's compact once you're comfortable with the individual properties, though it's worth learning them separately first so the shorthand order makes sense.",
    code: `.hero {
  background: #fffbe6 url("hero.jpg") no-repeat center / cover;
}`
  },
  {
    id: "beg-057",
    module: "6. Backgrounds & Borders",
    title: "Your first linear-gradient",
    summary: "linear-gradient() generates a smooth blend between two or more colors, and can be used anywhere a background-image is accepted. You choose a direction and a list of colors, and the browser handles the smooth transition between them.",
    code: `.banner {
  background: linear-gradient(to right, #fceabb, #f8b500);
}`
  },
  {
    id: "beg-058",
    module: "6. Backgrounds & Borders",
    title: "Border sides individually",
    summary: "Instead of styling all four sides at once, border-top, border-right, border-bottom, and border-left let you target a single side with its own style, width, and color. This is handy for things like a single accent line under a heading.",
    code: `.box {
  border-top: 2px solid #333;
  border-bottom: 1px dashed #999;
}`
  },
  {
    id: "beg-059",
    module: "6. Backgrounds & Borders",
    title: "Rounded corners on one side only",
    summary: "border-radius has individual longhand properties for each corner, like border-top-left-radius, so you can round just the corners you want. This is a common trick for things like tabs that should stay flat where they meet another element.",
    code: `.tab {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`
  },
  {
    id: "beg-060",
    module: "6. Backgrounds & Borders",
    title: "box-shadow basics",
    summary: "box-shadow adds a shadow around an element's box, defined by a horizontal offset, vertical offset, blur radius, and color. A soft, subtle shadow is one of the easiest ways to make a flat card feel like it's gently lifted off the page.",
    code: `.card {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}`
  },
  {
    id: "beg-061",
    module: "7. Typography",
    title: "font-family and web-safe fonts",
    summary: "font-family sets which typeface an element uses, and you can list several fonts as fallbacks in case the first isn't available on a visitor's device. Web-safe fonts like Arial, Georgia, and Times New Roman are installed almost everywhere, making them a reliable last fallback.",
    code: `body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}`
  },
  {
    id: "beg-062",
    module: "7. Typography",
    title: "font-size",
    summary: "font-size controls how large text renders, and accepts absolute units like px or relative ones like em and rem. Getting a comfortable, readable size right is one of the highest-impact typography decisions you'll make.",
    code: `h1 {
  font-size: 2rem;
}`
  },
  {
    id: "beg-063",
    module: "7. Typography",
    title: "font-weight",
    summary: "font-weight controls how bold or light text appears, using keywords like normal and bold or numeric values from 100 to 900. Not every font includes every weight, so the browser will substitute the closest one it has available.",
    code: `strong {
  font-weight: 700;
}`
  },
  {
    id: "beg-064",
    module: "7. Typography",
    title: "font-style",
    summary: "font-style toggles italics on or off, with normal and italic as the two values you'll use most. It's a small property, but it carries real meaning for emphasis and citations.",
    code: `em {
  font-style: italic;
}`
  },
  {
    id: "beg-065",
    module: "7. Typography",
    title: "line-height",
    summary: "line-height sets the vertical space a line of text takes up, which directly affects how readable a paragraph feels. A unitless value like 1.5 is usually the friendliest choice, since it scales proportionally with the element's own font size.",
    code: `p {
  line-height: 1.6;
}`
  },
  {
    id: "beg-066",
    module: "7. Typography",
    title: "The font shorthand",
    summary: "The font shorthand can combine style, weight, size, line-height, and family into a single declaration, with size and family being required. It's compact, but easy to trip up on the order, so many people prefer writing the longhand properties until they're confident with it.",
    code: `p {
  font: italic 700 16px/1.5 Georgia, serif;
}`
  },
  {
    id: "beg-067",
    module: "7. Typography",
    title: "text-align",
    summary: "text-align controls the horizontal alignment of text inside its container, with common values like left, right, center, and justify. It only affects inline content, not the position of the box itself.",
    code: `.title {
  text-align: center;
}`
  },
  {
    id: "beg-068",
    module: "7. Typography",
    title: "text-decoration",
    summary: "text-decoration adds or removes lines like underlines, overlines, and strikethroughs on text. It's most commonly used to strip the default underline from links so they can be styled another way instead.",
    code: `a {
  text-decoration: none;
}`
  },
  {
    id: "beg-069",
    module: "7. Typography",
    title: "text-transform",
    summary: "text-transform changes the capitalization of text as it displays, without altering the actual text in your HTML. Values like uppercase, lowercase, and capitalize are handy for things like small labels or navigation menus.",
    code: `.label {
  text-transform: uppercase;
}`
  },
  {
    id: "beg-070",
    module: "7. Typography",
    title: "letter-spacing and word-spacing",
    summary: "letter-spacing adjusts the gap between individual characters, while word-spacing adjusts the gap between whole words. A little extra letter-spacing on uppercase labels can make them feel much more polished and easier to read.",
    code: `.label {
  letter-spacing: 0.05em;
  word-spacing: 0.2em;
}`
  },
  {
    id: "beg-071",
    module: "8. Display, Lists & Links",
    title: "The display property: block, inline, inline-block",
    summary: "display controls how an element behaves in the layout. Block elements stack vertically and accept width and height, inline elements flow within text and ignore width and height, and inline-block blends the two, flowing inline while still accepting a set size.",
    code: `span.badge {
  display: inline-block;
  padding: 4px 8px;
}`
  },
  {
    id: "beg-072",
    module: "8. Display, Lists & Links",
    title: "display: none vs visibility: hidden",
    summary: "display: none removes an element from the page entirely, so it takes up no space at all, while visibility: hidden hides an element visually but still leaves its space reserved in the layout. Choosing between them depends on whether you want the surrounding content to shift into the gap or not.",
    code: `.hidden-gone {
  display: none;
}

.hidden-space {
  visibility: hidden;
}`
  },
  {
    id: "beg-073",
    module: "8. Display, Lists & Links",
    title: "Styling unordered and ordered lists",
    summary: "Unordered lists use ul and ordered lists use ol, and both can be styled with ordinary CSS properties like color, font-size, and spacing just like any other element. Their list items, li, can also be targeted individually when you need finer control.",
    code: `ul {
  color: #444;
}

ol {
  color: #666;
}`
  },
  {
    id: "beg-074",
    module: "8. Display, Lists & Links",
    title: "list-style-type and list-style-position",
    summary: "list-style-type sets the marker style, like disc, circle, square, or decimal, while list-style-position decides whether that marker sits outside the list item's box or inside it, indented with the text. Together they give you full control over how list markers look and align.",
    code: `ul {
  list-style-type: square;
  list-style-position: inside;
}`
  },
  {
    id: "beg-075",
    module: "8. Display, Lists & Links",
    title: "Removing default list styling",
    summary: "Browsers give lists a default marker plus their own margin and padding, which isn't always what you want, especially for navigation menus. Setting list-style to none clears the marker, and zeroing out margin and padding removes the extra spacing too.",
    code: `ul {
  list-style: none;
  margin: 0;
  padding: 0;
}`
  },
  {
    id: "beg-076",
    module: "8. Display, Lists & Links",
    title: "Styling links: the four link states",
    summary: "Links have four pseudo-classes for their different states: link for unvisited, visited for already-clicked links, hover for when a mouse is over them, and active for the moment they're being clicked. They're traditionally written in that order, often remembered by the mnemonic LoVe HAte.",
    code: `a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:hover {
  color: red;
}

a:active {
  color: orange;
}`
  },
  {
    id: "beg-077",
    module: "8. Display, Lists & Links",
    title: ":hover and :active basics",
    summary: ":hover matches an element while a pointer is resting over it, and :active matches it during the moment it's being clicked or pressed. Both work on more than just links, so you can add hover feedback to buttons, cards, or anything interactive.",
    code: `button:hover {
  background-color: #f0e68c;
}

button:active {
  transform: scale(0.98);
}`
  },
  {
    id: "beg-078",
    module: "8. Display, Lists & Links",
    title: ":focus for accessibility",
    summary: ":focus matches an element when it's selected via keyboard navigation or a click, and giving it a clear, visible style is essential for anyone navigating your site without a mouse. Never remove the focus outline without replacing it with an equally visible alternative.",
    code: `button:focus {
  outline: 3px solid #4a90d9;
}`
  },
  {
    id: "beg-079",
    module: "8. Display, Lists & Links",
    title: "Styling buttons",
    summary: "Buttons come with their own default browser styling, but every part of that is overridable with ordinary CSS — background, border, padding, and border-radius all combine to give a button its own personality. A little padding and a soft rounded corner already go a long way toward making a button feel inviting.",
    code: `.btn {
  background-color: #ffd54f;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
}`
  },
  {
    id: "beg-080",
    module: "8. Display, Lists & Links",
    title: "Cursor and pointer feedback",
    summary: "The cursor property controls what icon appears when a pointer hovers over an element, with pointer being the friendly little hand that signals something is clickable. Setting cursor: not-allowed on disabled controls gives visitors a clear visual cue that the action isn't available.",
    code: `.btn {
  cursor: pointer;
}

.btn[disabled] {
  cursor: not-allowed;
}`
  },
  {
    id: "beg-081",
    module: "9. Simple Layout & Positioning",
    title: "Normal document flow",
    summary: "Normal flow is how elements lay out by default before you apply any positioning: block elements stack top to bottom, and inline elements flow left to right, wrapping as needed. Most of the time you're working with this flow, gently nudging it, rather than escaping it entirely.",
    code: null
  },
  {
    id: "beg-082",
    module: "9. Simple Layout & Positioning",
    title: "position: static (the default)",
    summary: "static is the default value of the position property, and it simply means the element sits in normal document flow. Properties like top, right, bottom, and left have no effect on a statically positioned element.",
    code: `.box {
  position: static;
}`
  },
  {
    id: "beg-083",
    module: "9. Simple Layout & Positioning",
    title: "position: relative",
    summary: "Setting position to relative keeps an element in normal flow, but lets you nudge it away from its original spot using top, right, bottom, or left, while the space it originally occupied stays reserved. It's also commonly used just to establish a positioning context for an absolutely positioned child.",
    code: `.box {
  position: relative;
  top: 10px;
  left: 20px;
}`
  },
  {
    id: "beg-084",
    module: "9. Simple Layout & Positioning",
    title: "position: absolute basics",
    summary: "An absolutely positioned element is removed from normal flow and placed relative to its nearest positioned ancestor, meaning any ancestor with a position other than static. Without such an ancestor, it positions relative to the whole page instead.",
    code: `.parent {
  position: relative;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}`
  },
  {
    id: "beg-085",
    module: "9. Simple Layout & Positioning",
    title: "position: fixed basics",
    summary: "A fixed element is removed from normal flow and positioned relative to the browser viewport itself, so it stays in place even as the page scrolls. It's the go-to choice for things like a toolbar that should always stay visible at the top of the screen.",
    code: `.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}`
  },
  {
    id: "beg-086",
    module: "9. Simple Layout & Positioning",
    title: "z-index and stacking",
    summary: "z-index controls which positioned element appears on top when two of them overlap, with higher values stacking above lower ones. It only has an effect on elements that already have a position value other than static.",
    code: `.modal {
  position: fixed;
  z-index: 100;
}

.overlay {
  position: fixed;
  z-index: 50;
}`
  },
  {
    id: "beg-087",
    module: "9. Simple Layout & Positioning",
    title: "Centering text vs centering boxes",
    summary: "Centering text inside its container just needs text-align: center, but centering a whole box within its parent is a different job, usually handled by giving the box a fixed width and setting its left and right margins to auto. Mixing these two up is one of the most common early CSS mix-ups.",
    code: `.text-box {
  text-align: center;
}

.box {
  width: 200px;
  margin: 0 auto;
}`
  },
  {
    id: "beg-088",
    module: "9. Simple Layout & Positioning",
    title: "A simple two-column layout with floats (and why we now avoid them)",
    summary: "Floats were originally designed for wrapping text around images, but for years they were repurposed to build multi-column layouts by floating boxes side by side. They work, but they come with awkward side effects like collapsing parent heights, which is why flexbox and grid have mostly replaced them for layout.",
    code: `.left {
  float: left;
  width: 50%;
}

.right {
  float: right;
  width: 50%;
}`
  },
  {
    id: "beg-089",
    module: "9. Simple Layout & Positioning",
    title: "clear and the clearfix (legacy but good to know)",
    summary: "The clear property stops an element from sitting beside floated elements, pushing it below them instead. The clearfix technique uses a pseudo-element with clear: both to force a container to properly wrap around its floated children, a common fix from the float-heavy era of CSS.",
    code: `.clearfix::after {
  content: "";
  display: block;
  clear: both;
}`
  },
  {
    id: "beg-090",
    module: "9. Simple Layout & Positioning",
    title: "overflow: visible, hidden, scroll, auto",
    summary: "overflow controls what happens when content is too big for its box: visible lets it spill out, hidden clips it away, scroll always shows scrollbars, and auto adds scrollbars only when they're actually needed. auto is usually the most comfortable default when you're not sure which behavior you want.",
    code: `.box {
  height: 100px;
  overflow: auto;
}`
  },
  {
    id: "beg-091",
    module: "10. Pulling It Together",
    title: "Structuring your first real stylesheet",
    summary: "A real stylesheet usually starts with a small reset or base styles, then moves through typography, layout, and finally component-specific rules, roughly following the order elements appear in importance. There's no single correct structure, but a consistent, predictable one makes a stylesheet far easier to maintain as it grows.",
    code: null
  },
  {
    id: "beg-092",
    module: "10. Pulling It Together",
    title: "Naming classes sensibly",
    summary: "A good class name describes what an element is or does, not what it currently looks like, so card-title ages much better than blue-text. Clear, consistent naming makes a stylesheet far easier to read months later, by you or anyone else.",
    code: `.card-title {
  font-size: 1.25rem;
}

.card-description {
  color: #666;
}`
  },
  {
    id: "beg-093",
    module: "10. Pulling It Together",
    title: "Organizing rules by section",
    summary: "Grouping related rules together under a comment heading, like typography, layout, or components, makes a stylesheet much easier to navigate as it grows. It costs almost nothing to add these small signposts, and future you will be grateful for them.",
    code: `/* Typography */
body {
  font-family: sans-serif;
}

/* Layout */
.container {
  max-width: 960px;
  margin: 0 auto;
}`
  },
  {
    id: "beg-094",
    module: "10. Pulling It Together",
    title: "Using a simple CSS reset",
    summary: "Browsers each ship their own slightly different default styles, which is why many projects start with a small reset that clears out margin, padding, and box-sizing quirks before any custom styling begins. It gives you a consistent, predictable baseline to design from.",
    code: `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`
  },
  {
    id: "beg-095",
    module: "10. Pulling It Together",
    title: "Reading CSS error messages",
    summary: "CSS doesn't throw loud errors the way some programming languages do — an invalid property or malformed value is usually just silently ignored by the browser. The best way to catch these mistakes is checking the DevTools styles panel, where unrecognized declarations often show up crossed out or flagged.",
    code: null
  },
  {
    id: "beg-096",
    module: "10. Pulling It Together",
    title: "Inspecting and editing live styles in DevTools",
    summary: "Your browser's DevTools let you click any element on a page and see, and even temporarily edit, every CSS rule affecting it, right there in the browser. It's the fastest way to experiment with a change before committing it to your actual stylesheet.",
    code: null
  },
  {
    id: "beg-097",
    module: "10. Pulling It Together",
    title: "Validating your CSS",
    summary: "Validating your CSS means checking it against the official specification to catch typos, invalid values, and unsupported properties before they cause quiet, confusing bugs. Tools like the W3C CSS Validator can scan a stylesheet and point out exactly where something doesn't conform.",
    code: `/* Valid: closed braces, semicolons, recognized properties */
.box {
  color: #333;
  padding: 10px;
}`
  },
  {
    id: "beg-098",
    module: "10. Pulling It Together",
    title: "Making your first styled card component",
    summary: "A card is one of the friendliest first components to build, combining background color, padding, border-radius, and a soft box-shadow into a little self-contained unit. It's a great way to practice several box model and background properties together in one place.",
    code: `.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
}`
  },
  {
    id: "beg-099",
    module: "10. Pulling It Together",
    title: "Making your first styled navigation bar",
    summary: "A simple navigation bar typically uses flexbox to line up its links horizontally, with space-between or a similar value to spread them out neatly. Add a background color and a little padding, and you already have a functional, good-looking navbar.",
    code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #fffbe6;
}`
  },
  {
    id: "beg-100",
    module: "10. Pulling It Together",
    title: "What to learn next (bridging to Intermediate)",
    summary: "You now know selectors, the cascade, the box model, colors, typography, and simple positioning — the sturdy foundation everything else in CSS builds on. From here, flexbox, grid, responsive design with media queries, and custom properties are the natural next steps waiting in the Intermediate track.",
    code: null
  }
];
