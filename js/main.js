
let player = "O"
let plays = 0;

function playerSelection(value) {
  if (winner()) {
    restart();
    return;
  }
  if (playerO()) {
    restart();
    return;
  }

  if (document.getElementById("square" + value).innerHTML === "") {
    if (player === "O") {
      document.getElementById("square" + value).innerHTML = "X";
      document.getElementById("showPlayer").innerHTML = player + " TURN";
      player = "X";
    } else if (player === "X") {
      document.getElementById("square" + value).innerHTML = "O";
      document.getElementById("showPlayer").innerHTML = player + " TURN";
      player = "O";
    }
    plays = plays + 1;
  }
  if (winner()) {
    document.getElementById("showPlayer").innerHTML = player + " WINS!";
  } //displays winner X
  if (playerO()) {
    document.getElementById("showPlayer").innerHTML = "O WINS!";
  } // displays winner O

}

function winner() {
	// determine what wins
  let win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9]
  ];

  for (let i = 0; i < win.length; i++) {
    let combo = win[i];
    if (document.getElementById("square" + combo[0]).innerHTML === player &&
      document.getElementById("square" + combo[1]).innerHTML === player &&
      document.getElementById("square" + combo[2]).innerHTML === player) {
      return true;
    }
  }
  return false;
}

function playerO() {
	//determine which player wins
  if (plays === 9) {
    return true;
  }
  return false;
}

function restart() {
	//clear the game
  for (i = 1; i < 10; i++) {
    document.getElementById("square" + i).innerHTML = "";
    document.getElementById("showPlayer").innerHTML = "X TURN";
    player = "O";
    plays = 0;
  }
}
