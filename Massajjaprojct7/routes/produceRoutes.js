const express = require('express');
const router = express.Router();
//Importing model
const Registration = require('../models/User');
//structure of a route
router.get('/market',(req,res) =>{
res.render('market');
})
router.post('/produce',async(req,res) =>{
    console.log(req.body);
    try{
        const user = new Registration(req.body);
        let uniqueExist = await Registration.findOne({foid:req.body.uniquenumber});
        if (uniqueExist){
            return res.status(400).send("Sorry this Number is aready existing");
        }else{
        await Registration.register(user, req.body.password, (error) =>{
            if (error) {
                throw error
            }
            res.send('registration successful');
        });
    }
    }catch (error) {
        res.status(400).send("Sorry we are updating system");
        console.log('error');
    }
   
})


//This is the last line always
module.exports = router;