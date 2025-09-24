btn = document.getElementById("btnResultado");
valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");

btn.addEventListener("click", exibirNota);

function exibirNota() {
    valor1 = parseFloat(valor1.value);
    valor2 = parseFloat(valor2.value);
    if (valor1+valor2 >= 60)
        alert("Você foi aprovado!");
    else { 
    alert("Você foi reprovado!")}

}

// function dobrarValor() {
//     if (valor1.value.trim() == 0)
//         alert("Não foi informado nenhum número. Tente novamente!;");
//     else if (isNaN(valor1.value))
//         alert("O valor informado não é um número. Tente novamente!")
//     else 
//     valor2.value = valor1.value*2;
// }
