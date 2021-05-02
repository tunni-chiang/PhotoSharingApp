class Validator {
    usernameValid(username) {
        if(beginsWithLetter(username) && username.length > 2) {
            return true;
        } else {
            return false;
        }
    }
    
    emailValid(email) {
        
    }

    passwordValid(password) {

    }

    cpasswordValid(cpassword) {

    }

    beginsWithLetter(str) {
        return str.charAt(0).match(/[a-zA-Z]/) != null;
    }
    
    // validEmail code used from w3resource.com
    validEmail(email) {
        return email.includes("@") && email.includes(".") && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('email').value);
    }
    
    validPasswordLength(pwd) {
        return pwd.length > 7;
    }
    
    containsUpperCaseLetter(pwd) {
        return pwd.search(/[A-Z]/) != -1;
    }
    
    containsNumber(pwd) {
        return pwd.search(/[0-9]/) != -1;
    }
    
    containsSpecialChar(pwd) {
        return pwd.search(/[/*\-+!@#$^&]/) != -1;
    }
    
    validUsername(uname) {
        return beginsWithLetter(uname) && uname.length > 2;
    }
    
    passwordsMatch(pwd, cpwd) {
        return pwd == cpwd;
    }
    
    passwordValid(pwd) {
        return containsUpperCaseLetter(pwd) && containsNumber(pwd) && containsSpecialChar(pwd) && validPasswordLength(pwd);
    }

}

module.exports = Validator;