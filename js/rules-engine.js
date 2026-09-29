// Generic, reusable rule engine for playground challenges.
// A challenge is "solved" when every rule in its `rules` array passes.
// Rules are declarative data (not arbitrary code) so 300 generated
// challenges stay safe and mechanically verifiable.

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const num = parseInt(full, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function oklchToRgb(l, c, hDeg) {
  const hRad = (hDeg * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.2914855480 * b;

  const l3 = l_ ** 3;
  const m3 = m_ ** 3;
  const s3 = s_ ** 3;

  const lin = {
    r: 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3,
    g: -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3,
    b: -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3,
  };

  const toSrgb = (v) => {
    const clamped = Math.min(1, Math.max(0, v));
    const encoded = clamped <= 0.0031308 ? 12.92 * clamped : 1.055 * clamped ** (1 / 2.4) - 0.055;
    return Math.round(Math.min(1, Math.max(0, encoded)) * 255);
  };

  return { r: toSrgb(lin.r), g: toSrgb(lin.g), b: toSrgb(lin.b) };
}

function parseRgb(str) {
  if (!str) return null;

  const oklchMatch = /^oklch\(([^)]+)\)$/.exec(str.trim());
  if (oklchMatch) {
    const [comps, alphaPart] = oklchMatch[1].split("/");
    const nums = comps.trim().split(/\s+/).map(Number);
    const rgb = oklchToRgb(nums[0] || 0, nums[1] || 0, nums[2] || 0);
    return { ...rgb, a: alphaPart !== undefined ? parseFloat(alphaPart) : 1 };
  }

  const rgbMatch = /rgba?\(([^)]+)\)/.exec(str);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(",").map((s) => parseFloat(s.trim()));
    return { r: parts[0] || 0, g: parts[1] || 0, b: parts[2] || 0, a: parts.length > 3 ? parts[3] : 1 };
  }

  // Some browsers serialize color-mix()/modern color functions in computed
  // style as color(<space> r g b [/ a]) with 0-1 channel values instead of
  // rgb(). Parse those too (treating the space as sRGB-ish for comparison).
  const colorFnMatch = /^color\([\w-]+\s+([^)]+)\)$/.exec(str.trim());
  if (colorFnMatch) {
    const [comps, alphaPart] = colorFnMatch[1].split("/");
    const nums = comps.trim().split(/\s+/).map(Number);
    return {
      r: (nums[0] || 0) * 255,
      g: (nums[1] || 0) * 255,
      b: (nums[2] || 0) * 255,
      a: alphaPart !== undefined ? parseFloat(alphaPart) : 1,
    };
  }

  return null;
}

function isTransparent(str) {
  if (!str) return true;
  const rgb = parseRgb(str);
  return str === "transparent" || (rgb && rgb.a === 0);
}

function colorsClose(computed, hex, tolerance) {
  const c = parseRgb(computed);
  if (!c || c.a === 0) return false;
  const target = hexToRgb(hex);
  return (
    Math.abs(c.r - target.r) <= tolerance &&
    Math.abs(c.g - target.g) <= tolerance &&
    Math.abs(c.b - target.b) <= tolerance
  );
}

function el(doc, sel) {
  return doc.querySelector(sel);
}

function all(doc, sel) {
  return [...doc.querySelectorAll(sel)];
}

function cs(doc, sel) {
  const e = el(doc, sel);
  return e ? getComputedStyle(e) : null;
}

function px(v) {
  return parseFloat(v) || 0;
}

// Strip /* ... */ comments before any text-based rule check, so a
// commented-out hint in starterCss (e.g. `/* transform: scale(1.1); */`)
// never counts as the learner having written real, working CSS.
function stripComments(text) {
  return (text || "").replace(/\/\*[\s\S]*?\*\//g, "");
}

function rectCenter(rect) {
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

const RULE_CHECKERS = {
  bgSet(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && !isTransparent(s.backgroundColor);
  },

  bgColor(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && colorsClose(s.backgroundColor, r.color, r.tolerance ?? 30);
  },

  textColor(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && colorsClose(s.color, r.color, r.tolerance ?? 30);
  },

  borderColor(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && colorsClose(s.borderTopColor, r.color, r.tolerance ?? 30);
  },

  propEquals(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && s[r.prop] === r.value;
  },

  propOneOf(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && r.values.includes(s[r.prop]);
  },

  propMin(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && px(s[r.prop]) >= r.minPx;
  },

  propMax(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && px(s[r.prop]) <= r.maxPx;
  },

  numberMin(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && parseFloat(s[r.prop]) >= r.min;
  },

  numberMax(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && parseFloat(s[r.prop]) <= r.max;
  },

  paddingXMin(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && px(s.paddingLeft) + px(s.paddingRight) >= r.minPx;
  },

  paddingYMin(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && px(s.paddingTop) + px(s.paddingBottom) >= r.minPx;
  },

  hasShadow(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && s.boxShadow !== "none";
  },

  noShadow(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && s.boxShadow === "none";
  },

  borderSet(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && s.borderTopStyle !== "none" && px(s.borderTopWidth) > 0;
  },

  pill(doc, cssText, r) {
    const e = el(doc, r.sel);
    const s = e && getComputedStyle(e);
    if (!e || !s) return false;
    const rect = e.getBoundingClientRect();
    return px(s.borderTopLeftRadius) >= rect.height / 2 - 2;
  },

  centered(doc, cssText, r) {
    const parent = el(doc, r.parent);
    const child = el(doc, r.child);
    if (!parent || !child) return false;
    const p = rectCenter(parent.getBoundingClientRect());
    const c = rectCenter(child.getBoundingClientRect());
    const tol = r.tolerance ?? 4;
    return Math.abs(p.x - c.x) <= tol && Math.abs(p.y - c.y) <= tol;
  },

  equalWidths(doc, cssText, r) {
    const els = all(doc, r.sel);
    if (els.length < 2) return false;
    const widths = els.map((e) => e.getBoundingClientRect().width);
    const tol = r.tolerance ?? 3;
    return widths.every((w) => Math.abs(w - widths[0]) <= tol);
  },

  equalHeights(doc, cssText, r) {
    const els = all(doc, r.sel);
    if (els.length < 2) return false;
    const heights = els.map((e) => e.getBoundingClientRect().height);
    const tol = r.tolerance ?? 3;
    return heights.every((h) => Math.abs(h - heights[0]) <= tol);
  },

  widthPercentMin(doc, cssText, r) {
    const e = el(doc, r.sel);
    const parent = el(doc, r.ofParent);
    if (!e || !parent) return false;
    const w = e.getBoundingClientRect().width;
    const pw = parent.getBoundingClientRect().width;
    if (pw === 0) return false;
    return (w / pw) * 100 >= r.minPct;
  },

  gapMin(doc, cssText, r) {
    const s = cs(doc, r.sel);
    if (!s) return false;
    const axis = r.axis || "column";
    const val = axis === "row" ? s.rowGap : axis === "both" ? Math.min(px(s.rowGap), px(s.columnGap)) : s.columnGap;
    return px(val) >= r.minPx;
  },

  gridColumnCount(doc, cssText, r) {
    const s = cs(doc, r.sel);
    if (!s || s.display !== "grid") return false;
    const cols = s.gridTemplateColumns.trim().split(/\s+/).filter(Boolean);
    return cols.length === r.count;
  },

  cssIncludes(doc, cssText, r) {
    return stripComments(cssText).toLowerCase().includes(r.text.toLowerCase());
  },

  cssIncludesAll(doc, cssText, r) {
    const lower = stripComments(cssText).toLowerCase();
    return r.texts.every((t) => lower.includes(t.toLowerCase()));
  },

  cssHoverHasProp(doc, cssText, r) {
    const lower = stripComments(cssText).toLowerCase();
    const re = new RegExp(`:hover[^{]*\\{[^}]*${r.prop.toLowerCase()}`, "s");
    return re.test(lower);
  },

  transitionSet(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && s.transitionDuration.split(",").some((d) => parseFloat(d) > 0);
  },

  animationSet(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && s.animationName !== "none";
  },

  transformIncludes(doc, cssText, r) {
    const s = cs(doc, r.sel);
    if (!s || s.transform === "none") return false;
    if (!r.keyword) return true;
    return stripComments(cssText).toLowerCase().includes(r.keyword.toLowerCase());
  },

  fontWeightMin(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && parseInt(s.fontWeight, 10) >= r.min;
  },

  opacityMax(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && parseFloat(s.opacity) <= r.max;
  },

  opacityMin(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && parseFloat(s.opacity) >= r.min;
  },

  letterSpacingSet(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && s.letterSpacing !== "normal";
  },

  listStyleNone(doc, cssText, r) {
    const s = cs(doc, r.sel);
    return !!s && s.listStyleType === "none";
  },

  varUsed(doc, cssText, r) {
    const lower = stripComments(cssText).toLowerCase();
    return lower.includes(`--${r.name.toLowerCase()}`) && lower.includes(`var(--${r.name.toLowerCase()}`);
  },
};

function runRules(doc, cssText, rules) {
  return rules.every((r) => {
    const fn = RULE_CHECKERS[r.type];
    if (!fn) return false;
    try {
      return !!fn(doc, cssText, r);
    } catch (e) {
      return false;
    }
  });
}
