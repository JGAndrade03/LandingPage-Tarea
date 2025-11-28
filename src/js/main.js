import { fetchProducts } from "./functions";
import { getVotes, saveVotes  } from "./firebase";


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


const enableForm = () => {
    const formulario = document.getElementById("form_voting");
    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();
        const select = document.getElementById("select_product");
        const valor = select.value;
        const result = await saveVotes(valor);
        alert(result.message);
    });
};

const displayVotes = async () => {
  let tableHTML = `
    <table border="1" cellpadding="5" cellspacing="0">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Total de votos</th>
        </tr>
      </thead>
      <tbody>
  `;

  try {
    const response = await getVotes();

    if (!response.status) {
      tableHTML += `<tr><td colspan="2">${response.message}</td></tr>`;
    } else {
      const data = response.data;
      const counts = {};

      for (const [key, value] of Object.entries(data)) {
        if (value.productID) {
          const id = value.productID;
          counts[id] = (counts[id] || 0) + 1;
        } else if (typeof value === "object") {
          let subcount = 0;
          for (const subKey of Object.keys(value)) {
            if (subKey !== "date") subcount++;
          }
          counts[key] = (counts[key] || 0) + subcount;
        }
      }
      for (const [product, total] of Object.entries(counts)) {
        tableHTML += `
          <tr>
            <td>${product}</td>
            <td>${total}</td>
          </tr>
        `;
      }

      if (Object.keys(counts).length === 0) {
        tableHTML += `<tr><td colspan="2">No hay votos aún</td></tr>`;
      }
    }

    tableHTML += `
        </tbody>
      </table>
    `;

    const resultados = document.getElementById("results");
    resultados.innerHTML = tableHTML;

  } catch (error) {
    console.error(error);
    alert("Error al mostrar los resultados");
  }
};

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
await enableForm();
await getVotes();
