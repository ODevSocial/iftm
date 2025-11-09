export function getWord (txt, posicao) {
    let vetPalavras = txt.split(" ");
    return (posicao == -1) ? vetPalavras[vetPalavras.length - 1] : vetPalavras[posicao];
}

export function getWordLetter(txt, letter) {
    let palavras = [];
    let vetPalavras = txt.split(" ");
    for (let i = 0; i < vetPalavras.length; i++) {
        if (vetPalavras[i].charAt(0).toUpperCase() == letter.toUpperCase())
            palavras.push(vetPalavras[i]);
    }
    return palavras.join(' ');
}

export function getNumberWords(txt) {
    return txt.split(" ").length;
}