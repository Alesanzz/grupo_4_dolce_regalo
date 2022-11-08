let auth = document.querySelector('#auth')
let category = document.querySelector('#category')
let authClass = document.querySelector('#authClass');
let categoryClass = document.querySelector('#categoryClass');
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
    //category
category.addEventListener('mouseover', (e) => {
    categoryClass.style.display = 'block';
})
category.addEventListener('mouseout', (e) => {
    categoryClass.style.display = 'none';
})
categoryClass.addEventListener('mouseover', (e) => {
    categoryClass.style.display = 'block';
})
categoryClass.addEventListener('mouseout', (e) => {
    categoryClass.style.display = 'none';
})