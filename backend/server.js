const express = require("express");
const app = express();
const connect = require("./connect")
const questionRoute = require('./routes/questions.route');
const patientInfoRoute = require("./routes/patientInfo");
const drugDetails = require("./routes/drugDetails");

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/api/patientInfo", patientInfoRoute);
app.use('/api/questions',questionRoute);
app.use('/api/drugDetails:id',drugDetails);

app.listen(5555,()=>{
    console.log("Server running on http://localhost:5555");
    connect().then(()=>{
        console.log("Database connection successfull")
    }).catch((err)=>{
        console.error(err)
    })
})