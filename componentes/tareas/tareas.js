import { itemTarea } from "./itemTareas.js";

export function consultarTareas() {
    fetch('http://localhost:3000/tareas')
        .then(response => response.json())
        .then(data => {
            cargarTareasDesdeDB(data);  
        })
        .catch(error => console.error('Error al cargar tareas:', error));
}

function cargarTareasDesdeDB(tareas) {
    const contenedorTareas = document.getElementById("tareas-container");
    contenedorTareas.innerHTML = '';  

    tareas.forEach((tareaDB, index) => {
        const tareaFormateada = {
            nombre: tareaDB.nombre_tarea,
            estado: tareaDB.estado === 'verdadero' 
        };

        const elementoTarea = itemTarea(tareaFormateada, index);
        contenedorTareas.appendChild(elementoTarea);
    });
}

export function cargarTarea() {
    let section = document.createElement("section");
    section.className = "item";

    let titulo = document.createElement("h1");
    titulo.innerText = "Today";
    titulo.className = "titulo-c";
    section.appendChild(titulo);

    let container = document.createElement("div");
    container.className = "cont-lista";
    container.id = "tareas-container"; 

    section.appendChild(container);

    consultarTareas();

    return section;
}