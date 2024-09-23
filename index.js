const X_turn = "X"
const circleTurn = "O"
const dataCells = document.querySelectorAll('[data-cell]')
const restart = document.querySelector("#restartButton")
const message = document.querySelector("#data-winning-message-text")

const winPattern = [
    [0,1,2],
    [3, 4, 5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2, 5, 8],
    [0,4,8],
    [2,4,6]
]

let options = ["","","","","","","","",""]
let currentPlayer ="X"
let running = false

initializeGame()

function initializeGame(){
    dataCells.forEach(cell => cell.addEventListener("click", cellChecked))
    restart.addEventListener("click", restartGame)
    message.textContent =  `${currentPlayer}'s turn`
    
    running = true;
}

function cellChecked(){
    const cellIndex = this.getAttribute("data-cell")

    if(options[cellIndex] != "" || !running){
        return;
    }
     updateCell(this, cellIndex);
     checkWinner()
     
 
}

function updateCell(cell, index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer 
}


function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"
    message.textContent = `${currentPlayer}'s turn`
    
}

function checkWinner(){
    let roundWon = false

    for(let i =0; i < winPattern.length; i++){
        const condition = winPattern[i]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
         
        if(cellA == "" || cellB =="" || cellC ==""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true
            break;
        }

    }

    if(roundWon){
        message.textContent = `${currentPlayer} winds`
        running = false
    }
    else if(!options.includes("")){
message.textContent = `Draw`
    }
    else{
        changePlayer()
    }
}

function restartGame(){
    currentPlayer = "X"
    options = ["","","","","","","","",""]
    message.textContent = `${currentPlayer}'s turn`
    dataCells.forEach(cell => cell.textContent = "")
    running = true
}

// display
// turn player
// check winner



