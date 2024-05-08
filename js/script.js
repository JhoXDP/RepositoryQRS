document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    var password = document.getElementById("passwordInput").value;

    // Verifica la contraseña
    if (password === "123") {
        // Redirige a la página de la cuenta regresiva
        window.location.href = "countdown.html";
    } else {
        alert("Contraseña incorrecta. Intenta nuevamente.");
    }
});