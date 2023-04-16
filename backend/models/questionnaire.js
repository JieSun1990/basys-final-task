const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionSchema = new Schema({
    disease:{
        type: String
    },
    que:{
        type: String
    },
    type:{
        type: String
    },
    options:{
        type: [String]
    },
    required:{
        type: Boolean
    },
    default:{
        type: String
    },
    dependentQuestion:{
        type: [String]
    },
    dependencyValue:{
        type: String
    },
    id:{
        type:String
    }
}, {
    collection: 'questions'
});

module.exports = mongoose.model('Question', questionSchema);