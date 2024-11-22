
function cargarPlatillosEliminar() {
    const interval = setInterval(() => {
        const container = document.getElementById("platillosListDelete");
        if (container) {
            clearInterval(interval); 
            
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

//modal de confirmación de eliminación
function mostrarModalEliminarPlatillo(index) {
   
    document.getElementById("eliminarModal").setAttribute("data-index", index);

    const eliminarModal = new bootstrap.Modal(document.getElementById("eliminarModal"));
    eliminarModal.show();
}


function confirmarEliminarPlatillo() {
    const index = document.getElementById("eliminarModal").getAttribute("data-index");


    platillos.splice(index, 1);


    const eliminarModal = bootstrap.Modal.getInstance(document.getElementById("eliminarModal"));
    eliminarModal.hide();


    const eliminacionExitosa = new bootstrap.Modal(document.getElementById("eliminacionExitosa"));
    eliminacionExitosa.show();

    cargarPlatillosEliminar();
}

// cancelar la eliminación
function cancelarEliminarPlatillo() {

    const eliminarModal = bootstrap.Modal.getInstance(document.getElementById("eliminarModal"));
    eliminarModal.hide();


    const eliminacionCancelada = new bootstrap.Modal(document.getElementById("eliminacionCancelada"));
    eliminacionCancelada.show();
}


document.addEventListener("DOMContentLoaded", cargarPlatillosEliminar);
