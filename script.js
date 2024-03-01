let contador = 1;

setInterval(function() {

    document.getElementById('radio_' + contador).checked = true;
    contador++;

    if (contador > 8) {
        contador = 1;
    }

}, 10000)







