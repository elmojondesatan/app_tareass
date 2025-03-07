import { header } from "./componentes/header/header.js";
import { formulario } from "./componentes/formulario/formulario.js";
import { tareas } from "./componentes/tareas/tareas.js";
import { consultarTareasBackEnd } from "./componentes/tareas/tareas.js";

let DOM = document.querySelector("#root");

function cargarDOM() {
    DOM.appendChild(header());
    DOM.appendChild(formulario());
    DOM.appendChild(tareas());

    consultarTareasBackEnd(); 
}

cargarDOM();

export { cargarDOM }
