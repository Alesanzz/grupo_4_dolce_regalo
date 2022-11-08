let rememberUser = document.querySelector('#remember-user');
let emailSave = document.querySelector('.email-save');
let check = false;
rememberUser.addEventListener('click', (e) => {
    check = !check
    console.log(check);
    if (check) {
        if (localStorage.getItem('email') === null) {
            localStorage.setItem('email', emailSave.value)
        } else {
            console.log(localStorage.getItem('email'));
            emailSave.value = localStorage.getItem('email')
        }
    } else {
        if (localStorage.getItem('email')) {
            localStorage.removeItem('email')
        }
    }
})


window.addEventListener('load', () => {
    if (localStorage.getItem('email')) {
        emailSave.value = localStorage.getItem('email')
        console.log(rememberUser.target);
        rememberUser.checked = true
        check = true
    }
})