
// Select "Subscribe" button
// Add eventListener

// When clicked, .success should appear



const button = document.querySelector(".btn");

function showMessage() {
    const successMessage = document.querySelector(".success");
    successMessage.textContent = "Success!";
    successMessage.style.display = "block";
}

button.addEventListener("click", showMessage);