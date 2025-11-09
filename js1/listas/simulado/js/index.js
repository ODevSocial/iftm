import {CHAVE, setValue} from './storage.js';

window.addEventListener("DOMContentLoaded", function() {

    const txtInfo = document.getElementById("txtInfo");
    const botaoEnviar = documement.getElementById("btnEnviar");

    botaoEnviar.addEventListener("click", function() {
        let nome = txtInfo.value;
        setValue(CHAVE, nome);
    window.open('apuracao.html', '_self');
    });
});