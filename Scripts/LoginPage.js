const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    console.log("test");
    if (email === "Admin@gmail.com" && password === "Admin") {
        location.reload();
        location.href = "/Pages/UserProfilePage.html"

    } else {
        loginErrorMsg.style.opacity = 1;
    }
})