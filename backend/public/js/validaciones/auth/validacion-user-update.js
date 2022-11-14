// Validacion que verifica que el campo solo tenga letras (incluido la ñ) y letras con acentos
const pattern = RegExp(/^[A-Za-z\u00C0-\u017F\.\-]+$/i);


let namee = document.querySelector("#name");
let nameSpan = document.querySelector("#nameSpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
namee.addEventListener("input", function (event) {
  if (event.target.value.length < 1) {
    nameSpan.innerHTML = "Este campo debe ser completado";
    nameSpan.style.color = "red";
    namee.style.border = "1px solid red";
  } else if (event.target.value.length < 3 || event.target.value.length > 20) {
    nameSpan.innerHTML = "Este campo debe tener entre 3 y 20 caracteres";
    nameSpan.style.color = "red";
    namee.style.border = "1px solid red";
  } else if (!pattern.test(event.target.value)) {
    nameSpan.innerHTML =
      "Este campo debe contener únicamente caracteres alfabéticos";
    nameSpan.style.color = "red";
    namee.style.border = "1px solid red";
  } else if (
    event.target.value.length >= 3 &&
    event.target.value.length <= 20
  ) {
    nameSpan.innerHTML = "";
    namee.style.border = "1px solid var(--color-principal)";
  }
});

let lastname = document.querySelector("#lastname");
let lastNameSpan = document.querySelector("#lastNameSpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
lastname.addEventListener("input", function (event) {
  if (event.target.value.length < 1) {
    lastNameSpan.innerHTML = "Este campo debe ser completado";
    lastNameSpan.style.color = "red";
    lastname.style.border = "1px solid red";
  } else if (event.target.value.length < 3 || event.target.value.length > 20) {
    lastNameSpan.innerHTML = "Este campo debe tener entre 3 y 20 caracteres";
    lastNameSpan.style.color = "red";
    lastname.style.border = "1px solid red";
  } else if (!pattern.test(event.target.value)) {
    lastNameSpan.innerHTML =
      "Este campo debe contener únicamente caracteres alfabéticos";
    lastNameSpan.style.color = "red";
    lastname.style.border = "1px solid red";
  } else if (
    event.target.value.length >= 3 &&
    event.target.value.length <= 20
  ) {
    lastNameSpan.innerHTML = "";
    lastname.style.border = "1px solid var(--color-principal)";
  }
});

let phone = document.querySelector("#phone");
let phoneSpan = document.querySelector("#phoneSpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
phone.addEventListener("input", function (event) {
  if (event.target.value.length < 1) {
    phoneSpan.innerHTML = "Este campo debe ser completado";
    phoneSpan.style.color = "red";
    phone.style.border = "1px solid red";
  } else if (event.target.value.length < 10 || event.target.value.length > 16) {
    phoneSpan.innerHTML = "Este campo debe tener entre 10 y 16 caracteres";
    phoneSpan.style.color = "red";
    phone.style.border = "1px solid red";
  } else if (
    event.target.value.length >= 10 &&
    event.target.value.length <= 16
  ) {
    phoneSpan.innerHTML = "";
    phone.style.border = "1px solid var(--color-principal)";
  }
});

let pais = document.querySelector("#pais");
let countrySpan = document.querySelector("#countrySpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
pais.addEventListener("blur", function (event) {
  if (!event.target.value) {
    countrySpan.innerHTML = "Este campo debe ser completado";
    countrySpan.style.color = "red";
    pais.style.border = "1px solid red";
  } else {
    countrySpan.innerHTML = "";
    pais.style.border = "1px solid var(--color-principal)";
  }
});

let email = document.querySelector("#email");
let emailSpan = document.querySelector("#emailSpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
email.addEventListener("input", function (event) {
  if (event.target.value.length < 1) {
    emailSpan.innerHTML = "El email debe ser completado";
    emailSpan.style.color = "red";
    email.style.border = "1px solid red";
  } else if (
    !event.target.value.includes("@") &&
    !event.target.value.includes(".com")
  ) {
    emailSpan.innerHTML = "Email no valido";
    emailSpan.style.color = "red";
    email.style.border = "1px solid red";
  } else {
    emailSpan.innerHTML = "";
    email.style.border = "1px solid var(--color-principal)";
  }
});

let image = document.querySelector("#image");
let imageSpan = document.querySelector("#imageSpan");

//funcion para validar que en un formulario se carge unicamente archivos de imagenes, y mas ningun otro tipo de archivos
image.addEventListener("change", function () {
  let extension = image.files[0].type;

  if (!extension.includes("image")) {
    imageSpan.innerHTML =
      "El archivo cargado deberá tener alguno de los siguientes formatos: JPG, JPEG, PNG, GIF";
    imageSpan.style.color = "red";
    image.value = null;
  } else {
    imageSpan.innerHTML = "";
  }
});
