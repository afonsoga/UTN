function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var examen;
	examen = Math.floor((Math.random()*(11-1))+1);

	if (examen>=9)
		{
			alert("Nota:"+examen+" Excelente");
		}
	else if (examen>=4 && examen<9)
		{
			alert("Nota:"+examen+" Aprobo");
		}
	else
		{
			alert("Nota:"+examen+" Vamos");
		}
}//FIN DE LA FUNCIÓN