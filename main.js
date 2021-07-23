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

function main() {
    removeEventListener("load", main)
    console.log("epic")

    grepElements()
    createSquares()
}



addEventListener("load", main)