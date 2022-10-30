let carrito = document.querySelector('#carrito');
console.log(+carrito.value);
carrito.addEventListener('click', (e) => {
    console.log(e);
})