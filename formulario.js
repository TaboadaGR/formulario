
function validarNombre() {

	//Expresiones regulares del nombre y apellidos

	var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  	var expRegApellidos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

	 var nombre = document.getElementById("nombre");
     	 var apellidos = document.getElementById("apellidos");

	//nombre
	
	if(!nombre.value)
     {
      alert("El campo nombre es requerido");
     }

     if (!expRegNombre.exec(nombre.value))
     {
        alert("El campo nombre admite letras y espacios.")
        document.getElementById("nombre").value = "";
     }

	//apellidos

     if(!apellidos.value)
     {
      alert("El campo apellidos es requerido");
     }

     if(!expRegApellidos.exec(apellidos.value))
     {
       alert("El campo apellidos admite letras y espacios.")
       document.getElementById("apellidos").value = "";

     }

	}



function validarEmail( email ) {
// cadena regular para comprobar las pautas de un email correcto

expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//variable para notificar al usuario de que su usuario es incorrecto

let error = document.getElementById("email");

//condición que comprueba que el correo introducido en el campo es correcto 

    if(!email)
     {
      alert("El campo email es requerido");
     }

    if ( !expr.test(email) )
    {
        alert("Error: La dirección de correo es incorrecta.");

        document.getElementById("email").value = "";
    }
    
}




function validarTelefono( tlfn ) {

if(!tlfn)
     {
      alert("El campo teléfono es requerido");
     }
else{

	//variable con el largo del número de teléfono

	let tamano=(tlfn.length);


	//condición que comprueba que el télefono es correcto

	if (isNaN(tlfn)||tamano!=9) {
		alert('El teléfono introducido no es correcto');

		document.getElementById("telefono").value = "";
	}
	}
}



function comprobarContrasena(contrasena1, contrasena2) {

	if((!contrasena1)||(!contrasena2))
     {
      alert("El campo contraseña es requerido");
     }

    else{
		if ((contrasena1!=contrasena2)||(contrasena1.length<8)) {
			alert("Contraseña no válida")
			document.getElementById("contrasena1").value = "";
			document.getElementById("contrasena2").value = "";
		}
	}
}



function comprobarCP( codigo ) {

	console.log(codigo);



if(!codigo)
     {
      alert("El Código Postal es requerido");
     }

else{

	let tamano =(codigo.length);

	if (tamano!=5) {
		alert("El Código Postal no es correcto");
		document.getElementById("CP").value = "";
		}

		else{

				if ((codigo<1000)||(codigo>52999)) {
					alert("El Código Postal no es correcto");
					document.getElementById("CP").value = "";	
				}

				else{

					if(isNaN(codigo)){
						alert("El Código Postal no es correcto");
						document.getElementById("CP").value = "";
					}
				}
			}
}

}


function enviar() {

	validarNombre();

	validarEmail();

	validarTelefono();

	comprobarContrasena();

	comprobarCP();

	comprobarInsultos();
}