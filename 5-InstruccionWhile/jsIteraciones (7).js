function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	while (respuesta=="si")
	{
		numero=parseInt(prompt("Ingrese un numero"));
		if (!isNaN(numero))
			{
				contador++;
				acumulador=acumulador+numero;
				respuesta=prompt("¿Desea continuar?");
				if (respuesta!="si")
					{
						break;
					}
			}
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}
