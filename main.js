let grid;
let score;
let time;
let mole;
let hitPosition;
let countdownTimer;
let timerId = null;
let result = 0;
const TOTAL_TIME = 20;
var timeleft = TOTAL_TIME;
let squares = [];

function grepElements() {
    grid = document.querySelector(".grid");
    score = document.querySelector(".score");
    time = document.querySelector(".time");
    mole = document.querySelector(".mole");
}

function createSquares() {
    for (let index = 0; index < 9; index++) {
        let div = document.createElement("div");
        div.classList.add("square");
        div.setAttribute("id", index);
        div.setAttribute("style", "border: 2px solid white;");

        grid.appendChild(div);
        grid.setAttribute("style", "border: 4px solid white;");
    }
}

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove("mole")
  })
  let randomSquare=squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add("mole")

  hitPosition=randomSquare.id
}

function moveMole() {
  timerId=setInterval(randomSquare, 750)
}

function checkMoleHit() {
  squares.forEach(square => {
    square.addEventListener("mousedown", () => {
      if (square.id === hitPosition) {
        result++
      score.textContent=`Score ${result}`
      hitPosition=null
      }
    })
  })
}

function timer() {
    time.textContent = `Time ${timeleft}`
  document.getElementById("progressBar").value=TOTAL_TIME-timeleft

  if (timeleft < 1) {
    clearInterval(countdownTimer)
    clearInterval(timerId)
    alert(`Your result is ${result}`)
  }
  timeleft--
    score.textContent = `Score ${result}`
}

function main() {
    removeEventListener("load", main)
    console.log("epic")

    grepElements()
    createSquares()
    squares = document.querySelectorAll(".square")
    score.textContent = `Score ${result}`
    time.textContent = `Time ${timeleft}`

    randomSquare()
    moveMole()
    checkMoleHit()

    countdownTimer=setInterval(timer,1000)
}



addEventListener("load", main)
