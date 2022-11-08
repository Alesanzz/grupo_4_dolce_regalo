let buscador = document.querySelector('#buscador');
let buscadorClass = document.querySelector('.buscador');
let mostrar = false;

buscador.addEventListener('click', (e) => {
    mostrar = !mostrar;
    if (mostrar) {
        buscadorClass.style.display = 'block';
        buscador.classList.remove('fa-solid', 'fa-magnifying-glass');
        buscador.classList.add('fa-solid', 'fa-xmark')

    } else {
        buscadorClass.style.display = 'none'
        buscador.classList.remove('fa-solid', 'fa-xmark')
        buscador.classList.add('fa-solid', 'fa-magnifying-glass');
    }
})