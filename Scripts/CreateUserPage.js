const createuserForm = document.getElementById("create-user-form");
const createuserButton = document.getElementById("create-user-form-submit");
const createuserErrorMsg = document.getElementById("create-user-error-msg");

createuserButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = createuserForm.email.value;
    const password = createuserForm.password.value;

    if (email === "Admin@gmail.com" && password === "Admin") {
        alert("You have successfully created an account.");
        location.reload();
    } else {
        createuserErrorMsg.style.opacity = 1;
    }
})