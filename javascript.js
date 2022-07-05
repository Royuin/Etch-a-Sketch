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

cell.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    let colors = ["#ff0000", "#00ff00", "#0000ff"];
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    cell.style.backgroundColor = random_color;
  });
});

const gridSizeButton = document.querySelector(".grid-size-button");

function gridSizePrompt() {
  answer = prompt("What size grid would you like?");
}

gridSizeButton.addEventListener("click", () => {
  gridSizePrompt();
});
