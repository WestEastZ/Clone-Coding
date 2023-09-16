// html에서 읽어오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 공통변수 설정
const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "username";
const savename = localStorage.getItem("USER_NAME_KEY");

// submit함수
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("USER_NAME_KEY", username);
  paintGreeting(username);
}

// greeting함수
function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// storage 확인 if
if (savename === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savename);
}
