// Auto capitalize first letter of name
document.getElementById("name").addEventListener("input", function() {
    let value = this.value;
    if (value.length > 0) {
        this.value = value.charAt(0).toUpperCase() + value.slice(1);
    }
});

// Form validation
document.getElementById("jobForm").addEventListener("submit", function(e) {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let agree = document.getElementById("agree").checked;

    // Name validation
    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        e.preventDefault();
        return;
    }

    // Phone validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Enter valid 10-digit phone number");
        e.preventDefault();
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Enter valid email");
        e.preventDefault();
        return;
    }

    // Checkbox validation
    if (!agree) {
        alert("You must agree before submitting");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});
