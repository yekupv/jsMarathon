const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeLeft = document.querySelector('#time')
const board = document.querySelector('.board')
const scoreBoard = document.querySelector('.game-end-table')
const startAgainBtn =document.querySelector('#start-over')
const colors = ['#4C2C9F','#AF5E84','#625ABE','#95E9FA', '#46587B']
let bestScore = 0;
let timeControl = 0;
let time = 5;
let score = 0;
startBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    screens[0].classList.add('up')
})
timeList.addEventListener('click', event =>{
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        console.log(time)
        screens[1].classList.add('up')
        startGame()

    }
})
board.addEventListener('click', event =>{
    if(event.target.classList.contains('circle')){
        score++
        console.log(event.target)
        event.target.remove()
        createRandomCircle()
    }
    
})
// startAgainBtn.addEventListener('click', event=>{
//     startGame()
// })


function startGame(){
    timeLeft.parentNode.classList.remove('hide')
    
    score = 0
    scoreBoard.classList.add('hide')
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    setTime(time)
}


function decreaseTime(){
       if(time === 0 )
            finishGame()
        else{
            let current = --time
            if(current < 10){
                current = `0${current}`
            }
            setTime(current)
        }    
}


function setTime(value){
    timeLeft.innerHTML = `00:${value}`
}
function finishGame(){
    document.querySelector('.circle').classList.add('hide')
    scoreBoard.classList.remove('hide')
    
    
    if(score > bestScore){
        bestScore = score 
        document.getElementById('best-score').innerHTML = `${bestScore}`
    }
    timeLeft.parentNode.classList.add('hide')
    board.querySelector('#score').innerHTML = `${score}`
   
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = colors[getRandomNumber(0, colors.length - 1)]
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    board.append(circle)
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.backgroundColor = color
    circle.style.boxShadow = `0 0 5px ${color}, 0 0 10px${color}`
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() *(max  - min + 1) + min )
}
function isPositive(a) {
    
        if(a > 0)
        console.log('YES')
        if(a === 0 ){throw new Error('Zero Error')}
        if(a < 0 ){throw new Error('Negative  Error')}
}

try{
    isPositive(1)
}
catch(e){
    console.log(e.message)
}
