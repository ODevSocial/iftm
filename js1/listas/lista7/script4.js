window.addEventListener("DOMContentLoaded", function () {
document.getElementById('botaoIniciar').addEventListener('click', function() {
            const inputSegundos = document.getElementById('segundos');
            const mensagemContagem = document.getElementById('mensagemContagem');
            let segundos = parseInt(inputSegundos.value);
            
            if (isNaN(segundos) || segundos < 1) {
                alert('Por favor, digite um número válido maior que 0!');
                return;
            }
                        document.getElementById('botaoIniciar').disabled = true;
            
            function atualizarMensagem() {
                mensagemContagem.innerHTML =  `Por favor, aguarde ${segundos} segundos para carregar a página do Google`;
                
                segundos--;
                
                if (segundos < 0) {
                    window.location.href = 'https://www.google.com';
                }
            }
            atualizarMensagem();
            const intervalo = setInterval(function() {
                atualizarMensagem();
                                if (segundos < 0) {
                    clearInterval(intervalo);
                }
            }, 1000); 
        });
});