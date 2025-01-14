document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate name
    if (name === '') {
        isValid = false;
        const nameError = document.getElementById('nameError');
        nameError.textContent = 'Name cannot be empty.';
        nameError.style.display = 'block';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Enter a valid email address.';
        emailError.style.display = 'block';
    }

    // Validate message
    if (message.length < 10) {
        isValid = false;
        const messageError = document.getElementById('messageError');
        messageError.textContent = 'Message must be at least 10 characters long.';
        messageError.style.display = 'block';
    }

    // Submit form if valid
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});
