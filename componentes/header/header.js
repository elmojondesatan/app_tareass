 export function cargarHeader(){
    let header = document.createElement('header');
    header.className = "header";

   let logo = document.createElement('img');
   logo.src = "https://img.freepik.com/vector-gratis/plantilla-logotipo-computadora-tecnologia_23-2149204144.jpg";
   logo.alt = "";
   header.appendChild(logo);


   let h1 = document.createElement('h1');
   h1.innerText = "Ready";
   header.appendChild(h1);

    return header;
}
