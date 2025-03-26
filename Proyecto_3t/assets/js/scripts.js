document.getElementById('load-more').addEventListener('click', function() {
    const eventosList = document.getElementById('eventos-list');
    const newEvent = document.createElement('li');
    newEvent.textContent = 'Nuevo evento agregado - 25 de septiembre';
    eventosList.appendChild(newEvent);
});