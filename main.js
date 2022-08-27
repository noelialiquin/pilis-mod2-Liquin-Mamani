//           FORMULARIO

function onClick(event) {
  event.preventDefault();



  const mensaje = {
    comercio: document.getElementById('comercio').value,
    titular: document.getElementById('titular').value,
    cel: document.getElementById('cel').value
  }

  console.log(mensaje);


  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })

    .then((response) => response.json())

    .then((json) => {

      console.log(json);
      Swal.fire({
        title: 'Registrado',
        icon: 'success'

      }
      );

      cleanForm();

    })

    .catch((err) => console.log(err));


}

function cleanForm() {
  let formulario = document.getElementById('formulario');
  formulario.reset();
}


let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

//Clima

function getClima() {
  var temp = document.querySelector(".temp");
  var cloud = document.querySelector(".cloud");
  var humidity = document.querySelector(".humidity");

  fetch("https://api.openweathermap.org/data/2.5/weather?lat=-24.183310024481678&lon=-65.33127108038181&appid=171f40ac237805ef34177d5adb547826")
    .then(response => response.json())
    .then(data => {
      var tempValue = data["main"]["temp"];
      var cloudValue = data["weather"][0]["description"];
      var humidityValue = data["main"]["humidity"];

      humidity.innerHTML = "Humedad: " + humidityValue + "º";
      cloud.innerHTML = "Cielo: " + cloudValue;
      temp.innerHTML = "Temperatura: " + (parseInt(Math.round(tempValue) - 273)) + "º";
    })
    .catch(err => alert("Clima No disponible"));
}
getClima();
