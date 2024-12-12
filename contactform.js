// JavaScript to handle form display and animation
    const contactBtn = document.getElementById("contactBtn");
    const contactForm = document.getElementById("contactForm");
    const closeBtn = document.getElementById("closeBtn");

    // Show the contact form
    contactBtn.addEventListener("click", () => {
        contactForm.style.display = "flex";  // Makes the form visible
    });

    // Close the contact form
    closeBtn.addEventListener("click", () => {
        contactForm.style.display = "none";  // Hides the form
    });
</script>
