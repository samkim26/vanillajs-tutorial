const title = document.querySelector('#title')
// title.innerHTML = 'Hi! From JS'
// title.style.color = 'red'
// document.title = 'I own you now'

function handleClick() {
  title.style.color = 'red'
}

title.addEventListener('click', handleClick)

// https://codesandbox.io/s/day-three-blueprint-hook9?file=/src/index.js
