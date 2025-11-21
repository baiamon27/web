document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }
    
    console.log('Registration Data:', {
        fullName,
        email,
        password,
        phone: document.getElementById('phone').value
    });
    
    alert(`Registration successful! Welcome, ${fullName}`);
    
    this.reset();
});