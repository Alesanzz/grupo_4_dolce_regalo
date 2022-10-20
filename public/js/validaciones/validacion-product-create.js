let namee = document.querySelector("#nameProduct");
let nameSpan = document.querySelector("#nameSpan");
let error = document.querySelector("#error");

//Funcion para que al dejar de seleccionar un input... se agrege esa informacion en una lista de "li"
namee.addEventListener("blur", function (event) {
  if (event.target.value.length == "") {
    let li = document.createElement("li");
    li.innerHTML = event.target.value;
    error.appendChild(li);
    nameSpan.innerHTML = "No puede quedar vacio este campo"
  }else if (event.target.value.length < 4 || event.target.value.length > 20){
    nameSpan.innerHTML = "Este campo debe tener entre 4 y 20 caracteres"
  }else{
    nameSpan.innerHTML = ""
  }
});