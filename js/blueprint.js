// Blueprint — turns an actual drawing into actual code. No AI guessing:
// freehand strokes become the exact SVG <path> you drew, and shapes
// become real absolutely-positioned <div>s with real CSS. What you see
// on the canvas is, line for line, what comes out in the code panel.

const SVG_NS = "http://www.w3.org/2000/svg";
const CANVAS_W = 800;
const CANVAS_H = 480;

document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("blueprintCanvas");
  if (!svg) return;

  const codeOutput = document.getElementById("codeOutput");
  const copyBtn = document.getElementById("copyBtn");
  const downloadPngBtn = document.getElementById("downloadPngBtn");
  const copiedMsg = document.getElementById("copiedMsg");
  const undoBtn = document.getElementById("undoBtn");
  const clearBtn = document.getElementById("clearBtn");
  const colorInput = document.getElementById("colorInput");
  const fillInput = document.getElementById("fillInput");
  const widthInput = document.getElementById("widthInput");
  const toolButtons = document.querySelectorAll(".tool-btn");

  let currentTool = "pencil";
  let shapes = [];
  let drawing = null; // in-progress shape: { type, el, ...geometry }

  toolButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      toolButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentTool = btn.dataset.tool;
    });
  });

  function svgPoint(evt) {
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const p = pt.matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
  }

  function startPencil(pt) {
    const el = document.createElementNS(SVG_NS, "path");
    const points = [pt];
    el.setAttribute("fill", "none");
    el.setAttribute("stroke", colorInput.value);
    el.setAttribute("stroke-width", widthInput.value);
    el.setAttribute("stroke-linecap", "round");
    el.setAttribute("stroke-linejoin", "round");
    el.setAttribute("d", `M ${round(pt.x)} ${round(pt.y)}`);
    svg.appendChild(el);
    return { type: "pencil", el, points, color: colorInput.value, strokeWidth: widthInput.value };
  }

  function updatePencil(state, pt) {
    state.points.push(pt);
    const d = `M ${state.points.map((p) => `${round(p.x)} ${round(p.y)}`).join(" L ")}`;
    state.el.setAttribute("d", d);
  }

  function startRect(pt) {
    const el = document.createElementNS(SVG_NS, "rect");
    applyShapeStyle(el);
    el.setAttribute("x", pt.x);
    el.setAttribute("y", pt.y);
    el.setAttribute("width", 0);
    el.setAttribute("height", 0);
    el.setAttribute("rx", 6);
    svg.appendChild(el);
    return { type: "rect", el, startX: pt.x, startY: pt.y, x: pt.x, y: pt.y, w: 0, h: 0, color: colorInput.value, filled: fillInput.checked, strokeWidth: widthInput.value };
  }

  function updateRect(state, pt) {
    const x = Math.min(state.startX, pt.x);
    const y = Math.min(state.startY, pt.y);
    const w = Math.abs(pt.x - state.startX);
    const h = Math.abs(pt.y - state.startY);
    state.x = x; state.y = y; state.w = w; state.h = h;
    state.el.setAttribute("x", x);
    state.el.setAttribute("y", y);
    state.el.setAttribute("width", w);
    state.el.setAttribute("height", h);
  }

  function startEllipse(pt) {
    const el = document.createElementNS(SVG_NS, "ellipse");
    applyShapeStyle(el);
    el.setAttribute("cx", pt.x);
    el.setAttribute("cy", pt.y);
    el.setAttribute("rx", 0);
    el.setAttribute("ry", 0);
    svg.appendChild(el);
    return { type: "ellipse", el, startX: pt.x, startY: pt.y, cx: pt.x, cy: pt.y, rx: 0, ry: 0, color: colorInput.value, filled: fillInput.checked, strokeWidth: widthInput.value };
  }

  function updateEllipse(state, pt) {
    const rx = Math.abs(pt.x - state.startX) / 2;
    const ry = Math.abs(pt.y - state.startY) / 2;
    const cx = (pt.x + state.startX) / 2;
    const cy = (pt.y + state.startY) / 2;
    state.cx = cx; state.cy = cy; state.rx = rx; state.ry = ry;
    state.el.setAttribute("cx", cx);
    state.el.setAttribute("cy", cy);
    state.el.setAttribute("rx", rx);
    state.el.setAttribute("ry", ry);
  }

  function applyShapeStyle(el) {
    if (fillInput.checked) {
      el.setAttribute("fill", colorInput.value);
      el.setAttribute("stroke", "none");
    } else {
      el.setAttribute("fill", "none");
      el.setAttribute("stroke", colorInput.value);
      el.setAttribute("stroke-width", widthInput.value);
    }
  }

  svg.addEventListener("pointerdown", (evt) => {
    svg.setPointerCapture(evt.pointerId);
    const pt = svgPoint(evt);
    if (currentTool === "pencil") drawing = startPencil(pt);
    else if (currentTool === "rect") drawing = startRect(pt);
    else if (currentTool === "ellipse") drawing = startEllipse(pt);
  });

  svg.addEventListener("pointermove", (evt) => {
    if (!drawing) return;
    const pt = svgPoint(evt);
    if (drawing.type === "pencil") updatePencil(drawing, pt);
    else if (drawing.type === "rect") updateRect(drawing, pt);
    else if (drawing.type === "ellipse") updateEllipse(drawing, pt);
  });

  function finishDrawing() {
    if (!drawing) return;
    const tooSmall =
      (drawing.type === "rect" && (drawing.w < 3 || drawing.h < 3)) ||
      (drawing.type === "ellipse" && (drawing.rx < 3 || drawing.ry < 3)) ||
      (drawing.type === "pencil" && drawing.points.length < 2);
    if (tooSmall) {
      drawing.el.remove();
    } else {
      shapes.push(drawing);
    }
    drawing = null;
    renderCode();
  }

  svg.addEventListener("pointerup", finishDrawing);
  svg.addEventListener("pointerleave", finishDrawing);

  undoBtn.addEventListener("click", () => {
    const last = shapes.pop();
    if (last) last.el.remove();
    renderCode();
  });

  clearBtn.addEventListener("click", () => {
    shapes.forEach((s) => s.el.remove());
    shapes = [];
    renderCode();
  });

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(codeOutput.textContent);
      copiedMsg.textContent = "Copied!";
      setTimeout(() => { copiedMsg.textContent = ""; }, 1800);
    } catch (e) {
      copiedMsg.textContent = "Couldn't copy — select the code manually.";
    }
  });

  downloadPngBtn.addEventListener("click", () => {
    if (shapes.length === 0) {
      copiedMsg.textContent = "Draw something first.";
      setTimeout(() => { copiedMsg.textContent = ""; }, 1800);
      return;
    }

    const svgClone = svg.cloneNode(true);
    svgClone.setAttribute("width", CANVAS_W);
    svgClone.setAttribute("height", CANVAS_H);
    const svgString = new XMLSerializer().serializeToString(svgClone);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const scale = 2;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = CANVAS_W * scale;
      canvas.height = CANVAS_H * scale;
      const ctx = canvas.getContext("2d");
      const bg = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim() || "#fffdf7";
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);

      canvas.toBlob((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "blueprint-sketch.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      }, "image/png");
    };
    img.onerror = () => {
      copiedMsg.textContent = "Couldn't generate image.";
      setTimeout(() => { copiedMsg.textContent = ""; }, 1800);
    };
    img.src = url;
  });

  function round(n) {
    return Math.round(n * 10) / 10;
  }

  function shapeToHtml(shape) {
    if (shape.type === "rect") {
      const style = shape.filled
        ? `background: ${shape.color}; border-radius: 8px;`
        : `background: none; border: ${shape.strokeWidth}px solid ${shape.color}; border-radius: 8px;`;
      return `  <div style="position: absolute; left: ${round(shape.x)}px; top: ${round(shape.y)}px; width: ${round(shape.w)}px; height: ${round(shape.h)}px; ${style}"></div>`;
    }
    if (shape.type === "ellipse") {
      const left = shape.cx - shape.rx;
      const top = shape.cy - shape.ry;
      const style = shape.filled
        ? `background: ${shape.color}; border-radius: 50%;`
        : `background: none; border: ${shape.strokeWidth}px solid ${shape.color}; border-radius: 50%;`;
      return `  <div style="position: absolute; left: ${round(left)}px; top: ${round(top)}px; width: ${round(shape.rx * 2)}px; height: ${round(shape.ry * 2)}px; ${style}"></div>`;
    }
    return null;
  }

  function renderCode() {
    if (shapes.length === 0) {
      codeOutput.textContent = "<!-- draw something to see the code -->";
      return;
    }

    const divs = shapes.map(shapeToHtml).filter(Boolean);
    const pencilPaths = shapes.filter((s) => s.type === "pencil");

    let svgBlock = "";
    if (pencilPaths.length > 0) {
      const pathLines = pencilPaths
        .map((s) => `    <path d="${s.el.getAttribute("d")}" fill="none" stroke="${s.color}" stroke-width="${s.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"></path>`)
        .join("\n");
      svgBlock = `  <svg viewBox="0 0 ${CANVAS_W} ${CANVAS_H}" style="position: absolute; inset: 0; width: 100%; height: 100%;">\n${pathLines}\n  </svg>\n`;
    }

    const html = `<div style="position: relative; width: ${CANVAS_W}px; height: ${CANVAS_H}px;">\n${svgBlock}${divs.join("\n")}\n</div>`;
    codeOutput.textContent = html;
  }
});
