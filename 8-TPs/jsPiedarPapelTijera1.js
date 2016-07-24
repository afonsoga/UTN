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
		case 1: "piedra";
		break;
		case 2: "papel";
		break;
		case 3: "tijera";
		break;
	default:
	}
}

//FIN DE LA FUNCIÓN
function piedra()
{
	var eleccionHumano="piedra";

	comenzar()

		if (eleccionHumano==eleccionMaquina)
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
	var eleccionHumano="papel";

	comenzar()

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
	var eleccionHumano="tijera";

	comenzar()

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