function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=parseInt(prompt("Ingrese numero"));
		if (!isNaN(numero))
			{
				contador++;
				if (contador==1)
				{
					maximo=numero;
				    minimo=numero;
				} 
				else
					{
						if (numero>maximo)
						{
							maximo=numero;
						}
						if (numero<minimo)
						{
							minimo=numero;
						}
					}
			respuesta=prompt("¿Desea continuar?");
				if (respuesta!="si")
					{
						break;
					}
			}
	}
document.getElementById('maximo').value=maximo;
document.getElementById("minimo").value=minimo;
}//FIN DE LA FUNCIÓN