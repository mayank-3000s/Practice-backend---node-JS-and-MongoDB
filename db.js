// we will import mongoose in db file
const mongoose = require('mongoose');

// set up URL which we found in cmd (->mongosh)
const mongoURL = 'mongodb://127.0.0.1:27017/menu';

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
