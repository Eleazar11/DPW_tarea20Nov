// Función para cargar la lista de platillos en la vista
function cargarPlatillos() {
    const interval = setInterval(() => {
        const container = document.getElementById("platillosList");
        if (container) {
            clearInterval(interval); // Detener espera al encontrar contenedor
            
            platillos.forEach((platillo, index) => {
                const platilloItem = `
                    <div class="d-flex justify-content-between mb-2">
                        <span>${platillo.nombre}</span>
                        <button class="btn btn-warning" onclick="editarPlatillo(${index})">Editar</button>
                    </div>
                `;
                container.innerHTML += platilloItem;
            });
        }
    }, 100);
}

// Función para abrir el modal de edición y cargar los datos del platillo
function editarPlatillo(index) {
    const platillo = platillos[index];
    document.getElementById("editNombre").value = platillo.nombre;
    document.getElementById("editDescripcion").value = platillo.descripcion;
    document.getElementById("editPrecio").value = platillo.precio;

    // Guardar el índice del platillo para confirmación posterior
    document.getElementById("editarModal").setAttribute("data-index", index);

    // Mostrar modal de edición
    const editarModal = new bootstrap.Modal(document.getElementById("editarModal"));
    editarModal.show();
}

// Función para confirmar la edición
function confirmarEdicion() {
    const index = document.getElementById("editarModal").getAttribute("data-index");
    const nombre = document.getElementById("editNombre").value.trim();
    const descripcion = document.getElementById("editDescripcion").value.trim();
    const precio = document.getElementById("editPrecio").value.trim();

    if (!nombre || !descripcion || !precio) {
        alert("Todos los campos deben estar completos.");
        return;
    }

    // Actualizar el platillo en la lista
    platillos[index] = { nombre, descripcion, precio, ruta: platillos[index].ruta };

    // Cerrar el modal de edición
    const editarModal = bootstrap.Modal.getInstance(document.getElementById("editarModal"));
    editarModal.hide();

    // Mostrar modal de éxito
    const modificacionExitosa = new bootstrap.Modal(document.getElementById("modificacionExitosa"));
    modificacionExitosa.show();

    // Recargar la lista de platillos
    cargarPlatillos();
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarPlatillos);
