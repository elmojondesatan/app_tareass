import { itemTarea } from "../tareas/itemTareas.js";
export function cargarTareas(input) {
    if (!input) {
        input = document.querySelector("#task-input"); // Intentar obtenerlo desde el DOM
        console.warn("⚠️ Input no recibido, obteniendo desde el DOM:", input);
    }

    console.log("📌 Valor del input antes de leer:", input.value); // Debug

    if (!input || !input.value.trim()) {  // Verificar si el input está vacío
        console.error("❌ Error: No se encontró el input o está vacío.");
        alert("Por favor, escribe una tarea antes de agregarla.");
        return;
    }

    const nombreTarea = input.value.trim();

    // Enviar la tarea al backend
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
    .then(response => response.json())
    .then(data => {
        console.log('✅ Tarea agregada:', data);
        input.value = ''; // Limpiar el input después de agregar la tarea
    })
    .catch(error => console.error('❌ Error al agregar tarea:', error));
}
