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

function previewProfilePicture(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){
        var dataURL = reader.result;
        const profilePicture = document.getElementById('profilePicture');
        profilePicture.style.backgroundImage = "url('" + dataURL + "')";
        profilePicture.innerHTML = ''; 
    };

    reader.readAsDataURL(input.files[0]);
}