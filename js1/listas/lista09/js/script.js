window.addEventListener("DOMContentLoaded", function () {

    // a
    let nascimento = document.getElementById("nascimento");
    document.getElementById("btnNascimento").addEventListener("click", function () {
        let padrao = /^\d{2}[/]\d{2}[/]\d{4}$/;

        if (padrao.test(nascimento.value))
            alert("valido");
        else
            alert("invalido");
    })
    // b
    let cpf = document.getElementById("cpf");
    document.getElementById("btnCpf").addEventListener("click", function () {
        let padrao = /^\d{3}[.]\d{3}[.]\d{3}[-]\d{2}$/;

        if (padrao.test(cpf.value))
            alert("valido");
        else
            alert("invalido");
    })
    // c
    let matricula = document.getElementById("matricula");
    document.getElementById("btnMatricula").addEventListener("click", function () {
        let padrao = /^(IFTM|iftm)[-]\d{3}[/]\d{3}[-]\w{2}$/;

        if (padrao.test(matricula.value))
            alert("valido");
        else
            alert("invalido");
    })
    // d
    let disciplina1 = document.getElementById("disciplina1");
    document.getElementById("btnDisciplina1").addEventListener("click", function () {
        let padrao = /^(MT|mt)[-]\d{2}[.]\d{3}[-](IFTM|iftm)$/;

        if (padrao.test(disciplina1.value))
            alert("valido");
        else
            alert("invalido");
    })
    // e
    let disciplina2 = document.getElementById("disciplina2");
    document.getElementById("btnDisciplina2").addEventListener("click", function () {
        let padrao = /^(MT)[-]\d{2}[.]\d{3}[-](I|i)(F|f)(T|t)(M|m)$/;
        // let padrao = /^(I|i)(F|f)(T|t)(M|m)[-]\d{3}[/]\d{3}[-]\w{2}$/;

        if (padrao.test(disciplina2.value))
            alert("valido");
        else
            alert("invalido");
    })
    // f
    let disciplina3 = document.getElementById("disciplina3");
    document.getElementById("btnDisciplina3").addEventListener("click", function () {
        let padrao = /^(M|m)\s?(T|t)[-]\d{2}[.]\d{3}[-](I|i)\s?(F|f)\s?(T|t)\s?(M|m)$/;

        if (padrao.test(disciplina3.value))
            alert("valido");
        else
            alert("invalido");
    })
    // g
    let disciplina4 = document.getElementById("disciplina4");
    document.getElementById("btnDisciplina4").addEventListener("click", function () {
        let padrao = /^(M|m)\s?(T|t)[-]\d{2}[.]\d{3}[-](I|i)\s?(F|f)\s?(T|t)\s?(M|m)\s?(Uberlândia Centro|Uberlândia)$/;

        if (padrao.test(disciplina4.value))
            alert("valido");
        else
            alert("invalido");
    })
    // h
    let campus = document.getElementById("campus");
    document.getElementById("btnCampus").addEventListener("click", function () {
        let padrao = /^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)$/;

        if (padrao.test(campus.value))
            alert("valido");
        else
            alert("invalido");
    })
    // i
    let telefone1 = document.getElementById("telefone1");
    document.getElementById("btnTelefone1").addEventListener("click", function () {
        let padrao = /^[+]\d{2}[(]\d{2}[)]\d{5}[-]\d{4}$/;

        if (padrao.test(telefone1.value))
            alert("valido");
        else
            alert("invalido");
    })
    // j
    let telefone2 = document.getElementById("telefone2");
    document.getElementById("btnTelefone2").addEventListener("click", function () {
        let padrao = /^[(]\d{2,3}[)]\d{5}[-]\d{4}$/;

        if (padrao.test(telefone2.value))
            alert("valido");
        else
            alert("invalido");
    })
    // k
    let altura = document.getElementById("altura");
    document.getElementById("btnAltura").addEventListener("click", function () {
        let padrao = /^(1[,|.][3-9]\d?|2[,|.][0-5]\d?)$/;

        if (padrao.test(altura.value))
            alert("valido");
        else
            alert("invalido");
    })
    // l
    let faturamento = document.getElementById("faturamento");
    document.getElementById("btnFaturamento").addEventListener("click", function () {
    
    let valor = faturamento.value.trim();
    let padrao = /^R\$\s*[1-9]\d{0,2}(?:\.\d{3}){0,3}(?:,\d{1,2})?$/;
    
    if (/^R\$\s*0(?:,\d{1,2})?$/.test(valor)) {
        alert("inválido");
        return;
    }
    
    if (padrao.test(valor)) {
        alert("válido");
    } else {
        alert("inválido");
    }
    })
    // m
    let cronometro = document.getElementById("cronometro");
    document.getElementById("btnCronometro").addEventListener("click", function () {
        let padrao = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/;

        if (padrao.test(cronometro.value))
            alert("valido");
        else
            alert("invalido");
    })
    // n
    let senha = document.getElementById("senha");
document.getElementById("btnSenha").addEventListener("click", function () {
    let padrao = /^[a-zA-Z0-9._-]{5,}&[a-pA-P]+\.([aeiou]+)(?:\.[a-zA-Z0-5]+)?-[^0-9]+[^a-zA-Z0-9]{2}[^ab01]+$/;
    
    if (padrao.test(senha.value)) {
        alert("válido");
    } else {
        alert("inválido");
    }
});
})

