document.getElementById('loginForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();  
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();  
        return;
    }

   
});
