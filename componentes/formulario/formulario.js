import { cargarTareas } from "./funcionesFormularios.js"; // Asegúrate de importar correctamente

export function cargarFormulario() {
    const formulario = document.createElement("div");
    formulario.className = "formulario";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a task...";
    input.id = "task-input"; // Agregar un ID al input

    const button = document.createElement("button");
    button.textContent = "Add";
    button.id = "task-button"; // 🛠 Agregar un ID al botón

    // Evento para agregar tareas
    button.addEventListener("click", () => {
        console.log("📌 Input antes de pasar a cargarTareas:", input); // 🔍 Verifica si es undefined
        cargarTareas(input);
    });

    formulario.appendChild(input);
    formulario.appendChild(button);

    return formulario;
}
