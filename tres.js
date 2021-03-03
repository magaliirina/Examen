/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.  */

function mostrar()
{
	let nombre;
	let estadoCivil;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let precio=600;
	let mayores=0;
	let soltera_nombre;
	let soltera_edad;
	let soltera_edadMin;
	let flagSoltera=0;

	nombre=prompt("Ingrese el nombre");
	edad=parseInt(prompt("Ingrese la edad"));
	while(edad>17){
		edad=parseInt(prompt("Invalida. Ingrese la edad"));
	}
	temperaturaCorporal=parseInt(prompt("Ingrese la temperatura"));
	while(isNaN(temperaturaCorporal)==false){
		temperaturaCorporal=parseInt(prompt("Invalido. Ingrese la temperatura"));
	}
	sexo=prompt("Ingrese el sexo");
	while(!(sexo=="femenino"||sexo=="masculino")){
		sexo=prompt("Ingrese el sexo");
	}
	estadoCivil=prompt("Ingrese el estado civil");
	while(estadoCivil!="casado"||estadoCivil!="soltero"||estadoCivil!="viudo"){

	}

	if(estadoCivil=="viudo"||edad>=60){
		mayores++;
	}

	switch(sexo){
		case "femenino":
		if(flagSoltera==0||soltera_edad<edad){
			soltera_edad=edad;
			soltera_nombre=nombre;
		}
		break;
	}

	
	
}
