function Mostrar()
{

	var numero=parseInt(prompt("Ingrese 5 números"));
	var contador=0;
	var acumulador=0;
	
	while(contador<5)
	{
		if (!((isNaN(numero)) || (numero==" ")))
			{
				contador++;
				acumulador=acumulador+numero;
				if (contador==5) 
					break;		
			}		
			numero=parseInt(prompt("Ingrese 5 números"));
	} 
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN