// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and button
    const form = document.querySelector('form');
    const submitButton = document.getElementById('btn');
    
    // Add a submit event listener to the form
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting traditionally
      
      // Display a thank-you message
      const para = document.getElementById('para');
      para.innerHTML = `
        <h1>YOU HAVE SUCESSFULLY ENROLLED!</h1>
        <p>We will send details about the class soon.All the details will be send to your email and mobile number</p>
      `;
      
      // Optionally clear the form fields
      form.reset();
    });
  });
  
  
