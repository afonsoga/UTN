/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo=parseInt(document.getElementById("Largo").value);
	var ancho=parseInt(document.getElementById("Ancho").value);
		alert((2*(largo+ancho))*3);
}
function Circulo () 
{
	var radio=parseInt(document.getElementById("Radio").value);
		alert(((Math.PI)*2*radio)*3);
}
function Materiales () 
{
	var largo=parseInt(document.getElementById("Largo").value);
	var ancho=parseInt(document.getElementById("Ancho").value);
	var cemento=2*(largo*ancho);
	var cal=3*(largo*ancho);
		alert(cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}