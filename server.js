const express = require('express');
const app = express();

const db = require('./db');
const Item = require('./model/menu');

const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.get('/',(req, res)=>{
    res.status(200).json({response : 'successfull'});
})

const menuRouter = require('./router/menuRouter');
app.use('/menu', menuRouter);

app.listen(3000,()=>{
    console.log("server is on port 3000");
})