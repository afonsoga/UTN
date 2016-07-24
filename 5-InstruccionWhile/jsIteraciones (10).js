function Mostrar()
{

	var contador=0;
	var numeros;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorCeros=0;
	var contadorNumerosPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	//declarar contadores y variables 
	var respuesta="si";

	while(respuesta!="no")
	{
		numeros=parseInt(prompt("Ingrese numero"));
		if (!isNaN(numeros))
		{
			contador++;
			if (numeros%2==0)
				{
					contadorNumerosPares++;
				}
			if (numeros<0)
				{
					contadorNegativos++;
					sumaNegativos=sumaNegativos+numeros;
				}
				else if (numeros>0)
					{
						contadorPositivos++;
						sumaPositivos=sumaPositivos+numeros;
					}
					else
						{
							contadorCeros++;
						}
			respuesta=prompt("¿Desea continuar?");
			if (respuesta!="si")
				{
					break;
				}
		}
	}
	document.write("La suma de numeros negativos es: "+sumaNegativos);
	document.write("<br>");
	document.write("La suma de numeros positivos es: "+sumaPositivos);
	document.write("<br>");
	document.write("La cantidad de numeros positivos: "+contadorPositivos);
	document.write("<br>");
	document.write("La cantidad de numeros negativos: "+contadorNegativos);
	document.write("<br>");
	document.write("La cantidad de ceros: "+contadorCeros);
	document.write("<br>");
	document.write("La cantidad de numeros pares: "+contadorNumerosPares);
	document.write("<br>");
	document.write("El promedio de numeros positivos es: "+(contadorPositivos/contador));
	document.write("<br>");
	document.write("El promedio de numeros negativos es: "+(contadorNegativos/contador));
	document.write("<br>");
	document.write("La diferencia entre positivos y negativos: "+(sumaPositivos-sumaNegativos));
}//FIN DE LA FUNCIÓN