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
        
        listado.appendChild(tareaItem);
    });

    let inputTarea = document.createElement('input');
    inputTarea.type = "text";
    inputTarea.placeholder = "Write a task...";
    inputTarea.className = "input_tarea";

    let botonAgregar = document.createElement('button');
    botonAgregar.innerText = "Add";
    botonAgregar.className = "btn_agregar";

    tareas.appendChild(inputTarea);
    tareas.appendChild(botonAgregar);

    return tareas;
}

export { tareas };
