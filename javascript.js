const container = document.querySelector(".container");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);

  container.style.setProperty("--grid-cols", cols);

  for (i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");

    container.appendChild(cell).className = "cell";
  }
}

makeGrid(16, 16);

const cell = document.querySelectorAll(".cell");
