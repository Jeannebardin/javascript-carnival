// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.onkeydown = checkKey

function checkKey(e) {
  console.log('i pushed up')

  if (e.keycode == '38') {
    changeVertical(-1)
  } else if (e.keyCode == '40') {
    changeVertical(1)
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
    // left arrow
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
    //right arrow
  }
}

// console.log("Dress The Clown!")
var headIndex = 0
var bodyIndex = 0
var shoesIndex = 0

var mainIndex = 0

var head = document.getElementById('head')
var body = document.getElementById('body')
var shoes = document.getElementById('shoes')

function changeHorizontal(shift) {
  console.log('hello')
  if (mainIndex == 0) {
    headIndex += shift

    if (headIndex < 0) headIndex = 5

    if (headIndex > 5) headIndex = 0

    head.src = './images/head' + headIndex + '.png'
  }

  if (mainIndex == 1) {
    bodyIndex += shift

    if (bodyIndex < 0) bodyIndex = 5

    if (bodyIndex > 5) bodyIndex = 0

    body.src = './images/body' + bodyIndex + '.png'
  }

  if (mainIndex == 2) {
    shoesIndex += shift

    if (shoesIndex < 0) shoesIndex = 5

    if (shoesIndex > 5) shoesIndex = 0

    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2
  if (mainIndex > 2) mainIndex = 0
}

//Reading your whole code, I believe that you were trying to wrap all the conditions to change head, body and shoes into the changeHorizontal function however there's an extra curly bracket after the head.src = './images/head' + headIndex + '.png' that should have been placed somewhere else. This is because as it stands right now, it closes the function and therefore whenever changeHorizontal function is called, it only executes the code from if (mainIndex == 0) { until the head.src = ... + '.png'
