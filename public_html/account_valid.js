// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to determine the appropriate greeting based on the current hour
    function getGreeting() {
        const now = new Date(); // Get the current date and time
        const hour = now.getHours(); // Extract the current hour
        // Return a greeting based on the hour of the day
        if (hour < 12) {
            return 'Good Morning!';
        } else if (hour < 18) {
            return 'Good Afternoon!';
        } else {
            return 'Good Evening!';
        }
    }

    // Get the greeting message element by its ID
    const greetingElement = document.getElementById('greetingMessage');
    // If the greeting element exists, set its text content to the greeting message
    if (greetingElement) {
        greetingElement.textContent = getGreeting();
    }

    // Get the login form by its ID
    const loginForm = document.getElementById('loginForm');
    // If the login form exists, add a submit event listener to it
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Get the values of the email and password fields
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let valid = true; // Initialize a variable to track form validity

            // Clear any previous error messages
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';

            // Validate the email input
            if (!email) {
                document.getElementById('emailError').textContent = 'Email is required.'; // Set error message if empty
                valid = false; // Mark the form as invalid
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.'; // Set error for invalid email format
                valid = false; // Mark the form as invalid
            }
            // Validate the password input
            if (!password) {
                document.getElementById('passwordError').textContent = 'Password is required.'; // Set error message if empty
                valid = false; // Mark the form as invalid
            }

            // If the form is not valid, prevent the default form submission
            if (!valid) {
                event.preventDefault();
            }
        });
    }
});

// Add an event listener for the signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Get the values of the email and password fields from the signup form
    const emailInput = document.getElementById('signupEmail').value;
    const passwordInput = document.getElementById('signupPassword').value;

    // Check if either the email or password fields are empty
    if (!emailInput || !passwordInput) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all fields.'); // Alert the user to fill in all fields
    }
});
