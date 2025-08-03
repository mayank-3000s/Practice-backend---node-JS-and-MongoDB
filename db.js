// we will import mongoose in db file
const mongoose = require('mongoose');

require('dotenv').config();
// set up URL which we found in cmd (->mongosh)
//const mongoURL = process.env.MONGO_URL;
const mongoURL = process.env.MONGO_URL_LIVE;

// connect the url and mongoose database
mongoose.connect(mongoURL);

// make a variable and connect it to mongoose 
const db = mongoose.connection;

// add event listner
db.on('connected', ()=>{
    console.log("Database is connected");
})

db.on('error', ()=>{
    console.log("Internal server error");
})

db.on('disconnected', ()=>{
    console.log("Database is disconnected");
})

//export 
module.exports = db;
