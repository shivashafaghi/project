// JavaScript to handle form display and animation

// Function to open the contact form
function openContactForm() {
    document.getElementById('contactForm').style.display = 'flex'; // Display form
}

// Function to close the contact form
function closeContactForm() {
    document.getElementById('contactForm').style.display = 'none'; // Hide form
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default submission
    alert("Form submitted successfully!");
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    // Close the form
    closeContactForm();
}
