
// Select "Subscribe" button
// Add eventListener

// When clicked, .success should appear

let email = document.querySelector(".email");
let button = document.querySelector(".btn");
let successMessage = document.querySelector(".success");

let form = document.querySelector(".form");


email.addEventListener("input", () => {
    if(email.validity.valueMissing) {
        email.setCustomValidity("This field cannot be empty");
    }
    else if(email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address");
    }
    else {
        email.setCustomValidity("");
    }
});

function showMessage() {
    if(email.checkValidity()) {
        alert("Success!");
    }
}

button.addEventListener("click", showMessage);





