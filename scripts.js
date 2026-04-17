
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const humanChoiceDisplay = document.querySelector('.human-choice-display')
const machineChoiceDisplay = document.querySelector('.machine-choice-display')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}
const playTheGame = (human, machine) => {
    result.innerHTML = "Jo...ken...PÔ!"
    result.style.color = "#000000"
    setTimeout(() => {

        humanChoiceDisplay.innerHTML = traduzirEscolha(human)
        machineChoiceDisplay.innerHTML = traduzirEscolha(machine)
        console.log('Humano: ' + human + " Maquina: " + machine)

        if (human === machine) {
            result.innerHTML = "Empate!"
            result.style.color = "#DED949"
        } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
            (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
            (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
            result.innerHTML = "Você Ganhou!"
            result.style.color = "#32CD32"
        } else {
            machineScoreNumber++
            machineScore.innerHTML = machineScoreNumber
            result.innerHTML = "Você Perdeu!"
            result.style.color = "#DC143C"
        }
    }, 500);
}

const traduzirEscolha = (escolha) => {
    if (escolha === 'rock') return '👊'
    if (escolha === 'paper') return '🖐️'
    if (escolha === 'scissors') return '✌️'
}

const resetGame = () => {
   // 1. Zerar as variáveis de controle
    humanScoreNumber = 0
    machineScoreNumber = 0

    // 2. Atualizar o placar na tela
    humanScore.innerHTML = 0
    machineScore.innerHTML = 0

    // 3. Limpar as mensagens e escolhas
    result.innerHTML = ""
    humanChoiceDisplay.innerHTML = ""
    machineChoiceDisplay.innerHTML = ""
    
    // Opcional: voltar a cor do resultado para o padrão
    result.style.color = "#ffffff" 
}

