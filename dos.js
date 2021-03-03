/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota  */

function mostrar()
{
  let nombre;
  let cursada;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad=0;
  let respuesta;
  //puntos
  let promedioMax;
  let flagPromediomax=0;
  let nombre_promedioMax;
  //b
  let edad_masJoven;
  let nombre_masJoven;
  let flagMasjoven=0;
  //c
  let promedioFemenino=0;
  let promedioMasculino=0;
  let promedioNobinario=0;
  let promedioTotal_femenino;
  let promedioTotal_masculino;
  let promedioTotal_nobinario;
  //f
  let flagMaterias=0;
  let materiasMax;
  let edad_masMaterias;
  let nombre_masMaterias;
  //
  let contadorAlumnos=0;
  

  do{
    nombre=prompt("Ingrese el nombre");
    while(!(isNaN(nombre)==true)){
      nombre=prompt("Invalido. Ingrese el nombre");
    }
    cursada=prompt("Ingrese el tipo de cursada");
    while(!(cursada=="libre"||cursada=="remota"||cursada=="presencial")){
      cursada=prompt("Invalido. Ingrese el tipo de cursada");
    }
    cantidadMaterias=parseInt(prompt("Ingrese la cantidad de materias"));
    while(!(cantidadMaterias>0&&cantidadMaterias<=8)){
      cantidadMaterias=parseInt(prompt("Invalido. Ingrese la cantidad de materias"));
    }
    sexo=prompt("Ingrese el sexo");
    while(!(sexo=="femenino"||sexo=="masculino"||sexo=="no binario")){
      sexo=prompt("Invalido. Ingrese el sexo");
    }
    notaPromedio=parseInt(prompt("Ingrese la nota promedio"));
    while(!(notaPromedio>=0&&notaPromedio<=10)){
      notaPromedio=parseInt(prompt("Invalido. Ingrese la nota promedio"));
    }
    edad=parseInt(prompt("Ingrese la edad"));
    while(!(isNaN(edad)==false)){
      edad=parseInt(prompt("Invalido. Ingrese la edad"));
    }

    contadorAlumnos++;

    switch(sexo){
      case "masculino":
        promedioMasculino=notaPromedio+promedioMasculino;
        break;
      case "femenino":
      case "no binario":
        if(flagPromediomax==0||promedioMax<notaPromedio){
          promedioMax=notaPromedio;
          nombre_promedioMax=nombre;
          flagPromediomax=1;
         }  
         if(sexo=="femenino"){
          promedioFemenino=notaPromedio+promedioFemenino;  
         }
         else{
           promedioNobinario=notaPromedio+promedioNobinario;
         } 
        break;
    }

    switch(cursada){
      case "libre":
        if(flagPromediomax=0||edad_masJoven>edad){
          edad_masJoven=edad;
          nombre_masJoven=nombre;
          flagPromediomax=1;
        }
    }

    if (cursada!="remota"){
      if(flagMaterias==0||materiasMax<cantidadMaterias){
        materiasMax=cantidadMaterias;
        nombre_masMaterias=nombre;
        edad_masMaterias=edad;
        flagMaterias=1;
      }
    }

    console.log(edad++);
    respuesta=confirm("¿Quiere ingresar otro alumno?");
  }while(respuesta==true);

  if(promedioFemenino!=0){
  promedioTotal_femenino=promedioFemenino/contadorAlumnos;
  console.log("El promedio femeninos es "+ promedioTotal_femenino);
  }
  if(promedioMasculino!=0){
  promedioTotal_masculino=promedioMasculino/contadorAlumnos;
  console.log("El promedio masculino es "+ promedioTotal_masculino);
  }
  if(promedioNobinario!=0){
  promedioTotal_nobinario=promedioNobinario/contadorAlumnos;
  console.log("El promedio femeninos es "+ promedioTotal_nobinario);
  }


  console.log("El nombre del mejor promedio que no es masculino es "+ nombre_promedioMax);
  console.log(" El nombre del mas joven de los alumnos entre los que la dan libre es "+ nombre_masJoven)
  console.log("Estos son la edad "+edad_masJoven+" y nombre "+ nombre_masJoven+" del que cursa mas materias que no sean en forma remota ");



}
