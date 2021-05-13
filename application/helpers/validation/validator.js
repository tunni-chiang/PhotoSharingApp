const validator = {};

validator.usernameValid = (username) => {
    return new Promise((resolve, reject) => {
        if (username && beginsWithLetter(username) && username.length > 2) {
            return resolve(true);
        } else {
            return resolve(false);
        }
    })
}

// emailValid code used from w3resource.com
validator.emailValid = (email) => {
    return new Promise((resolve, reject) => {
        return resolve(email && email.includes("@") &&
            email.includes(".") &&
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    });
};

validator.passwordValid = (pwd) => {
    return new Promise((resolve, reject) => {
        return resolve(pwd && containsUpperCaseLetter(pwd) && containsNumber(pwd) && containsSpecialChar(pwd) && validPasswordLength(pwd));
    });
};

validator.cpasswordValid = (pwd, cpwd) => {
    return new Promise((resolve, reject) => {
        return resolve(pwd && cpwd && pwd == cpwd);
    });
};

validator.postNoNulls = (a, b, c, d, e, f) => {
    return new Promise((resolve, reject) => {
        noNulls = Boolean(a) && Boolean(b) && Boolean(c) && Boolean(d) && Boolean(e) && Boolean(f);
        return resolve(noNulls);
    })
};

validator.notNull = (input) => {
    return new Promise((resolve, reject) => {
        return resolve(input);
    });
};

function beginsWithLetter(str) {
    return str.charAt(0).match(/[a-zA-Z]/) != null;
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

module.exports = validator;