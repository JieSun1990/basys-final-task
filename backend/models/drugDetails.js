const mongoose = require('mongoose');


var drugDetailSchema = new mongoose.Schema({
    Name: {type: String},
    conc: {type: String},
    Form: {type: String},
    Class: {type: Date},
    Size: {type: Number},
    CPTid: {type: String, required: true},
    quantity: {type: String},
    daySupply: {type: String},
    directions: {type: String},
}, { collection: 'drugDetails' });


var drugDetail = mongoose.model('drugDetails', drugDetailSchema);

module.exports = drugDetail;