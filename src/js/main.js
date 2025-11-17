import { fetchProducts } from "./fetchProducts.js";

const categoriesSelect = document.getElementById("categories");
const productsContainer = document.getElementById("products-container");

// ======================
// 1. Cargar JSON
// ======================
function loadData() {
    return fetchProducts("./src/catalogo.json")
        .then(result => {
            if (!result.success) {
                throw new Error("No se pudo cargar el JSON: " + result.body);
            }
            return result.body;
        });
}

// ======================
// 2. Renderizar productos
// ======================
function renderProducts(products) {
    productsContainer.innerHTML = ""; // limpiar skeleton

    products.forEach(postre => {

        const card = document.createElement("div");
        card.className =
            "space-y-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow";

        card.innerHTML = `
            <img src="${postre.imagen}" 
                 alt="${postre.nombre}" 
                 class="w-full h-40 object-cover rounded-lg" />

            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                ${postre.nombre}
            </h3>
        `;

        productsContainer.appendChild(card);
    });
}

// ======================
// 3. Filtrar por categoría seleccionada
// ======================
function filterByCategory(data, categoryId) {

    const index = Number(categoryId) - 1;

    // Si no seleccionó categoría válida
    if (index < 0) {
        productsContainer.innerHTML = "<p class='text-center text-gray-500'>Seleccione una categoría</p>";
        return;
    }

    const categoria = data.postres[index];

    if (!categoria) {
        productsContainer.innerHTML = "<p class='text-center text-red-500'>Categoría no encontrada</p>";
        return;
    }

    renderProducts(categoria.productos);
}

// ======================
// 4. Evento del select
// ======================
loadData().then(data => {

    // Escuchar cambio en el select
    categoriesSelect.addEventListener("change", () => {
        const selected = categoriesSelect.value;
        filterByCategory(data, selected);
    });

});
