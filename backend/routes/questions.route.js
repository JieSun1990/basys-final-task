const router = require("express").Router();
const Question = require("../models/questionnaire");

router.get('/',async (req,res)=>{
    const disease = req.query.disease;
    const questions = await Question.find({disease:disease});
    res.send(questions);
})

module.exports = router;