// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Reference to the dark mode toggle checkbox
    const darkModeToggle = document.getElementById('darkModeToggle');
    // Reference to the body of the document
    const body = document.body;
    // Reference to the header element
    const header = document.querySelector('header');
    // Reference to the cart header (the main heading for the cart section)
    const cartHeader = document.querySelector('h2');
    
    // Check local storage for previously saved dark mode preference
    const darkModePreference = localStorage.getItem('dark-mode') === 'true';

    // Apply dark mode styles if a preference was saved
    if (darkModePreference) {
        body.classList.add('dark-mode'); // Add dark mode class to body
        header.classList.add('dark-mode'); // Add dark mode class to header
        cartHeader.classList.add('dark-mode'); // Add dark mode class to cart header
        darkModeToggle.checked = true; // Sync toggle with the saved preference
    }

    // Add an event listener to the toggle switch to handle changes
    darkModeToggle.addEventListener('change', function () {
        const isChecked = darkModeToggle.checked; // Check if the toggle is on
        // Toggle the dark mode classes based on the toggle's checked status
        body.classList.toggle('dark-mode', isChecked);
        header.classList.toggle('dark-mode', isChecked);
        cartHeader.classList.toggle('dark-mode', isChecked);
        // Save the current preference in local storage for future sessions
        localStorage.setItem('dark-mode', isChecked);
    });
});
