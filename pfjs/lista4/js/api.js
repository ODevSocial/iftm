const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjFhOTdkY2U4Mjc1N2IyOTU5NTc0YmUwMTBiZTkyOCIsIm5iZiI6MTc3NDkxMTI3My4yMzYsInN1YiI6IjY5Y2FmZjI5ZTMzMTY1NjRjZGM3NmVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NRANvUG4ZDNwrZISTPSyIm_4TB0OEfQNzFO2PTPKPo'
  }
};

export async function getFilmes() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Falha ao carregar o conteúdo:", err);  
  }
}


export async function getGeneros() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=pt-BR`, options);
    const data = await response.json();
    
    const mapaGeneros = {};
    data.genres.forEach(genero => {
      mapaGeneros[genero.id] = genero.name;
    });
    return mapaGeneros;
  } catch (err) {
    console.error("Falha ao carregar o conteúdo:", err);
  }
}