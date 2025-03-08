function consultarTareasBackEnd() {
    fetch('http://localhost:3000/tareas')
    .then(response => response.json())
    .then(data => cargarTareasDOM(data))
    .catch(error => console.error('Error:', error));
}

function cargarTareasDOM(data) {
    let DOM = document.querySelector("#root");
    DOM.innerHTML = "";
    DOM.appendChild(renderTareas(data));
}

function renderTareas(data) {
    console.log("-----------");
    console.log(data);

    let tareas = document.createElement('div');
    tareas.className = "tareas";

    let listado = document.createElement('div');
    listado.className = "listado_tareas";
    tareas.appendChild(listado);

    data.forEach(tarea => {
        let l1 = document.createElement('div');
        l1.innerText = tarea.nombre;
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
    botonAgregar.addEventListener("click", () => {
        let nuevaTarea = inputTarea.value.trim();
        if (nuevaTarea) {
            agregarTareaBackEnd(nuevaTarea);
            inputTarea.value = ""; 
        }
    });

    inputContainer.appendChild(inputTarea);
    inputContainer.appendChild(botonAgregar);
    tareas.appendChild(inputContainer);

    return tareas;
}

function agregarTareaBackEnd(nombre) {
    fetch('http://localhost:3000/tareas', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre })
    })
    .then(response => response.json())
    .then(() => consultarTareasBackEnd()) 
    .catch(error => console.error("Error:", error));
}

export { consultarTareasBackEnd };
