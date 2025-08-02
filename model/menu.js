const mongoose = require('mongoose');

//cefine schema 
const newItemSchema =new mongoose.Schema({
    name :{
        type : String,
        enum : ['corneto','bati','scoop'],
        require : true
    },
    flavour :{
        type : String,
        enum : ['chocolate','strawberry','vanilla'],
        required : true
    },
    quantity :{
        type : Number,
        required : true
    },
    price :{
        type : Number,
        require : true
    }
})

//save & export

const Item = mongoose.model('Item',newItemSchema);
module.exports = Item;