import { data } from './data.js';

function tareas() {
    let tareas = document.createElement('div');
    tareas.className = "tareas";

    let listado = document.createElement('div');
    listado.className = "listado_tareas";
    tareas.appendChild(listado);

    data.forEach(texto => {
        let l1 = document.createElement('div');
        l1.innerText = texto;
        l1.className = "cada_tarea";
        
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "tarea_checkbox";
    
        let tareaItem = document.createElement('div');
        tareaItem.className = "tarea_item";
        tareaItem.appendChild(checkbox);
        tareaItem.appendChild(l1);
        
        // Evento para marcar/desmarcar tarea
    checkbox.addEventListener('change', () => {
    l1.classList.toggle("completada"); // Agrega o quita la clase que subraya
        });

        tareaItem.appendChild(checkbox);
        tareaItem.appendChild(l1);
        listado.appendChild(tareaItem);
    });
    

    let inputContainer = document.createElement('div');
    inputContainer.className = "input_container"; // Nueva clase contenedora

    let inputTarea = document.createElement('input');
    inputTarea.type = "text";
    inputTarea.placeholder = "Write a task...";
    inputTarea.className = "input_tarea";

    let botonAgregar = document.createElement('button');
    botonAgregar.innerText = "Add";
    botonAgregar.className = "btn_agregar";

    inputContainer.appendChild(inputTarea);
    inputContainer.appendChild(botonAgregar);
    tareas.appendChild(inputContainer);


    return tareas;
}

export { tareas };
