

const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});


let userInfo = {
    username: '',
    email: '',
    password: '',

}

const submitSignUp = document.getElementById('blck-btn');

submitSignUp.addEventListener("click", () => {
   
const signupName = document.getElementById('signup-userName')
const email = document.getElementById('signup-emailInput')
const password = document.getElementById('signup-passwordInput')

    userInfo.username = signupName.value
    userInfo.email = email.value
    userInfo.password = password.value

    localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
    window.location.href = "./login.html"
    console.log("beep", userInfo );
});
