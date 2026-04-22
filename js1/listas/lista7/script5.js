window.addEventListener("DOMContentLoaded", function () {
let nomes = [];
        let indiceAtual = 0;

        document.getElementById('botaoAdicionar').addEventListener('click', function() {
            const nomeInput = document.getElementById('nome');
            const nome = nomeInput.value.trim();
            
            if (nome === '') {
                alert('Por favor, digite um nome!');
                return;
            }
            
            nomes.push(nome);
            atualizarListaNomes();
            nomeInput.value = '';
            nomeInput.focus();
        });

        document.getElementById('botaoExibir').addEventListener('click', function() {
            if (nomes.length === 0) {
                alert('Por favor, adicione pelo menos um nome!');
                return;
            }
            
            document.getElementById('botaoExibir').disabled = true;
            document.getElementById('botaoAdicionar').disabled = true;
            
            const areaExibicao = document.getElementById('areaExibicao');
            areaExibicao.innerHTML = '<h3>Exibindo nomes:</h3>';
            indiceAtual = 0;
            
            function exibirProximoNome() {
                if (indiceAtual < nomes.length) {
                    const nomeElemento = document.createElement('div');
                    nomeElemento.textContent = nomes[indiceAtual];
                    nomeElemento.style.padding = '5px';
                    nomeElemento.style.borderBottom = '1px solid #ccc';
                    areaExibicao.appendChild(nomeElemento);
                    
                    indiceAtual++;
                    
                    setTimeout(exibirProximoNome, 1000);
                } else {
                    document.getElementById('botaoExibir').disabled = false;
                    document.getElementById('botaoAdicionar').disabled = false;
                }
            }
            
            exibirProximoNome();
        });

        document.getElementById('botaoLimpar').addEventListener('click', function() {
            nomes = [];
            atualizarListaNomes();
            document.getElementById('areaExibicao').innerHTML = '';
            document.getElementById('botaoExibir').disabled = false;
            document.getElementById('botaoAdicionar').disabled = false;
        });

        // Função para atualizar a lista visual de nomes armazenados
        function atualizarListaNomes() {
            const listaNomes = document.getElementById('listaNomes');
            listaNomes.innerHTML = '';
            
            nomes.forEach((nome, index) => {
                const item = document.createElement('li');
                item.textContent = `${index + 1}. ${nome}`;
                listaNomes.appendChild(item);
            });
        }
});