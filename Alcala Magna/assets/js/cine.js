document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('cartelera');

  fetch('assets/js/cartelera.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
      }
      return response.json();
    })
    .then(peliculas => {
      peliculas.forEach(pelicula => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'col-md-4 mb-4';

        tarjeta.innerHTML = `
          <div class="card h-100 text-center">
            <img src="${pelicula.imagen}" class="card-img-top" alt="Cartel de ${pelicula.titulo}">
            <div class="card-body d-flex flex-column style="padding-top: 1.5rem;">
              <h5 class="card-title">${pelicula.titulo}</h5>
              <p class="card-text flex-grow-1">${pelicula.descripcion}</p>
              <a href="${pelicula.enlace}" class="btn btn-primary mt-auto" target="_blank">Comprar entrada</a>
            </div>
          </div>
        `;

        contenedor.appendChild(tarjeta);
      });
    })
    .catch(error => {
      console.error('Error cargando cartelera:', error);
      contenedor.innerHTML = `<div class="alert alert-danger">No se pudo cargar la cartelera de películas.</div>`;
    });
});