const mongoose = require('mongoose');

const contactDataSchema = new mongoose.Schema({
    address: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    }
})

const contactDataModel = mongoose.model('ContactData', contactDataSchema);

module.exports = contactDataModel;