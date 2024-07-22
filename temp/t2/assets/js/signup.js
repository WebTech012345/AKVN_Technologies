document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle password visibility
    window.togglePassword = function(inputId) {
        const input = document.getElementById(inputId);
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
    };

    // Function to validate sign-in form
    window.validateSignIn = function() {
        var input = document.getElementById('signin-email-phone').value.trim();
        var errorSpan = document.getElementById('signin-error');

        // Regular expressions to validate email and phone number
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phoneRegex = /^[0-9]{10}$/;

        // Check if input matches email or phone number pattern
        if (emailRegex.test(input) || phoneRegex.test(input)) {
            errorSpan.textContent = '';
            return true;
        } else {
            errorSpan.textContent = 'Please enter a valid email or phone number.';
            return false;
        }
    };

    // Function to validate sign-up form
    window.validateSignUp = function() {
        var password = document.getElementById('signup-password').value;
        var confirmPassword = document.getElementById('signup-confirm-password').value;
        var passwordMatchError = document.getElementById('password-match-error');

        // Check if passwords match
        if (password !== confirmPassword) {
            passwordMatchError.textContent = "Passwords do not match.";
            return false;
        } else {
            passwordMatchError.textContent = "";
            return true;
        }
    };
});
