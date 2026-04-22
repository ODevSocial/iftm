import { getFilmes, getGeneros } from "./api.js";

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const mostrarGeneros = await getGeneros();
    const data = await getFilmes();
    exibirFilmes(data.results, mostrarGeneros);
  } catch (err) {
    console.error("Falha ao carregar o conteúdo: ", err);
  }

function exibirFilmes(filmes, mostrarGeneros) {
  let container = document.getElementById("movies-container");

  container.innerHTML = filmes
    .slice(0, 10)
    .map((filme) => {
      const generos = filme.genre_ids
        .map((id) => mostrarGeneros[id])
        .join(", ");

      return `
    <div class="movie-card">
      <img class="movie-poster" src="https://image.tmdb.org/t/p/w300${filme.poster_path}" alt="${filme.title}">
      
      <div class="movie-info">
        <p class="movie-title">${filme.title}</p>
        <p class="movie-genre">Gênero: ${generos}</p>
        <p class="movie-rating">Nota: ${filme.vote_average}</p>
        <p class="movie-date">Data de Lançamento: ${filme.release_date}</p>
        <p class="movie-description">Descrição: ${filme.overview}</p>
      </div>
    </div>`;
    })
    .join("");
}
});
