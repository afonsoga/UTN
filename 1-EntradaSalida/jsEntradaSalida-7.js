/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	numero1 = parseInt(document.getElementById('numeroUno').value);
	numero2 = parseInt(document.getElementById('numeroDos').value);
	alert("La suma es: "+(numero1 + numero2));
}

function restar()
{
	var numero1;
	var numero2;
	numero1 = parseInt(document.getElementById('numeroUno').value);
	numero2 = parseInt(document.getElementById('numeroDos').value);
	alert("La resta es: "+(numero1 - numero2));
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	numero1 = parseInt(document.getElementById('numeroUno').value);
	numero2 = parseInt(document.getElementById('numeroDos').value);
	alert("La multiplicación es: "+(numero1 * numero2));
}

function dividir()
{
	var numero1;
	var numero2;
	numero1 = parseInt(document.getElementById('numeroUno').value);
	numero2 = parseInt(document.getElementById('numeroDos').value);
	if (numero2 == 0) {
		alert("No se divide por 0")
	}
	else{
		alert("La división es: "+(numero1 / numero2));
	};
}

