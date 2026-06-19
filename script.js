const grid = document.querySelector(".grid");
const buttonGridSize = document.querySelector(".input-grid-size");
let isDrawing = false;
let isRGB = false;

function paint(element) {
  if (isRGB) {
    const randomRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    element.style.backgroundColor = randomRGB;
  } else {
    element.style.backgroundColor = `rgb(0, 0, 0)`;
  }
}

function createGrid(squaresPerSide) {
  let GridSize = squaresPerSide * squaresPerSide;
  let pixelPercentage = 100 / squaresPerSide;

  grid.innerHTML = "";
  for (let i = 0; i < GridSize; i++) {
    const gridPixel = document.createElement("div");
    gridPixel.setAttribute("class", "grid-pixel");
    gridPixel.style.width = pixelPercentage + "%";
    gridPixel.style.opacity = 1;

    grid.appendChild(gridPixel);
  }

  document.querySelectorAll(".grid-pixel").forEach((element) => {
    element.addEventListener("mouseover", () => {
      if (!isDrawing) return;
      paint(element);
    });

    element.addEventListener("click", () => {
      paint(element);

      if (parseFloat(element.style.opacity) > 0) {
        element.style.opacity -= 0.1;
      } else {
        element.style.opacity = 1;
      }
    });
  });
}

function gridSizeInput() {
  let gridSizeInput = prompt("Type Grid Size");
  if (isNaN(gridSizeInput)) return;
  else if (gridSizeInput > 100) gridSizeInput = 100;

  createGrid(gridSizeInput);
}

createGrid(16);

buttonGridSize.addEventListener("click", gridSizeInput);
document.addEventListener("mousedown", () => (isDrawing = true));
document.addEventListener("mouseup", () => (isDrawing = false));
