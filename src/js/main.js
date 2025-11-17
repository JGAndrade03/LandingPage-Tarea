import { fetchProducts } from "./functions";



async function renderProducts() {
    try{
        const datos = await fetchProducts('https://raw.githubusercontent.com/JGAndrade03/LandingPage-Tarea/main/src/catalogo.json')
        alert("Cargados XD")
         const container = document.getElementById('products-container');

         if(datos.success){
            alert("Dentro del if XD")
              container.innerHTML = "";

    datos.body.forEach(prod => {
        let card = document.createElement("div");
        card.classList = "bg-white dark:bg-gray-800 p-4 rounded-2xl shadow space-y-4";

        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}"
                class="w-full h-40 object-cover rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">${prod.nombre}</h3>
        `;

        container.appendChild(card);
    });

         }

    }
    catch(error){

        alert(error.message)

    }
    
   
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

    select.addEventListener("change", async (event)  => {
        event.preventDefault()
        const value = select.value;
        let categoria = "";

        if (value === "1") categoria = "Tartas Mojadas";
        if (value === "2") categoria = "Cheesecakes";
        if (value === "3") categoria = "Galletas";

        const seleccion = data.find(item => item.categoria === categoria);

        if (seleccion) {
           await renderProducts(seleccion.productos);
        }
    });
}

// Ejecutar
await renderProducts();
await init();

