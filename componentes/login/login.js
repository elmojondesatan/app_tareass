function mostrarLogin() {
    const modal = document.createElement("div");
    modal.id = "login-modal";
    const container = document.createElement("div");
    container.id = "login-container";
    
    container.innerHTML = crearLoginForm();
    
    modal.appendChild(container);
    document.body.appendChild(modal);

    setTimeout(() => modal.classList.add("show"), 10);

    agregarEventosLogin();
}

function crearLoginForm() {
    return `
        <h2>Login</h2>
        <input type="email" id="correo" placeholder="Correo electrónico" />
        <input type="password" id="contrasena" placeholder="Contraseña" />
        <button id="login-btn">Ingresar</button>
        <a id="register-link">Crear cuenta</a>
    `;
}

function agregarEventosLogin() {
    document.getElementById("login-btn").addEventListener("click", async () => {
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        if (!correo || !contrasena) {
            alert("Por favor, ingrese ambos campos.");
            return;
        }

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo, contrasena })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message || "Login exitoso");
            document.getElementById("login-modal").classList.remove("show");
            abrirDOM();
        } else {
            alert(data.error || "Error en el login");
        }
    });

    document.getElementById("register-link").addEventListener("click", mostrarRegistro);
}

function mostrarRegistro() {
    document.getElementById("login-container").innerHTML = crearRegistroForm();
    agregarEventosRegistro();
}

function crearRegistroForm() {
    return `
        <h2>Crear Cuenta</h2>
        <input type="text" id="nombre" placeholder="Nombre completo" />
        <input type="email" id="correo" placeholder="Correo electrónico" />
        <input type="password" id="contrasena" placeholder="Contraseña" />
        <button id="register-btn">Registrar</button>
        <a id="login-link">Volver al login</a>
    `;
}

function agregarEventosRegistro() {
    document.getElementById("register-btn").addEventListener("click", async () => {
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        if (!nombre || !correo || !contrasena) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, correo, contrasena })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message || "Cuenta creada exitosamente");
            mostrarLogin();
        } else {
            alert(data.error || "Error al crear cuenta");
        }
    });

    document.getElementById("login-link").addEventListener("click", mostrarLogin);
}

function abrirDOM() {
    const root = document.getElementById("#root");
    root.innerHTML = "<h1>¡Bienvenido al DOM!</h1>"; 
}

mostrarLogin();
