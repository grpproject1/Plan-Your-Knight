

const loginBtn = document.getElementById('login')



loginBtn.addEventListener("click", (event) => {

    event.preventDefault()

    const passBtn = document.getElementById('passBall')
    const emailLogin = document.getElementById('emailBall')
    let loginObject = JSON.parse(localStorage.getItem(emailLogin.value));

   

    console.log('login button', loginObject)

    let loginPassword = passBtn.value
    let loginEmail = emailBall.value

    console.log('login email', loginEmail)
    console.log('login password', loginPassword)

    if (loginObject.email === loginEmail && loginObject.password === loginPassword) {
        window.location.href = "./index.html"
        console.log("login succesful");
    } else {
    
            

        console.log("LOGIN FAILED");

    } 


    

});