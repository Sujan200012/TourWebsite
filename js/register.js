function validateRegisterForm() {
    var fullname = document.getElementById('fullname').value;
    var contact = document.getElementById('contact').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (fullname === "" || contact === "" || dob === "" || email === "" || password === "" || !gender) {
        alert("All fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
