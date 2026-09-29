const CHALLENGES_BEGINNER = [
  {
    id: "beg-001",
    module: "1. Backgrounds & Color",
    title: "Paint the Sun",
    stage: "circle",
    brief: "This little circle is see-through and shy. Give it a warm, sunny yellow background so it glows on the page.",
    hint: "Set background-color on .shape to a golden yellow like #FFD700.",
    starterCss: `.shape {
  /* give it a sunny background */
}`,
    solutionCss: `.shape {
  background-color: #FFD700;
}`,
    rules: [
      { type: "bgColor", sel: ".shape", color: "#FFD700", tolerance: 30 }
    ]
  },
  {
    id: "beg-002",
    module: "1. Backgrounds & Color",
    title: "Sky Blue Square",
    stage: "square",
    brief: "Turn this dashed outline into a solid patch of sky. A cheerful blue background will do the trick.",
    hint: "Use background-color: #3498db; on .shape.",
    starterCss: `.shape {
  /* fill it with sky blue */
}`,
    solutionCss: `.shape {
  background-color: #3498db;
}`,
    rules: [
      { type: "bgColor", sel: ".shape", color: "#3498db", tolerance: 30 }
    ]
  },
  {
    id: "beg-003",
    module: "1. Backgrounds & Color",
    title: "Give the Badge Some Color",
    stage: "badge",
    brief: "This badge is currently invisible against the page. Give it any background color so it finally stands out.",
    hint: "Any background-color value on .badge will work, as long as it isn't transparent.",
    starterCss: `.badge {
  /* add a background color */
}`,
    solutionCss: `.badge {
  background-color: #e67e22;
}`,
    rules: [
      { type: "bgSet", sel: ".badge" }
    ]
  },
  {
    id: "beg-004",
    module: "1. Backgrounds & Color",
    title: "Minty Fresh Tag",
    stage: "tag",
    brief: "Give this little tag a refreshing mint green background, like a fresh sprig of herbs.",
    hint: "Try background-color: #2ecc71; on .tag.",
    starterCss: `.tag {
  /* make it mint green */
}`,
    solutionCss: `.tag {
  background-color: #2ecc71;
}`,
    rules: [
      { type: "bgColor", sel: ".tag", color: "#2ecc71", tolerance: 30 }
    ]
  },
  {
    id: "beg-005",
    module: "1. Backgrounds & Color",
    title: "Coral Reef Box",
    stage: "gradientbox",
    brief: "This plain white box needs some warmth. Paint it a lively coral color.",
    hint: "Set background-color: #ff7f50; on .box.",
    starterCss: `.box {
  /* splash on some coral */
}`,
    solutionCss: `.box {
  background-color: #ff7f50;
}`,
    rules: [
      { type: "bgColor", sel: ".box", color: "#ff7f50", tolerance: 30 }
    ]
  },
  {
    id: "beg-006",
    module: "1. Backgrounds & Color",
    title: "Cotton Candy Card",
    stage: "card",
    brief: "Turn this plain white card into a soft cotton-candy pink treat.",
    hint: "Use background-color: #ffc0cb; on .card.",
    starterCss: `.card {
  /* soft pink background */
}`,
    solutionCss: `.card {
  background-color: #ffc0cb;
}`,
    rules: [
      { type: "bgColor", sel: ".card", color: "#ffc0cb", tolerance: 30 }
    ]
  },
  {
    id: "beg-007",
    module: "1. Backgrounds & Color",
    title: "Lavender Halo",
    stage: "icon",
    brief: "Give this star a soft lavender glow behind it by coloring the space around it.",
    hint: "Add background-color: #e6e6fa; to .icon.",
    starterCss: `.icon {
  /* add a lavender halo */
}`,
    solutionCss: `.icon {
  background-color: #e6e6fa;
}`,
    rules: [
      { type: "bgColor", sel: ".icon", color: "#e6e6fa", tolerance: 30 }
    ]
  },
  {
    id: "beg-008",
    module: "1. Backgrounds & Color",
    title: "Tomato Time",
    stage: "circle",
    brief: "Ripen this circle into a juicy tomato red.",
    hint: "Set background-color: #ff6347; on .shape.",
    starterCss: `.shape {
  /* ripen it up */
}`,
    solutionCss: `.shape {
  background-color: #ff6347;
}`,
    rules: [
      { type: "bgColor", sel: ".shape", color: "#ff6347", tolerance: 30 }
    ]
  },
  {
    id: "beg-009",
    module: "1. Backgrounds & Color",
    title: "Grape Soda Square",
    stage: "square",
    brief: "Fizz this square up with a deep grape-soda purple.",
    hint: "Try background-color: #9b59b6; on .shape.",
    starterCss: `.shape {
  /* pour in some grape soda */
}`,
    solutionCss: `.shape {
  background-color: #9b59b6;
}`,
    rules: [
      { type: "bgColor", sel: ".shape", color: "#9b59b6", tolerance: 30 }
    ]
  },
  {
    id: "beg-010",
    module: "1. Backgrounds & Color",
    title: "Golden Badge",
    stage: "badge",
    brief: "Give this badge a shiny golden background worthy of a prize.",
    hint: "Use background-color: #f1c40f; on .badge.",
    starterCss: `.badge {
  /* make it gleam gold */
}`,
    solutionCss: `.badge {
  background-color: #f1c40f;
}`,
    rules: [
      { type: "bgColor", sel: ".badge", color: "#f1c40f", tolerance: 30 }
    ]
  },
  {
    id: "beg-011",
    module: "2. Text Color & Basic Typography",
    title: "Purple Prose",
    stage: "text-block",
    brief: "Give this sentence a rich, royal purple color.",
    hint: "Set color: #6a0dad; on .text.",
    starterCss: `.text {
  /* make it royal purple */
}`,
    solutionCss: `.text {
  color: #6a0dad;
}`,
    rules: [
      { type: "textColor", sel: ".text", color: "#6a0dad", tolerance: 30 }
    ]
  },
  {
    id: "beg-012",
    module: "2. Text Color & Basic Typography",
    title: "Bigger Words",
    stage: "text-block",
    brief: "This sentence is a bit small to read comfortably. Bump up the font size.",
    hint: "Set font-size to at least 24px on .text.",
    starterCss: `.text {
  /* make the words bigger */
}`,
    solutionCss: `.text {
  font-size: 28px;
}`,
    rules: [
      { type: "propMin", sel: ".text", prop: "fontSize", minPx: 24 }
    ]
  },
  {
    id: "beg-013",
    module: "2. Text Color & Basic Typography",
    title: "Fancy Quote",
    stage: "quote",
    brief: "Give this quote an elegant, slanted italic look.",
    hint: "Use font-style: italic; on .quote.",
    starterCss: `.quote {
  /* make it slanted and elegant */
}`,
    solutionCss: `.quote {
  font-style: italic;
}`,
    rules: [
      { type: "propEquals", sel: ".quote", prop: "fontStyle", value: "italic" }
    ]
  },
  {
    id: "beg-014",
    module: "2. Text Color & Basic Typography",
    title: "Bold Badge",
    stage: "badge",
    brief: "Make this badge's text extra bold so it really pops.",
    hint: "Set font-weight to at least 700 on .badge.",
    starterCss: `.badge {
  /* make the text extra bold */
}`,
    solutionCss: `.badge {
  font-weight: 800;
}`,
    rules: [
      { type: "fontWeightMin", sel: ".badge", min: 700 }
    ]
  },
  {
    id: "beg-015",
    module: "2. Text Color & Basic Typography",
    title: "Crimson Link",
    stage: "link",
    brief: "Color this link a bold crimson red so it can't be missed.",
    hint: "Set color: #dc143c; on .link.",
    starterCss: `.link {
  /* make it crimson red */
}`,
    solutionCss: `.link {
  color: #dc143c;
}`,
    rules: [
      { type: "textColor", sel: ".link", color: "#dc143c", tolerance: 30 }
    ]
  },
  {
    id: "beg-016",
    module: "2. Text Color & Basic Typography",
    title: "Center Stage",
    stage: "text-block",
    brief: "This sentence hugs the left edge. Bring it to the center of its box.",
    hint: "Use text-align: center; on .text.",
    starterCss: `.text {
  /* center the sentence */
}`,
    solutionCss: `.text {
  text-align: center;
}`,
    rules: [
      { type: "propEquals", sel: ".text", prop: "textAlign", value: "center" }
    ]
  },
  {
    id: "beg-017",
    module: "2. Text Color & Basic Typography",
    title: "Quiet Quote",
    stage: "quote",
    brief: "Give this quote a soft, quiet gray color, like a whispered thought.",
    hint: "Set color: #7f8c8d; on .quote.",
    starterCss: `.quote {
  /* whisper it in gray */
}`,
    solutionCss: `.quote {
  color: #7f8c8d;
}`,
    rules: [
      { type: "textColor", sel: ".quote", color: "#7f8c8d", tolerance: 30 }
    ]
  },
  {
    id: "beg-018",
    module: "2. Text Color & Basic Typography",
    title: "Shout It Out",
    stage: "badge",
    brief: "Make this badge's text shout by putting it all in UPPERCASE letters.",
    hint: "Use text-transform: uppercase; on .badge.",
    starterCss: `.badge {
  /* make it shout */
}`,
    solutionCss: `.badge {
  text-transform: uppercase;
}`,
    rules: [
      { type: "propEquals", sel: ".badge", prop: "textTransform", value: "uppercase" }
    ]
  },
  {
    id: "beg-019",
    module: "2. Text Color & Basic Typography",
    title: "Heavier Handwriting",
    stage: "text-block",
    brief: "Give this sentence some heft with a bold font weight.",
    hint: "Set font-weight to at least 700 on .text.",
    starterCss: `.text {
  /* make the words heavier */
}`,
    solutionCss: `.text {
  font-weight: 800;
}`,
    rules: [
      { type: "fontWeightMin", sel: ".text", min: 700 }
    ]
  },
  {
    id: "beg-020",
    module: "2. Text Color & Basic Typography",
    title: "Slanted Link",
    stage: "link",
    brief: "Give this link a stylish italic slant.",
    hint: "Set font-style: italic; on .link.",
    starterCss: `.link {
  /* give it a slant */
}`,
    solutionCss: `.link {
  font-style: italic;
}`,
    rules: [
      { type: "propEquals", sel: ".link", prop: "fontStyle", value: "italic" }
    ]
  },
  {
    id: "beg-021",
    module: "3. Borders & Corners",
    title: "Frame the Card",
    stage: "card",
    brief: "This card floats without an edge. Give it a visible border to frame it.",
    hint: "Use something like border: 3px solid #34495e; on .card.",
    starterCss: `.card {
  /* add a border to frame it */
}`,
    solutionCss: `.card {
  border: 3px solid #34495e;
}`,
    rules: [
      { type: "borderSet", sel: ".card" }
    ]
  },
  {
    id: "beg-022",
    module: "3. Borders & Corners",
    title: "Teal Trim",
    stage: "square",
    brief: "This square already has a dashed border — recolor it to a deep teal.",
    hint: "Set border-color: #008080; on .shape.",
    starterCss: `.shape {
  /* recolor the dashed trim */
}`,
    solutionCss: `.shape {
  border-color: #008080;
}`,
    rules: [
      { type: "borderColor", sel: ".shape", color: "#008080", tolerance: 30 }
    ]
  },
  {
    id: "beg-023",
    module: "3. Borders & Corners",
    title: "Soft Corners Button",
    stage: "button",
    brief: "Take the sharp edges off this button with some gently rounded corners.",
    hint: "Set border-radius to at least 10px on .btn.",
    starterCss: `.btn {
  /* round off the corners */
}`,
    solutionCss: `.btn {
  border-radius: 14px;
}`,
    rules: [
      { type: "propMin", sel: ".btn", prop: "borderTopLeftRadius", minPx: 10 }
    ]
  },
  {
    id: "beg-024",
    module: "3. Borders & Corners",
    title: "Pill Badge",
    stage: "badge",
    brief: "Round this badge all the way into a smooth pill shape.",
    hint: "A very large border-radius, like 999px, always makes a pill shape.",
    starterCss: `.badge {
  /* turn it into a pill */
}`,
    solutionCss: `.badge {
  border-radius: 999px;
}`,
    rules: [
      { type: "pill", sel: ".badge" }
    ]
  },
  {
    id: "beg-025",
    module: "3. Borders & Corners",
    title: "Pill Button",
    stage: "button",
    brief: "Give this button the fully-rounded pill look you see on so many modern sites.",
    hint: "Set border-radius: 999px; on .btn.",
    starterCss: `.btn {
  /* make it a pill button */
}`,
    solutionCss: `.btn {
  border-radius: 999px;
}`,
    rules: [
      { type: "pill", sel: ".btn" }
    ]
  },
  {
    id: "beg-026",
    module: "3. Borders & Corners",
    title: "Rounder Card",
    stage: "card",
    brief: "Soften this card's corners with a generous rounding.",
    hint: "Set border-radius to at least 16px on .card.",
    starterCss: `.card {
  /* soften those corners */
}`,
    solutionCss: `.card {
  border-radius: 24px;
}`,
    rules: [
      { type: "propMin", sel: ".card", prop: "borderTopLeftRadius", minPx: 16 }
    ]
  },
  {
    id: "beg-027",
    module: "3. Borders & Corners",
    title: "Outline the Badge",
    stage: "badge",
    brief: "This badge needs a crisp outline to help it stand apart from the page.",
    hint: "Add a border, like border: 2px solid #2c3e50; on .badge.",
    starterCss: `.badge {
  /* draw an outline around it */
}`,
    solutionCss: `.badge {
  border: 2px solid #2c3e50;
}`,
    rules: [
      { type: "borderSet", sel: ".badge" }
    ]
  },
  {
    id: "beg-028",
    module: "3. Borders & Corners",
    title: "Hot Pink Ring",
    stage: "circle",
    brief: "This circle's dashed ring needs some personality — recolor it hot pink.",
    hint: "Set border-color: #ff69b4; on .shape.",
    starterCss: `.shape {
  /* recolor the ring */
}`,
    solutionCss: `.shape {
  border-color: #ff69b4;
}`,
    rules: [
      { type: "borderColor", sel: ".shape", color: "#ff69b4", tolerance: 30 }
    ]
  },
  {
    id: "beg-029",
    module: "3. Borders & Corners",
    title: "Forest Frame",
    stage: "button",
    brief: "Give this borderless button a solid forest green frame.",
    hint: "Try border: 3px solid #228b22; on .btn.",
    starterCss: `.btn {
  /* add a forest green frame */
}`,
    solutionCss: `.btn {
  border: 3px solid #228b22;
}`,
    rules: [
      { type: "borderColor", sel: ".btn", color: "#228b22", tolerance: 30 }
    ]
  },
  {
    id: "beg-030",
    module: "3. Borders & Corners",
    title: "Square to Circle",
    stage: "square",
    brief: "This square wants to grow up into a circle. Round its corners all the way.",
    hint: "Set border-radius to at least 40px on .shape (half of its 80px size).",
    starterCss: `.shape {
  /* round it into a circle */
}`,
    solutionCss: `.shape {
  border-radius: 42px;
}`,
    rules: [
      { type: "propMin", sel: ".shape", prop: "borderTopLeftRadius", minPx: 40 }
    ]
  },
  {
    id: "beg-031",
    module: "4. Box Model & Spacing",
    title: "Roomier Button",
    stage: "button",
    brief: "This button feels cramped. Give it more breathing room on the left and right.",
    hint: "Combined left and right padding on .btn should total at least 40px.",
    starterCss: `.btn {
  /* give it more side room */
}`,
    solutionCss: `.btn {
  padding: 12px 50px;
}`,
    rules: [
      { type: "paddingXMin", sel: ".btn", minPx: 40 }
    ]
  },
  {
    id: "beg-032",
    module: "4. Box Model & Spacing",
    title: "Tall Button",
    stage: "button",
    brief: "Give this button some extra height by adding padding above and below the text.",
    hint: "Combined top and bottom padding on .btn should total at least 30px.",
    starterCss: `.btn {
  /* add space above and below */
}`,
    solutionCss: `.btn {
  padding: 30px 20px;
}`,
    rules: [
      { type: "paddingYMin", sel: ".btn", minPx: 30 }
    ]
  },
  {
    id: "beg-033",
    module: "4. Box Model & Spacing",
    title: "Give It Space",
    stage: "card",
    brief: "This card is squeezed right up against the top. Push it down with some margin.",
    hint: "Set margin-top to at least 50px on .card.",
    starterCss: `.card {
  /* push it down a bit */
}`,
    solutionCss: `.card {
  margin-top: 70px;
}`,
    rules: [
      { type: "propMin", sel: ".card", prop: "marginTop", minPx: 50 }
    ]
  },
  {
    id: "beg-034",
    module: "4. Box Model & Spacing",
    title: "Stretch the Box",
    stage: "gradientbox",
    brief: "This box could use more room to breathe. Stretch it wider.",
    hint: "Set width to at least 220px on .box.",
    starterCss: `.box {
  /* stretch it out */
}`,
    solutionCss: `.box {
  width: 260px;
}`,
    rules: [
      { type: "propMin", sel: ".box", prop: "width", minPx: 220 }
    ]
  },
  {
    id: "beg-035",
    module: "4. Box Model & Spacing",
    title: "Grow Taller",
    stage: "gradientbox",
    brief: "This box is a little short. Help it grow taller.",
    hint: "Set height to at least 140px on .box.",
    starterCss: `.box {
  /* let it grow taller */
}`,
    solutionCss: `.box {
  height: 160px;
}`,
    rules: [
      { type: "propMin", sel: ".box", prop: "height", minPx: 140 }
    ]
  },
  {
    id: "beg-036",
    module: "4. Box Model & Spacing",
    title: "Cushioned Card",
    stage: "card",
    brief: "Give this card some cozy inner cushioning on its left and right sides.",
    hint: "Combined left and right padding on .card should total at least 30px.",
    starterCss: `.card {
  /* add some side cushioning */
}`,
    solutionCss: `.card {
  padding-left: 40px;
  padding-right: 40px;
}`,
    rules: [
      { type: "paddingXMin", sel: ".card", minPx: 30 }
    ]
  },
  {
    id: "beg-037",
    module: "4. Box Model & Spacing",
    title: "Push It Down",
    stage: "button",
    brief: "Nudge this button further down away from the top of its stage.",
    hint: "Set margin-top to at least 40px on .btn.",
    starterCss: `.btn {
  /* nudge it downward */
}`,
    solutionCss: `.btn {
  margin-top: 60px;
}`,
    rules: [
      { type: "propMin", sel: ".btn", prop: "marginTop", minPx: 40 }
    ]
  },
  {
    id: "beg-038",
    module: "4. Box Model & Spacing",
    title: "Puffy Box",
    stage: "gradientbox",
    brief: "Give this box some puffy inner padding above and below.",
    hint: "Combined top and bottom padding on .box should total at least 30px.",
    starterCss: `.box {
  /* puff it up inside */
}`,
    solutionCss: `.box {
  padding-top: 20px;
  padding-bottom: 20px;
}`,
    rules: [
      { type: "paddingYMin", sel: ".box", minPx: 30 }
    ]
  },
  {
    id: "beg-039",
    module: "4. Box Model & Spacing",
    title: "Wider Card",
    stage: "card",
    brief: "This card is a little narrow. Give it some extra width.",
    hint: "Set width to at least 200px on .card.",
    starterCss: `.card {
  /* make it wider */
}`,
    solutionCss: `.card {
  width: 240px;
}`,
    rules: [
      { type: "propMin", sel: ".card", prop: "width", minPx: 200 }
    ]
  },
  {
    id: "beg-040",
    module: "4. Box Model & Spacing",
    title: "Drop Down Box",
    stage: "gradientbox",
    brief: "Drop this box further down from the top of its stage.",
    hint: "Set margin-top to at least 50px on .box.",
    starterCss: `.box {
  /* drop it down */
}`,
    solutionCss: `.box {
  margin-top: 70px;
}`,
    rules: [
      { type: "propMin", sel: ".box", prop: "marginTop", minPx: 50 }
    ]
  },
  {
    id: "beg-041",
    module: "5. Shadows & Simple Polish",
    title: "Card with Depth",
    stage: "card",
    brief: "This card looks flat against the page. Give it a soft shadow to lift it up.",
    hint: "Use box-shadow, like 0 4px 10px rgba(0,0,0,0.25); on .card.",
    starterCss: `.card {
  /* lift it with a shadow */
}`,
    solutionCss: `.card {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}`,
    rules: [
      { type: "hasShadow", sel: ".card" }
    ]
  },
  {
    id: "beg-042",
    module: "5. Shadows & Simple Polish",
    title: "Floating Button",
    stage: "button",
    brief: "Make this button look like it's floating just above the page with a shadow.",
    hint: "Add a box-shadow to .btn.",
    starterCss: `.btn {
  /* make it float */
}`,
    solutionCss: `.btn {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}`,
    rules: [
      { type: "hasShadow", sel: ".btn" }
    ]
  },
  {
    id: "beg-043",
    module: "5. Shadows & Simple Polish",
    title: "Flatten the Box",
    stage: "gradientbox",
    brief: "Someone left a heavy shadow on this box. Remove it so the box sits flat again.",
    hint: "Set box-shadow: none; on .box.",
    starterCss: `.box {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
  /* remove the shadow */
}`,
    solutionCss: `.box {
  box-shadow: none;
}`,
    rules: [
      { type: "noShadow", sel: ".box" }
    ]
  },
  {
    id: "beg-044",
    module: "5. Shadows & Simple Polish",
    title: "Fade the Badge",
    stage: "badge",
    brief: "Make this badge fade into the background by lowering its opacity.",
    hint: "Set opacity to 0.5 or lower on .badge.",
    starterCss: `.badge {
  /* fade it out a bit */
}`,
    solutionCss: `.badge {
  opacity: 0.4;
}`,
    rules: [
      { type: "opacityMax", sel: ".badge", max: 0.5 }
    ]
  },
  {
    id: "beg-045",
    module: "5. Shadows & Simple Polish",
    title: "Bring It Back",
    stage: "card",
    brief: "This card has faded almost completely away. Bring it back to full visibility.",
    hint: "Set opacity: 1; (or remove the low opacity) on .card.",
    starterCss: `.card {
  opacity: 0.2;
  /* this card is barely visible, fix it! */
}`,
    solutionCss: `.card {
  opacity: 1;
}`,
    rules: [
      { type: "opacityMin", sel: ".card", min: 0.9 }
    ]
  },
  {
    id: "beg-046",
    module: "5. Shadows & Simple Polish",
    title: "Ghost Button",
    stage: "button",
    brief: "Turn this button into a faint ghost of itself by lowering its opacity.",
    hint: "Set opacity to 0.6 or lower on .btn.",
    starterCss: `.btn {
  /* turn it into a ghost */
}`,
    solutionCss: `.btn {
  opacity: 0.5;
}`,
    rules: [
      { type: "opacityMax", sel: ".btn", max: 0.6 }
    ]
  },
  {
    id: "beg-047",
    module: "5. Shadows & Simple Polish",
    title: "Badge with Lift",
    stage: "badge",
    brief: "Give this flat badge a subtle shadow so it lifts off the page.",
    hint: "Add a box-shadow to .badge.",
    starterCss: `.badge {
  /* give it some lift */
}`,
    solutionCss: `.badge {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}`,
    rules: [
      { type: "hasShadow", sel: ".badge" }
    ]
  },
  {
    id: "beg-048",
    module: "5. Shadows & Simple Polish",
    title: "Box with Depth",
    stage: "gradientbox",
    brief: "Add some depth to this flat box with a soft drop shadow.",
    hint: "Add a box-shadow to .box.",
    starterCss: `.box {
  /* add some depth */
}`,
    solutionCss: `.box {
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
}`,
    rules: [
      { type: "hasShadow", sel: ".box" }
    ]
  },
  {
    id: "beg-049",
    module: "5. Shadows & Simple Polish",
    title: "No More Shadow",
    stage: "button",
    brief: "This button has a heavy shadow that needs to go. Make it flat again.",
    hint: "Set box-shadow: none; on .btn.",
    starterCss: `.btn {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
  /* make it flat again */
}`,
    solutionCss: `.btn {
  box-shadow: none;
}`,
    rules: [
      { type: "noShadow", sel: ".btn" }
    ]
  },
  {
    id: "beg-050",
    module: "5. Shadows & Simple Polish",
    title: "Soft Fade Card",
    stage: "card",
    brief: "Give this card a gentle, partly see-through fade.",
    hint: "Set opacity to 0.7 or lower on .card.",
    starterCss: `.card {
  /* give it a gentle fade */
}`,
    solutionCss: `.card {
  opacity: 0.6;
}`,
    rules: [
      { type: "opacityMax", sel: ".card", max: 0.7 }
    ]
  },
  {
    id: "beg-051",
    module: "6. Display & Visibility",
    title: "Shrink to Fit",
    stage: "text-block",
    brief: "This sentence stretches across the whole stage. Make it shrink to hug just its own content.",
    hint: "Set display: inline-block; on .text.",
    starterCss: `.text {
  /* shrink it to fit its content */
}`,
    solutionCss: `.text {
  display: inline-block;
}`,
    rules: [
      { type: "propEquals", sel: ".text", prop: "display", value: "inline-block" }
    ]
  },
  {
    id: "beg-052",
    module: "6. Display & Visibility",
    title: "Inline List",
    stage: "list",
    brief: "This list takes up the full line. Shrink its box down to wrap just its own content.",
    hint: "Set display: inline-block; on .list.",
    starterCss: `.list {
  /* shrink it to fit its content */
}`,
    solutionCss: `.list {
  display: inline-block;
}`,
    rules: [
      { type: "propEquals", sel: ".list", prop: "display", value: "inline-block" }
    ]
  },
  {
    id: "beg-053",
    module: "6. Display & Visibility",
    title: "Line Up the Nav",
    stage: "nav",
    brief: "Turn this navigation into a flex container so its links can line up neatly.",
    hint: "Set display: flex; on .nav.",
    starterCss: `.nav {
  /* make it a flex container */
}`,
    solutionCss: `.nav {
  display: flex;
}`,
    rules: [
      { type: "propEquals", sel: ".nav", prop: "display", value: "flex" }
    ]
  },
  {
    id: "beg-054",
    module: "6. Display & Visibility",
    title: "Half Visible Card",
    stage: "card",
    brief: "Make this card half see-through by lowering its opacity.",
    hint: "Set opacity to 0.5 or lower on .card.",
    starterCss: `.card {
  /* make it half see-through */
}`,
    solutionCss: `.card {
  opacity: 0.4;
}`,
    rules: [
      { type: "opacityMax", sel: ".card", max: 0.5 }
    ]
  },
  {
    id: "beg-055",
    module: "6. Display & Visibility",
    title: "Barely-There Badge",
    stage: "badge",
    brief: "Fade this badge until it's barely visible.",
    hint: "Set opacity to 0.4 or lower on .badge.",
    starterCss: `.badge {
  /* fade it way down */
}`,
    solutionCss: `.badge {
  opacity: 0.3;
}`,
    rules: [
      { type: "opacityMax", sel: ".badge", max: 0.4 }
    ]
  },
  {
    id: "beg-056",
    module: "6. Display & Visibility",
    title: "Block the Table",
    stage: "table",
    brief: "This table has a special built-in table display. Change it into a plain block element instead.",
    hint: "Set display: block; on .tbl.",
    starterCss: `.tbl {
  /* change it to a plain block */
}`,
    solutionCss: `.tbl {
  display: block;
}`,
    rules: [
      { type: "propEquals", sel: ".tbl", prop: "display", value: "block" }
    ]
  },
  {
    id: "beg-057",
    module: "6. Display & Visibility",
    title: "Quote in a Box",
    stage: "quote",
    brief: "Shrink this quote's box down to fit its content by making it inline-block.",
    hint: "Set display: inline-block; on .quote.",
    starterCss: `.quote {
  /* shrink its box to fit */
}`,
    solutionCss: `.quote {
  display: inline-block;
}`,
    rules: [
      { type: "propEquals", sel: ".quote", prop: "display", value: "inline-block" }
    ]
  },
  {
    id: "beg-058",
    module: "6. Display & Visibility",
    title: "Inline Row",
    stage: "row-3",
    brief: "This row of boxes stretches across the whole stage. Shrink its container to fit with inline-block.",
    hint: "Set display: inline-block; on .row.",
    starterCss: `.row {
  /* shrink it to fit its content */
}`,
    solutionCss: `.row {
  display: inline-block;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "inline-block" }
    ]
  },
  {
    id: "beg-059",
    module: "6. Display & Visibility",
    title: "Flexible Row",
    stage: "row-6",
    brief: "Turn this row into a flex container so its six boxes are ready to line up flexibly.",
    hint: "Set display: flex; on .row.",
    starterCss: `.row {
  /* make it a flex container */
}`,
    solutionCss: `.row {
  display: flex;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" }
    ]
  },
  {
    id: "beg-060",
    module: "6. Display & Visibility",
    title: "Dim the Card",
    stage: "card",
    brief: "Dim this card down so it looks a little sleepy.",
    hint: "Set opacity to 0.6 or lower on .card.",
    starterCss: `.card {
  /* dim it down */
}`,
    solutionCss: `.card {
  opacity: 0.5;
}`,
    rules: [
      { type: "opacityMax", sel: ".card", max: 0.6 }
    ]
  },
  {
    id: "beg-061",
    module: "7. Lists & Links",
    title: "No Bullets Please",
    stage: "list",
    brief: "These bullet points are cluttering the list. Remove them entirely.",
    hint: "Set list-style-type: none; on .list, or use the list-style-none checker's shortcut.",
    starterCss: `.list {
  /* remove the bullets */
}`,
    solutionCss: `.list {
  list-style-type: none;
}`,
    rules: [
      { type: "listStyleNone", sel: ".list" }
    ]
  },
  {
    id: "beg-062",
    module: "7. Lists & Links",
    title: "Remove the Underline",
    stage: "link",
    brief: "This link is underlined by default. Strip the underline away for a cleaner look.",
    hint: "Set text-decoration: none; on .link.",
    starterCss: `.link {
  /* strip the underline */
}`,
    solutionCss: `.link {
  text-decoration: none;
}`,
    rules: [
      { type: "propEquals", sel: ".link", prop: "textDecorationLine", value: "none" }
    ]
  },
  {
    id: "beg-063",
    module: "7. Lists & Links",
    title: "Clickable Badge",
    stage: "badge",
    brief: "Make this badge feel clickable by giving it a pointer cursor.",
    hint: "Set cursor: pointer; on .badge.",
    starterCss: `.badge {
  /* make it feel clickable */
}`,
    solutionCss: `.badge {
  cursor: pointer;
}`,
    rules: [
      { type: "propEquals", sel: ".badge", prop: "cursor", value: "pointer" }
    ]
  },
  {
    id: "beg-064",
    module: "7. Lists & Links",
    title: "Shout the Nav Links",
    stage: "nav",
    brief: "The navigation links are whispering. Make every link shout in full capital letters.",
    hint: "Set text-transform: uppercase; on .nav a.",
    starterCss: `.nav a {
  /* make the links loud */
}`,
    solutionCss: `.nav a {
  text-transform: uppercase;
}`,
    rules: [
      { type: "propEquals", sel: ".nav a", prop: "textTransform", value: "uppercase" }
    ]
  },
  {
    id: "beg-065",
    module: "7. Lists & Links",
    title: "Square Bullets",
    stage: "list",
    brief: "Swap out the round bullets on this list for crisp little squares.",
    hint: "Set list-style-type: square; on .list.",
    starterCss: `.list {
  /* switch to square bullets */
}`,
    solutionCss: `.list {
  list-style-type: square;
}`,
    rules: [
      { type: "propEquals", sel: ".list", prop: "listStyleType", value: "square" }
    ]
  },
  {
    id: "beg-066",
    module: "7. Lists & Links",
    title: "Clickable Tag",
    stage: "tag",
    brief: "Give this tag a pointer cursor so it feels interactive.",
    hint: "Set cursor: pointer; on .tag.",
    starterCss: `.tag {
  /* make it feel interactive */
}`,
    solutionCss: `.tag {
  cursor: pointer;
}`,
    rules: [
      { type: "propEquals", sel: ".tag", prop: "cursor", value: "pointer" }
    ]
  },
  {
    id: "beg-067",
    module: "7. Lists & Links",
    title: "Off Limits",
    stage: "button",
    brief: "Make this button look disabled by giving it a 'not allowed' cursor.",
    hint: "Set cursor: not-allowed; on .btn.",
    starterCss: `.btn {
  /* make it look off limits */
}`,
    solutionCss: `.btn {
  cursor: not-allowed;
}`,
    rules: [
      { type: "propEquals", sel: ".btn", prop: "cursor", value: "not-allowed" }
    ]
  },
  {
    id: "beg-068",
    module: "7. Lists & Links",
    title: "Underline the Badge",
    stage: "badge",
    brief: "Give this badge's text an underline, like a little link.",
    hint: "Set text-decoration: underline; on .badge.",
    starterCss: `.badge {
  /* underline the text */
}`,
    solutionCss: `.badge {
  text-decoration: underline;
}`,
    rules: [
      { type: "propEquals", sel: ".badge", prop: "textDecorationLine", value: "underline" }
    ]
  },
  {
    id: "beg-069",
    module: "7. Lists & Links",
    title: "Strike It Out",
    stage: "tag",
    brief: "Cross out this tag's text with a strikethrough line.",
    hint: "Set text-decoration: line-through; on .tag.",
    starterCss: `.tag {
  /* cross it out */
}`,
    solutionCss: `.tag {
  text-decoration: line-through;
}`,
    rules: [
      { type: "propEquals", sel: ".tag", prop: "textDecorationLine", value: "line-through" }
    ]
  },
  {
    id: "beg-070",
    module: "7. Lists & Links",
    title: "Please Wait...",
    stage: "button",
    brief: "Give this button a 'loading' feel with a wait cursor.",
    hint: "Set cursor: wait; on .btn.",
    starterCss: `.btn {
  /* give it a loading feel */
}`,
    solutionCss: `.btn {
  cursor: wait;
}`,
    rules: [
      { type: "propEquals", sel: ".btn", prop: "cursor", value: "wait" }
    ]
  },
  {
    id: "beg-071",
    module: "8. Simple Centering",
    title: "Center the Circle",
    stage: "circle",
    brief: "Oops, someone knocked this circle off-center! Bring it back to the middle of its stage.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* bring the circle back to the middle */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".shape", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-072",
    module: "8. Simple Centering",
    title: "Center the Square",
    stage: "square",
    brief: "This square has drifted to a corner. Recenter it in the middle of its stage.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* recenter the square */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".shape", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-073",
    module: "8. Simple Centering",
    title: "Center the Card",
    stage: "card",
    brief: "This card has wandered off to the side. Guide it back to the center.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* guide the card back to center */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".card", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-074",
    module: "8. Simple Centering",
    title: "Center the Button",
    stage: "button",
    brief: "This button is stuck in a corner. Rescue it and place it dead center.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* rescue the button */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".btn", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-075",
    module: "8. Simple Centering",
    title: "Center the Badge",
    stage: "badge",
    brief: "This badge slipped out of place. Put it right back in the middle.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* put the badge back in the middle */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".badge", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-076",
    module: "8. Simple Centering",
    title: "Center the Star",
    stage: "icon",
    brief: "This star has fallen off-center. Guide it back to the middle of the sky.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* guide the star back home */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".icon", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-077",
    module: "8. Simple Centering",
    title: "Center the Box",
    stage: "gradientbox",
    brief: "This box needs to find its way back to the middle of its stage.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* help the box find its way back */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".box", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-078",
    module: "8. Simple Centering",
    title: "Center the Quote",
    stage: "quote",
    brief: "This quote has drifted to the top. Bring it down and center it in its stage.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* bring the quote to the center */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".quote", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-079",
    module: "8. Simple Centering",
    title: "Center the Tag",
    stage: "tag",
    brief: "This tag is off in a corner somewhere. Bring it back to the center.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* bring the tag back home */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".tag", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-080",
    module: "8. Simple Centering",
    title: "Center the Field",
    stage: "input",
    brief: "This text field has drifted off-center. Recenter it in its stage.",
    hint: "Try display: flex; align-items: center; justify-content: center; on .stage.",
    starterCss: `.stage {
  display: block;
  /* recenter the field */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    rules: [
      { type: "centered", child: ".field", parent: ".stage", tolerance: 4 }
    ]
  },
  {
    id: "beg-081",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Spaced Out Text",
    stage: "text-block",
    brief: "Give this sentence's letters a little breathing room between them.",
    hint: "Set letter-spacing: 2px; on .text.",
    starterCss: `.text {
  /* space out the letters */
}`,
    solutionCss: `.text {
  letter-spacing: 2px;
}`,
    rules: [
      { type: "letterSpacingSet", sel: ".text" }
    ]
  },
  {
    id: "beg-082",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Spaced Out Badge",
    stage: "badge",
    brief: "Give this badge's letters some extra spacing for a sleek, wide look.",
    hint: "Set letter-spacing: 3px; on .badge.",
    starterCss: `.badge {
  /* widen the letter spacing */
}`,
    solutionCss: `.badge {
  letter-spacing: 3px;
}`,
    rules: [
      { type: "letterSpacingSet", sel: ".badge" }
    ]
  },
  {
    id: "beg-083",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Dark Header Row",
    stage: "table",
    brief: "Give this table's header row a deep slate background.",
    hint: "Set background-color: #34495e; on .tbl th.",
    starterCss: `.tbl th {
  /* darken the header row */
}`,
    solutionCss: `.tbl th {
  background-color: #34495e;
}`,
    rules: [
      { type: "bgColor", sel: ".tbl th", color: "#34495e", tolerance: 30 }
    ]
  },
  {
    id: "beg-084",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "White Header Text",
    stage: "table",
    brief: "Make the header text bright white so it's easy to read.",
    hint: "Set color: #ffffff; on .tbl th.",
    starterCss: `.tbl th {
  /* brighten the header text */
}`,
    solutionCss: `.tbl th {
  color: #ffffff;
}`,
    rules: [
      { type: "textColor", sel: ".tbl th", color: "#ffffff", tolerance: 30 }
    ]
  },
  {
    id: "beg-085",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Center the Cells",
    stage: "table",
    brief: "Center-align the text inside this table's data cells.",
    hint: "Set text-align: center; on .tbl td.",
    starterCss: `.tbl td {
  /* center the cell text */
}`,
    solutionCss: `.tbl td {
  text-align: center;
}`,
    rules: [
      { type: "propEquals", sel: ".tbl td", prop: "textAlign", value: "center" }
    ]
  },
  {
    id: "beg-086",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Roomy Quote Letters",
    stage: "quote",
    brief: "Give this quote's letters a little extra room to breathe.",
    hint: "Set letter-spacing: 1.5px; on .quote.",
    starterCss: `.quote {
  /* give the letters room */
}`,
    solutionCss: `.quote {
  letter-spacing: 1.5px;
}`,
    rules: [
      { type: "letterSpacingSet", sel: ".quote" }
    ]
  },
  {
    id: "beg-087",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Cream Table",
    stage: "table",
    brief: "Give this whole table a soft, warm cream-colored background.",
    hint: "Set background-color: #fdf6e3; on .tbl.",
    starterCss: `.tbl {
  /* warm it up with cream */
}`,
    solutionCss: `.tbl {
  background-color: #fdf6e3;
}`,
    rules: [
      { type: "bgColor", sel: ".tbl", color: "#fdf6e3", tolerance: 30 }
    ]
  },
  {
    id: "beg-088",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Spaced Tag Letters",
    stage: "tag",
    brief: "Widen the letter spacing on this tag for a sleeker, more spread-out look.",
    hint: "Set letter-spacing: 2px; on .tag.",
    starterCss: `.tag {
  /* widen the letters */
}`,
    solutionCss: `.tag {
  letter-spacing: 2px;
}`,
    rules: [
      { type: "letterSpacingSet", sel: ".tag" }
    ]
  },
  {
    id: "beg-089",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Slate Cell Text",
    stage: "table",
    brief: "Color the table's data cell text a cool dark slate gray.",
    hint: "Set color: #2f4f4f; on .tbl td.",
    starterCss: `.tbl td {
  /* cool the text color down */
}`,
    solutionCss: `.tbl td {
  color: #2f4f4f;
}`,
    rules: [
      { type: "textColor", sel: ".tbl td", color: "#2f4f4f", tolerance: 30 }
    ]
  },
  {
    id: "beg-090",
    module: "9. Letter-spacing, Text Effects & Tables",
    title: "Right-Align Headers",
    stage: "table",
    brief: "Push this table's header text over to the right edge of each cell.",
    hint: "Set text-align: right; on .tbl th.",
    starterCss: `.tbl th {
  /* push the header text right */
}`,
    solutionCss: `.tbl th {
  text-align: right;
}`,
    rules: [
      { type: "propEquals", sel: ".tbl th", prop: "textAlign", value: "right" }
    ]
  },
  {
    id: "beg-091",
    module: "10. Mixed Review",
    title: "Peachy & Lifted",
    stage: "card",
    brief: "Give this card a warm peach background and a soft shadow to lift it off the page.",
    hint: "Combine a background-color with a box-shadow on .card.",
    starterCss: `.card {
  /* peachy background + soft shadow */
}`,
    solutionCss: `.card {
  background-color: #ffdab9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}`,
    rules: [
      { type: "bgColor", sel: ".card", color: "#ffdab9", tolerance: 30 },
      { type: "hasShadow", sel: ".card" }
    ]
  },
  {
    id: "beg-092",
    module: "10. Mixed Review",
    title: "Rounded and Ready",
    stage: "button",
    brief: "Give this button a visible border and round it into a full pill shape.",
    hint: "Combine a border with a large border-radius on .btn.",
    starterCss: `.btn {
  /* border + full pill rounding */
}`,
    solutionCss: `.btn {
  border: 3px solid #333333;
  border-radius: 999px;
}`,
    rules: [
      { type: "borderSet", sel: ".btn" },
      { type: "pill", sel: ".btn" }
    ]
  },
  {
    id: "beg-093",
    module: "10. Mixed Review",
    title: "Bold Purple Badge",
    stage: "badge",
    brief: "Color this badge's text a bold purple and make it extra bold.",
    hint: "Combine color with a strong font-weight on .badge.",
    starterCss: `.badge {
  /* purple text + extra bold */
}`,
    solutionCss: `.badge {
  color: #8e44ad;
  font-weight: 800;
}`,
    rules: [
      { type: "textColor", sel: ".badge", color: "#8e44ad", tolerance: 30 },
      { type: "fontWeightMin", sel: ".badge", min: 700 }
    ]
  },
  {
    id: "beg-094",
    module: "10. Mixed Review",
    title: "Framed and Rounded",
    stage: "card",
    brief: "Give this card a visible border and generously rounded corners.",
    hint: "Combine a border with border-radius (at least 16px) on .card.",
    starterCss: `.card {
  /* border + rounded corners */
}`,
    solutionCss: `.card {
  border: 2px solid #34495e;
  border-radius: 20px;
}`,
    rules: [
      { type: "borderSet", sel: ".card" },
      { type: "propMin", sel: ".card", prop: "borderTopLeftRadius", minPx: 16 }
    ]
  },
  {
    id: "beg-095",
    module: "10. Mixed Review",
    title: "Teal Button Makeover",
    stage: "button",
    brief: "Give this button a fresh teal background paired with crisp white text.",
    hint: "Combine background-color with color on .btn.",
    starterCss: `.btn {
  /* teal background + white text */
}`,
    solutionCss: `.btn {
  background-color: #16a085;
  color: #ffffff;
}`,
    rules: [
      { type: "bgColor", sel: ".btn", color: "#16a085", tolerance: 30 },
      { type: "textColor", sel: ".btn", color: "#ffffff", tolerance: 30 }
    ]
  },
  {
    id: "beg-096",
    module: "10. Mixed Review",
    title: "Golden Pill Badge",
    stage: "badge",
    brief: "Give this badge a golden background and round it all the way into a pill.",
    hint: "Combine background-color with a large border-radius on .badge.",
    starterCss: `.badge {
  /* golden background + pill shape */
}`,
    solutionCss: `.badge {
  background-color: #f39c12;
  border-radius: 999px;
}`,
    rules: [
      { type: "bgColor", sel: ".badge", color: "#f39c12", tolerance: 30 },
      { type: "pill", sel: ".badge" }
    ]
  },
  {
    id: "beg-097",
    module: "10. Mixed Review",
    title: "Slate & Lifted Card",
    stage: "card",
    brief: "Color this card's text a deep slate and give it a soft shadow for depth.",
    hint: "Combine color with box-shadow on .card.",
    starterCss: `.card {
  /* slate text + soft shadow */
}`,
    solutionCss: `.card {
  color: #34495e;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}`,
    rules: [
      { type: "textColor", sel: ".card", color: "#34495e", tolerance: 30 },
      { type: "hasShadow", sel: ".card" }
    ]
  },
  {
    id: "beg-098",
    module: "10. Mixed Review",
    title: "Extra Roomy Button",
    stage: "button",
    brief: "Give this button generous padding on every side, both horizontally and vertically.",
    hint: "Combine enough left/right padding with enough top/bottom padding on .btn.",
    starterCss: `.btn {
  /* roomy on every side */
}`,
    solutionCss: `.btn {
  padding: 16px 30px;
}`,
    rules: [
      { type: "paddingXMin", sel: ".btn", minPx: 24 },
      { type: "paddingYMin", sel: ".btn", minPx: 14 }
    ]
  },
  {
    id: "beg-099",
    module: "10. Mixed Review",
    title: "Outlined Badge",
    stage: "badge",
    brief: "Give this badge both a background color and a visible border.",
    hint: "Combine background-color with a border on .badge.",
    starterCss: `.badge {
  /* background + border */
}`,
    solutionCss: `.badge {
  background-color: #ecf0f1;
  border: 2px solid #7f8c8d;
}`,
    rules: [
      { type: "bgSet", sel: ".badge" },
      { type: "borderSet", sel: ".badge" }
    ]
  },
  {
    id: "beg-100",
    module: "10. Mixed Review",
    title: "The Perfect Finish",
    stage: "card",
    brief: "Finish this card off with a lovely lavender background and a gentle shadow underneath.",
    hint: "Combine background-color with box-shadow on .card.",
    starterCss: `.card {
  /* lavender background + gentle shadow */
}`,
    solutionCss: `.card {
  background-color: #a29bfe;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}`,
    rules: [
      { type: "bgColor", sel: ".card", color: "#a29bfe", tolerance: 30 },
      { type: "hasShadow", sel: ".card" }
    ]
  }
];
