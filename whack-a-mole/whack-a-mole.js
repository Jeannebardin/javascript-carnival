// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('TD')

let randomIndex = Math.floor(Math.random() * cells.length)

let randomCell = cells[randomIndex]

let mole = document.createElement('img')

mole.src = './mole.PNG'

mole.id = 'mole'

randomCell.appendChild(mole)

mole.onclick = whackedMole

function whackedMole() {
  console.log('Michael is awesome!')
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

  let audio = new Audio('./whack-audio.wav')
  audio.play()
}
// Audio is a javascripty thing.. doesnt need to be referenced in HTML
