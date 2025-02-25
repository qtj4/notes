const validator = require('validator');

const validateEmail = (email) => {
    return validator.isEmail(email);
};

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return passwordRegex.test(password);
};

const sanitizeInput = (input) => {
    return validator.escape(input);
};

const validateURL = (url) => {
    return validator.isURL(url);
};

const validateMongoId = (id) => {
    return validator.isMongoId(id);
};

module.exports = {
    validateEmail,
    validatePassword,
    sanitizeInput,
    validateURL,
    validateMongoId
};