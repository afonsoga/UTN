/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numero;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random()*(101-1))+1);
	alert(numeroSecreto );
}

function verificar()
{
	numero=document.getElementById('numero').value;

	if (isNaN(numero))
		{
			alert("Debes ingresar un numero");
		}
		else if (numeroSecreto<numero)
				{
					contadorIntentos++;
					alert("Se paso...");
				} 
				else if (numeroSecreto>numero)
					{	
						contadorIntentos++;
						alert("Falta...");
					}
					else
						{
							contadorIntentos++;
							alert("Usted es un ganador!!! Y en solo "+contadorIntentos+" intentos");
						}

	document.getElementById("intentos").value=contadorIntentos;
}