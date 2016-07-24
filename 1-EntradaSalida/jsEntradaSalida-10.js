/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	importe = parseInt(document.getElementById('importe').value);
	document.getElementById('resultado').value = (importe*0.75);
}
