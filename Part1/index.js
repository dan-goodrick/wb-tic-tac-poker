const board = Array(9).fill(null);


const gameOver = () => {
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      return false;
    }
  }
  return true;
};

const evalGame = (p) => {
  for (let [a, b, c] of lines) {
    if (board[a] === p && board[b] === p && board[c] === p) {
      return p;
    }
  }
};
const lines = [
  // Horizontal lines
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical lines
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal lines
  [0, 4, 8],
  [2, 4, 6],
];

const play = (boxNum) => {
  let player = document.querySelector("#player");
  let box = document.getElementById(boxNum);
  if (!board[boxNum]) {
    box.innerText = player.innerText;
    board[boxNum] = player.innerText;
    if (evalGame(player.innerText)) {
     alert(`${player.innerText} won!  Good job`);
     window.location.reload()
    } else if (gameOver()) {
      alert(`CAT game.  Nobody won!`);
      window.location.reload()
    }
    player.innerText = player.innerText === "X" ? "O" : "X"
  } else {
    console.log(boxNum + "Seat's taken!  Try again player:" + player.innerText);
  }

};