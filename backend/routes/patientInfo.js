const PatientInfo = require("../models/patientInfo")
const router = require("express").Router();

router.get('/', (req, res) => {
    PatientInfo.find({}).then((err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving patientInfo data');
      } else {
        // res.json(data);
        console.log(data);
      }
    });
  });

  module.exports = router;