const platillos = [
    { 
        nombre: "Tartaleta de Frutos Rojos", 
        precio: "29.00", 
        ruta: "../../../assets/img/menu/tartaletaFrutos.jpg", 
        descripcion: "Deliciosa tartaleta con una mezcla de fresas, frambuesas y arándanos."
    },
    { 
        nombre: "Crepa de Nutella y Banano", 
        precio: "35.00", 
        ruta: "../../../assets/img/menu/cNutellaBanano.jpg", 
        descripcion: "Crepa suave rellena de Nutella y trozos frescos de banano."
    },
    { 
        nombre: "Strudel", 
        precio: "40.00", 
        ruta: "../../../assets/img/menu/strudel.jpg", 
        descripcion: "Clásico strudel con relleno de manzana y un toque de canela."
    },
    { 
        nombre: "Pastel de Tres Leches", 
        precio: "45.00", 
        ruta: "../../../assets/img/menu/tresLeches.jpg", 
        descripcion: "Pastel húmedo con las tradicionales tres leches y crema batida."
    },
    { 
        nombre: "Sangría", 
        precio: "25.00", 
        ruta: "../../../assets/img/menu/sangria.jpg", 
        descripcion: "Bebida refrescante con frutas y un toque especial."
    },
    { 
        nombre: "Cappuccino", 
        precio: "20.00", 
        ruta: "../../../assets/img/menu/cappuccino.jpg", 
        descripcion: "Espuma cremosa y sabor intenso en cada sorbo."
    },
    { 
        nombre: "Chocolate Suizo", 
        precio: "22.00", 
        ruta: "../../../assets/img/menu/chocolateSuizo.jpg", 
        descripcion: "Chocolate caliente con una textura rica y cremosa."
    },
    { 
        nombre: "Matcha", 
        precio: "30.00", 
        ruta: "../../../assets/img/menu/matcha.jpg", 
        descripcion: "Bebida japonesa con el auténtico sabor del té verde matcha."
    },
    { 
        nombre: "Milk Shake", 
        precio: "35.00", 
        ruta: "../../../assets/img/menu/milkShake.jpg", 
        descripcion: "Milkshake clásico con un toque dulce y cremoso."
    },
    { 
        nombre: "Hazelnut Frappiato", 
        precio: "25.00", 
        ruta: "../../../assets/img/menu/hazelnutFr.jpg", 
        descripcion: "Café frío con un toque de avellana que encanta."
    },
    { 
        nombre: "Caramel Frappiato", 
        precio: "27.00", 
        ruta: "../../../assets/img/menu/caramelFr.jpg", 
        descripcion: "Frappé dulce con el sabor inconfundible del caramelo."
    }
];

// cargar los platillos
function cargarPlatillos() {
    const interval = setInterval(() => {
        const container = document.getElementById("platillosContainer");
        if (container) {
            clearInterval(interval); 
            
            platillos.forEach((platillo, index) => {
                const card = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${platillo.ruta}" class="card-img-top" alt="${platillo.nombre}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${platillo.nombre}</h5>
                                <button class="btn btn-primary" onclick="mostrarDetalles(${index})">Ver más detalles</button>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        }
    }, 100);
}

// mostrar modal con detalles del platillo
function mostrarDetalles(index) {
    const platillo = platillos[index];
    document.getElementById("modalImg").src = platillo.ruta;
    document.getElementById("modalNombre").textContent = platillo.nombre;
    document.getElementById("modalDescripcion").textContent = platillo.descripcion;
    document.getElementById("modalPrecio").textContent = platillo.precio;
    

    const modal = new bootstrap.Modal(document.getElementById("detalleModal"));
    modal.show();
}

document.addEventListener("DOMContentLoaded", () => {
    cargarPlatillos();
});