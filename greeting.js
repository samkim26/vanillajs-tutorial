const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); // 기본 event동작(form 작성한 것을 어떤 곳으로 보내고 페이지 새로고침) 막음
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
