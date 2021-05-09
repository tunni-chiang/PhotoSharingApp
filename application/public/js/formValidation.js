
// code used from lecture
let formInputs = document.getElementsByClassName("grid-input");
[...formInputs].forEach((input) => {
    switch (input.getAttribute("id")) {
        case "username":
            input.addEventListener("input", updateUserValidation, false);
            break;
        case "email":
            input.addEventListener("input", updateEmailValidation, false);
            break;
        case "passwd":
            input.addEventListener("input", updatePasswdValidation, false);
            break;
        case "cpasswd":
            input.addEventListener("input", updateCPasswdValidation, false);
            break;
    }
})

function updateUserValidation() {
    if (document.getElementById('usernameValidationBox')) {
        document.getElementById('usernameValidationBox').innerHTML = `<div class="grid-validationbox"><div id="beginsWithLetter">Begins with a letter</div><div id="has3chars">Has 3 or more characters</div></div>`
    }
    document.getElementById('username').oninput = function (event) {
        if (document.getElementById('beginsWithLetter') && document.getElementById('has3chars')) {
            if (beginsWithLetter(event.target.value)) {
                document.getElementById('beginsWithLetter').setAttribute("class", "green-text");
            } else {
                document.getElementById('beginsWithLetter').setAttribute("class", "red-text");
            }

            if (event.target.value.length > 2) {
                document.getElementById('has3chars').setAttribute("class", "green-text");
            } else {
                document.getElementById('has3chars').setAttribute("class", "red-text");
            }
        }
    }
}

function closeUserValidation() {
    document.getElementById('usernameValidationBox').innerHTML = null;
}

function updateEmailValidation() {
    if (document.getElementById('emailValidationBox')) {
        document.getElementById('emailValidationBox').innerHTML = `<div class="grid-validationbox"><div id="valid-email">Email valid</div></div>`
    }
    document.getElementById('email').oninput = function (event) {
        if (document.getElementById('valid-email')) {
            if (validEmail(event.target.value)) {
                document.getElementById('valid-email').setAttribute("class", "green-text");
            } else {
                document.getElementById('valid-email').setAttribute("class", "red-text");
            }
        }
    }
}

function closeEmailValidation() {
    document.getElementById('emailValidationBox').innerHTML = null;
}

function updatePasswdValidation() {
    if (document.getElementById('passwdValidationBox')) {
        document.getElementById('passwdValidationBox').innerHTML =
            `<div class="grid-validationbox">
        <div id="has8chars">Contains at least 8 characters</div>
        <div id="containsUpperCaseLetter">Contains at least 1 upper case letter</div>
        <div id="oneNumber">Contains at least 1 number</div>
        <div id="oneSpecial">Contains at least 1 special character ( /*-+!@#$^& )</div>
        </div>`
    }
    document.getElementById('passwd').oninput = function (event) {
        if (document.getElementById('has8chars')
            && document.getElementById('containsUpperCaseLetter')
            && document.getElementById('oneNumber')
            && document.getElementById('oneSpecial')) {
            if (validPasswordLength(event.target.value)) {
                document.getElementById('has8chars').setAttribute("class", "green-text");
            } else {
                document.getElementById('has8chars').setAttribute("class", "red-text");
            }

            if (containsUpperCaseLetter(event.target.value)) {
                document.getElementById('containsUpperCaseLetter').setAttribute("class", "green-text");
            } else {
                document.getElementById('containsUpperCaseLetter').setAttribute("class", "red-text");
            }

            if (containsNumber(event.target.value)) {
                document.getElementById('oneNumber').setAttribute("class", "green-text");
            } else {
                document.getElementById('oneNumber').setAttribute("class", "red-text");
            }

            if (containsSpecialChar(event.target.value)) {
                document.getElementById('oneSpecial').setAttribute("class", "green-text");
            } else {
                document.getElementById('oneSpecial').setAttribute("class", "red-text");
            }
        }
    }
}

function closePasswdValidation() {
    document.getElementById('passwdValidationBox').innerHTML = null;
}

function updateCPasswdValidation() {
    document.getElementById('cpasswdValidationBox').innerHTML =
        `<div class="grid-validationbox">
        <div id="passwdMatch">Passwords match</div>
        </div>`
    document.getElementById('cpasswd').oninput = function (event) {
        if (passwordsMatch(event.target.value, document.getElementById('passwd').value)) {
            document.getElementById('passwdMatch').setAttribute("class", "green-text");
        } else {
            document.getElementById('passwdMatch').setAttribute("class", "red-text");
        }
    }
}

function closeCPasswdValidation() {
    document.getElementById('cpasswdValidationBox').innerHTML = null;
}

function beginsWithLetter(str) {
    return str.charAt(0).match(/[a-zA-Z]/) != null;
}

// validEmail code used from w3resource.com
function validEmail(email) {
    return email.includes("@") && email.includes(".") && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('email').value);
}

function validPasswordLength(pwd) {
    return pwd.length > 7;
}

function containsUpperCaseLetter(pwd) {
    return pwd.search(/[A-Z]/) != -1;
}

function containsNumber(pwd) {
    return pwd.search(/[0-9]/) != -1;
}

function containsSpecialChar(pwd) {
    return pwd.search(/[/*\-+!@#$^&]/) != -1;
}

function validUsername(uname) {
    return beginsWithLetter(uname) && uname.length > 2;
}

function passwordsMatch(pwd, cpwd) {
    return pwd == cpwd;
}

function passwordValid(pwd) {
    return containsUpperCaseLetter(pwd) && containsNumber(pwd) && containsSpecialChar(pwd) && validPasswordLength(pwd);
}

function validForm() {
    if (!validUsername(document.getElementById('username').value)) {
        updateUserValidation();
    }
    if (!validEmail(document.getElementById('email').value)) {
        updateEmailValidation();
    }
    if (!passwordValid(document.getElementById('passwd').value)) {
        updatePasswdValidation();
    }
    if (!passwordsMatch(document.getElementById('passwd').value, document.getElementById('cpasswd').value)) {
        updateCPasswdValidation();
    }
    return validUsername(document.getElementById('username').value) &&
        validEmail(document.getElementById('email').value) &&
        passwordValid(document.getElementById('passwd').value) &&
        passwordsMatch(document.getElementById('passwd').value, document.getElementById('cpasswd').value);
}