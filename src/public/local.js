document.addEventListener('DOMContentLoaded', () => {
    // Get the "Go to Homepage" button element by its class name
    const button = document.querySelector('.button');
  
    // Add a click event listener to the button
    button.addEventListener('click', () => {
      // Redirect the user to the homepage when the button is clicked
      window.location.href = '/';
    });
  });