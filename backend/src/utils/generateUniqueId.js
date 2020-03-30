const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return id = crypto.randomBytes(4).toString('HEX');
}