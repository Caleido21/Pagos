// var minutosPorOperacion = prompt("Cuantos minutos te da la operación");
var minutos = document.getElementById("min");
var calc = document.getElementById("Calcular")
var parrafo = document.getElementById("resultado")
calc.addEventListener("click", calcular);



function calcular()
{
    var minutosInt = parseFloat(minutos.value);
    var eficiencia = 100 * minutosInt / 561;
    var paquetes = Math.ceil(561 / minutosInt);
    var paqEficienciaTotal = (paquetes * minutosInt) * 100 / 561;
    var pagoEn$ = minutosInt * 0.25759;
    pagoEn$ = pagoEn$.toFixed(2);
    eficiencia = eficiencia.toFixed(2);
    paqEficienciaTotal =paqEficienciaTotal.toFixed(2);
    parrafo.innerHTML = "La operación paga " + pagoEn$ + "$<br>Te da un " + eficiencia + "% de eficiencia<br>Y necesitas " + paquetes + " paquetes para un " +  paqEficienciaTotal + "% de Eficiencia";

}