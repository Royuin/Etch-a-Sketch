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

function createHover() {
  let cell = document.querySelectorAll("#cell");
  cell.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      let colors = ["#ff0000", "#00ff00", "#0000ff"];
      let random_color = colors[Math.floor(Math.random() * colors.length)];
      cell.style.backgroundColor = random_color;
    });
  });
}
createHover();
const gridSizeButton = document.querySelector(".grid-size-button");

function gridSizePrompt() {
  answer = prompt("What size grid would you like?");
  answerNum = Number(answer);

  if (answerNum > 100) {
    return alert("Choose a number no greater than 100");
  } else if (Number.isInteger(answerNum) === false) {
    return alert("Must be a whole number");
  } else {
    return answerNum;
  }
}

function deleteAndCreateGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  let myNewGrid = new makeGrid(answerNum, answerNum);
  myNewGrid;
  createHover();
}

gridSizeButton.addEventListener("click", () => {
  if (gridSizePrompt() !== answerNum) {
    return;
  } else {
    deleteAndCreateGrid();
  }
});
