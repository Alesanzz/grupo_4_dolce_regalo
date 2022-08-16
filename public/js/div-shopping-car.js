let closeCar = document.querySelector('#close-car');
let iconCar = document.querySelector('#icon-car');
let divCar = document.querySelector('.container-car-shopping')
let ocultar = false;
let mostrarDiv = false;
//metodo para cerrar div del carrito de compras
closeCar.addEventListener('click', (e) => {
    console.log('ok');
    ocultar = !ocultar
    if (ocultar) {
        divCar.style.display = 'none'
        ocultar = false
    }
})
iconCar.addEventListener('click', (e) => {

    mostrarDiv = !mostrarDiv
    if (mostrarDiv) {
        divCar.style.display = 'block'
        mostrarDiv = false
    }
})