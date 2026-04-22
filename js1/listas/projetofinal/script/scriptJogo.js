window.addEventListener("DOMContentLoaded", function() { //regras do jogo
    alert("Bem-vindo ao GaMo: Seu desafio no par ou ímpar\n" +
            "O objetivo do jogo é clicar em cima do número disposto ao centro da tela .\n" +
            "Clicando no número par, você acerta, clicando no número ímpar, você erra.\n" +
            "Selecione o nível de dificuldade desejado para jogar, recebendo:\n" +
            "   - Nível FACIL: +5 pontos por acerto e -3 ponto por erro.\n" +
            "   - Nível MEDIO: +10 pontos por acerto e -5 ponto por erro.\n" +
            "   - Nível DIFICIL: +15 pontos por acerto e -9 pontos por erro.\n" +
            "Quando o tempo acabar, será o fim do jogo.\n");
    
        //declarações de variáveis
    var nivel = document.getElementById("nivel");
    var tempoJogo = document.getElementById("tempoJogo");
    var btnIniciar = document.getElementById("btnIniciar");
    var btnPausar = document.getElementById("btnPausar");
    var btnParar = document.getElementById("btnParar");
    var btnMenu = document.getElementById("btnMenu");
    var numeroSorteado = document.getElementById("numeroSorteado");
    var acertos = document.getElementById("acertos");
    var percentualAcertos = document.getElementById("percentualAcertos");
    var erros = document.getElementById("erros");
    var pares = document.getElementById("pares");
    var btnClassificacao = document.getElementById("btnClassificacao");

    var intervaloNumero;
    var intervaloTempo;
    var tempoRestante;
    var tempoInicial;
    var jogoPausado = false;
    var paresSorteados = 0;
    var contagemAcertos = 0;
    var contagemErros = 0;
    var tempoNivel = 0;
    var pontos = 0;

    //verificação de usuário logado
    var usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        window.location.href = "index.html";
    }
    
    //eventos dos botões e seletores
    btnMenu.addEventListener("click", function() {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 100);
    });

    nivel.addEventListener("change", function() {
        contagemAcertos = 0;
        contagemErros = 0;
        paresSorteados = 0;
        acertos.textContent = contagemAcertos;
        erros.textContent = contagemErros;
        pares.textContent = paresSorteados;
        percentualAcertos.textContent = '0%';

        switch (nivel.value) {
            case "FACIL":
                tempoInicial = 45;
                btnIniciar.disabled = false;
                tempoNivel = 1100;
                break;
            case "MEDIO":
                tempoInicial = 45;
                btnIniciar.disabled = false;
                tempoNivel = 950;
                break;
            case "DIFICIL":
                tempoInicial = 45;
                btnIniciar.disabled = false;
                tempoNivel = 750;
                break;
            default:
                tempoInicial = 0;
        }
        tempoJogo.textContent = formatarTempo(tempoInicial);
    });

    //inicia o jogo
    btnIniciar.addEventListener("click", function() {
        if (jogoPausado) {
            jogoPausado = false;
        } else {
            tempoRestante = tempoInicial;
            pontos = 0;
        }

        btnIniciar.disabled = true;
        btnPausar.disabled = false;
        nivel.disabled = true;
        btnParar.disabled = false;

        intervaloNumero = setInterval(() => {
            numeroSorteado.style.color = "#fff";
            var numero = gerarNumero();
            numeroSorteado.innerText = numero;

            numeroSorteado.dataset.clicado = "false";
            numeroSorteado.style.pointerEvents = "auto";

            if (numero % 2 === 0) {
                paresSorteados++;
                pares.textContent = paresSorteados;
                atualizarPercentualAcertos();
            }
        }, tempoNivel);

        intervaloTempo = setInterval(() => {
            tempoRestante--;
            tempoJogo.textContent = formatarTempo(tempoRestante);

            if (tempoRestante <= 0) {
                clearInterval(intervaloNumero);
                clearInterval(intervaloTempo);
                btnPausar.disabled = true;
                nivel.disabled = false;
                btnParar.disabled = true;
                numeroSorteado.style.color = "#fff";
                numeroSorteado.innerHTML = `<strong>Fim de Jogo!</strong><br>`;
                numeroSorteado.style.fontSize = '80px';
                
                salvarResultado();

                nivel.value = "selecione";
            }
        }, 1000);
    });

    numeroSorteado.addEventListener("click", function() {
        if (jogoPausado) {
            return;
        }

        var numero = parseInt(numeroSorteado.innerText);

        if (isNaN(numero)) {
            return;
        }

        if (numeroSorteado.dataset.clicado === "true") {
            return;
        }

        numeroSorteado.dataset.clicado = "true";
        // acertos e erros
        if (numero % 2 === 0) {
            contagemAcertos++;
            acertos.textContent = contagemAcertos;
            numeroSorteado.style.color = "green";

            switch (nivel.value) {
                case "FACIL":
                    pontos += 5;
                    break;
                case "MEDIO":
                    pontos += 10;
                    break;
                case "DIFICIL":
                    pontos += 15;
                    break;
            }
        } else {
            contagemErros++;
            erros.textContent = contagemErros;
            numeroSorteado.style.color = "red";

            switch (nivel.value) {
                case "FACIL":
                    pontos -= 3;
                    break;
                case "MEDIO":
                    pontos -= 5;
                    break;
                case "DIFICIL":
                    pontos -= 9;
                    break;
            }
        }

        atualizarPercentualAcertos();
    });

    btnPausar.addEventListener("click", function() {
        clearInterval(intervaloNumero);
        clearInterval(intervaloTempo);
        jogoPausado = true;
        btnPausar.disabled = true;
        btnIniciar.disabled = false;
        numeroSorteado.style.pointerEvents = "none";
    });

    btnParar.addEventListener("click", function() {
        btnIniciar.disabled = true;
        nivel.disabled = false;
        nivel.value = "selecione";

        clearInterval(intervaloNumero);
        clearInterval(intervaloTempo);
        numeroSorteado.innerText = "-";
        numeroSorteado.style.pointerEvents = "auto";

        tempoJogo.textContent = formatarTempo(0);
        tempoRestante = 0;
        tempoInicial = 0;
        jogoPausado = false;
        btnPausar.disabled = true;
        paresSorteados = 0;
        contagemAcertos = 0;
        contagemErros = 0;
        pontos = 0;
        pares.textContent = 0;
        erros.textContent = 0;
        acertos.textContent = 0;
        percentualAcertos.textContent = '0.0%';
    });
    // classificacao e ranqueamento
    btnClassificacao.addEventListener("click", function(){
        exibirClassificacao();
    });

    function formatarTempo(segundos) {
        var minutos = Math.floor(segundos / 60);
        var segundosRestantes = segundos % 60;
        return `${String(minutos).padStart(2, "0")}:${String(segundosRestantes).padStart(2, "0")}`;
    }

    function gerarNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function atualizarPercentualAcertos() {
        if (paresSorteados > 0) {
            percentualAcertos.textContent = ((contagemAcertos / paresSorteados) * 100).toFixed(1) + '%';
        } else {
            percentualAcertos.textContent = '0.0%';
        }
    }


    function salvarResultado() {
        if (usuarioLogado) {
            var dificuldade = nivel.value;
    
            var resultado = {
                nome: usuarioLogado,
                pontos: pontos,
                acertos: contagemAcertos,
                erros: contagemErros,
                dificuldade: dificuldade
            };
    
            var resultados = JSON.parse(localStorage.getItem("resultados")) || [];
    
            resultados.push(resultado);
    
            resultados.sort((a, b) => b.pontos - a.pontos);
    
            localStorage.setItem("resultados", JSON.stringify(resultados));
        }
    }
    
    function exibirClassificacao() {
        var resultados = JSON.parse(localStorage.getItem("resultados")) || [];
    
        if (resultados.length === 0) {
            alert("Ainda não há resultados registrados.");
        } else {
            var classificacao = resultados.map((r, index) => 
                `${r.nome} - ${r.dificuldade} - PONTOS: ${r.pontos} - ACERTOS: ${r.acertos} - ERROS: ${r.erros}`
            ).join("\n");
    
            alert(`CLASSIFICAÇÃO:\n${classificacao}`);
        }
    }    
});