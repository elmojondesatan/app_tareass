import { completarTarea } from "./funcionTareas.js";

export function itemTarea(contenido) {
    let label = document.createElement("label");
    label.className = "label";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let nombreTarea = document.createElement("h1");
    nombreTarea.className = "h1-1";
    nombreTarea.innerText = contenido.nombre; 

    checkbox.addEventListener("change", completarTarea);

    label.appendChild(checkbox);
    label.appendChild(nombreTarea);

    return label;
}