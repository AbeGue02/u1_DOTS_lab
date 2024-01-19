/*
 * DOTS: Level Three
 *
 */

let score = 0
let timer = 60

const timerElement = document.querySelector('.timer')
const balls = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

let interval = setInterval(() => {
    timer--
    timerElement.innerHTML = timer
    if (timer <= 0) {
        timer = 1
    }
}, 1000)

balls.forEach((ball) => {
    ball.addEventListener('click', () => {
        score += parseInt(ball.getAttribute('data-increment')) + 10
    })
})

document.querySelector('.level-arena').addEventListener('click', () => {
    score -= 10

    scoreDisplay.innerHTML = '00' + score.toString()
    if (score < 0) {
        document.querySelector('.level-loser').style.opacity = 1
        scoreDisplay.innerHTML = "Try Again..."
        clearInterval(timer)
    } else if (score >= 100) {
        score = 100
        scoreDisplay.innerHTML = 0 + score.toString()
        levelWinner.style.opacity = 1
        clearInterval(timer)
    } else if (score === 0) {
        scoreDisplay.innerHTML = "0000"
    }
})
