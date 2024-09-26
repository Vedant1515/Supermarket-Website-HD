// Add an event listener to the contact form to handle the submit event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    let isValid = true; // Flag to track overall form validity

    // Get the name input element and its corresponding error message element
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const namePattern = /^[A-Za-z\s]{1,50}$/; // Regular expression for validating the name

    // Validate the name input against the pattern
    if (!namePattern.test(nameInput.value)) {
        isValid = false; // Set isValid to false if the name is invalid
        nameError.textContent = 'Please enter a valid name (letters and spaces only, max 50 characters).'; // Show error message
    } else {
        nameError.textContent = ''; // Clear the error message if valid
    }

    // Get the email input element and its corresponding error message element
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    // Validate the email input using the built-in validity API
    if (!emailInput.validity.valid) {
        isValid = false; // Set isValid to false if the email is invalid
        emailError.textContent = 'Please enter a valid email address.'; // Show error message
    } else {
        emailError.textContent = ''; // Clear the error message if valid
    }

    // Get the message input element and its corresponding error message element
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');

    // Validate the message input for minimum length
    if (messageInput.value.length < 10) {
        isValid = false; // Set isValid to false if the message is too short
        messageError.textContent = 'Message must be at least 10 characters long.'; // Show error message
    } else {
        messageError.textContent = ''; // Clear the error message if valid
    }

    // If any validation failed, prevent the form from being submitted
    if (!isValid) {
        event.preventDefault(); // Prevent the default form submission behavior
    }
});
