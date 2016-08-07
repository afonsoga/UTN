/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.floor((Math.random()*(4-1))+1);

	switch(eleccionMaquina)
	{
		case 1: eleccionMaquina="piedra";
		break;
		case 2: eleccionMaquina="papel";
		break;
		case 3: eleccionMaquina="tijera";
		break;
	default:
	}
}

//FIN DE LA FUNCIÓN
function piedra()
{
	comenzar()
	alert("La máquina seleccionó "+eleccionMaquina);
	var eleccionHumano="piedra";
	

		if (eleccionMaquina==eleccionHumano)
			{
				alert("Empate");
			}
			else if (eleccionMaquina=="papel")
			{
				alert("Perdiste");
			}
			else
				alert("Ganaste");	
}//FIN DE LA FUNCIÓN
function papel()
{
	comenzar()
	alert("La máquina seleccionó "+eleccionMaquina);
	var eleccionHumano="papel";
	

		if (eleccionMaquina=="piedra")
			{
				alert("Ganaste");
			}
			else if (eleccionMaquina==eleccionHumano)
			{
				alert("Empate");
			}
			else
				alert("Perdiste");	
}//FIN DE LA FUNCIÓN
function tijera()
{
	comenzar()
	alert("La máquina seleccionó "+eleccionMaquina);
	var eleccionHumano="tijera";
	

		if (eleccionMaquina=="piedra")
			{
				alert("Perdiste");
			}
			else if (eleccionMaquina=="papel")
			{
				alert("Ganaste");
			}
			else
				alert("Empate");	
}//FIN DE LA FUNCIÓN