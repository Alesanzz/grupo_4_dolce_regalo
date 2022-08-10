let auth = document.querySelector('#auth')
let authClass = document.querySelector('#authClass');
auth.addEventListener('mouseover', (e) => {
    authClass.style.display = 'block';
})
auth.addEventListener('mouseout', (e) => {
    authClass.style.display = 'none';
})
authClass.addEventListener('mouseover', (e) => {
    authClass.style.display = 'block';
})
authClass.addEventListener('mouseout', (e) => {
    authClass.style.display = 'none';
})