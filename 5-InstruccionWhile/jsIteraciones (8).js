function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta="si";

	while (respuesta=="si")
	{
		numero=parseInt(prompt("Ingrese un numero"));
		if (!isNaN(numero))
			{
				if (numero>=0)
					{
						positivo=positivo+numero;
					}
					else
						{
							negativo=negativo*numero;
						}
				respuesta=prompt("¿Desea continuar?");
					if (respuesta!="si")
						{
							break;
						}
			}
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN