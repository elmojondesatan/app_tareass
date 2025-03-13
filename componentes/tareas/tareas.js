import { itemTarea } from "./itemTareas.js";

export function consultarTareas() {
    fetch('http://localhost:3000/tareas')
        .then(response => response.json())
        .then(data => {
            cargarTareasDesdeDB(data);  // Llama a la función que mete las tareas en el DOM
        })
        .catch(error => console.error('Error al cargar tareas:', error));
}

// Función que crea los elementos y los mete en el HTML
function cargarTareasDesdeDB(tareas) {
    const contenedorTareas = document.getElementById("tareas-container");
    contenedorTareas.innerHTML = '';  // Limpiamos lo que había antes

    tareas.forEach((tareaDB, index) => {
        const tareaFormateada = {
            nombre: tareaDB.nombre_tarea,
            estado: tareaDB.estado === 'verdadero' // Pasamos 'verdadero' o 'falso' a true o false
        };

        // Creamos el item visual y lo metemos en el contenedor
        const elementoTarea = itemTarea(tareaFormateada, index);
        contenedorTareas.appendChild(elementoTarea);
    });
}

// Función para cargar la sección de tareas
export function cargarTarea() {
    let section = document.createElement("section");
    section.className = "item";

    let titulo = document.createElement("h1");
    titulo.innerText = "Today";
    titulo.className = "titulo-c";
    section.appendChild(titulo);

    let container = document.createElement("div");
    container.className = "cont-lista";
    container.id = "tareas-container"; // ID corregido

    section.appendChild(container);

    // Cargar tareas iniciales
    consultarTareas();

    return section;
}