const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a"); 
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username";
//반복해서 사용해야 하는 단어가 있을 경우 const 대문자로 선언하여 오타없이 사용

function onLoginSubmit(tomato){
    tomato.preventDefault(); //submit의 기본행동인 새로고침을 막는 것
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintingGreeting(username);
}

loginForm.addEventListener("submit",onLoginSubmit);

function paintingGreeting(username){
    greeting.innerText=`Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit)
}else{
    paintingGreeting(savedUsername);
}   