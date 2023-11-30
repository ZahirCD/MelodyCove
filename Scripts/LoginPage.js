const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
        return;
    }
    let password_verify = localStorage.getItem(email);
    if (password_verify == password) {
        location.reload();
        location.href = "/Pages/UserProfilePage.html"
    } else {
        loginErrorMsg.style.opacity = 1;

    }
    // if (email === "Admin@gmail.com" && password === "Admin") {


    // } else {
    //     loginErrorMsg.style.opacity = 1;
    // }
})