let saveBtn = document.getElementById("save-btn");
let incrementBtn = document.getElementById("increment-btn");

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

// function increment() {
//   count += 1;
//   countEl.textContent = count;
// }

incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
});

// function save() {
//   let countStr = count + " - ";
//   saveEl.textContent += countStr;
//   countEl.textContent = 0;
//   count = 0;
// }

saveBtn.addEventListener("click", function () {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
});
