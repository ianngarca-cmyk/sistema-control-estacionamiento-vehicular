# index.js

```javascript
// Sistema de Control de Estacionamiento Vehicular

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formularioContacto");

    if(formulario){

        formulario.addEventListener("submit", function(event){

            event.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const placa = document.getElementById("placa").value;
            const modelo = document.getElementById("modelo").value;
            const correo = document.getElementById("correo").value;

            if(nombre === "" || placa === "" || modelo === "" || correo === ""){
                alert("Por favor complete todos los campos.");
                return;
            }

            alert(
                "Registro enviado correctamente.\n\n" +
                "Nombre: " + nombre + "\n" +
                "Placa: " + placa + "\n" +
                "Modelo: " + modelo + "\n" +
                "Correo: " + correo
            );

            formulario.reset();
        });

    }

});
```
