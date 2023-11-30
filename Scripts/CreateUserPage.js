const createuserForm = document.getElementById("create-user-form");
const createuserButton = document.getElementById("create-user-form-submit");
const createuserErrorMsg = document.getElementById("create-user-error-msg");

createuserButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = createuserForm.email.value;
    if (email.trim().length === 0) {
        alert("errror");

        createuserErrorMsg.style.opacity = 1;
        return;
    }
    const password = createuserForm.password.value;
    console.log(password.trim());
    if (password.trim().length === 0) {
        createuserErrorMsg.style.opacity = 1;
        alert("errror");
        return;
    }
    if (email === "Admin@gmail.com" && password === "Admin") {
        location.reload();

        location.href = "/Pages/UserProfilePage.html"

    }
    localStorage.setItem(email, password);

    location.reload();
    location.href = "/Pages/UserProfilePage.html"


})