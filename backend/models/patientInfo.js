const mongoose = require('mongoose');


const patientInfoSchema = new mongoose.Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  dob: {type: Date, required: true},
  age: {type: Number, required: true},
  gender: {type: String, required: true},
  id: {type: Number, required: true , unique: true},
  height: {type: Number, required: true},
  weight: {type: Number, required: true},
  bloodGroup: {type: String, required: true},
  BMI: {type: Number, required: true},
  medicalhis: {
      disease: {type: Array, required: true},
      allergies: {type: Array, required: true},
  },
  familyhis: {
      fatherside: {type: Array, required: true},
      motherside: {type: Array, required: true},
  },
  status: {type: String, required: true},
},
{ timestamps: true }
);


const patientInfo = mongoose.model('patientInfo', patientInfoSchema);

module.exports = patientInfo;
