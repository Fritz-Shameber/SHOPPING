document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let newUsername = document.getElementById("newUsername").value.trim();
    let newPassword = document.getElementById("newPassword").value.trim();
    let newPin = document.getElementById("newPin").value.trim();

    // Fix the logical operator here to check if any field is empty
    if (!newUsername || !newPassword || !newPin) {
        alert("Please fill in all fields!");
        return;
    }

    if (newPin.length !== 4 || isNaN(newPin)) {
        alert("PIN must be a 4-digit number!");
        return;
    }

    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    localStorage.setItem("pin", newPin);

    alert("Signup successful! You can now log in.");
    window.location.href = "login.html";
    
});
