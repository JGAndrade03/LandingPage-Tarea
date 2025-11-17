/* ===========================
   FUNCIÓN PARA CARGAR EL JSON
=========================== */

async function fetchProducts(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        return {
            success: true,
            body: data
        };

    } catch (error) {
        return {
            success: false,
            body: error.message
        };
    }
}

/* ===========================
   RENDERIZAR PRODUCTOS
=========================== */

function renderProducts(productos) {
    const container = document.getElementById('products-container');

    // Limpiar skeletons
    container.innerHTML = "";

    productos.forEach(prod => {
        const card = document.createElement("div");
        card.className = "bg-white dark:bg-gray-800 p-4 rounded-2xl shadow space-y-4";

        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}"
                class="w-full h-40 object-cover rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">${prod.nombre}</h3>
        `;

        container.appendChild(card);
    });
}

/* ===========================
   MAIN: CARGAR JSON Y ESCUCHAR SELECT
=========================== */

async function init() {

    // URL de tu JSON RAW
    const url = "https://raw.githubusercontent.com/JGAndrade03/LandingPage-Tarea/main/src/catalogo.json";

    const { success, body } = await fetchProducts(url);

    if (!success) {
        console.error("Error cargando JSON:", body);
        return;
    }

    const data = body.postres;

    const select = document.getElementById("categories");

    select.addEventListener("change", (event) => {
        const value = event.target.value;
        let categoria = "";

        if (value === "1") categoria = "Tartas Mojadas";
        if (value === "2") categoria = "Cheesecakes";
        if (value === "3") categoria = "Galletas";

        const seleccion = data.find(item => item.categoria === categoria);

        if (seleccion) {
            renderProducts(seleccion.productos);
        }
    });
}

// Ejecutar
init();
