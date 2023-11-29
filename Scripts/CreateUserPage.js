const createuserForm = document.getElementById("create-user-form");
const createuserButton = document.getElementById("create-user-form-submit");
const createuserErrorMsg = document.getElementById("create-user-error-msg");

createuserButton.addEventListener("click", (e) => {
    // e.preventDefault();
    const email = createuserForm.email.value;
    if (email.trim().length === 0) {
        return;
    }
    const password = createuserForm.password.value;
    console.log(password.trim());
    if (password.trim().length === 0) {
        return;
    }
    localStorage.setItem(email, password);

    location.reload();
    location.href = "/Pages/UserProfilePage.html"

    console.log("hello world");
    // if (email === "Admin@gmail.com" && password === "Admin") {
    //     alert("You have successfully created an account.");
    //     location.reload();

    //     location.href = "/Pages/UserProfilePage.html"

    // } else {
    //     createuserErrorMsg.style.opacity = 1;
    // }
})