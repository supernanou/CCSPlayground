const CHALLENGES_INTERMEDIATE = [
  {
    id: "int-001",
    module: "1. Flexbox Basics",
    title: "Line Them Up",
    stage: "row-3",
    brief: "The three boxes are just sitting there stacked with no plan. Turn .row into a flex container and bunch the items together in the center.",
    hint: "Set display: flex and justify-content: center on .row.",
    starterCss: `.row {
  /* display: flex; */
  /* justify-content: center; */
}`,
    solutionCss: `.row {
  display: flex;
  justify-content: center;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".row", prop: "justifyContent", value: "center" },
    ],
  },
  {
    id: "int-002",
    module: "1. Flexbox Basics",
    title: "Push Them Apart",
    stage: "row-3",
    brief: "Give the three items some breathing room by spreading them evenly across the row, with space between them.",
    hint: "display: flex plus justify-content: space-between does the trick.",
    starterCss: `.row {
  /* display: flex; */
  /* justify-content: space-between; */
}`,
    solutionCss: `.row {
  display: flex;
  justify-content: space-between;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".row", prop: "justifyContent", value: "space-between" },
    ],
  },
  {
    id: "int-003",
    module: "1. Flexbox Basics",
    title: "All The Way Right",
    stage: "row-3",
    brief: "Shove all three boxes over to the right edge of their row.",
    hint: "justify-content: flex-end lines everything up on the end side.",
    starterCss: `.row {
  /* display: flex; */
  /* justify-content: flex-end; */
}`,
    solutionCss: `.row {
  display: flex;
  justify-content: flex-end;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".row", prop: "justifyContent", value: "flex-end" },
    ],
  },
  {
    id: "int-004",
    module: "1. Flexbox Basics",
    title: "Stack 'Em Up",
    stage: "row-3",
    brief: "Turn the row into a vertical stack instead of a horizontal line, without touching the markup.",
    hint: "flex-direction: column flips the main axis to vertical.",
    starterCss: `.row {
  /* display: flex; */
  /* flex-direction: column; */
}`,
    solutionCss: `.row {
  display: flex;
  flex-direction: column;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".row", prop: "flexDirection", value: "column" },
    ],
  },
  {
    id: "int-005",
    module: "1. Flexbox Basics",
    title: "Center Of Gravity",
    stage: "row-3",
    brief: "Make the items align to the vertical center of their row using the cross-axis alignment property.",
    hint: "align-items: center centers items along the cross axis.",
    starterCss: `.row {
  /* display: flex; */
  /* align-items: center; */
}`,
    solutionCss: `.row {
  display: flex;
  align-items: center;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".row", prop: "alignItems", value: "center" },
    ],
  },
  {
    id: "int-006",
    module: "1. Flexbox Basics",
    title: "Bottom Anchored",
    stage: "row-3",
    brief: "Anchor all three boxes to the bottom edge of the row.",
    hint: "align-items: flex-end pins items to the end of the cross axis.",
    starterCss: `.row {
  /* display: flex; */
  /* align-items: flex-end; */
}`,
    solutionCss: `.row {
  display: flex;
  align-items: flex-end;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".row", prop: "alignItems", value: "flex-end" },
    ],
  },
  {
    id: "int-007",
    module: "1. Flexbox Basics",
    title: "Nav To The Right",
    stage: "nav",
    brief: "This navigation's links are stuck on the left. Make the nav a flex row and push the links over to the right side.",
    hint: "display: flex plus justify-content: flex-end on .nav.",
    starterCss: `.nav {
  /* display: flex; */
  /* justify-content: flex-end; */
}`,
    solutionCss: `.nav {
  display: flex;
  justify-content: flex-end;
}`,
    rules: [
      { type: "propEquals", sel: ".nav", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".nav", prop: "justifyContent", value: "flex-end" },
    ],
  },
  {
    id: "int-008",
    module: "1. Flexbox Basics",
    title: "Nav, Centered",
    stage: "nav",
    brief: "Center the navigation links in the middle of the nav bar.",
    hint: "display: flex plus justify-content: center on .nav.",
    starterCss: `.nav {
  /* display: flex; */
  /* justify-content: center; */
}`,
    solutionCss: `.nav {
  display: flex;
  justify-content: center;
}`,
    rules: [
      { type: "propEquals", sel: ".nav", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".nav", prop: "justifyContent", value: "center" },
    ],
  },
  {
    id: "int-009",
    module: "1. Flexbox Basics",
    title: "Even Spacing",
    stage: "row-3",
    brief: "Spread the three boxes out with equal space around each one, including the outer edges.",
    hint: "justify-content: space-around distributes space around every item.",
    starterCss: `.row {
  /* display: flex; */
  /* justify-content: space-around; */
}`,
    solutionCss: `.row {
  display: flex;
  justify-content: space-around;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".row", prop: "justifyContent", value: "space-around" },
    ],
  },
  {
    id: "int-010",
    module: "1. Flexbox Basics",
    title: "Reverse The Order",
    stage: "row-3",
    brief: "Flip the row so the items flow right-to-left instead of left-to-right.",
    hint: "flex-direction: row-reverse reverses the main axis direction.",
    starterCss: `.row {
  /* display: flex; */
  /* flex-direction: row-reverse; */
}`,
    solutionCss: `.row {
  display: flex;
  flex-direction: row-reverse;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "propEquals", sel: ".row", prop: "flexDirection", value: "row-reverse" },
    ],
  },
  {
    id: "int-011",
    module: "2. Flexbox in Practice",
    title: "Give It Some Air",
    stage: "row-3",
    brief: "The boxes are touching edge to edge. Turn on flex and add a generous gap between them.",
    hint: "display: flex plus gap: 20px (or more) creates space between flex items.",
    starterCss: `.row {
  /* display: flex; */
  /* gap: 20px; */
}`,
    solutionCss: `.row {
  display: flex;
  gap: 20px;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "gapMin", sel: ".row", axis: "both", minPx: 16 },
    ],
  },
  {
    id: "int-012",
    module: "2. Flexbox in Practice",
    title: "Wider Gutters",
    stage: "row-6",
    brief: "These six boxes need noticeably wider gutters between them.",
    hint: "Use gap of at least 24px on the flex row.",
    starterCss: `.row {
  /* display: flex; */
  /* gap: 28px; */
}`,
    solutionCss: `.row {
  display: flex;
  gap: 28px;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "gapMin", sel: ".row", axis: "column", minPx: 24 },
    ],
  },
  {
    id: "int-013",
    module: "2. Flexbox in Practice",
    title: "Equal Footing",
    stage: "row-3",
    brief: "Make all three items share the row equally, so each one ends up the exact same width.",
    hint: "Set .row to display: flex and give each .item flex: 1.",
    starterCss: `.row {
  /* display: flex; */
}

.item {
  /* flex: 1; */
}`,
    solutionCss: `.row {
  display: flex;
}

.item {
  flex: 1;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "equalWidths", sel: ".item", tolerance: 3 },
    ],
  },
  {
    id: "int-014",
    module: "2. Flexbox in Practice",
    title: "Same Height Club",
    stage: "row-3",
    brief: "Right now the boxes could each be any height. Force them all to match by giving them the same explicit height.",
    hint: "display: flex on .row, then a matching height on every .item.",
    starterCss: `.row {
  /* display: flex; */
}

.item {
  /* height: 90px; */
}`,
    solutionCss: `.row {
  display: flex;
  align-items: stretch;
}

.item {
  height: 90px;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "equalHeights", sel: ".item", tolerance: 3 },
    ],
  },
  {
    id: "int-015",
    module: "2. Flexbox in Practice",
    title: "Nav Links, Evenly Split",
    stage: "nav",
    brief: "Make the nav links divide the bar equally between them so each link takes up the same width.",
    hint: "display: flex on .nav, then flex: 1 and min-width: 0 on .nav a (the min-width keeps unequal text lengths from throwing off the split).",
    starterCss: `.nav {
  /* display: flex; */
}

.nav a {
  /* flex: 1; */
  /* min-width: 0; */
}`,
    solutionCss: `.nav {
  display: flex;
}

.nav a {
  flex: 1;
  min-width: 0;
}`,
    rules: [
      { type: "propEquals", sel: ".nav", prop: "display", value: "flex" },
      { type: "equalWidths", sel: ".nav a", tolerance: 3 },
    ],
  },
  {
    id: "int-016",
    module: "2. Flexbox in Practice",
    title: "Nav, Perfectly Centered",
    stage: "nav",
    brief: "The nav bar already centers its links vertically. Now pull the whole link group into the horizontal center too.",
    hint: "justify-content: center on .stage centers the .nav element inside it.",
    starterCss: `.stage {
  /* justify-content: center; */
}`,
    solutionCss: `.stage {
  justify-content: center;
}`,
    rules: [{ type: "centered", child: ".nav", parent: ".stage", tolerance: 4 }],
  },
  {
    id: "int-017",
    module: "2. Flexbox in Practice",
    title: "Nav With Breathing Room",
    stage: "nav",
    brief: "Add a comfortable gap between each nav link so they don't feel cramped together.",
    hint: "gap: 18px (or more) on a flex .nav.",
    starterCss: `.nav {
  /* display: flex; */
  /* gap: 18px; */
}`,
    solutionCss: `.nav {
  display: flex;
  gap: 18px;
}`,
    rules: [
      { type: "propEquals", sel: ".nav", prop: "display", value: "flex" },
      { type: "gapMin", sel: ".nav", axis: "column", minPx: 14 },
    ],
  },
  {
    id: "int-018",
    module: "2. Flexbox in Practice",
    title: "Column Of Equals",
    stage: "row-3",
    brief: "Stack the boxes into a column and make sure they all end up the exact same width as each other.",
    hint: "flex-direction: column plus align-items: stretch keeps every item the same width.",
    starterCss: `.row {
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: stretch; */
}`,
    solutionCss: `.row {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "flexDirection", value: "column" },
      { type: "equalWidths", sel: ".item", tolerance: 3 },
    ],
  },
  {
    id: "int-019",
    module: "2. Flexbox in Practice",
    title: "Six In A Row, Evenly Sized",
    stage: "row-6",
    brief: "Give every one of the six boxes the exact same width by letting flexbox share the space equally.",
    hint: "display: flex on .row and flex: 1 on every .item.",
    starterCss: `.row {
  /* display: flex; */
}

.item {
  /* flex: 1; */
}`,
    solutionCss: `.row {
  display: flex;
}

.item {
  flex: 1;
}`,
    rules: [
      { type: "propEquals", sel: ".row", prop: "display", value: "flex" },
      { type: "equalWidths", sel: ".item", tolerance: 3 },
    ],
  },
  {
    id: "int-020",
    module: "2. Flexbox in Practice",
    title: "Row, Centered Vertically",
    stage: "row-3",
    brief: "The row currently sits at the top of the stage. Make the stage a flex container and vertically center the row inside it.",
    hint: "display: flex and align-items: center on .stage centers the .row inside it.",
    starterCss: `.stage {
  /* display: flex; */
  /* align-items: center; */
}`,
    solutionCss: `.stage {
  display: flex;
  align-items: center;
}`,
    rules: [
      { type: "propEquals", sel: ".stage", prop: "display", value: "flex" },
      { type: "centered", child: ".row", parent: ".stage", tolerance: 4 },
    ],
  },
  {
    id: "int-021",
    module: "3. Grid Basics",
    title: "Three Neat Columns",
    stage: "row-3",
    brief: "Turn the row into a grid with exactly three equal-width columns.",
    hint: "display: grid with grid-template-columns: repeat(3, 1fr).",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 3 }],
  },
  {
    id: "int-022",
    module: "3. Grid Basics",
    title: "Two Wide",
    stage: "row-3",
    brief: "Reshape the row into a two-column grid.",
    hint: "grid-template-columns: 1fr 1fr creates two tracks.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 2 }],
  },
  {
    id: "int-023",
    module: "3. Grid Basics",
    title: "Single File",
    stage: "row-3",
    brief: "Collapse the row into a grid with just one column, stacking everything vertically.",
    hint: "grid-template-columns: 1fr with display: grid.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: 1fr; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: 1fr;
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 1 }],
  },
  {
    id: "int-024",
    module: "3. Grid Basics",
    title: "Six Across",
    stage: "row-6",
    brief: "Lay all six boxes out in a single row of six equal grid columns.",
    hint: "grid-template-columns: repeat(6, 1fr).",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(6, 1fr); */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 6 }],
  },
  {
    id: "int-025",
    module: "3. Grid Basics",
    title: "Two Rows Of Three",
    stage: "row-6",
    brief: "Wrap the six boxes into a grid that's three columns wide, letting them wrap onto a second row.",
    hint: "grid-template-columns: repeat(3, 1fr) on a six-item grid wraps automatically.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 3 }],
  },
  {
    id: "int-026",
    module: "3. Grid Basics",
    title: "Pairs",
    stage: "row-6",
    brief: "Group the six boxes into a two-column grid.",
    hint: "grid-template-columns: repeat(2, 1fr).",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 2 }],
  },
  {
    id: "int-027",
    module: "3. Grid Basics",
    title: "Uneven Thirds",
    stage: "row-3",
    brief: "Make a three-column grid where the middle column is wider than the outer two.",
    hint: "grid-template-columns: 1fr 2fr 1fr still counts as three columns.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: 1fr 2fr 1fr; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 3 }],
  },
  {
    id: "int-028",
    module: "3. Grid Basics",
    title: "Four Even Columns",
    stage: "row-6",
    brief: "Set up a four-column grid for the six boxes so they wrap after every fourth item.",
    hint: "grid-template-columns: repeat(4, 1fr).",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(4, 1fr); */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 4 }],
  },
  {
    id: "int-029",
    module: "3. Grid Basics",
    title: "Five-Wide Grid",
    stage: "row-6",
    brief: "Build a five-column grid track layout for this row of boxes.",
    hint: "grid-template-columns: repeat(5, 1fr).",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(5, 1fr); */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 5 }],
  },
  {
    id: "int-030",
    module: "3. Grid Basics",
    title: "Everything In One Column",
    stage: "row-6",
    brief: "Collapse this six-box grid down into a single tall column.",
    hint: "grid-template-columns: 1fr with display: grid.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: 1fr; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: 1fr;
}`,
    rules: [{ type: "gridColumnCount", sel: ".row", count: 1 }],
  },
  {
    id: "int-031",
    module: "4. Grid in Practice",
    title: "Gridded Gap",
    stage: "row-3",
    brief: "Turn the row into a three-column grid and add a generous gap between the boxes.",
    hint: "display: grid, grid-template-columns: repeat(3, 1fr), and gap: 20px.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* gap: 20px; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".row", count: 3 },
      { type: "gapMin", sel: ".row", axis: "both", minPx: 16 },
    ],
  },
  {
    id: "int-032",
    module: "4. Grid in Practice",
    title: "Wide Column Gutters",
    stage: "row-6",
    brief: "Give this six-item grid noticeably wide gutters between its columns.",
    hint: "column-gap of at least 24px, with grid-template-columns set to a few tracks.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* column-gap: 28px; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 28px;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".row", count: 3 },
      { type: "gapMin", sel: ".row", axis: "column", minPx: 20 },
    ],
  },
  {
    id: "int-033",
    module: "4. Grid in Practice",
    title: "Perfectly Even Grid",
    stage: "row-3",
    brief: "Make a three-column grid where every box ends up exactly the same width.",
    hint: "grid-template-columns: repeat(3, 1fr) naturally gives equal-width tracks.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
    rules: [
      { type: "gridColumnCount", sel: ".row", count: 3 },
      { type: "equalWidths", sel: ".item", tolerance: 3 },
    ],
  },
  {
    id: "int-034",
    module: "4. Grid in Practice",
    title: "Sidebar Takes Shape",
    stage: "sidebar",
    brief: "Turn the layout into a two-column grid: a fixed sidebar and a flexible main area.",
    hint: "display: grid on .layout with grid-template-columns: 200px 1fr.",
    starterCss: `.layout {
  /* display: grid; */
  /* grid-template-columns: 200px 1fr; */
}`,
    solutionCss: `.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
}`,
    rules: [{ type: "gridColumnCount", sel: ".layout", count: 2 }],
  },
  {
    id: "int-035",
    module: "4. Grid in Practice",
    title: "Sidebar With Space",
    stage: "sidebar",
    brief: "Set up the two-column sidebar grid and add a comfortable gap between the columns.",
    hint: "grid-template-columns: 180px 1fr plus gap: 20px on .layout.",
    starterCss: `.layout {
  /* display: grid; */
  /* grid-template-columns: 180px 1fr; */
  /* gap: 20px; */
}`,
    solutionCss: `.layout {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 20px;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".layout", count: 2 },
      { type: "gapMin", sel: ".layout", axis: "both", minPx: 16 },
    ],
  },
  {
    id: "int-036",
    module: "4. Grid in Practice",
    title: "Wider Main Stage",
    stage: "sidebar",
    brief: "Build a two-column layout where the main content area is much wider than the sidebar.",
    hint: "grid-template-columns: 1fr 3fr still yields two grid columns, just uneven ones.",
    starterCss: `.layout {
  /* display: grid; */
  /* grid-template-columns: 1fr 3fr; */
}`,
    solutionCss: `.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
}`,
    rules: [{ type: "gridColumnCount", sel: ".layout", count: 2 }],
  },
  {
    id: "int-037",
    module: "4. Grid in Practice",
    title: "Uniform Rows",
    stage: "row-6",
    brief: "Arrange six boxes in a three-column grid where every row ends up exactly the same height.",
    hint: "grid-auto-rows: 70px keeps every implicit row (and therefore every item) the same height.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-auto-rows: 70px; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 70px;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".row", count: 3 },
      { type: "equalHeights", sel: ".item", tolerance: 3 },
    ],
  },
  {
    id: "int-038",
    module: "4. Grid in Practice",
    title: "Row Gap Only",
    stage: "row-3",
    brief: "Set a tall row-gap value on this grid, even though it's only one row deep.",
    hint: "row-gap: 20px is a real CSS value you can set no matter how many rows there are.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* row-gap: 20px; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".row", count: 3 },
      { type: "gapMin", sel: ".row", axis: "row", minPx: 16 },
    ],
  },
  {
    id: "int-039",
    module: "4. Grid in Practice",
    title: "Generous Sidebar",
    stage: "sidebar",
    brief: "Make a spacious two-column layout: sidebar plus main, with a wide gap between them.",
    hint: "grid-template-columns: 240px 1fr and gap: 24px on .layout.",
    starterCss: `.layout {
  /* display: grid; */
  /* grid-template-columns: 240px 1fr; */
  /* gap: 24px; */
}`,
    solutionCss: `.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".layout", count: 2 },
      { type: "gapMin", sel: ".layout", axis: "both", minPx: 20 },
    ],
  },
  {
    id: "int-040",
    module: "4. Grid in Practice",
    title: "Six-Up Grid With Gaps",
    stage: "row-6",
    brief: "Lay all six boxes into a six-column grid with a clear gap between every one.",
    hint: "grid-template-columns: repeat(6, 1fr) with gap: 14px.",
    starterCss: `.row {
  /* display: grid; */
  /* grid-template-columns: repeat(6, 1fr); */
  /* gap: 14px; */
}`,
    solutionCss: `.row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".row", count: 6 },
      { type: "gapMin", sel: ".row", axis: "both", minPx: 8 },
    ],
  },
  {
    id: "int-041",
    module: "5. Transitions",
    title: "Smooth Hover Fade",
    stage: "button",
    brief: "Make the button's background color glide smoothly to a new shade when hovered, instead of snapping instantly.",
    hint: "Add transition: background-color 0.3s; then set a new background-color inside a :hover block.",
    starterCss: `.btn {
  /* transition: background-color 0.3s ease; */
}

.btn:hover {
  /* background-color: #2b6cb0; */
}`,
    solutionCss: `.btn {
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2b6cb0;
}`,
    rules: [
      { type: "transitionSet", sel: ".btn" },
      { type: "cssHoverHasProp", prop: "background-color" },
    ],
  },
  {
    id: "int-042",
    module: "5. Transitions",
    title: "Card That Grows",
    stage: "card",
    brief: "When hovered, the card should smoothly scale up a little instead of jumping in size.",
    hint: "transition: transform 0.25s on .card, and transform: scale(...) inside :hover.",
    starterCss: `.card {
  /* transition: transform 0.25s ease; */
}

.card:hover {
  /* transform: scale(1.06); */
}`,
    solutionCss: `.card {
  transition: transform 0.25s ease;
}

.card:hover {
  transform: scale(1.06);
}`,
    rules: [
      { type: "transitionSet", sel: ".card" },
      { type: "cssHoverHasProp", prop: "transform" },
    ],
  },
  {
    id: "int-043",
    module: "5. Transitions",
    title: "Badge Color Shift",
    stage: "badge",
    brief: "Make the badge's text color fade smoothly to a new color when you hover over it.",
    hint: "transition: color 0.3s plus a color change in :hover.",
    starterCss: `.badge {
  /* transition: color 0.3s ease; */
}

.badge:hover {
  /* color: #d53f8c; */
}`,
    solutionCss: `.badge {
  transition: color 0.3s ease;
}

.badge:hover {
  color: #d53f8c;
}`,
    rules: [
      { type: "transitionSet", sel: ".badge" },
      { type: "cssHoverHasProp", prop: "color" },
    ],
  },
  {
    id: "int-044",
    module: "5. Transitions",
    title: "Button Lift-Off",
    stage: "button",
    brief: "Give the button a gentle upward lift on hover, animated smoothly rather than instant.",
    hint: "transition: transform 0.2s and transform: translateY(-4px) in :hover.",
    starterCss: `.btn {
  /* transition: transform 0.2s ease; */
}

.btn:hover {
  /* transform: translateY(-4px); */
}`,
    solutionCss: `.btn {
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-4px);
}`,
    rules: [
      { type: "transitionSet", sel: ".btn" },
      { type: "cssHoverHasProp", prop: "transform" },
    ],
  },
  {
    id: "int-045",
    module: "5. Transitions",
    title: "Shadow On Approach",
    stage: "card",
    brief: "When hovered, a soft shadow should smoothly fade in under the card.",
    hint: "transition: box-shadow 0.3s, then add box-shadow inside :hover.",
    starterCss: `.card {
  /* transition: box-shadow 0.3s ease; */
}

.card:hover {
  /* box-shadow: 0 10px 24px rgba(0,0,0,0.25); */
}`,
    solutionCss: `.card {
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 24px rgba(0,0,0,0.25);
}`,
    rules: [
      { type: "transitionSet", sel: ".card" },
      { type: "cssHoverHasProp", prop: "box-shadow" },
    ],
  },
  {
    id: "int-046",
    module: "5. Transitions",
    title: "Badge Fills In",
    stage: "badge",
    brief: "The badge starts with no background at all. Make one fade in smoothly on hover.",
    hint: "transition: background-color 0.3s, then background-color in :hover.",
    starterCss: `.badge {
  /* transition: background-color 0.3s ease; */
}

.badge:hover {
  /* background-color: #38b2ac; */
}`,
    solutionCss: `.badge {
  transition: background-color 0.3s ease;
}

.badge:hover {
  background-color: #38b2ac;
}`,
    rules: [
      { type: "transitionSet", sel: ".badge" },
      { type: "cssHoverHasProp", prop: "background-color" },
    ],
  },
  {
    id: "int-047",
    module: "5. Transitions",
    title: "Fade On Hover",
    stage: "button",
    brief: "Make the button smoothly fade to partial transparency when hovered.",
    hint: "transition: opacity 0.3s, then opacity: 0.6 in :hover.",
    starterCss: `.btn {
  /* transition: opacity 0.3s ease; */
}

.btn:hover {
  /* opacity: 0.6; */
}`,
    solutionCss: `.btn {
  transition: opacity 0.3s ease;
}

.btn:hover {
  opacity: 0.6;
}`,
    rules: [
      { type: "transitionSet", sel: ".btn" },
      { type: "cssHoverHasProp", prop: "opacity" },
    ],
  },
  {
    id: "int-048",
    module: "5. Transitions",
    title: "Card Tilt",
    stage: "card",
    brief: "Give the card a subtle, smooth tilt when hovered.",
    hint: "transition: transform 0.25s, then transform: rotate(3deg) in :hover.",
    starterCss: `.card {
  /* transition: transform 0.25s ease; */
}

.card:hover {
  /* transform: rotate(3deg); */
}`,
    solutionCss: `.card {
  transition: transform 0.25s ease;
}

.card:hover {
  transform: rotate(3deg);
}`,
    rules: [
      { type: "transitionSet", sel: ".card" },
      { type: "cssHoverHasProp", prop: "transform" },
    ],
  },
  {
    id: "int-049",
    module: "5. Transitions",
    title: "Badge Pop",
    stage: "badge",
    brief: "Make the badge grow slightly and smoothly when it's hovered over.",
    hint: "transition: transform 0.2s, then transform: scale(1.15) in :hover.",
    starterCss: `.badge {
  /* transition: transform 0.2s ease; */
}

.badge:hover {
  /* transform: scale(1.15); */
}`,
    solutionCss: `.badge {
  transition: transform 0.2s ease;
}

.badge:hover {
  transform: scale(1.15);
}`,
    rules: [
      { type: "transitionSet", sel: ".badge" },
      { type: "cssHoverHasProp", prop: "transform" },
    ],
  },
  {
    id: "int-050",
    module: "5. Transitions",
    title: "Two-For-One Hover",
    stage: "button",
    brief: "Combine a smooth background color change and a subtle grow effect, both animated on hover.",
    hint: "transition: all 0.3s, then set both background-color and transform inside :hover.",
    starterCss: `.btn {
  /* transition: all 0.3s ease; */
}

.btn:hover {
  /* background-color: #2f855a; */
  /* transform: scale(1.05); */
}`,
    solutionCss: `.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #2f855a;
  transform: scale(1.05);
}`,
    rules: [
      { type: "transitionSet", sel: ".btn" },
      { type: "cssHoverHasProp", prop: "transform" },
    ],
  },
  {
    id: "int-051",
    module: "6. Transforms",
    title: "Tilted Star",
    stage: "icon",
    brief: "Rotate the star icon so it sits at a jaunty angle.",
    hint: "transform: rotate(20deg) on .icon.",
    starterCss: `.icon {
  /* transform: rotate(20deg); */
}`,
    solutionCss: `.icon {
  transform: rotate(20deg);
}`,
    rules: [{ type: "transformIncludes", sel: ".icon", keyword: "rotate" }],
  },
  {
    id: "int-052",
    module: "6. Transforms",
    title: "Big Star Energy",
    stage: "icon",
    brief: "Scale the star icon up to make it noticeably bigger.",
    hint: "transform: scale(1.6) on .icon.",
    starterCss: `.icon {
  /* transform: scale(1.6); */
}`,
    solutionCss: `.icon {
  transform: scale(1.6);
}`,
    rules: [{ type: "transformIncludes", sel: ".icon", keyword: "scale" }],
  },
  {
    id: "int-053",
    module: "6. Transforms",
    title: "Nudge The Card",
    stage: "card",
    brief: "Slide the card away from its original spot using a translate transform.",
    hint: "transform: translate(12px, -12px) on .card.",
    starterCss: `.card {
  /* transform: translate(12px, -12px); */
}`,
    solutionCss: `.card {
  transform: translate(12px, -12px);
}`,
    rules: [{ type: "transformIncludes", sel: ".card", keyword: "translate" }],
  },
  {
    id: "int-054",
    module: "6. Transforms",
    title: "Bigger Badge",
    stage: "badge",
    brief: "Scale the badge up so it stands out more.",
    hint: "transform: scale(1.3) on .badge.",
    starterCss: `.badge {
  /* transform: scale(1.3); */
}`,
    solutionCss: `.badge {
  transform: scale(1.3);
}`,
    rules: [{ type: "transformIncludes", sel: ".badge", keyword: "scale" }],
  },
  {
    id: "int-055",
    module: "6. Transforms",
    title: "Rakish Button",
    stage: "button",
    brief: "Give the button a jaunty rotated angle.",
    hint: "transform: rotate(-6deg) on .btn.",
    starterCss: `.btn {
  /* transform: rotate(-6deg); */
}`,
    solutionCss: `.btn {
  transform: rotate(-6deg);
}`,
    rules: [{ type: "transformIncludes", sel: ".btn", keyword: "rotate" }],
  },
  {
    id: "int-056",
    module: "6. Transforms",
    title: "Float The Star",
    stage: "icon",
    brief: "Shift the star icon upward using a translate transform.",
    hint: "transform: translateY(-14px) on .icon.",
    starterCss: `.icon {
  /* transform: translateY(-14px); */
}`,
    solutionCss: `.icon {
  transform: translateY(-14px);
}`,
    rules: [{ type: "transformIncludes", sel: ".icon", keyword: "translate" }],
  },
  {
    id: "int-057",
    module: "6. Transforms",
    title: "Card Zoom",
    stage: "card",
    brief: "Scale the card up slightly so it looks zoomed in.",
    hint: "transform: scale(1.15) on .card.",
    starterCss: `.card {
  /* transform: scale(1.15); */
}`,
    solutionCss: `.card {
  transform: scale(1.15);
}`,
    rules: [{ type: "transformIncludes", sel: ".card", keyword: "scale" }],
  },
  {
    id: "int-058",
    module: "6. Transforms",
    title: "Spin The Badge",
    stage: "badge",
    brief: "Rotate the badge to give it a playful angle.",
    hint: "transform: rotate(10deg) on .badge.",
    starterCss: `.badge {
  /* transform: rotate(10deg); */
}`,
    solutionCss: `.badge {
  transform: rotate(10deg);
}`,
    rules: [{ type: "transformIncludes", sel: ".badge", keyword: "rotate" }],
  },
  {
    id: "int-059",
    module: "6. Transforms",
    title: "Button, Slightly Bigger",
    stage: "button",
    brief: "Scale the button up just a touch, like it's about to be pressed.",
    hint: "transform: scale(1.08) on .btn.",
    starterCss: `.btn {
  /* transform: scale(1.08); */
}`,
    solutionCss: `.btn {
  transform: scale(1.08);
}`,
    rules: [{ type: "transformIncludes", sel: ".btn", keyword: "scale" }],
  },
  {
    id: "int-060",
    module: "6. Transforms",
    title: "Spin And Grow",
    stage: "icon",
    brief: "Combine a rotation and a scale on the star icon at the same time.",
    hint: "transform: rotate(45deg) scale(1.4) combines two transform functions in one value.",
    starterCss: `.icon {
  /* transform: rotate(45deg) scale(1.4); */
}`,
    solutionCss: `.icon {
  transform: rotate(45deg) scale(1.4);
}`,
    rules: [{ type: "transformIncludes", sel: ".icon", keyword: "rotate" }],
  },
  {
    id: "int-061",
    module: "7. Positioning",
    title: "Bring It Forward",
    stage: "overlap",
    brief: "The front card should visually sit above the back one. Give it a z-index high enough to guarantee that stacking order.",
    hint: "z-index: 10 on .front lifts it above .back.",
    starterCss: `.front {
  /* z-index: 10; */
}`,
    solutionCss: `.front {
  position: absolute;
  z-index: 10;
}`,
    rules: [
      { type: "propEquals", sel: ".front", prop: "position", value: "absolute" },
      { type: "numberMin", sel: ".front", prop: "zIndex", min: 5 },
    ],
  },
  {
    id: "int-062",
    module: "7. Positioning",
    title: "Nudge The Back Layer",
    stage: "overlap",
    brief: "Give the back card an explicit z-index so its stacking order is intentional, not accidental.",
    hint: "Keep position: absolute and add z-index: 1 on .back.",
    starterCss: `.back {
  /* z-index: 1; */
}`,
    solutionCss: `.back {
  position: absolute;
  z-index: 1;
}`,
    rules: [
      { type: "propEquals", sel: ".back", prop: "position", value: "absolute" },
      { type: "numberMin", sel: ".back", prop: "zIndex", min: 1 },
    ],
  },
  {
    id: "int-063",
    module: "7. Positioning",
    title: "Stack It Higher",
    stage: "overlap",
    brief: "Push the front card even further up the stacking order this time, well above its neighbor.",
    hint: "A bigger z-index value, like 20, keeps .front on top.",
    starterCss: `.front {
  /* z-index: 20; */
}`,
    solutionCss: `.front {
  position: absolute;
  z-index: 20;
}`,
    rules: [
      { type: "propEquals", sel: ".front", prop: "position", value: "absolute" },
      { type: "numberMin", sel: ".front", prop: "zIndex", min: 15 },
    ],
  },
  {
    id: "int-064",
    module: "7. Positioning",
    title: "Modal Takes Its Place",
    stage: "modal",
    brief: "Give the modal box a relative position and an explicit stacking order of its own.",
    hint: "position: relative and z-index: 5 on .modal.",
    starterCss: `.modal {
  /* position: relative; */
  /* z-index: 5; */
}`,
    solutionCss: `.modal {
  position: relative;
  z-index: 5;
}`,
    rules: [
      { type: "propEquals", sel: ".modal", prop: "position", value: "relative" },
      { type: "numberMin", sel: ".modal", prop: "zIndex", min: 1 },
    ],
  },
  {
    id: "int-065",
    module: "7. Positioning",
    title: "Float Above The Overlay",
    stage: "modal",
    brief: "Detach the modal from the normal flow and lift it well above the dimmed overlay behind it.",
    hint: "position: absolute plus a z-index higher than the overlay's.",
    starterCss: `.modal {
  /* position: absolute; */
  /* z-index: 10; */
}`,
    solutionCss: `.modal {
  position: absolute;
  z-index: 10;
}`,
    rules: [
      { type: "propEquals", sel: ".modal", prop: "position", value: "absolute" },
      { type: "numberMin", sel: ".modal", prop: "zIndex", min: 5 },
    ],
  },
  {
    id: "int-066",
    module: "7. Positioning",
    title: "Full-Screen Overlay",
    stage: "modal",
    brief: "Make the dimming overlay a fixed layer so it would cover the whole viewport, not just the stage.",
    hint: "position: fixed on .overlay.",
    starterCss: `.overlay {
  /* position: fixed; */
}`,
    solutionCss: `.overlay {
  position: fixed;
}`,
    rules: [{ type: "propEquals", sel: ".overlay", prop: "position", value: "fixed" }],
  },
  {
    id: "int-067",
    module: "7. Positioning",
    title: "Front And Center Layer",
    stage: "overlap",
    brief: "Confirm the front card is absolutely positioned and sitting clearly above the back layer.",
    hint: "position: absolute and z-index: 3 (or higher) on .front.",
    starterCss: `.front {
  /* position: absolute; */
  /* z-index: 3; */
}`,
    solutionCss: `.front {
  position: absolute;
  z-index: 3;
}`,
    rules: [
      { type: "propEquals", sel: ".front", prop: "position", value: "absolute" },
      { type: "numberMin", sel: ".front", prop: "zIndex", min: 2 },
    ],
  },
  {
    id: "int-068",
    module: "7. Positioning",
    title: "Sticky Modal",
    stage: "modal",
    brief: "Try making the modal box sticky, pinned to the top of its scroll container.",
    hint: "position: sticky; top: 0; on .modal.",
    starterCss: `.modal {
  /* position: sticky; */
  /* top: 0; */
}`,
    solutionCss: `.modal {
  position: sticky;
  top: 0;
}`,
    rules: [{ type: "propEquals", sel: ".modal", prop: "position", value: "sticky" }],
  },
  {
    id: "int-069",
    module: "7. Positioning",
    title: "Un-Float The Back",
    stage: "overlap",
    brief: "Take the back card out of its absolutely-positioned layer and return it to relative positioning.",
    hint: "position: relative on .back changes how it participates in layout.",
    starterCss: `.back {
  /* position: relative; */
}`,
    solutionCss: `.back {
  position: relative;
}`,
    rules: [{ type: "propEquals", sel: ".back", prop: "position", value: "relative" }],
  },
  {
    id: "int-070",
    module: "7. Positioning",
    title: "Maximum Elevation",
    stage: "modal",
    brief: "Give the modal both absolute positioning and the highest stacking order in this exercise.",
    hint: "position: absolute with a z-index of at least 10.",
    starterCss: `.modal {
  /* position: absolute; */
  /* z-index: 25; */
}`,
    solutionCss: `.modal {
  position: absolute;
  z-index: 25;
}`,
    rules: [
      { type: "propEquals", sel: ".modal", prop: "position", value: "absolute" },
      { type: "numberMin", sel: ".modal", prop: "zIndex", min: 10 },
    ],
  },
  {
    id: "int-071",
    module: "8. Pseudo-classes & Focus",
    title: "Hover To Darken",
    stage: "button",
    brief: "Make the button's background darken the moment the mouse hovers over it.",
    hint: "Write a .btn:hover rule that changes background-color.",
    starterCss: `.btn:hover {
  /* background-color: #1a202c; */
}`,
    solutionCss: `.btn:hover {
  background-color: #1a202c;
}`,
    rules: [{ type: "cssHoverHasProp", prop: "background-color" }],
  },
  {
    id: "int-072",
    module: "8. Pseudo-classes & Focus",
    title: "Hover To Pop",
    stage: "button",
    brief: "Give the button a little pop, a scale transform, the moment it's hovered.",
    hint: "Inside .btn:hover, add a transform: scale(...) value.",
    starterCss: `.btn:hover {
  /* transform: scale(1.06); */
}`,
    solutionCss: `.btn:hover {
  transform: scale(1.06);
}`,
    rules: [{ type: "cssHoverHasProp", prop: "transform" }],
  },
  {
    id: "int-073",
    module: "8. Pseudo-classes & Focus",
    title: "Link Changes Color",
    stage: "link",
    brief: "Make the link switch to a bold new color the moment it's hovered.",
    hint: "Write a .link:hover rule with a new color value.",
    starterCss: `.link:hover {
  /* color: #dd6b20; */
}`,
    solutionCss: `.link:hover {
  color: #dd6b20;
}`,
    rules: [{ type: "cssHoverHasProp", prop: "color" }],
  },
  {
    id: "int-074",
    module: "8. Pseudo-classes & Focus",
    title: "Underline On Hover",
    stage: "link",
    brief: "Add an underline to the link, but only while it's being hovered.",
    hint: "Use text-decoration-line: underline inside .link:hover.",
    starterCss: `.link:hover {
  /* text-decoration-line: underline; */
}`,
    solutionCss: `.link:hover {
  text-decoration-line: underline;
}`,
    rules: [{ type: "cssHoverHasProp", prop: "text-decoration-line" }],
  },
  {
    id: "int-075",
    module: "8. Pseudo-classes & Focus",
    title: "Card Casts A Shadow",
    stage: "card",
    brief: "Make a soft shadow appear under the card only while it's hovered.",
    hint: "Add box-shadow inside a .card:hover block.",
    starterCss: `.card:hover {
  /* box-shadow: 0 8px 20px rgba(0,0,0,0.3); */
}`,
    solutionCss: `.card:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}`,
    rules: [{ type: "cssHoverHasProp", prop: "box-shadow" }],
  },
  {
    id: "int-076",
    module: "8. Pseudo-classes & Focus",
    title: "Card Tilts On Hover",
    stage: "card",
    brief: "Give the card a slight rotation only while the mouse is over it.",
    hint: "Add transform: rotate(...) inside .card:hover.",
    starterCss: `.card:hover {
  /* transform: rotate(2deg); */
}`,
    solutionCss: `.card:hover {
  transform: rotate(2deg);
}`,
    rules: [{ type: "cssHoverHasProp", prop: "transform" }],
  },
  {
    id: "int-077",
    module: "8. Pseudo-classes & Focus",
    title: "Focused And Colorful",
    stage: "input",
    brief: "Give the input field a bright, colorful border the moment it's focused.",
    hint: "Write a .field:focus rule with a border-color value.",
    starterCss: `.field:focus {
  /* border-color: #3182ce; */
  /* outline: none; */
}`,
    solutionCss: `.field:focus {
  border-color: #3182ce;
  outline: none;
}`,
    rules: [{ type: "cssIncludesAll", texts: [":focus", "border-color"] }],
  },
  {
    id: "int-078",
    module: "8. Pseudo-classes & Focus",
    title: "Focus Glow",
    stage: "input",
    brief: "Change the input's background color the moment someone clicks into it.",
    hint: "Add a background-color change inside .field:focus.",
    starterCss: `.field:focus {
  /* background-color: #ebf8ff; */
}`,
    solutionCss: `.field:focus {
  background-color: #ebf8ff;
}`,
    rules: [{ type: "cssIncludesAll", texts: [":focus", "background-color"] }],
  },
  {
    id: "int-079",
    module: "8. Pseudo-classes & Focus",
    title: "Checked Checkbox",
    stage: "checkbox",
    brief: "Give the checkbox itself a color change the moment it's checked.",
    hint: "Use .check:checked to target the checked state.",
    starterCss: `.check:checked {
  /* accent-color: #38a169; */
}`,
    solutionCss: `.check:checked {
  accent-color: #38a169;
}`,
    rules: [{ type: "cssIncludesAll", texts: [":checked", "accent-color"] }],
  },
  {
    id: "int-080",
    module: "8. Pseudo-classes & Focus",
    title: "Checked Gets Bigger",
    stage: "checkbox",
    brief: "Scale the checkbox up slightly the moment it becomes checked.",
    hint: "Use .check:checked with a transform: scale(...) value.",
    starterCss: `.check:checked {
  /* transform: scale(1.3); */
}`,
    solutionCss: `.check:checked {
  transform: scale(1.3);
}`,
    rules: [{ type: "cssIncludesAll", texts: [":checked", "transform"] }],
  },
  {
    id: "int-081",
    module: "9. Forms & Inputs",
    title: "Give It A Bold Border",
    stage: "input",
    brief: "The input's border blends into the background. Give it a bold, unmistakable border color.",
    hint: "border: 2px solid #2b6cb0 (or another strong color) on .field.",
    starterCss: `.field {
  /* border: 2px solid #2b6cb0; */
}`,
    solutionCss: `.field {
  border: 2px solid #2b6cb0;
}`,
    rules: [{ type: "borderColor", sel: ".field", color: "#2b6cb0", tolerance: 30 }],
  },
  {
    id: "int-082",
    module: "9. Forms & Inputs",
    title: "Rounded Field",
    stage: "input",
    brief: "Soften the input field with nicely rounded corners.",
    hint: "border-radius: 10px (or more) on .field.",
    starterCss: `.field {
  /* border-radius: 10px; */
}`,
    solutionCss: `.field {
  border-radius: 10px;
}`,
    rules: [{ type: "propMin", sel: ".field", prop: "borderTopLeftRadius", minPx: 8 }],
  },
  {
    id: "int-083",
    module: "9. Forms & Inputs",
    title: "More Breathing Room",
    stage: "input",
    brief: "Give the input noticeably more horizontal padding than it starts with.",
    hint: "Increase padding-left and padding-right (or use the padding shorthand) on .field.",
    starterCss: `.field {
  /* padding: 14px; */
}`,
    solutionCss: `.field {
  padding: 14px;
}`,
    rules: [{ type: "paddingXMin", sel: ".field", minPx: 20 }],
  },
  {
    id: "int-084",
    module: "9. Forms & Inputs",
    title: "Dropdown Gets A Defined Border",
    stage: "select",
    brief: "The dropdown barely has a visible edge. Give it a clear, distinctly colored border.",
    hint: "border: 2px solid #2d3748 on .dropdown.",
    starterCss: `.dropdown {
  /* border: 2px solid #2d3748; */
}`,
    solutionCss: `.dropdown {
  border: 2px solid #2d3748;
}`,
    rules: [{ type: "borderColor", sel: ".dropdown", color: "#2d3748", tolerance: 30 }],
  },
  {
    id: "int-085",
    module: "9. Forms & Inputs",
    title: "Rounded Dropdown",
    stage: "select",
    brief: "Round off the corners of the dropdown menu.",
    hint: "border-radius: 8px (or more) on .dropdown.",
    starterCss: `.dropdown {
  /* border-radius: 8px; */
}`,
    solutionCss: `.dropdown {
  border-radius: 8px;
}`,
    rules: [{ type: "propMin", sel: ".dropdown", prop: "borderTopLeftRadius", minPx: 6 }],
  },
  {
    id: "int-086",
    module: "9. Forms & Inputs",
    title: "Dropdown Breathing Room",
    stage: "select",
    brief: "Give the dropdown noticeably more horizontal padding than it starts with.",
    hint: "Increase padding-left and padding-right on .dropdown.",
    starterCss: `.dropdown {
  /* padding-left: 12px; */
  /* padding-right: 12px; */
}`,
    solutionCss: `.dropdown {
  padding-left: 12px;
  padding-right: 12px;
}`,
    rules: [{ type: "paddingXMin", sel: ".dropdown", minPx: 20 }],
  },
  {
    id: "int-087",
    module: "9. Forms & Inputs",
    title: "Roomier Checkbox Label",
    stage: "checkbox",
    brief: "Add some left padding to the checkbox option so the whole row feels less cramped.",
    hint: "padding-left: 18px (or more) on .option.",
    starterCss: `.option {
  /* padding-left: 18px; */
}`,
    solutionCss: `.option {
  padding-left: 18px;
}`,
    rules: [{ type: "paddingXMin", sel: ".option", minPx: 16 }],
  },
  {
    id: "int-088",
    module: "9. Forms & Inputs",
    title: "Frame The Option",
    stage: "checkbox",
    brief: "Wrap the whole checkbox option in a visible, softly rounded border.",
    hint: "border: 1px solid ... plus a small border-radius on .option.",
    starterCss: `.option {
  /* border: 1px solid #cbd5e0; */
  /* border-radius: 6px; */
}`,
    solutionCss: `.option {
  border: 1px solid #cbd5e0;
  border-radius: 6px;
}`,
    rules: [
      { type: "borderSet", sel: ".option" },
      { type: "propMin", sel: ".option", prop: "borderTopLeftRadius", minPx: 2 },
    ],
  },
  {
    id: "int-089",
    module: "9. Forms & Inputs",
    title: "Field, Fully Dressed",
    stage: "input",
    brief: "Give the input a colored border and generous left-and-right padding at the same time.",
    hint: "Combine padding with border: 2px solid #38a169.",
    starterCss: `.field {
  /* padding: 14px; */
  /* border: 2px solid #38a169; */
}`,
    solutionCss: `.field {
  padding: 14px;
  border: 2px solid #38a169;
}`,
    rules: [
      { type: "paddingXMin", sel: ".field", minPx: 20 },
      { type: "borderColor", sel: ".field", color: "#38a169", tolerance: 30 },
    ],
  },
  {
    id: "int-090",
    module: "9. Forms & Inputs",
    title: "Dropdown, Polished",
    stage: "select",
    brief: "Give the dropdown a bold colored border and nicely rounded corners together.",
    hint: "border: 2px solid #805ad5 and border-radius: 10px on .dropdown.",
    starterCss: `.dropdown {
  /* border: 2px solid #805ad5; */
  /* border-radius: 10px; */
}`,
    solutionCss: `.dropdown {
  border: 2px solid #805ad5;
  border-radius: 10px;
}`,
    rules: [
      { type: "borderColor", sel: ".dropdown", color: "#805ad5", tolerance: 30 },
      { type: "propMin", sel: ".dropdown", prop: "borderTopLeftRadius", minPx: 6 },
    ],
  },
  {
    id: "int-091",
    module: "10. Real Components",
    title: "Color The Progress Bar",
    stage: "progress",
    brief: "The progress bar is already sized correctly, it just needs a color to actually become visible.",
    hint: "Set a background-color on .bar.",
    starterCss: `.bar {
  /* background-color: #38a169; */
}`,
    solutionCss: `.bar {
  background-color: #38a169;
}`,
    rules: [
      { type: "bgSet", sel: ".bar" },
      { type: "widthPercentMin", sel: ".bar", ofParent: ".track", minPct: 50 },
    ],
  },
  {
    id: "int-092",
    module: "10. Real Components",
    title: "A Different Shade Of Progress",
    stage: "progress",
    brief: "Fill in the progress bar with a bold blue so it reads clearly against the track.",
    hint: "background-color: #3182ce on .bar.",
    starterCss: `.bar {
  /* background-color: #3182ce; */
}`,
    solutionCss: `.bar {
  background-color: #3182ce;
}`,
    rules: [
      { type: "bgColor", sel: ".bar", color: "#3182ce", tolerance: 30 },
      { type: "widthPercentMin", sel: ".bar", ofParent: ".track", minPct: 50 },
    ],
  },
  {
    id: "int-093",
    module: "10. Real Components",
    title: "Almost There",
    stage: "progress",
    brief: "Stretch the progress bar out to look nearly complete, and give it a confident color.",
    hint: "width: 90% and a background-color on .bar.",
    starterCss: `.bar {
  /* width: 90%; */
  /* background-color: #2b6cb0; */
}`,
    solutionCss: `.bar {
  width: 90%;
  background-color: #2b6cb0;
}`,
    rules: [
      { type: "widthPercentMin", sel: ".bar", ofParent: ".track", minPct: 80 },
      { type: "bgColor", sel: ".bar", color: "#2b6cb0", tolerance: 30 },
    ],
  },
  {
    id: "int-094",
    module: "10. Real Components",
    title: "Modal, Dead Center",
    stage: "modal",
    brief: "Position the modal box so it sits perfectly centered over the stage, elevated above the overlay.",
    hint: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); plus a z-index.",
    starterCss: `.modal {
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* z-index: 10; */
}`,
    solutionCss: `.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}`,
    rules: [
      { type: "centered", child: ".modal", parent: ".stage", tolerance: 4 },
      { type: "propEquals", sel: ".modal", prop: "position", value: "absolute" },
      { type: "numberMin", sel: ".modal", prop: "zIndex", min: 1 },
    ],
  },
  {
    id: "int-095",
    module: "10. Real Components",
    title: "Dim The Backdrop",
    stage: "modal",
    brief: "Give the overlay a translucent dark background so the modal really pops against it, and add a soft shadow under the modal for extra depth.",
    hint: "background-color with an alpha value (like rgba(0,0,0,0.5)) on .overlay, and box-shadow on .modal.",
    starterCss: `.overlay {
  /* background-color: rgba(0,0,0,0.5); */
}

.modal {
  /* box-shadow: 0 12px 30px rgba(0,0,0,0.35); */
}`,
    solutionCss: `.overlay {
  background-color: rgba(0,0,0,0.5);
}

.modal {
  box-shadow: 0 12px 30px rgba(0,0,0,0.35);
}`,
    rules: [
      { type: "bgSet", sel: ".overlay" },
      { type: "hasShadow", sel: ".modal" },
    ],
  },
  {
    id: "int-096",
    module: "10. Real Components",
    title: "Header Row Gets Styled",
    stage: "table",
    brief: "Give the table's header cells a bold dark background color and crisp white text.",
    hint: "Target .tbl th with background-color and color.",
    starterCss: `.tbl th {
  /* background-color: #2d3748; */
  /* color: #ffffff; */
}`,
    solutionCss: `.tbl th {
  background-color: #2d3748;
  color: #ffffff;
}`,
    rules: [
      { type: "bgColor", sel: ".tbl th", color: "#2d3748", tolerance: 30 },
      { type: "textColor", sel: ".tbl th", color: "#ffffff", tolerance: 30 },
    ],
  },
  {
    id: "int-097",
    module: "10. Real Components",
    title: "Cells With Room To Breathe",
    stage: "table",
    brief: "Give the table's data cells a visible colored border and noticeably more horizontal padding.",
    hint: "border and extra padding on .tbl td.",
    starterCss: `.tbl td {
  /* border: 1px solid #cbd5e0; */
  /* padding: 14px; */
}`,
    solutionCss: `.tbl td {
  border: 1px solid #cbd5e0;
  padding: 14px;
}`,
    rules: [
      { type: "borderColor", sel: ".tbl td", color: "#cbd5e0", tolerance: 30 },
      { type: "paddingXMin", sel: ".tbl td", minPx: 24 },
    ],
  },
  {
    id: "int-098",
    module: "10. Real Components",
    title: "Bold Centered Headers",
    stage: "table",
    brief: "Push the header cells further: make them extra bold and centered instead of left-aligned.",
    hint: "font-weight: 900 and text-align: center on .tbl th.",
    starterCss: `.tbl th {
  /* font-weight: 900; */
  /* text-align: center; */
}`,
    solutionCss: `.tbl th {
  font-weight: 900;
  text-align: center;
}`,
    rules: [
      { type: "fontWeightMin", sel: ".tbl th", min: 900 },
      { type: "propEquals", sel: ".tbl th", prop: "textAlign", value: "center" },
    ],
  },
  {
    id: "int-099",
    module: "10. Real Components",
    title: "Sidebar Capstone: Locked Grid",
    stage: "sidebar",
    brief: "Turn this layout into a real two-column grid, a narrow sidebar and a flexible main area, with a solid gap between the two.",
    hint: "display: grid, grid-template-columns: 220px 1fr, and gap: 20px on .layout.",
    starterCss: `.layout {
  /* display: grid; */
  /* grid-template-columns: 220px 1fr; */
  /* gap: 20px; */
}`,
    solutionCss: `.layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".layout", count: 2 },
      { type: "gapMin", sel: ".layout", axis: "both", minPx: 16 },
    ],
  },
  {
    id: "int-100",
    module: "10. Real Components",
    title: "Sidebar Capstone: Bold Main Content",
    stage: "sidebar",
    brief: "Rebuild the layout as a spacious two-column grid where the main area gets much more room than the sidebar, and make its text bold so it stands out.",
    hint: "grid-template-columns: 1fr 3fr, a wide gap, and font-weight: 700 on .main.",
    starterCss: `.layout {
  /* display: grid; */
  /* grid-template-columns: 1fr 3fr; */
  /* gap: 20px; */
}

.main {
  /* font-weight: 700; */
}`,
    solutionCss: `.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

.main {
  font-weight: 700;
}`,
    rules: [
      { type: "gridColumnCount", sel: ".layout", count: 2 },
      { type: "gapMin", sel: ".layout", axis: "both", minPx: 16 },
      { type: "fontWeightMin", sel: ".main", min: 700 },
    ],
  },
];
