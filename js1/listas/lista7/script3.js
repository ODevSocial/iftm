window.addEventListener("DOMContentLoaded", function () {
    document.getElementById('botaoExibir').addEventListener('click', function () {
        const nomeCompleto = document.getElementById('nomeCompleto').value;
        const areaExibicao = document.getElementById('areaExibicao');

        if (nomeCompleto.trim() === '') {
            alert('Por favor, digite seu nome completo!');
            return;
        }
        areaExibicao.innerHTML = '';

        const elementoNome = document.createElement('div');
        elementoNome.textContent = nomeCompleto;
        elementoNome.style.fontSize = '14px';
        areaExibicao.appendChild(elementoNome);
        let tamanhoFonte = 14;
        const intervalo = setInterval(function () {
            tamanhoFonte += 2;
            elementoNome.style.fontSize = tamanhoFonte + 'px';

            if (tamanhoFonte >= 40) {
                clearInterval(intervalo);
            }
        }, 500); 
    });

});