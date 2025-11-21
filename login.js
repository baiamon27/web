document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }
    
    if (username === 'admin' && password === 'password') {
        alert('Login successful! Welcome back, ' + username);
    } else {
        alert('Invalid username or password');
    }
    
    this.reset();
});