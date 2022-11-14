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

let password = document.querySelector("#password");
let passwordSpan = document.querySelector("#passwordSpan");

//Funcion para que al dejar de seleccionar un input... se agrege informacion a un "ul"
password.addEventListener("input", function (event) {
  if (event.target.value.length < 1) {
    passwordSpan.innerHTML = "La contraseña debe ser completada";
    passwordSpan.style.color = "red";
    password.style.border = "1px solid red";
  } else if (event.target.value.length < 8 || event.target.value.length > 10) {
    passwordSpan.innerHTML =
      "La contraseña debe tener entre 8 caracteres y 10 caracteres";
    passwordSpan.style.color = "red";
    password.style.border = "1px solid red";
  } else if (
    event.target.value.length >= 8 &&
    event.target.value.length <= 10
  ) {
    passwordSpan.innerHTML = "";
    password.style.border = "1px solid var(--color-principal)";
  }
});
