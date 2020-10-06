const twilio = require('twilio');
const account = require('./twilio_account.json');

module.exports = new twilio.Twilio(account.accountsid, account.authToken);