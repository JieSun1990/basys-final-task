const PatientInfo = require("../models/patientInfo")
const router = require("express").Router();

router.get('/', async (req, res) => {
  const data = await PatientInfo.find();
  res.send(data);
  console.log(data);
});

  module.exports = router;