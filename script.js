const grid = document.querySelector(".grid");
const buttonGridSize = document.querySelector(".input-grid-size");

function createGrid(squaresPerSide) {
  let GridSize = squaresPerSide * squaresPerSide;
  let pixelPercentage = 100 / squaresPerSide;

  grid.innerHTML = "";
  for (let i = 0; i < GridSize; i++) {
    const gridPixel = document.createElement("div");
    gridPixel.setAttribute("class", "grid-pixel");
    gridPixel.style.width = pixelPercentage + "%";

    grid.appendChild(gridPixel);
  }

  document
    .querySelectorAll(".grid-pixel")
    .forEach((element) =>
      element.addEventListener(
        "mouseover",
        () => (element.style.backgroundColor = "pink"),
      ),
    );
}

function gridSizeInput() {
  let gridSizeInput = prompt("Type Grid Size");
  if (isNaN(gridSizeInput)) return;
  else if (gridSizeInput > 100) gridSizeInput = 100;

  createGrid(gridSizeInput);
}

createGrid(16);

buttonGridSize.addEventListener("click", gridSizeInput);
