import { fetchProducts } from "./functions";



async function renderProducts() {
    try{
        const datos = await fetchProducts('https://raw.githubusercontent.com/JGAndrade03/LandingPage-Tarea/main/src/catalogo.json')
        
         const container = document.getElementById('products-container');

         if(datos.success){
          
              container.innerHTML = "";

    datos.body.forEach(prod => {
        let card = document.createElement("div");
        card.classList = "bg-white dark:bg-gray-800 p-4 rounded-2xl shadow space-y-4";

        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}"
                class="w-full h-40 object-cover rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">${prod.nombre}</h3>
            <p class="text-xl font-bold text-gray-900 dark:text-white">$${prod.precio}</p>
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


    const select = document.getElementById("categories");

    select.addEventListener("change", (event)  => {
    
        const value = select.value;
        const contenedor = document.getElementById("products-container")  
        contenedor.innerHTML='' 

        body.forEach(cat => {
            alert(cat.categoria)
            if(cat.categoria == value){
                  let card = document.createElement("div");
                card.classList = "bg-white dark:bg-gray-800 p-4 rounded-2xl shadow space-y-4";

                card.innerHTML = `
                <img src="${cat.imagen}" alt="${cat.nombre}"
                    class="w-full h-40 object-cover rounded-lg">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">${cat.nombre}</h3>
                    <p class="text-xl font-bold text-gray-900 dark:text-white">$${cat.precio}</p>
                `;

                contenedor.appendChild(card);

            }        

        })


    
    });
}

// Ejecutar
await renderProducts();
await init();

