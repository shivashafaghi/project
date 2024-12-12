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
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate a server request (replace with actual submission logic)
    console.log('Form submitted:', { name, email, message });

    alert('Thank you for contacting us!');
    closeContactForm();

    // Reset the form
    document.getElementById('contactFormElement').reset();
}
