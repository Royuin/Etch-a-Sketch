const container = document.querySelector(".container");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);

  container.style.setProperty("--grid-cols", cols);

  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.id = "cell";
    container.appendChild(cell);
  }
}

makeGrid(16, 16);

let cell = document.querySelectorAll("#cell");
