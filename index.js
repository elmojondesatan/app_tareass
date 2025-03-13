import { cargarHeader } from "./componentes/header/header.js";
import { cargarFormulario } from "./componentes/formulario/formulario.js";
import { cargarTareas } from "./componentes/formulario/funcionesFormularios.js";


function cargarDOM() {
    let DOM = document.querySelector("#root");
    DOM.className = "DOM";

    DOM.appendChild(cargarHeader());
    DOM.appendChild(cargarFormulario());
    DOM.appendChild(cargarTareas());

}

cargarDOM();

export { cargarDOM }
