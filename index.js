/*
const title = document.querySelector('#title')
// title.innerHTML = 'Hi! From JS'
// title.style.color = 'red'
// document.title = 'I own you now'

function handleClick() {
  title.style.color = 'red'
}

title.addEventListener('click', handleClick)

// https://codesandbox.io/s/day-three-blueprint-hook9?file=/src/index.js
*/

/*
// if-else
if ('10' === 10) {
  console.log('hi')
} else if ('10' === '10') {
  console.log('lalala')
} else {
  console.log('ho')
}

console.log((true || false) && false)

const age = prompt('How old are u?')
if (age > 18) {
  console.log('you can drink')
} else {
  console.log('you cant')
}
*/

// 이벤트는 MDN

const title = document.querySelector('#title')

const CLICKED_CLASS = 'clicked'

function handleClick() {
  title.classList.toggle(CLICKED_CLASS)
}

function init() {
  title.addEventListener('click', handleClick)
}
init()
