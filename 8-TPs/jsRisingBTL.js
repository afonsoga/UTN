/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estadoCivil;
 var sueldoBruto;
 var legajo;
 var nacionalidad;

 	edad=parseInt(prompt("Ingrese su edad"));
 	while(edad<18 || edad>90)
 	{
 		edad=parseInt(prompt("Ingrese su edad"));
 	}
	document.getElementById("Edad").value=edad;

	sexo=prompt("Ingrese su sexo");
	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("Ingrese su sexo");
	}
	document.getElementById("Sexo").value=sexo;

	estadoCivil=parseInt(prompt("Ingrese su estado civil"));
	while(estadoCivil<1 || estadoCivil>4)
	{
		estadoCivil=parseInt(prompt("Ingrese su estado civil"));
	}
	switch(estadoCivil)
	{
		case 1: estadoCivil="Soltero";
				break;
		case 2: estadoCivil="Casado";
				break;
		case 3: estadoCivil="Divorciado";
				break;
		case 4: estadoCivil="Viudo";
				break;
		default: 
	}
	document.getElementById("EstadoCivil").value=estadoCivil;

	sueldoBruto=parseInt(prompt("Ingrese su sueldo bruto"));
	while(sueldoBruto<8000)
	{
		sueldoBruto=parseInt(prompt("Ingrese su sueldo bruto"));
	}
	document.getElementById("Sueldo").value=sueldoBruto;

	legajo=parseInt(prompt("Legajo"));
	while(legajo<1000)
	{
		legajo=parseInt(prompt("Ingrese su legajo"));
	}
	document.getElementById("Legajo").value=legajo;

	nacionalidad=prompt("Ingrese su nacionalidad");
	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		nacionalidad=prompt("Ingrese su nacionalidad");
	}
	switch(nacionalidad)
	{
		case "A": nacionalidad="Argentino";
				break;
		case "E": nacionalidad="Extranjero"
				break;
		case "N": nacionalidad="Nacionalizado";
				break;
		default:		
	}
	document.getElementById("Nacionalidad").value=nacionalidad;
}
