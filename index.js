import { cargarHeader } from "./componentes/header/header.js";
import { cargarFormulario } from "./componentes/formulario/formulario.js";
import { cargarTareas } from "./componentes/formulario/funcionesFormularios.js";

function cargarDOM() {
    let DOM = document.querySelector("#root");
    DOM.className = "DOM";

    DOM.appendChild(cargarHeader());
    DOM.appendChild(cargarFormulario());

    setTimeout(() => {
        const boton = document.querySelector("#task-button");
        if (boton) {
            boton.addEventListener("click", () => {
                const input = document.querySelector("#task-input");
                cargarTareas(input);
            });
        } else {
            console.error("❌ Error: No se encontró el botón de tareas.");
        }
    }, 100); 

    return DOM;
}

cargarDOM();

export { cargarDOM };
