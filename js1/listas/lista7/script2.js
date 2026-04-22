window.addEventListener ("DOMContentLoaded", function(){
document.getElementById('botaoTransferir').addEventListener('click', function () {
    const caixa1 = document.getElementById('caixa1');
    const caixa2 = document.getElementById('caixa2');
    const selectTempo = document.getElementById('tempoEspera');

    const segundos = parseInt(selectTempo.value);

    const milissegundos = segundos * 1000;

    setTimeout(function () {
        caixa2.value = caixa1.value;

        caixa1.value = '';
    }, milissegundos);
});
});