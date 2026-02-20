// Seleccionamos el botón y el body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Escuchamos el evento de clic
themeToggleBtn.addEventListener('click', () => {
    // Alternamos la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');
    
    // Cambiamos el texto del botón dependiendo del modo
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Modo Claro';
    } else {
        themeToggleBtn.textContent = '🌙 Modo Oscuro';
    }
});