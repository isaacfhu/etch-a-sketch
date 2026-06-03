const grid = document.querySelector(".grid");
const gridPixel = document.querySelector(".grid-pixel");

function createGrid(squaresPerSide) {
  let GridSize = squaresPerSide * squaresPerSide;
  let pixelPercentage = 100 / squaresPerSide;

  console.log(pixelPercentage);
  gridPixel.style.width = pixelPercentage + "%";
  for (let i = 0; i < GridSize - 1; i++) {
    const clonedPixel = gridPixel.cloneNode(true);
    grid.appendChild(clonedPixel);
    console.log(i);
  }
}
createGrid(16);

document
  .querySelectorAll(".grid-pixel")
  .forEach((element) =>
    element.addEventListener(
      "mouseover",
      () => (element.style.backgroundColor = "pink"),
    ),
  );
