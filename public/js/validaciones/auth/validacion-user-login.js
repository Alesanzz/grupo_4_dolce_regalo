input.addEventListener("blur", function (event) {
    if (event.target.value !== "") {
      let li = document.createElement("li");
      li.innerHTML = event.target.value;
      lista.appendChild(li);
      mensaje.innerHTML = ""
    }else{
      mensaje.innerHTML = "No puede quedar vacio este campo"
      mensaje.style.backgroundColor = "tomato"
      mensaje.style.color = "snow"
    }
  });