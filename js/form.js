
document.addEventListener('DOMContentLoaded', function () {
    // Obtén el formulario
    var contactForm = document.getElementById('contactForm');

    // Agrega un evento para reiniciar el formulario al recargar la página
    if (contactForm) {
        contactForm.reset();
    }
});
