// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

var cells = document.getElementsByTagName('TD')

var randomIndex = Math.floor(Math.random() * cells.length)

var randomCell = cells[randomIndex]

var mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole'
randomCell.appendChild(mole)
