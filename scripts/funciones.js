import { series } from './main.js';

//FILTRADO
export function filtrarSeries(platform) {
    return series.filter(serie => serie.platform === platform && serie.isStreaming);
}

//PINTAR 
export function pintarSeries(series) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    if (series.length === 0) {
        container.innerHTML = '<p>No hay series disponibles en el momento.</p>';
        return;
    }

    series.forEach(serie => {
        const div = document.createElement('div');
        div.classList.add('serie');
        div.innerHTML = `<h2 class="d-flex justify-content-center">${serie.title}</h2><p class="d-flex justify-content-center">Plataforma: ${serie.platform}</p>`;
        container.appendChild(div);
    });
}

//INICIALIZAR 
export function inicializarPagina() {
    const platform = document.title;
    const seriesFiltradas = filtrarSeries(platform);
    pintarSeries(seriesFiltradas);
}