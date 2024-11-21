// Función para mostrar la imagen de muestra
function mostrarImagen() {
    const inputImagen = document.getElementById("platilloImagen");
    const imagenMuestra = document.getElementById("imagenMuestra");
    const archivo = inputImagen.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = () => {
            imagenMuestra.src = lector.result;
            imagenMuestra.style.display = "block";
        };
        lector.readAsDataURL(archivo);
    }
}

// Validar el formulario y mostrar el modal adecuado
function validarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("platilloNombre").value.trim();
    const descripcion = document.getElementById("platilloDescripcion").value.trim();
    const precio = document.getElementById("platilloPrecio").value.trim();
    const imagen = document.getElementById("platilloImagen").files[0];

    if (!nombre || !descripcion || !precio || !imagen) {
        const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
        errorModal.show();
    } else {
        const confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"));
        confirmModal.show();
    }
}

// Función para agregar el platillo
function agregarPlatillo() {
    // Simulación de agregar platillo
    console.log("Platillo agregado correctamente");

    // Cerrar el modal de confirmación
    const confirmModal = bootstrap.Modal.getInstance(document.getElementById("confirmModal"));
    confirmModal.hide();

    // Mostrar modal de éxito
    const successModal = new bootstrap.Modal(document.getElementById("successModal"));
    successModal.show();

    // Limpiar los campos del formulario
    document.getElementById("platilloNombre").value = "";
    document.getElementById("platilloDescripcion").value = "";
    document.getElementById("platilloPrecio").value = "";
    document.getElementById("platilloImagen").value = "";
    document.getElementById("imagenMuestra").style.display = "none";
}
