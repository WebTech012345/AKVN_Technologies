function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.innerHTML = '&#x1F441;'; // eye-open icon
    } else {
        passwordField.type = 'password';
        toggleIcon.innerHTML = '&#x1F441;'; // eye-closed icon
    }
}