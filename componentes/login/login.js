// Mostrar el modal de login
function mostrarLogin() {
    const modal = document.createElement("div");
    modal.id = "login-modal";
    const container = document.createElement("div");
    container.id = "login-container";

    // Formulario de login
    container.innerHTML = `
        <h2>Login</h2>
        <input type="email" id="correo" placeholder="Correo electrónico" />
        <input type="password" id="contrasena" placeholder="Contraseña" />
        <button id="login-btn">Ingresar</button>
        <a id="register-link">Crear cuenta</a>
    `;

    modal.appendChild(container);
    document.body.appendChild(modal);

    // Mostrar el modal
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);

    // Evento de login
    document.getElementById("login-btn").addEventListener("click", async () => {
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        // Validar campos
        if (!correo || !contrasena) {
            alert("Por favor, ingrese ambos campos.");
            return;
        }

        // Enviar solicitud al backend para hacer login
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, contrasena })
        });

        const data = await response.json();

        if (response.ok) {
            // Login exitoso
            alert(data.message || "Login exitoso");
            // Cerrar el modal y abrir el DOM
            modal.classList.remove("show");
            abrirDOM();
        } else {
            // Error en login
            alert(data.error || "Error en el login");
        }
    });

    // Evento para abrir el formulario de registro
    document.getElementById("register-link").addEventListener("click", mostrarRegistro);
}

// Mostrar el formulario de registro
function mostrarRegistro() {
    const modal = document.getElementById("login-modal");
    const container = document.getElementById("login-container");

    container.innerHTML = `
        <h2>Crear Cuenta</h2>
        <input type="text" id="nombre" placeholder="Nombre completo" />
        <input type="email" id="correo" placeholder="Correo electrónico" />
        <input type="password" id="contrasena" placeholder="Contraseña" />
        <button id="register-btn">Registrar</button>
        <a id="login-link">Volver al login</a>
    `;

    // Evento de registro
    document.getElementById("register-btn").addEventListener("click", async () => {
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        // Validar campos
        if (!nombre || !correo || !contrasena) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Enviar solicitud al backend para crear cuenta
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, correo, contrasena })
        });

        const data = await response.json();

        if (response.ok) {
            // Cuenta creada
            alert(data.message || "Cuenta creada exitosamente");
            // Volver al login
            mostrarLogin();
        } else {
            // Error en registro
            alert(data.error || "Error al crear cuenta");
        }
    });

    // Evento para volver al login
    document.getElementById("login-link").addEventListener("click", mostrarLogin);
}

// Abrir el DOM principal después de login exitoso
function abrirDOM() {
    const root = document.getElementById("#root");
    root.innerHTML = "<h1>¡Bienvenido al DOM!</h1>"; // Este sería el contenido que se muestra al ingresar
}

// Inicializar el login
mostrarLogin();
