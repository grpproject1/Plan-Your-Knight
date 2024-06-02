//file for form function if needed. 
const clickyButton = document.querySelector('#clicky');

// clickyButton.addEventListener('click',
//     console.log('click');
// window.location.href = "./"
// );


const container = document.querySelector('.container');

const signUpBtn = document.querySelector('.green-bg button');


signUpBtn.addEventListener('click', () => {
    container.classList.toggle('change')
});