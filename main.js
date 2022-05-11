let scorePlayer = 0 
let scoreComputer = 0
function playerPlay (selection) {

    let playerSelection = selection
    playerSelection = selected(playerSelection)

    console.log('Player:', playerSelection)
    
    let computerSelection =  computerPlay()
    console.log('Computer:', computerSelection)

    result(playerSelection, computerSelection)

    console.log('  ')
    clear(scorePlayer, scoreComputer)
}
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3)
    computerSelection = selected(computerSelection)
    return computerSelection
}
function selected (selection) {
    if(selection == 0) {
       return 'pedra'
    } else if (selection == 1) {
       return 'papel'
    } else {
       return 'tesoura'
    }
}
function result (playerSelection, computerSelection) {
    if(playerSelection == 'pedra' && computerSelection == 'pedra' || playerSelection == 'papel' && computerSelection == 'papel' || playerSelection == 'tesoura' && computerSelection == 'tesoura') {
        console.log('empate!')
        score('empate')
    } else if (playerSelection == 'pedra' && computerSelection == 'tesoura' || playerSelection == 'tesoura' && computerSelection == 'papel' || playerSelection == 'papel' && computerSelection == 'pedra') {
        console.log('vitória!')
        score('vitória')
    } else {
        console.log('derrota!')
        score('dettora')
    }
}


function score (status){


    if(status == 'empate') {
        scorePlayer++
        scoreComputer++
    } else if (status == 'vitória'){
        scorePlayer++
    } else {
        scoreComputer++
    }
    console.log(scorePlayer, scoreComputer)

    gameOver(scorePlayer, scoreComputer)


}

function gameOver (scorePlayer, scoreComputer) {
    if(scorePlayer == 5 && scoreComputer < 5) {
       alert('Você Ganhou!')
    } else if(scorePlayer < 5 && scoreComputer == 5){
        alert('Você perdeu!')
    } else  if (scorePlayer == 5 && scoreComputer == 5){
        alert('Empate!')  
    }
}

function clear() {
    if(scorePlayer == 5 || scoreComputer == 5) {
        scorePlayer = 0
        scoreComputer = 0
    }
}