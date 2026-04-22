window.addEventListener("DOMContentLoaded", function () {

    const idades = [15, 17, 29, 34, 55, 61, 79];

    document.getElementById('vetor').innerText = idades.join(', ');

    // a)
    const soma = idades.reduce((total, idade) => total + idade, 0);
    document.getElementById('soma').innerText = soma;

    // b)
    const media = soma / idades.length;
    document.getElementById('media').innerText = media.toFixed(2);

    // c)
    const maior = idades.reduce((total, idade) => (idade > total ? idade : total), idades[0]);
    document.getElementById('maior').innerText = maior;

    // d)
    const impares = idades.filter(idade => idade % 2 !== 0);
    document.getElementById('impares').innerText = impares.join(', ') || 'Nenhuma';

    // e)
    const todosMaiores = idades.every(idade => idade >= 18);
    document.getElementById('todosMaiores').innerText = todosMaiores;

    // f)
    const valorInformado = prompt("Informe um número para verificar se todas as idades são maiores ou iguais a ele: ");
    const todasMaioresQue = idades.every(idade => idade >= Number(valorInformado));
    document.getElementById('todasMaioresQue').innerText = `Todas são ≥ ${valorInformado}? ${todasMaioresQue}`;

    // g)
    const idadesMaioresQue =
        idades.filter(idade => idade >= Number(valorInformado));

    document.getElementById('idadesMaioresQue').innerText =
        idadesMaioresQue.length > 0
            ? idadesMaioresQue.join(', ')
            : "Nenhuma";

    // h)
    const mediaMaioresQue =
        idadesMaioresQue.length > 0
            ? (idadesMaioresQue.reduce((acc, idade) => acc + idade, 0)
                / idadesMaioresQue.length).toFixed(2)
            : 0;

    document.getElementById('mediaMaioresQue').innerText =
        mediaMaioresQue;
})