const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    test: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('test1', dataSchema)