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

// function addHoverListener() {
//   for (let i = 0; i < cell.length; i++) {
//     cell[i].addEventListener("hover", function (e) {
//       e.target.style.backgroundColor = "black";
//     });
//   }
// }

// addHoverListener();

cell.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.classList.toggle("change-background-color");
  });
});
