const container = document.querySelector('.container'),
  numbers = container.querySelectorAll('.item-numbers'),
  operators = container.querySelectorAll('.item-operators'),
  equal = container.querySelector('.item-equal'),
  clear = container.querySelector('.item-clear'),
  resultBox = container.querySelector('.item-result');

let result = 0;
let firstOperand = 0,
  secondOperand = 0;
let op;

// 연산자 스택
class Stack {
  constructor() {
    this.store = [];
  }

  push(item) {
    this.store.push(item);
  }

  pop() {
    return this.store.pop();
  }

  top() {
    return this.store[this.store.length - 1];
  }

  isEmpty() {
    return this.store.length === 0 ? true : false;
  }
}
const stack = new Stack();

function makeZero(e) {
  result = 0;
  op = '';
  firstOperand = 0;
  secondOperand = 0;
  while (!stack.isEmpty()) {
    stack.pop();
  }
  resultBox.innerText = result;
}

function calResult(e) {
  secondOperand = parseInt(resultBox.textContent, 10);
  if (!stack.isEmpty()) {
    op = stack.pop();
  }
  if (op === '+') {
    resultBox.textContent = firstOperand + secondOperand;
    firstOperand = firstOperand + secondOperand;
  } else if (op === '-') {
    resultBox.textContent = firstOperand - secondOperand;
    firstOperand = firstOperand - secondOperand;
  } else if (op === '*') {
    resultBox.textContent = firstOperand * secondOperand;
    firstOperand = firstOperand * secondOperand;
  } else if (op === '/') {
    resultBox.textContent = firstOperand / secondOperand;
    firstOperand = firstOperand / secondOperand;
  }
}

function operate(e) {
  if (stack.isEmpty()) {
    firstOperand = parseInt(resultBox.textContent, 10);
    stack.push(e.target.textContent);
    op = e.target.textContent;
  } else {
    op = stack.pop();
    calResult();
    stack.push(e.target.textContent);
  }
}

function writeNum(e) {
  if (resultBox.textContent === '0') {
    resultBox.textContent = '';
  }
  if (op !== '') {
    resultBox.textContent = '';
    op = '';
  }
  resultBox.textContent += e.target.textContent;
}

function init() {
  numbers.forEach(function (num) {
    num.addEventListener('click', writeNum);
  });

  operators.forEach(function (operator) {
    operator.addEventListener('click', operate);
  });

  equal.addEventListener('click', calResult);

  clear.addEventListener('click', makeZero);
}

init();
