import { cargarTareas } from "./funcionesFormularios.js";

export function cargarFormulario() {
    const formulario = document.createElement("div");
    formulario.className = "formulario";

    const input = document.createElement("input"); // Asegurar que existe
    input.type = "text";
    input.placeholder = "Write a task...";
    input.id = "task-input"; // Agregamos un ID para verificarlo después

    const button = document.createElement("button");
    button.textContent = "Add";

    // Evento para agregar tareas al hacer clic en el botón
    button.addEventListener("click", () => {
        console.log("📌 Input antes de pasar a cargarTareas:", input); // 🔍 Verifica si es undefined
        cargarTareas(input);
    });

    formulario.appendChild(input);
    formulario.appendChild(button);

    return formulario;
}
