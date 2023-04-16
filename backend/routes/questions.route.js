const router = require("express").Router();
// const Question = require("../models/questionnaire");

const questions1 = [
    {disease:"diabetes",que:"Does the patient have a family history of diabetes?",type:"radio",options:['Yes','No'],id:"1"},
    {disease:"diabetes",que:"What is patient's weight?",type:"number",id:"2",emr:true,required:true},
    {disease:"diabetes",que:"What is patient's height?",type:"number",id:"3",emr:true,required:true},
    {disease:"diabetes",que:"Has the patient been diagnosed with diabetes before?",default:"Yes",type:"radio",options:['Yes','No'],dependentQuestion:["5","6"],dependencyValue:"No",id:"4",required:true},
    {disease:"diabetes",que:"Is the patient currently taking any medication for diabetes?",default:"Yes",type:"radio",options:['Yes','No'],dependentQuestion:["6"],dependencyValue:"No",id:"5",required:true},
    {disease:"diabetes",que:"What is the patient's current HbA1c level?",default:"7.0",type:"number",id:"6"},
    {disease:"diabetes",que:"Has the patient experienced any hypoglycemic episodes in the past?",default:"No",type:"radio",options:['Yes','No'],id:"7"},
    {disease:"diabetes",que:"Does the patient have any known drug allergies?",default:"None",type:"text",id:"8",required:true},
    {disease:"diabetes",que:"Does the patient have any other medical conditions?",default:"None",type:"text",id:"9",required:true},
    {disease:"diabetes",que:"Is the patient a smoker?",default:"No",type:"radio",options:['Yes','No'],id:"10"}
];

const questions2 = [
    {disease:"cancer",que:"Has the patient been diagnosed with cancer before?",type:"radio",options:['Yes','No'], required:true,default:"Yes",dependentQuestion:["2","3"],dependencyValue:"No",id:"1"},
    {disease:"cancer",que:"If yes, what type of cancer was diagnosed?",type:"text",required:true,id:"2"},
    {disease:"cancer",que:"When the cancer was diagnosed?",type:"date",required:true,id:"3"},
    {disease:"cancer",que:"What symptoms the patient is experiencing?",type:"checkbox",options:['weight loss','fatigue','pain','difficulty in swallowing','others'], required:true,id:"4"},
    {disease:"cancer",que:"Has the patient undergone any imaging tests (such as X-rays, CT scans, or MRIs) for this condition in the past 3 months?",type:"radio",options:['Yes','No'],required:true,default:"Yes",dependentQuestion:["6"],dependencyValue:"No",id:"5"},
    {disease:"cancer",que:"If yes, please specify the date it was performed.",type:"date",required:true,id:"6"},
    {disease:"cancer",que:"Has the patient undergone any cancer treatment in the past 3 months (such as chemotherapy or radiation therapy)?",type:"radio",options:['Yes','No'],required:true,default:"Yes",dependentQuestion:["8"],dependencyValue:"No",id:"7"},
    {disease:"cancer",que:"If yes, please specify the type of treatment.",type:"text",required:true,id:"8"},
    {disease:"cancer",que:"Has the patient undergone any surgeries related to your cancer in the past 3 months?",type:"radio",options:['Yes','No'],required:true,default:"Yes",dependentQuestion:["10"],dependencyValue:"No",id:"9"},
    {disease:"cancer",que:"If yes, please specify the type of surgery.",type:"text",required:true,id:"10"}
];

router.get('/',async (req,res)=>{
    // const disease = req.query.disease;
    // const questions = await Question.find({disease:disease});
    res.send(questions1);
})

// const questions3 = [
//     {disease:"asthma",que:"Has the patient been diagnosed with asthma in the past 12 months?",id:"1",type:"radio",options:['Yes','No'], required:true,dependentQuestion:["3","4","5"],dependencyValue:"No",default:"Yes"},
//     {disease:"asthma",que:"How frequently does the patient experience asthma symptoms?",id:"2",type:"radio",options:['Rarely','Occasionally','Freqently'],required:true,default:"Rarely"},
//     {disease:"asthma",que:"Has the patient ever been hospitalized due to an asthma attack?",id:"3",type:"radio",options:['Yes','No'],required:true},
//     {disease:"asthma",que:"Has the patient ever required intubation or mechanical ventilation for asthma?",id:"4",type:"radio",options:['Yes','No']},
//     {disease:"asthma",que:"Does the patient use a peak flow meter to monitor your asthma?",id:"5",type:"radio",options:['Yes','No']},
//     {disease:"asthma",que:"How often does the patient use rescue inhaler?",id:"6",type:"radio",required:true,default:"Rarely",options:['Rarely','Occasionally','Freqently']},
//     {disease:"asthma",que:"Does the patient use a controller medication for asthma?",id:"7",type:"radio",options:['Yes','No']},
//     {disease:"asthma",que:"Is the patient allergic to any medications used to treat asthma?",id:"8",type:"radio",options:['Yes','No'],required:true,default:"No"},
//     {disease:"asthma",que:"Has the patient ever been diagnosed with any of the following conditions?",id:"9",type:"radio",options:['Chronic obstructive pulmonary disease (COPD)','Emphysema','Chronic bronchitis','None of the above'],required:true,default:"None of the above"},
//     {disease:"asthma",que:"Has the patient ever been a smoker or exposed to secondhand smoke?",id:"10",type:"radio",options:['Yes','No']}
// ];

// const questions4 = [
//     {disease:"cad",que:"Has the patient previously undergone any CAD treatment or procedures?",type:"radio",options:['Yes','No'], required:true,default:"Yes",dependentQuestion:["2"],dependencyValue:"No",id:"1"},
//     {disease:"cad",que:"If yes, please specify the treatment performed.",type:"text",required:true,id:"2"},
//     {disease:"cad",que:"Does the patient have a history of high blood pressure?",type:"radio",options:['Yes','No'], required:true,id:"3"},
//     {disease:"cad",que:"Does the patient have high cholesterol levels?",type:"radio",options:['Yes','No'],required:true,id:"4"},
//     {disease:"cad",que:"Has the patient ever experienced chest pain or discomfort?",type:"radio",options:['Yes','No'], required:true,id:"5"},
//     {disease:"cad",que:"Has the patient ever had a heart attack?",type:"radio",options:['Yes','No'],required:true,default:"No",dependentQuestion:["7"],dependencyValue:"Yes",id:"6"},
//     {disease:"cad",que:"Does the patient smoke?",type:"radio",options:['Yes','No'],required:true,id:"7"},
//     {disease:"cad",que:"Has the patient ever undergone angioplasty or coronary artery bypass surgery?",type:"radio",options:['Yes','No'],required:true,default:"No",id:"8"},
//     {disease:"cad",que:"Has the patient experienced shortness of breath or fatigue?",type:"radio",options:['Yes','No'],required:true,id:"9"},
//     {disease:"cad",que:"Does the patient have a family history of heart disease?",type:"radio",options:['Yes','No'],required:true,id:"10"}
// ]

// const questions5 = [
//     {disease:"hyperlipidemia",que:"What is the patient's weight?",type:"number",required:true,emr:true,id:"1"},
//     {disease:"hyperlipidemia",que:"What is the patient's height?",type:"number",required:true,emr:true,id:"2"},
//     {disease:"hyperlipidemia",que:"Does the patient have a history of liver disease?",type:"radio",options:['Yes','No'],required:true,dependentQuestion:["4","5"],dependencyValue:"No",id:"3"},
//     {disease:"hyperlipidemia",que:"What is patient's LDL cholestrol level?",type:"number",required:true,id:"4"},
//     {disease:"hyperlipidemia",que:"What is patient's HDL cholestrol level?",type:"number",required:true,id:"5"},
//     {disease:"hyperlipidemia",que:"Has the patient experienced any cardiovascular events in the past?",type:"radio",options:['Yes','No'],required:true,id:"6"},
//     {disease:"hyperlipidemia",que:"Does the patient have a history of kidney disease?",type:"radio",options:['Yes','No'],required:true,default:"No",id:"7"},
//     {disease:"hyperlipidemia",que:"What is the patient's blood pressure?",type:"number",required:true,id:"8"},
//     {disease:"hyperlipidemia",que:"Is the patient currently taking any medication for hyperlipidemia?",type:"radio",options:['Yes','No'],required:true,default:"Yes",dependentQuestion:["10"],dependencyValue:"No",id:"9"},
//     {disease:"hyperlipidemia",que:"If yes, please specify the medication.",type:"text",required:true,id:"10"}
// ]

// questions5.forEach((question)=>{
//     const newquestions = new Question(question);
//     newquestions.save().then(() => console.log('done'));
// })

module.exports = router;