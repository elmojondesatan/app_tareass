

function consultarTareasBackEnd(){
    fetch('http://localhost:3000/tarea')
    .then(response => response.json())
    .then(data => cargarTareasDOM(data))
    .catch(error => console.error('Error:', error));
}

function cargarTareasDOM(data){
    let DOM = document.querySelector("#root");
    DOM.appendChild(rendetareas(data));

}

function rendetareas(data) {

    let listaTareas = consultarTareas();
    console.log("-----------");
    console.log(listaTareas);

    let tareas = document.createElement('div');
    tareas.className = "tareas";

    let listado = document.createElement('div');
    listado.className = "listado_tareas";
    tareas.appendChild(listado);

    data.forEach((e)=>{
        console.log(e);
    });

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

export { consultarTareasBackEnd };
