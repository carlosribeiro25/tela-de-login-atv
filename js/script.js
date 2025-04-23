
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('ph-sun');
        themeIcon.classList.add('ph-moon');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('ph-moon');
        themeIcon.classList.add('ph-sun');
    }
}

// Verificar tema inicial e definir o ícone correto
document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    
    if (html.getAttribute('data-theme') === 'dark') {
        themeIcon.classList.add('ph-sun');
    } else {
        themeIcon.classList.add('ph-moon');
    }
});