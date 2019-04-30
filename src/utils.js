const bcrypt = require("bcrypt");

const obterHash = (password, callback) => {
    bcrypt.hash(password, 10, (err, hash) => {
        callback(hash);
    });
};

module.exports = {
    obterHash
}