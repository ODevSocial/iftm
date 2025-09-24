btn = document.getElementById("btnExibir");
txtValor = document.getElementById("txtValor");

btn.addEventListener("click", txtExibir);

function txtExibir() {
    alert(txtValor.value);
}