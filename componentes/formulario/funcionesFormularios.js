import { itemTarea } from "../tareas/itemTareas.js";

export function cargarTareas(input) {
    if (!input) {
        input = document.querySelector("#task-input");
        if (!input) {
            console.error("❌ Error: No se encontró el input en el DOM.");
            alert("No se encontró el campo de entrada. Asegúrate de que el formulario se cargó correctamente.");
            return;
        }
        console.warn("⚠️ Input no recibido, obteniendo desde el DOM:", input);
    }

    console.log("📌 Valor del input antes de leer:", input?.value); 

    if (!input.value.trim()) {  
        console.error("❌ Error: No se encontró el input o está vacío.");
        alert("Por favor, escribe una tarea antes de agregarla.");
        return;
    }

    const nombreTarea = input.value.trim();

    fetch('http://localhost:3000/agregar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre_tarea: nombreTarea,
            estado: 'pendiente'
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`❌ Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('✅ Tarea agregada:', data);
        input.value = ''; 

        const listaTareas = document.querySelector("#task-list"); 
        if (listaTareas) {
            const nuevaTarea = itemTarea(data); 
            listaTareas.appendChild(nuevaTarea);
        } else {
            console.warn("⚠️ No se encontró la lista de tareas en el DOM.");
        }
    })
    .catch(error => console.error('❌ Error al agregar tarea:', error));
}
