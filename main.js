let scorePlayer = 0 
let scoreComputer = 0
const btn = document.querySelectorAll('button')
const pedra = btn[0]
const papel = btn[1]
const tesoura = btn[2]

pedra.addEventListener('click', ()=>{
    playerPlay('pedra')
    document.querySelector('.player-1').style.backgroundImage = "url('/images/stone.png')"
})
papel.addEventListener('click', ()=>{
    playerPlay('pedra')
    document.querySelector('.player-1').style.backgroundImage = "url('/images/paper.png')"
})
tesoura.addEventListener('click', ()=>{
    playerPlay('pedra')
    document.querySelector('.player-1').style.backgroundImage = "url('/images/scissors.png')"
})

function playerPlay (a) {
    let playerSelection = a
    console.log('Player:', playerSelection)
    let computerSelection = computerPlay()
    selected(computerSelection)
    // let playerSelection = selection
    // playerSelection = selected(playerSelection)
    // let computerSelection =  computerPlay()
    console.log('Computer:', computerSelection)
    result(playerSelection, computerSelection)
    // console.log('  ')
    clear(scorePlayer, scoreComputer)
}
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3)
    computerSelection = selected(computerSelection)
    return computerSelection
}
function selected (computerSelection) {
    if(computerSelection == 0) {
        document.querySelector('.computer').style.backgroundImage = "url('/images/stone.png')"
        return 'pedra'
    } else if (computerSelection == 1) {
        document.querySelector('.computer').style.backgroundImage = "url('/images/paper.png')"
        return 'papel'
    } else if (computerSelection == 2) {
        document.querySelector('.computer').style.backgroundImage = "url('/images/scissors.png')"
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