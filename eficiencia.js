function calcular()
{
    minutosPorOperacion = parseFloat(minutos.value);
    eficienciaTotal = 100 * minutosPorOperacion / 561;
    paquetesParaEl100 = Math.ceil(561 / minutosPorOperacion);
    EficienciaArribaDel100 = (paquetesParaEl100 * minutosPorOperacion) * 100 / 561;
    pagoEn$ = minutosPorOperacion * 0.25957 ;
    pagoEn$ = pagoEn$.toFixed(2);
    eficienciaTotal = eficienciaTotal.toFixed(2);
    EficienciaArribaDel100 =EficienciaArribaDel100.toFixed(2);

    if(pagoEn$ == 'NaN')
    {
        parrafo.innerHTML = "introduce un valor valido"
    }
    else
    {
        parrafo.innerHTML = "La operación paga <span><br>" + pagoEn$ + "</span>$<br><br>Te da un<br> <span>" + eficienciaTotal + "%</span><br> de eficiencia<br><br>Y necesitas <br><span>" + paquetesParaEl100 + "</span> paquetes<br>  para un <br><span>" +  EficienciaArribaDel100 + "</span>% de Eficiencia";
    }
}