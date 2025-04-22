document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault();

    let username = document.querySelector("input[type='text']").value.trim();
    let password = document.getElementById("password").value.trim();

    // Retrieve the stored credentials
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    // Check if both username and password match the stored values
    if (username === storedUsername && password === storedPassword) {
        window.location.href = "verification.html";  // Redirect to verification page
    } else {
        alert("Login failed! Try again.");
    }
});
