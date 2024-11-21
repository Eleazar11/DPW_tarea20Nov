// Función para cargar la lista de platillos en la vista
function cargarPlatillosEliminar() {
    const interval = setInterval(() => {
        const container = document.getElementById("platillosListDelete");
        if (container) {
            clearInterval(interval); // Detener espera al encontrar contenedor
            
            platillos.forEach((platillo, index) => {
                const platilloItem = `
                    <div class="d-flex justify-content-between mb-2">
                        <span>${platillo.nombre}</span>
                        <button class="btn btn-danger" onclick="mostrarModalEliminarPlatillo(${index})">Eliminar</button>
                    </div>
                `;
                container.innerHTML += platilloItem;
            });
        }
    }, 100);
}

// Función para abrir el modal de confirmación de eliminación
function mostrarModalEliminarPlatillo(index) {
    // Guardar el índice del platillo para confirmación posterior
    document.getElementById("eliminarModal").setAttribute("data-index", index);

    // Mostrar modal de eliminación
    const eliminarModal = new bootstrap.Modal(document.getElementById("eliminarModal"));
    eliminarModal.show();
}

// Función para confirmar la eliminación
function confirmarEliminarPlatillo() {
    const index = document.getElementById("eliminarModal").getAttribute("data-index");

    // Eliminar el platillo de la lista
    platillos.splice(index, 1);

    // Cerrar el modal de eliminación
    const eliminarModal = bootstrap.Modal.getInstance(document.getElementById("eliminarModal"));
    eliminarModal.hide();

    // Mostrar modal de éxito (eliminación exitosa)
    const eliminacionExitosa = new bootstrap.Modal(document.getElementById("eliminacionExitosa"));
    eliminacionExitosa.show();

    // Recargar la lista de platillos
    cargarPlatillosEliminar();
}

// Función para cancelar la eliminación
function cancelarEliminarPlatillo() {
    // Cerrar el modal de eliminación
    const eliminarModal = bootstrap.Modal.getInstance(document.getElementById("eliminarModal"));
    eliminarModal.hide();

    // Mostrar modal de cancelación
    const eliminacionCancelada = new bootstrap.Modal(document.getElementById("eliminacionCancelada"));
    eliminacionCancelada.show();
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarPlatillosEliminar);
