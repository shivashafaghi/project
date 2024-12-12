// JavaScript to handle form display and animation
const contactBtn = document.getElementById('contactBtn');
const contactForm = document.getElementById('contactForm');
const closeBtn = document.getElementById('closeBtn');

// Show the contact form when the button is clicked
contactBtn.addEventListener('click', () => {
    contactForm.style.display = 'block';
});

// Close the contact form when the close button is clicked
closeBtn.addEventListener('click', () => {
    contactForm.style.display = 'none';
});
