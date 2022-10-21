let nameProduct = document.querySelector("#nameProduct");
let nameProductSpan = document.querySelector("#nameSpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
nameProduct.addEventListener("blur", function (event) {
  if (event.target.value.length < 1) {
    nameProductSpan.innerHTML = "No puede quedar vacio este campo";
    nameProductSpan.style.color = "red";
    nameProduct.style.border = "1px solid red";
  } else if (event.target.value.length < 4 || event.target.value.length > 20) {
    nameProductSpan.innerHTML = "Este campo debe tener entre 4 y 20 caracteres";
    nameProductSpan.style.color = "red";
    nameProduct.style.border = "1px solid red";
  } else if (
    event.target.value.length >= 4 &&
    event.target.value.length <= 20
  ) {
    nameProductSpan.innerHTML = "";
    nameProduct.style.border = "1px solid var(--color-principal)";
  }
});

let description = document.querySelector("#description");
let descriptionSpan = document.querySelector("#descriptionSpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
description.addEventListener("blur", function (event) {
  if (event.target.value.length < 1) {
    descriptionSpan.innerHTML = "No puede quedar vacio este campo";
    descriptionSpan.style.color = "red";
    description.style.border = "1px solid red";
  } else if (event.target.value.length < 4 || event.target.value.length > 200) {
    descriptionSpan.innerHTML =
      "Este campo debe tener entre 4 y 200 caracteres";
    descriptionSpan.style.color = "red";
    description.style.border = "1px solid red";
  } else if (
    event.target.value.length >= 4 &&
    event.target.value.length <= 200
  ) {
    descriptionSpan.innerHTML = "";
    description.style.border = "1px solid var(--color-principal)";
  }
});

let price = document.querySelector("#price");
let priceSpan = document.querySelector("#priceSpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
price.addEventListener("blur", function (event) {
  if (event.target.value.length < 1) {
    priceSpan.innerHTML = "No puede quedar vacio este campo";
    priceSpan.style.color = "red";
    price.style.border = "1px solid red";
  } else {
    priceSpan.innerHTML = "";
    price.style.border = "1px solid var(--color-principal)";
  }
});

let image = document.querySelector("#image");
let imageSpan = document.querySelector("#imageSpan");

//funcion para validar que en un formulario se carge unicamente archivos de imagenes, y mas ningun otro tipo de archivos
image.addEventListener("change", function () {
  let extension = image.files[0].type;

  if (!extension.includes("image")) {
    imageSpan.innerHTML = "El archivo cargado deberá tener alguno de los siguientes formatos: JPG, JPEG, PNG, GIF";
    imageSpan.style.color = "red";
    image.value = null;
  } else {
    imageSpan.innerHTML = "";
  }
});
