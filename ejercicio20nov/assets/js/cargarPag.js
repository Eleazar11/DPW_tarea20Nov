function loadPage(page) {
    fetch(`subPaginasAdmin/${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la página');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;

            // Verificar la subpágina cargada y ejecutar lógica específica
            if (page === 'verPlatillos') {
                cargarPlatillos(); // Llamar a la función para cargar platillos
            }
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<h1>Página no encontrada</h1>';
            console.error(error);
        });
}

// Cargar la página de inicio por defecto
window.onload = () => loadPage('home');
