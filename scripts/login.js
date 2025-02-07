const loginForm = document.getElementById("login-form");
const phoneNumberInput = document.getElementById("phone-number");
const pinNumberInput = document.getElementById("pin-number");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function(event){

    event.preventDefault(); //prevent form from reloading

    const phoneNumber = phoneNumberInput.value.trim();
    const pinNumber = pinNumberInput.value.trim();

    if(phoneNumber === "" || pinNumber === ""){
        loginMessage.textContent = "Phone Number and PIN are required";
        loginMessage.classList.remove("hidden");
        return;
    }

   

});
