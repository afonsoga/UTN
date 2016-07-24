/*Ahora debemos informar cuantas veces se ganó,
 perdió o empató desde la última recarga de página.*/

var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	NumeroSecreto = Math.floor((Math.random()*(4-1))+1);

	switch(NumeroSecreto)
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
	alert("la maquina seleccionó: "+eleccionMaquina);
	eleccionHumano="piedra";

		if (eleccionHumano==eleccionMaquina)
			{
				alert("Empate");
				ContadorDeEmpates++;
			}
			else if (eleccionMaquina=="papel")
			{
				alert("Perdiste");
				ContadorDePerdidas++;
			}
			else
			{
				alert("Ganaste");
				ContadorDeGanadas++;

			}
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
	alert("la maquina seleccionó: "+eleccionMaquina);
	eleccionHumano="papel";

		if (eleccionMaquina=="piedra")
			{
				alert("Ganaste");
				ContadorDeGanadas++;
			}
			else if (eleccionMaquina==eleccionHumano)
			{
				alert("Empate");
				ContadorDeEmpates++;
			}
			else
			{
				alert("Perdiste");
				ContadorDePerdidas++;
			}	
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	alert("la maquina seleccionó: "+eleccionMaquina);
	eleccionHumano="tijera";

		if (eleccionMaquina=="piedra")
			{
				alert("Perdiste");
				ContadorDePerdidas++;
			}
			else if (eleccionMaquina=="papel")
			{
				alert("Ganaste");
				ContadorDeGanadas++;
			}
			else
			{
				alert("Empate");
				ContadorDeEmpates++;
			}		
	mostrarResultado();
}//FIN DE LA FUNCIÓN
function mostrarResultado()
{
	document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
	document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
	document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas.";

	comenzar();
}