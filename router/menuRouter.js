// express use 
const express = require('express');
const router = express.Router();

const Item = require('./../model/menu')

router.post('/item', async(req, res)=>{
    try{
        const data = req.body;
        const newItem = new Item(data);

        const response = await newItem.save();

        if(!response) {
            res.status(500).json({error: 'Invalid Data'});
        }
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(400).json({error :'Internal server error'});
    }
})

router.delete('/item/:id', async(req, res)=>{
    try{
        const Item_id =  req.params.id;
        const response = await Item.findByIdAndDelete(Item_id);
        if(!response) {
            res.json({error: 'No id available'});
        }
        res.status(400).json({response : "successfully deleted Data"});
    }catch(err){
        console.log(err);
        res.status(400).json({error :'Internal server error'});       
    }
})

router.get('/item', async(req, res)=>{
    try{
        const response = await Item.find();
        res.status(200).json(response);
        if(!response){
            res.json({error: 'No Data Found..'});
        }
    }catch(err){
        console.log(err);
        res.status(400).json({error :'Internal server error'});        
    }
})

router.get('/item/:flavour', async(req, res)=>{
    try{
        const Flavour = req.params.flavour;
        const data = await Item.find({flavour: Flavour});
        res.json(data);
    }catch(err){
        console.log(err);
        res.status(400).json({error: 'Internal server error'})
    }
})

router.put('/item/:id', async(req, res)=>{
    try{
        const updatedData = req.body;
        const Item_id =  req.params.id;
        const response = await Item.findByIdAndUpdate(Item_id,updatedData,{
            new: true,
            runValidators: true
        });
        if(!response) {
            res.json({error: 'No id available'});
        }
        res.status(400).json(response);
    }catch(err){
        console.log(err);
        res.status(400).json({error :'Internal server error'});       
    }
})

//export router
module.exports = router;