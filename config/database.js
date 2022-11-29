const mongoose = require('mongoose');

const { MONGO_URL } = process.env;

exports.connect  = () => {
    mongoose.connect(MONGO_URL, {
        userNewUrlParser : true,
        userUnifiedTopology : true
    }).then(console.log(`DB connection success`))
    .catch(error =>{
        console.log(`DB connection failed`)
        console.log(error)
        process.exit(1)
    })
}