import {CHAVE, getValue} from './storage.js';
import { getWord, getWordLetter, getNumberWords } from './string.js';
window.addEventListener("DOMContentLoaded", function() {

    let infoUser = getValue(CHAVE);

   document.getElementById("infoUsuario").innerHTML = (infoUser) ? infoUser:this.window.open('index.html', '_self');

   document.getElementById("btnAbrirHoho").addEventListener("click", function() {
    window.open('hoho.html', '_self');
   });

   document.getElementById("btnEnviar").addEventListener("click", function() {
    let texto;
    // 2
    texto = (document.getElementById("tipoInfo").selectedIndex == 0) ?
    getValue(CHAVE) : document.getElementById("txtInfo").value;

    // 3
    document.getElementById("txtTotalP").innerHTML = getNumberWords(texto);

    // 4
    document.getElementById("txtPalavraM").value = getWordLetter(texto, 'M');

    // 5
    document.getElementById("txtPrimeiraPalavra").value = getWord(texto, 0);

    // 6
    document.getElementById("txtSegundaPalavra").value = getWord(texto, 1);

    // 7
    document.getElementById("txtUltimaPalavra").value = getWord(texto, -1);
   });
});