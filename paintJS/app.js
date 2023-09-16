const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const clear = document.getElementById("jsClear");
const saveBtn = document.getElementById("jsSave");
const fillIcon = document.getElementById("jsFillIcon");
const brushIcon = document.getElementById("jsBrushIcon");

const INITIAL_COLOR = "2c2c2c";
const CANVAS_SIZE = 700;

// setUp
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

// mouseMove and paint
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
    cursor;
  }
}

function stopPainting(event) {
  painting = false;
}

function startPainting(event) {
  painting = true;
}

// change color
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

// clear
function handleClearCilck() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

// change mode
function handleFillIcon() {
  filling = true;
  brushIcon.classList.add("i_gary");
  fillIcon.classList.remove("i_gary");
}

function handleBrushIcon() {
  filling = false;
  fillIcon.classList.add("i_gary");
  brushIcon.classList.remove("i_gary");
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

// save img
function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "paintJS";
  link.click();
}

// event
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (clear) {
  clear.addEventListener("click", handleClearCilck);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

if (fillIcon) {
  fillIcon.addEventListener("click", handleFillIcon);
}

if (brushIcon) {
  brushIcon.addEventListener("click", handleBrushIcon);
}
