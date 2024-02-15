const registerButton = document.getElementById('registerButton')
const loginForm = document.getElementById('loginForm')
const registerForm = document.getElementById('registerForm')
const haveAcc = document.getElementById('haveAcc')

loginForm.classList.add('loginin')

registerButton.addEventListener('click', () => {
    loginForm.classList.remove('loginin')
    setTimeout(() => {
        loginForm.style.display = 'none'
    }, 600);

    setTimeout(() => {
        registerForm.style.display = 'flex'
        setTimeout(() => {
            registerForm.classList.add('register-come-in')
        }, 200);
    }, 600);
})
haveAcc.addEventListener('click', () => {
    registerForm.classList.remove('register-come-in')
    setTimeout(() => {
        loginForm.style.display = 'flex'
    }, 600);

    setTimeout(() => {
        registerForm.style.display = 'none'
        setTimeout(() => {
            loginForm.classList.add('loginin')
        }, 200);
    }, 600);
})
