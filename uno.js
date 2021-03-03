/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */
function mostrar()
{
	let tipoProducto;
	let precio;
	let unidades;
	let tipoInflamable;
	let marca;
	//puntos
	let contadorTipoIgnifugo=0;
	let contadorTipoCombustible=0;
	let contadorTipoExplosivo=0;
	let contadorUnidades=0;
	//b
	let ignifugoCompra=0;
	let combustibleCompra=0;
	let explosivoCompra=0;
	let masComprado;
	//c
	let unidadesIac=0;
	//d
	let precioMax;
	let tipo_precioMax;
	let marca_precioMax;
	//datos
	let promedioIgnifugo;
	let promedioCombustible;
	let promedioExplosivo;
	





	for(let i=1;i<=3;i++){
		tipoProducto=prompt("Ingrese el tipo de producto");
		while(!(tipoProducto=="alcohol"||tipoProducto=="IAC"||tipoProducto=="QUAT")){
			tipoProducto=prompt("Invalido. Ingrese el tipo de producto");
		}
		precio=parseInt(prompt("Ingrese el precio"));
		while(!(precio<=300&&precio>=100)){
			precio=parseInt(prompt("Invalido. Ingrese el precio"));
		}
		unidades=parseInt(prompt("Ingrese la cantidad de unidades"));
		while(!(unidades>=0&&unidades<=1000)){
			unidades=parseInt(prompt("Invalido. Ingrese la cantidad de unidades"));
		}

		tipoInflamable=prompt("Ingrese el tipo inflamable");
		while(!(tipoInflamable=="ignifugo"||tipoInflamable=="combustible"||tipoInflamable=="explosivo")){
			tipoInflamable=prompt("Invalido. Ingrese el tipo Inflamable");
		}
		marca=prompt("Ingrese la marca");
		while(isNaN(marca)==false){
			marca=prompt("Invalido. Ingrese la marca");
		}

		contadorUnidades=contadorUnidades+unidades;

		switch(tipoProducto){
			case "ignifugo":
				contadorTipoIgnifugo++;
				ignifugoCompra=ignifugoCompra+unidades;
				break;
			case "combustible":
				contadorTipoCombustible++;
				combustibleCompra=combustibleCompra+unidades;
				break;
			case "explosivo":
				contadorTipoExplosivo++;
				explosivoCompra=explosivoCompra+unidades;
				break;
		}

		if(tipoProducto=="IAC"&&precio<=200){
			unidadesIac=unidadesIac+unidades;
		}

		if(i==1||precioMax<precio){
			precioMax=precio;
			tipo_precioMax=tipoProducto;
			marca_precioMax=marca;
		}

	}

	if(contadorTipoCombustible!=0){
		promedioCombustible=contadorTipoCombustible/contadorUnidades;
		console.log("El promedio de combustibles es "+ promedioCombustible);
	}
	if(contadorTipoIgnifugo!=0){
		promedioIgnifugo=contadorTipoIgnifugo/contadorUnidades;
		console.log("El promedio de ignifugos es "+ promedioIgnifugo);
	}
	if(contadorTipoExplosivo!=0){
		promedioExplosivo=contadorTipoExplosivo/contadorUnidades;
		console.log("El promedio de explosivo es "+ promedioExplosivo);
	}

	if(ignifugoCompra>explosivoCompra&&ignifugoCompra>combustibleCompra){
		masComprado="Ignifugo";
	}
	else if(explosivoCompra>combustibleCompra){
		masComprado="Explosivo";
	}
	else{
		masComprado="Combustible";
	}
	console.log("El tipo mas comprado fue "+ masComprado);

	console.log("Se compraron de IAC "+ unidadesIac);

	console.log("La marca "+marca_precioMax+ " y tipo "+tipo_precioMax+ " fueron lo más caro de los productos");



}
