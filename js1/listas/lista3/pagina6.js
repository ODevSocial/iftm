const valor1Preenhido = document.getElementById('txtValor1');
const valor2Preenchido = document.getElementById('txtValor2');
const campoResultado = document.getElementById('txtValor3');

const botaoSoma = document.getElementById('btn+');
const botaoSubtracao = document.getElementById('btn-');
const botaoMultiplicacao = document.getElementById('btn*');
const botaoDivisao = document.getElementById('btn/');

function validarNumeros() {
    const valor1 = parseFloat(valor1Preenhido.value);
    const valor2 = parseFloat(valor2Preenchido.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Preencha concomitantemente os primeiros campos para que a calculadora funcione. Caso tenha apenas o Resultado preenchido, apague-o.\nWilton, faz uma entrevista comigo?');
        return null;
    }

    return { valor1, valor2 };
}

function exibirResultado(resultado) {
    campoResultado.value = resultado;
}

botaoSoma.addEventListener('click', function () {
    const numeros = validarNumeros();
    if (numeros) {
        const resultado = numeros.valor1 + numeros.valor2;
        exibirResultado(resultado);
    }
});

botaoSubtracao.addEventListener('click', function () {
    const numeros = validarNumeros();
    if (numeros) {
        const resultado = numeros.valor1 - numeros.valor2;
        exibirResultado(resultado);
    }
});

botaoMultiplicacao.addEventListener('click', function () {
    const numeros = validarNumeros();
    if (numeros) {
        const resultado = numeros.valor1 * numeros.valor2;
        exibirResultado(resultado);
    }
});

botaoDivisao.addEventListener('click', function () {
    const numeros = validarNumeros();
    if (numeros) {
        if (numeros.valor2 === 0) {
            alert('Resultado será zero');
            return;
        }
        const resultado = numeros.valor1 / numeros.valor2;
        exibirResultado(resultado);
    }
});