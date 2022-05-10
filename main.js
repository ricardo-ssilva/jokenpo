function playerPlay () {
    let playerSelection = Math.floor(Math.random() * 3)
    playerSelection = selection(playerSelection)

    console.log('Player:', playerSelection)
    
    let computerSelection =  computerPlay()
    console.log('Computer:', computerSelection)

    result(playerSelection, computerSelection)
}
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3)
    computerSelection = selection(computerSelection)
    return computerSelection
}
function selection (selection) {
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
    } else if (playerSelection == 'pedra' && computerSelection == 'tesoura' || playerSelection == 'tesoura' && computerSelection == 'papel' || playerSelection == 'papel' && computerSelection == 'pedra') {
        console.log('vitória')
    } else {
        console.log('derrota!')
    }
}