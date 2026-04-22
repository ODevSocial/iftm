window.addEventListener("DOMContentLoaded", function() {

    this.document.getElementById("btnQtoFala").addEventListener("click", function() {
        let fala = parseInt(document.getElementById("txtFala").value);
        if (isNaN(fala) || fala < 0) {
            alert("Por favor, insira um número válido.");
            let paragrafo;
            for (i=0; i<fala; i++) {
                paragrafo = document.createElement("p");
                paragrafo.textContent = "Ho Ho Ho Feliz Natal!";
                document.getElementById("boxFalaHo").appendChild(paragrafo);
        }
    }
    });

});