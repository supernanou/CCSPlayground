// Reusable "scenes" for playground challenges: markup + non-editable
// setup CSS. Challenges reference a stage by id and add their own
// starter/solution CSS on top of it. Keeping a fixed, tested set of
// stages (instead of bespoke markup per challenge) keeps 300
// generated challenges safe and consistent.

const STAGES = {
  circle: {
    markup: `<div class="stage"><div class="shape"></div></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.shape{width:70px;height:70px;border-radius:50%;background:transparent;border:2px dashed #b8c4d9;}`,
  },
  square: {
    markup: `<div class="stage"><div class="shape"></div></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.shape{width:80px;height:80px;background:transparent;border:2px dashed #b8c4d9;}`,
  },
  "text-block": {
    markup: `<div class="stage"><p class="text">The quick brown fox jumps over the lazy dog.</p></div>`,
    baseCss: `.stage{height:100%;padding:20px;background:#eef3fb;font-family:system-ui,sans-serif;}
.text{margin:0;color:#333;}`,
  },
  button: {
    markup: `<div class="stage"><button class="btn">Click me</button></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.btn{border:none;background:#4a3b26;color:#fff;font-family:system-ui,sans-serif;font-size:0.95rem;cursor:pointer;}`,
  },
  card: {
    markup: `<div class="stage"><div class="card">Card</div></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.card{width:140px;height:90px;background:#fff;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;color:#4a3b26;}`,
  },
  "row-3": {
    markup: `<div class="stage"><div class="row"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div></div>`,
    baseCss: `.stage{width:100%;height:100%;background:#eef3fb;padding:16px;}
.row{width:100%;}
.item{background:#fff;border:1px solid #ddd;padding:10px;text-align:center;font-family:system-ui,sans-serif;color:#4a3b26;}`,
  },
  "row-6": {
    markup: `<div class="stage"><div class="row">
      <div class="item">1</div><div class="item">2</div><div class="item">3</div>
      <div class="item">4</div><div class="item">5</div><div class="item">6</div>
    </div></div>`,
    baseCss: `.stage{width:100%;height:100%;background:#eef3fb;padding:16px;}
.row{width:100%;}
.item{background:#fff;border:1px solid #ddd;padding:10px;text-align:center;font-family:system-ui,sans-serif;color:#4a3b26;}`,
  },
  list: {
    markup: `<div class="stage"><ul class="list"><li>One</li><li>Two</li><li>Three</li></ul></div>`,
    baseCss: `.stage{height:100%;padding:20px;background:#eef3fb;font-family:system-ui,sans-serif;}
.list{margin:0;color:#4a3b26;}`,
  },
  nav: {
    markup: `<div class="stage"><nav class="nav"><a href="#">Home</a><a href="#">About</a><a href="#">Contact</a></nav></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;background:#eef3fb;padding:0 16px;}
.nav a{color:#4a3b26;text-decoration:none;margin-right:12px;font-family:system-ui,sans-serif;}`,
  },
  badge: {
    markup: `<div class="stage"><span class="badge">New</span></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.badge{padding:6px 14px;font-family:system-ui,sans-serif;font-weight:600;color:#4a3b26;background:transparent;}`,
  },
  link: {
    markup: `<div class="stage"><a href="#" class="link">Hover me</a></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;font-family:system-ui,sans-serif;}
.link{color:#4a3b26;}`,
  },
  input: {
    markup: `<div class="stage"><input class="field" placeholder="Type here"></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.field{font-family:system-ui,sans-serif;font-size:0.9rem;padding:6px;border:1px solid #ccc;}`,
  },
  checkbox: {
    markup: `<div class="stage"><label class="option"><input type="checkbox" class="check"> Agree to terms</label></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;font-family:system-ui,sans-serif;color:#4a3b26;}`,
  },
  progress: {
    markup: `<div class="stage"><div class="track"><div class="bar"></div></div></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;background:#eef3fb;padding:0 20px;}
.track{width:100%;height:16px;background:#e2e8f0;overflow:hidden;}
.bar{height:100%;width:60%;background:transparent;}`,
  },
  overlap: {
    markup: `<div class="stage"><div class="back">Back</div><div class="front">Front</div></div>`,
    baseCss: `.stage{position:relative;width:100%;height:100%;background:#eef3fb;}
.back{position:absolute;top:20px;left:20px;width:100px;height:70px;background:#f0b87f;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;}
.front{position:absolute;top:40px;left:40px;width:100px;height:70px;background:#fff;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;}`,
  },
  gradientbox: {
    markup: `<div class="stage"><div class="box"></div></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.box{width:160px;height:90px;background:#fff;border:1px dashed #b8c4d9;}`,
  },
  quote: {
    markup: `<div class="stage"><blockquote class="quote">Simplicity is the ultimate sophistication.</blockquote></div>`,
    baseCss: `.stage{height:100%;padding:24px;background:#eef3fb;font-family:system-ui,sans-serif;}
.quote{margin:0;color:#4a3b26;}`,
  },
  table: {
    markup: `<div class="stage"><table class="tbl"><tr><th>Name</th><th>Score</th></tr><tr><td>Ada</td><td>92</td></tr><tr><td>Grace</td><td>88</td></tr></table></div>`,
    baseCss: `.stage{height:100%;padding:16px;background:#eef3fb;font-family:system-ui,sans-serif;}
.tbl{width:100%;border-collapse:collapse;color:#4a3b26;}
.tbl th, .tbl td{padding:8px;text-align:left;border-bottom:1px solid #ddd;}`,
  },
  icon: {
    markup: `<div class="stage"><div class="icon"><span class="star-shape"></span></div></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.icon{width:70px;height:70px;display:flex;align-items:center;justify-content:center;background:transparent;}
.icon .star-shape{width:34px;height:34px;background:#f0b87f;clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);}`,
  },
  sidebar: {
    markup: `<div class="stage"><div class="layout"><div class="side">Side</div><div class="main">Main</div></div></div>`,
    baseCss: `.stage{width:100%;height:100%;background:#eef3fb;padding:16px;}
.layout{width:100%;height:100%;}
.side{background:#fff;border:1px solid #ddd;padding:10px;font-family:system-ui,sans-serif;}
.main{background:#fff;border:1px solid #ddd;padding:10px;font-family:system-ui,sans-serif;}`,
  },
  tag: {
    markup: `<div class="stage"><span class="tag">Tag</span></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.tag{padding:6px 14px;border-radius:999px;font-family:system-ui,sans-serif;font-weight:600;color:#4a3b26;background:transparent;}`,
  },
  modal: {
    markup: `<div class="stage"><div class="overlay"><div class="modal">Modal</div></div></div>`,
    baseCss: `.stage{position:relative;width:100%;height:100%;background:#eef3fb;}
.overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:transparent;}
.modal{background:#fff;border:1px solid #ddd;padding:16px 24px;font-family:system-ui,sans-serif;color:#4a3b26;}`,
  },
  select: {
    markup: `<div class="stage"><select class="dropdown"><option>One</option><option>Two</option></select></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.dropdown{font-family:system-ui,sans-serif;font-size:0.9rem;padding:6px;}`,
  },
  placeholder: {
    markup: `<div class="stage"><div class="ph"></div></div>`,
    baseCss: `.stage{height:100%;display:flex;align-items:center;justify-content:center;background:#eef3fb;}
.ph{width:160px;background:#d8e0ef;}`,
  },
};
