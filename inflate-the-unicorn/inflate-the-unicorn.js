// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var uni0 = document.getElementById('uni0')
var uni1 = document.getElementById('uni1')
var uni2 = document.getElementById('uni2')

var inflationLevel0 = 0
var inflationLevel1 = 0
var inflationLevel2 = 0

uni0.onclick = clicked
uni1.onclick = clicked
uni2.onclick = clicked

// work out which uni was clicked
// increase the size level from 0-3 (4 levels)
// chnage the src of the image to the new picture

function clicked(event) {
  var unicorn = event.target

  if (unicorn.id == 'uni0') {
    inflationLevel0++

    if (inflationLevel0 == 4) inflationLevel0 = 0

    console.log('the inflation level is ' + inflationLevel0)

    unicorn.src = './images/unicorn-' + inflationLevel0 + '.png'
  }

  if (unicorn.id == 'uni1') {
    inflationLevel1++

    if (inflationLevel1 == 4) inflationLevel1 = 0

    console.log('the inflation level is ' + inflationLevel1)

    unicorn.src = './images/unicorn-' + inflationLevel1 + '.png'
  }

  if (unicorn.id == 'uni2') {
    inflationLevel2++

    if (inflationLevel2 == 4) inflationLevel2 = 0

    console.log('the inflation level is ' + inflationLevel2)

    unicorn.src = './images/unicorn-' + inflationLevel2 + '.png'
  }
}

// console.log('Inflate The Unicorn!')
