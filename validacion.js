//Haz tú validación en javascript acá
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const formMessage = document.getElementById("form-message");

        // Simulate a form submission
        setTimeout(function () {
            formMessage.textContent = "Mensaje enviado con éxito!";
            contactForm.reset();
        }, 1000);
    });
});
