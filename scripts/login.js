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
     // Validate PIN (must be exactly 6 digits)
    if(!/^\d{6}$/.test(pinNumber)){
        loginMessage.textContent = "PIN must be exactly 6 digits !";
        loginMessage.classList.remove("hidden");
        loginMessage.classList.add("text-red-500");
        return ;
    }

    //simulate a successful login 
    loginMessage.textContent = "Login successful!";
    loginMessage.classList.remove("hidden");
    loginMessage.classList.remove("text-red-500");
    loginMessage.classList.add("text-green-500");

    setTimeout(() => {
        window.location.href = "/home.html";
    }, 2000);


});
