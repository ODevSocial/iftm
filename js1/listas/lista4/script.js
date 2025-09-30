btnGerarResultado = document.getElementById("btnGerarResultado");
btnGerarResultado.addEventListener("click", gerarSorteio);

function gerarSorteio() {

    candidatos = [
        { nome: "Jair Messias Bolsonaro", partido: "PL", img: "candidato1.png" }, { nome: "Luiz Inacio Lula da Silva", partido: "PT", img: "candidato2.png" }, { nome: "JCiro Gomes", partido: "PDT", img: "candidato3.png" }, { nome: "Simone Tebet", partido: "MDB", img: "candidato4.png" },
    ]
    indices = [0, 1, 2, 3];
    nroVotos = Math.round(Math.random() * 100);
    vetVotos = [nroVotos, 100 - nroVotos];
    indicesSorteados = [];

    for (i = 1; i <= 2; i++) {
        indCand = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
        indicesSorteados[i - 1] = indCand;
        document.getElementById(`candSorteado${i}`).innerHTML = candidatos[indCand].nome;
        document.getElementById(`partCandidato${i}`).innerHTML = candidatos[indCand].partido;
        document.getElementById(`candFoto${i}`).src = `img/${candidatos[indCand].img}`;
        document.getElementById(`votosCand${i}`).innerHTML = vetVotos[i-1].toFixed(1);
    }

    if (vetVotos[0] == vetVotos[1]) {
        document.getElementById("candVencedor").innerHTML = "Empate";
        document.getElementById("percVencedor").innerHTML = "-";

    }
    else if (vetVotos[0] > vetVotos[1]) {
        document.getElementById("candVencedor").innerHTML = candidatos[indicesSorteados[0]].nome;
        document.getElementById("percVencedor").innerHTML = vetVotos[0].toFixed(1);
    }

    else {
        document.getElementById("candVencedor").innerHTML = candidatos[indicesSorteados[1]].nome;
        document.getElementById("percVencedor").innerHTML = vetVotos[1].toFixed(1);
    }
}

gerarSorteio();