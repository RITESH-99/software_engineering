// main.js

// Registration form handling
document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user details from the form
    const username = document.getElementById('username').value;
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('regPassword').value;
    const pinCode = document.getElementById('pinCode').value;

    // Save user details to local storage
    localStorage.setItem('username', username); // Store username
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password); // Store password
    localStorage.setItem('pinCode', pinCode);

    // Redirect to login page after successful registration
    alert('Registration successful! You will be redirected to the login page.');
    window.location.href = 'login.html'; // Redirect to login page
});

// Login form handling
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user details
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if username and password match
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard or main page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});






