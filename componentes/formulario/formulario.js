import { cargarTareas } from "./funcionesFormularios.js"; 

export function cargarFormulario() {
    const formulario = document.createElement("div");
    formulario.className = "formulario";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a task...";
    input.id = "task-input"; 

    const button = document.createElement("button");
    button.textContent = "Add";
    button.id = "task-button"; 

    button.addEventListener("click", () => {
        console.log("📌 Input antes de pasar a cargarTareas:", input); 
        cargarTareas(input);
    });

    formulario.appendChild(input);
    formulario.appendChild(button);

    return formulario;
}
