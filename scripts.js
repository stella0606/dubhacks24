// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Handle the contact form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual submission
        
        // Capture input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Display a confirmation message
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Optionally, clear the form
        form.reset();
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the section
            
            // Scroll to the section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

