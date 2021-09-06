/** packages */
const CryptoJS = require("crypto-js");
const config = require("config");


/** Encrypt password */
exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretKeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
};

/** Descrypted password */
exports.DecryptPassword = (password) => {
    let secretKey = config.get("secretKeys").cryptojs;
    let bytes = CryptoJS.AES.decrypt(password, secretKey);
    let originalPassword = bytes.toString(CryptoJS.enc.Utf8); 
    return originalPassword;
};


