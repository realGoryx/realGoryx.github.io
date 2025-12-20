(function() {
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const btn = form.querySelector("button[type='submit']");
        const originalText = btn.innerText;
        btn.disabled = true;
        btn.innerText = "Wysyłam...";
        
        const data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            car: form.car.value.trim() || "Nie wybrano", // Provide default if empty
            message: form.message.value.trim(),
        };
        
        // Replace with YOUR actual template ID from EmailJS dashboard
        emailjs.send("service_aiqc9d5", "template_xqt52ui", data)
        .then(() => {
            alert("Wiadomość wysłana! Odpowiemy w ciągu 24 godzin.");
            form.reset();
            btn.disabled = false;
            btn.innerText = originalText;
        })
        .catch(err => {
            console.error("EmailJS Error:", err);
            alert("Błąd wysyłki — spróbuj ponownie. Błąd: " + err.text);
            btn.disabled = false;
            btn.innerText = originalText;
        });
    });
});
})();