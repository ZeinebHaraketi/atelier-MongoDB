const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: String,
    phone: Number
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;