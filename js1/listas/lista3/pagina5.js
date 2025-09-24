btn = document.getElementById("btnResultado");
valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");

btn.addEventListener("click", exibirNota);

function exibirNota() {
    nota1 = parseFloat(valor1.value); 
    nota2 = parseFloat(valor2.value);
    notaTotal = nota1 + nota2;

    if (notaTotal >= 60)

        alert(`Você foi aprovado! Passou com ${notaTotal}`);
    else 
        alert(`Você foi reprovado! Tirou ${notaTotal}`);
}