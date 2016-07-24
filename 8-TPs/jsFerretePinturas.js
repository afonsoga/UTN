/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit=parseInt(document.getElementById('Temperatura').value);
	var centigrados=((5*(Fahrenheit-32))/9);
		alert(Fahrenheit+" Fahrenheit son "+centigrados+" centígrados");
}

function CentigradosFahrenheit () 
{
	var centigrados=parseInt(document.getElementById('Temperatura').value);
	var Fahrenheit=(((9*centigrados)/5)+32);
		alert(centigrados+" centígrados son "+Fahrenheit+" Fahrenheit");
}
