const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB connection successfully"))
    .catch((error)=>{
        console.log("Error aa gaya");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;