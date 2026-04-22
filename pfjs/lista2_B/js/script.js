import { trabalhadores } from './dados.js';

window.addEventListener("DOMContentLoaded", function () {

    // 1 maiores de idade
    const maioresDeIdade = () =>
        trabalhadores
            .filter(pessoa => pessoa.idade >= 18)
            .map(pessoa => `${pessoa.nome} - ${pessoa.idade} anos`);


    // 2 homens
    const nomesHomens = () =>
        trabalhadores
            .filter(pessoa => pessoa.sexo === "M")
            .map(pessoa => pessoa.nome);

    // 3 maior salario
    const pessoaMaiorSalario = () =>
        trabalhadores.reduce((maior, atual) =>
            atual.salario > maior.salario ? atual : maior);

    // 4 mulheres acima de 5000
    const existeMulherAcima5000 = () =>
        trabalhadores.some(pessoa => pessoa.sexo === "F" && pessoa.salario > 5000);

    // 5 media salarial por sexo
    const mediaSalarialPorSexo = sexo => {
        const salarios = trabalhadores
            .filter(pessoa => pessoa.sexo === sexo)
            .map(pessoa => pessoa.salario);
        return salarios.reduce((total, valor) => total + valor, 0) / salarios.length;
    };




    // 1
    const ulMaiores = document.getElementById("maiores");

    maioresDeIdade().forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;
        ulMaiores.appendChild(li);
    });

    // 2
    const ulHomens = document.getElementById("nomesHomens");

    nomesHomens().forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ulHomens.appendChild(li);
    });

    // 3
    const maior = pessoaMaiorSalario();

    document.getElementById("pessoaMaiorSalario").textContent =
        `${maior.nome} - R$ ${maior.salario.toFixed(2)}`;

    // 4
    document.getElementById("existeMulherAcima5000").textContent =
        existeMulherAcima5000() ? "Sim" : "Não";

    // 5
    document.getElementById("mediaSalarialPorSexo").innerHTML =
        `Homens: R$ ${mediaSalarialPorSexo("M").toFixed(2)}
    <br>
         Mulheres: R$ ${mediaSalarialPorSexo("F").toFixed(2)}`;
});