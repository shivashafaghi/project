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
    event.preventDefault(); // Prevent the form from submitting normally
    alert("Form submitted successfully!");
}
