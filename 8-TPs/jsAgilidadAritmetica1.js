	var respuesta;
	var numero1;
	var numero2;
	var operaciones;
	var resultado;

function comenzar()

{
	var numero1=Math.floor(Math.random()*(11-1)+1);
	var numero2=Math.floor(Math.random()*(11-1)+1);
	var operaciones=Math.floor(Math.random()*(5-1)+1);

	switch(operaciones)
	{
		case 1: operaciones="+";
				resultado=(numero1 + numero2);
				break;
		case 2: operaciones="-";
				resultado=(numero1 - numero2);
			break;
		case 3: operaciones="*";
				resultado=(numero1 * numero2);
			break;
		case 4: operaciones="/";
				resultado=(numero1 / numero2);
			break;
		default:
	}

	document.getElementById("PrimerNumero").value=numero1;
	document.getElementById("SegundoNumero").value=numero2;
	document.getElementById("Operador").value=operaciones;
}

function Responder()
{
	var respuesta=document.getElementById('Respuesta').value;
	
	if (resultado==respuesta)	
		{
			alert("El resultado es correcto");
			comenzar()
		}
		else
			{
				alert("El resultado NO es correcto");	
			}
}