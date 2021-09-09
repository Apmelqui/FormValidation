var isOk = true;

function ValidadeFirstName() {
    var fNameInput = document.getElementById("fName");
    var fNameErrorMsg = document.getElementById("fNameErrorMsg");
    var fNameResult = document.getElementById("fNameResult");
    //console.log(fNameErrorMsg);
    try {
        if (fNameInput.value.length < 3) {
            throw "First Name must be at least 3 characters long.";
        }
        fNameErrorMsg.innerHTML = "";
        fNameInput.style.background = "";
        fNameResult.innerHTML = fNameInput.value;
    } catch (msg) {
        fNameInput.style.background = "#6D9DC5";
        fNameErrorMsg.style.color = "red";
        fNameErrorMsg.innerHTML = msg;
        isOk = false;
    }
}

function ValidadeLastName() {
    var lNameInput = document.getElementById("lName");
    var lNameErrorMsg = document.getElementById("lNameErrorMsg");
    var lNameResult = document.getElementById("lNameResult");
    try {
        if (lNameInput.value.length < 3) {
            throw "Last name mustbe at least 3 characters long.";
        }
        lNameErrorMsg.innerHTML = "";
        lNameInput.style.background = "";
        lNameResult.innerHTML = lNameInput.value;
    } catch (msg) {
        lNameInput.style.background = "#6D9DC5";
        lNameErrorMsg.style.color = "red";
        lNameErrorMsg.innerHTML = msg;
        isOk = false;
    }
}

function ValidadeAddress() {
    var addressInput = document.getElementById("address");
    var addressErrogMsg = document.getElementById("addressErrorMsg");
    var addressResult = document.getElementById("addressResult");
    try {
        if (addressInput.value.length < 3) {
            throw "Invalid address. Must be at least 3 characters long.";
        }
        addressErrogMsg.innerHTML = "";
        addressInput.style.background = "";
        addressResult.innerHTML = addressInput.value;
    } catch (msg) {
        addressInput.style.background = "#6D9DC5";
        addressErrogMsg.style.color = "red";
        addressErrogMsg.innerHTML = msg;
        isOk = false;
    }
}

function ValidadeCity() {
    var cityInput = document.getElementById("city");
    var cityErrorMsg = document.getElementById("cityErrorMsg");
    var cityResult = document.getElementById("cityResult");
    try {
        if (cityInput.value.length < 3) {
            throw "City must be at least 3 characters long";
        }
        cityErrorMsg.innerHTML = "";
        cityInput.style.background = "";
        cityResult.innerHTML = cityInput.value;
    } catch (msg) {
        cityInput.style.background = "#6D9DC5";
        cityErrorMsg.style.color = "red";
        cityErrorMsg.innerHTML = msg;
        isOk = false;
    }
}

function ValidadePostalCode() {
    var postalCodeInput = document.getElementById("postalCode");
    var postalcodeErrorMsg = document.getElementById("postalCodeErrorMsg");
    var postalcodeResult = document.getElementById("postalCodeResult");
    var regularExpression = new RegExp(
        /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY]( )?\d[ABCEGHJKLMNPRSTVXY]\d$/i
    );
    try {
        if (!regularExpression.test(postalCodeInput.value)) {
            throw "Invalid postal code.";
        }
        postalcodeErrorMsg.innerHTML = "";
        postalCodeInput.style.background = "";
        postalcodeResult.innerHTML = postalCodeInput.value;
    } catch (msg) {
        postalCodeInput.style.background = "#6D9DC5";
        postalcodeErrorMsg.style.color = "red";
        postalcodeErrorMsg.innerHTML = msg;
        isOk = false;
    }
}

function ValidadeProvince() {
    var provinceInput = document.getElementById("province");
    var provinceErrorMsg = document.getElementById("provinceErrorMsg");
    var provinceResult = document.getElementById("provinceResult");

    try {
        if (
            provinceInput.value !== "ON" &&
            provinceInput.value !== "QC" &&
            provinceInput.value !== "MN" &&
            provinceInput.value !== "AB" &&
            provinceInput.value !== "BC" &&
            provinceInput.value !== "SK"
        ) {
            throw "Please input a valid Canada province";
        }
        provinceErrorMsg.innerHTML = "";
        provinceInput.style.background = "";
        provinceResult.innerHTML = provinceInput.value;
    } catch (msg) {
        provinceInput.style.background = "#6D9DC5";
        provinceErrorMsg.style.color = "red";
        provinceErrorMsg.innerHTML = msg;
        isOk = false;
    }
}

function ValidadeAge() {
    var ageInput = document.getElementById("age");
    var ageErrorMsg = document.getElementById("ageErrorMsg");
    var ageResult = document.getElementById("ageResult");
    console.log(ageErrorMsg.value);
    try {
        if (ageInput.value < 18 || ageInput.value === "") {
            throw "Must be at least 18 years old.";
        }
        ageErrorMsg.innerHTML = "";
        ageInput.style.background = "";
        ageResult.innerHTML = ageInput.value;
    } catch (msg) {
        ageInput.style.background = "#6D9DC5";
        ageErrorMsg.style.color = "red";
        ageErrorMsg.innerHTML = msg;
        isOk = false;
    }
}

function ValidadePassword() {
    var passwordInput = document.getElementById("password");
    var passwordErrorMsg = document.getElementById("passwordErrorMsg");
    var passwordResult = document.getElementById("passwordResult");
    var confirmPasswordInput = document.getElementById("confirmPassword");

    var regularExpression = new RegExp(/^(?:(?=.*\d)(?=.*[A-Z]).*)$/);

    try {
        if (passwordInput.value.length < 6) {
            throw "Password must be at least 6 characters long.";
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            throw "Error. The password do not match.";
        }

        if (!regularExpression.test(passwordInput.value)) {
            throw "Invalid password. Must contain Uppercase letter and at least one number.";
        }

        passwordErrorMsg.innerHTML = "";
        passwordInput.style.background = "";
        passwordResult.innerHTML = passwordInput.value;
    } catch (msg) {
        passwordInput.style.background = "#6D9DC5";
        passwordErrorMsg.style.color = "red";
        passwordErrorMsg.innerHTML = msg;
        isOk = false;
    }
}

function ConfirmEmail() {
    var emailInput = document.getElementById("email");
    var emailErrorMsg = document.getElementById("emailErrorMsg");
    var emailResult = document.getElementById("emailResult");

    try {
        if (
            emailInput.value.search("@") === -1 ||
            emailInput.value.lastIndexOf(".") === -1
        ) {
            throw "Invalid Email.";
        }
        emailErrorMsg.innerHTML = "";
        emailInput.style.background = "";
        emailResult.innerHTML = emailInput.value;
    } catch (msg) {
        emailInput.style.background = "#6D9DC5";
        emailErrorMsg.style.color = "red";
        emailErrorMsg.innerHTML = msg;
        isOk = false;
    }
}

function Register() {
    ValidadeFirstName();
    ValidadeLastName();
    ValidadeAddress();
    ValidadeCity();
    ValidadeAge();
    ValidadeProvince();
    ValidadePostalCode();
    ValidadePassword();
    ConfirmEmail();
    ValidadePostalCode();
    if (isOk === true) {
        alert(
            "Thanks for registering with our website, your customer record was created successfully."
        );
    }
    isOk = true;
}

var submit = document.getElementById("register");
//console.log(submit);

if (submit.addEventListener) {
    submit.addEventListener("click", Register, false);
} else if (submit.attachEvent) {
    submit.attachEvent("onclik", Register);
}
