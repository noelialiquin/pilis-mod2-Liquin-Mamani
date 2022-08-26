



//          CLIMA




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
      Swal.fire( {//libreria swal :sweetalert2
      title:'Registrado',
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
