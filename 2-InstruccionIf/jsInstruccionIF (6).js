function Mostrar()
{
//tomo la edad  

 var edad;
 edad = parseInt(document.getElementById('edad').value);  //Sale cartel sin valor
 
 if (edad>18) 
	 {
	 	alert("Es mayor de edad");
	 }
 else if (edad<13)
	 {
		 alert("Es un niño");
	 }
 else 
 	{
	 	alert("Es un adolescente");
	}
 
}//FIN DE LA FUNCIÓN