const series = [
    { title: "Stranger Things", platform: "Netflix", isStreaming: true },
    { title: "The Mandalorian", platform: "Disney+", isStreaming: true },
    { title: "The Crown", platform: "Netflix", isStreaming: false },
    { title: "The Witcher", platform: "Netflix", isStreaming: true },
    { title: "The Office", platform: "Netflix", isStreaming: false },
    { title: "Breaking Bad", platform: "Netflix", isStreaming: true },
    { title: "Loki", platform: "Disney+", isStreaming: true },
    { title: "Black Mirror", platform: "Netflix", isStreaming: true },
    { title: "Westworld", platform: "HBO", isStreaming: false },
    { title: "Succession", platform: "HBO", isStreaming: true },
    { title: "Ozark", platform: "Netflix", isStreaming: false },
    { title: "Mindhunter", platform: "Netflix", isStreaming: true },
    { title: "Narcos", platform: "Netflix", isStreaming: true },
    { title: "House of the Dragon", platform: "HBO", isStreaming: true },
    { title: "The Last of Us", platform: "HBO", isStreaming: true },
    { title: "The Falcon and the Winter Soldier", platform: "Disney+", isStreaming: false},
    { title: "Daredevil", platform: "Disney+", isStreaming: true },
    { title: "The Umbrella Academy", platform: "Netflix", isStreaming: true },
    { title: "Peaky Blinders", platform: "Netflix", isStreaming: false },
    { title: "Chernobyl", platform: "HBO", isStreaming: true },
    { title: "Euphoria", platform: "HBO", isStreaming: true },
    { title: "WandaVision", platform: "Disney+", isStreaming: true },
    { title: "The Sopranos", platform: "HBO", isStreaming: false },
    { title: "Dark", platform: "Netflix", isStreaming: true },
    { title: "True Detective", platform: "HBO", isStreaming: true },
    { title: "The Punisher", platform: "Netflix", isStreaming: false },
    { title: "Big Little Lies", platform: "HBO", isStreaming: true },
    { title: "Daredevil", platform: "Netflix", isStreaming: false },
    { title: "The Queen's Gambit", platform: "Netflix", isStreaming: true },
    { title: "The West Wing", platform: "HBO", isStreaming: false },
    { title: "Lost", platform: "Disney+", isStreaming: true }
];


//FILTRADO
function filtrarSeries(platform) {
    return series.filter(serie => serie.platform === platform && serie.isStreaming);
}

//PINTAR 
function pintarSeries(series) {
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
function inicializarPagina() {
    const platform = document.title;
    const seriesFiltradas = filtrarSeries(platform);
    pintarSeries(seriesFiltradas);
}

//CARGAR PAGINA
document.addEventListener('DOMContentLoaded', inicializarPagina);