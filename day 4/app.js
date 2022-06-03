const board = document.querySelector('#board')
const colors = ['#8360c3', '#2ebf91', '#677FB3', '#2FBF92', '#FFFFFF', '#7E639F']
const width = document.body.clientWidth
const height = document.body.clientHeight
const squareWidth = 16
const squareHeight = 16
const squareArea = squareHeight * squareWidth
const clientResolution = width * height
const SQUARE_NUMBER = 500
createSquare()
function createSquare(){
    for (let i = 0; i < SQUARE_NUMBER; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', setColor)
        square.addEventListener('mouseleave', removeColor)
        board.append(square)
        
    }

}
function deleteSquare(){
    const square = document.createElement('div')
    square.classList.remove('square')
}
function setColor(e){
    const element = e.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`
}
function removeColor(e){
    const element = e.target
    console.log(element)
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
const person = {
    name: 'makhambet',
    age: 23,
    logInfo: function(){
        console.log(`name is ${this.name}`)
        console.log(`age is ${this.age}`)
    }
}
const john = {
    name: 'john',
    age: 19
}
person.logInfo.bind(john)()