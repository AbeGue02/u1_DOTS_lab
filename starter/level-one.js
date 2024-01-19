/*
 * DOTS: Level One
 *
 */

let score = 0;

const ball = document.querySelector('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

ball.addEventListener('click', () => {
    score += 20
})

document.querySelector('.level-arena').addEventListener('click', () => {
    score -= 10

    scoreDisplay.innerHTML = '00' + score.toString()
    if (score < 0) {
        document.querySelector('.level-loser').style.opacity = 1
        scoreDisplay.innerHTML = "Try Again..."
    } else if (score >= 100) {
        score = 100
        scoreDisplay.innerHTML = 0 + score.toString()
        levelWinner.style.opacity = 1
    } else if (score === 0) {
        scoreDisplay.innerHTML = "0000"
    }
})


