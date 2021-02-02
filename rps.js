let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;
let gameCounter = 1;

let bottom = document.getElementsByClassName("choice");
for (let i = 0; i < bottom.length; i++) {
  bottom[i].addEventListener("click", function (e) {
    let origWincounter = winCounter;
    let origTieCounter = tieCounter;
    // let origLossCounter = lossCounter;
    console.log(e.target);
    let userSelection = document.getElementById("user");
    userSelection.innerText = `You selected ${e.target.innerText.toLowerCase()}!`;
    let computerSelection = document.getElementById("computer");
    let computerChoice = computerRandom();
    if (computerChoice === 1) {
      computerSelection.innerText = `Computer selected rock!`;
      if (e.target.textContent == "Rock") {
        tieCounter++;
      } else if (e.target.textContent == "Paper") {
        winCounter++;
      } else {
        lossCounter++;
      }
    } else if (computerChoice === 2) {
      computerSelection.innerText = `Computer selected paper!`;
      if (e.target.textContent == "Rock") {
        lossCounter++;
      } else if (e.target.textContent == "Paper") {
        tieCounter++;
      } else {
        winCounter++;
      }
    } else {
      computerSelection.innerText = `Computer selected scisors!`;
      if (e.target.textContent == "Rock") {
        winCounter++;
      } else if (e.target.textContent == "Paper") {
        lossCounter++;
      } else {
        tieCounter++;
      }
    }
    document.getElementById("win").textContent = winCounter;
    document.getElementById("tie").textContent = tieCounter;
    document.getElementById("loss").textContent = lossCounter;
    if (winCounter > origWincounter) {
      //   alert("YOU WON!!!");
      document.getElementById("newGame").textContent =
        "You won! pick again to start a new game!";
    } else if (tieCounter > origTieCounter) {
      //   alert("YOU TIED!!!");
      document.getElementById("newGame").textContent =
        "You tied! pick again to start a new game!";
    } else {
      //   alert("YOU LOST!!!!");
      document.getElementById("newGame").textContent =
        "You lost! pick again to start a new game!";
    }
    // gameCounter++;
    document.getElementById("game").textContent = ++gameCounter;
  });
}

function computerRandom() {
  return Math.floor(Math.random() * 3) + 1;
}
console.log(computerRandom());
