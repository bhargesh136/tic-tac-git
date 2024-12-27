let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");

let trunO = true;

const winPattens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () =>
{
  trunO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

boxes.forEach((box) =>
{
  box.addEventListener("click", () =>
  {
    if (trunO) {
      box.innerText = "O";
      box.classList.add("player-o");
      box.classList.remove("player-x");
      trunO = false;
    } else {
      box.innerText = "X";
      box.classList.add("player-x");
      box.classList.remove("player-o");
      trunO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () =>
{
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () =>
{
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (WINNER) =>
{
  msg.innerHTML = `Congratulation, Winner is ${WINNER}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () =>
{
  for (let patten of winPattens) {
    let pos1val = boxes[patten[0]].innerText;
    let pos2val = boxes[patten[2]].innerText;
    let pos3val = boxes[patten[1]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);