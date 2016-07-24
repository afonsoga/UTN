function Mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById('edad').value);  //Sale cartel sin valor

if (edad>17)
{
	alert("Es mayor");
}
else
{
	alert("Es menor");
}

}//FIN DE LA FUNCIÓN