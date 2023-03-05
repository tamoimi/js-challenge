const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //step1-화면 새로고침 방지
  event.preventDefault();
  //step2-form을 hidden 시킴
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value
  //step3-storage에 key는 'username'으로 저장, name은 input.value로 저장
  localStorage.setItem(USERNAME_KEY, username);
  //step4-
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Welcome to my website ${username} 🦐 Hope you enjoy!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}