const ADMIN_ROL = "ADMIN";
const USER_ROL = "USER";

const validUsers = {
    "eleazar": { password: "ff177a2ac722a86c8882dbc4628f0325b815dcc7de3709d8f072f8018e44989a", rol: USER_ROL },
    "inga": { password: "564bc56fb5eaef8e85fb28a0d3f5a3073ef53006589a535f4ee29c0dd52f6668", rol: ADMIN_ROL },
    "admin": { password: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", rol: ADMIN_ROL }
};

async function generateSHA256Hash(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (validUsers[username] && validUsers[username].password === await generateSHA256Hash(password)) {
        if (validUsers[username].rol === ADMIN_ROL) {
            window.location.href = './paginas/administrador/indexAdmin.html';
        } else if (validUsers[username].rol === USER_ROL) {
            window.location.href = './paginas/usuario/indexUser.html';
        }
    } else {
        const messageElement = document.getElementById("message");
        messageElement.textContent = "Usuario o contraseña inválido.";
        messageElement.style.color = "red";
    }
});

document.getElementById("showPassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});
