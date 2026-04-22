var vetorCartas = [];
for (var i = 1; i <= 27; i++) {
    vetorCartas.push(i);
}

var cartasSelecionadas = [];
while (cartasSelecionadas.length < 4) {
    var randomIndex = Math.floor(Math.random() * vetorCartas.length);
    var carta = vetorCartas[randomIndex];
    if (!cartasSelecionadas.includes(carta)) {
        cartasSelecionadas.push(carta);
    }
}

var vetorPares = [];
cartasSelecionadas.forEach(function(carta) {
    vetorPares.push(carta, carta);
});

var vetorParesEmbaralhados = [];
for (var i = 0; i < vetorPares.length; i++) {
    vetorParesEmbaralhados.push(vetorPares[i]);
}

for (var i = vetorParesEmbaralhados.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = vetorParesEmbaralhados[i];
    vetorParesEmbaralhados[i] = vetorParesEmbaralhados[j];
    vetorParesEmbaralhados[j] = temp;
}

console.log('Cartas selecionadas:', cartasSelecionadas);
console.log('Vetor pares embaralhados:', vetorParesEmbaralhados);

var areaCartas = document.createElement('div');
document.body.insertBefore(areaCartas, document.body.firstChild);

vetorParesEmbaralhados.forEach(function(cartaNumero) {
    var imagemCarta = document.createElement('img');
    imagemCarta.src = 'img/carta' + cartaNumero + '.png';
    imagemCarta.alt = 'Carta ' + cartaNumero;
    areaCartas.appendChild(imagemCarta);
});