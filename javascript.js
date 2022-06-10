const container = document.querySelector(".container");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);

  container.style.setProperty("--grid-cols", cols);

  for (i = 0; i < rows * cols; i++) {
    const gridBox = document.createElement("div");

    gridBox.innerText = i + 1;

    container.appendChild(gridBox).className = "grid-item";
  }
}

makeGrid(16, 16);
