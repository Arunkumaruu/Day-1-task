document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var fullName = document.getElementById('fullName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var phonePattern = /^[0-9]{10}$/;

    if (fullName.trim() === '') {
        alert('Full Name is required.');
        event.preventDefault();
        return;
    }

    if (username.trim() === '') {
        alert('Username is required.');
        event.preventDefault();
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid phone number (10 digits).');
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault();
        return;
    }

    if (!gender) {
        alert('Please select your gender.');
        event.preventDefault();
        return;
    }

});
