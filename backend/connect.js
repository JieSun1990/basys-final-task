const mongoose = require('mongoose')

//const url = "mongodb+srv://singhkaranpreet710:basys123@cluster0.svoihyy.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb+srv://singhkaranpreet710:basys123@cluster0.ajuzwjk.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
    await mongoose.connect(url,
                            {
                                useNewUrlParser: true,
                                useUnifiedTopology: true
                            })
}

module.exports = connect