const express = require('express');
const router = express.Router();
//Importing model
const Registration = require('../models/User');
//structure of a route
//Urban farmer routes
router.get('/registeruf',(req,res) =>{
res.render('registeruf');
})
//check if something entered is alredy existing in the database
router.post('/registeruf',async(req,res) =>{
    console.log(req.body);
    try{
        const user = new Registration(req.body);
        let uniqueExist = await Registration.findOne({foid:req.body.foid});
        let ninNumberExist = await Registration.findOne({nid:req.body.nid});
        if (uniqueExist){
            return res.status(400).send("Sorry foid you entered is aready existing");
        }else if (ninNumberExist){
             return res.status(400).send("Sorry the nid you entered already exists");   
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
   
});

//FarmerOne routes
router.get('/registerfo',(req,res) =>{
    res.render('registerfo');
    })
    //check if something entered is alredy existing in the database
    router.post('/registerfo',async(req,res) =>{
        console.log(req.body);
        try{
            const user = new Registration(req.body);
            let uniqueExist = await Registration.findOne({foid:req.body.foid});
            let ninNumberExist = await Registration.findOne({nid:req.body.nid});
            if (uniqueExist){
                return res.status(400).send("Sorry foid you entered is aready existing");
            }else if (ninNumberExist){
                 return res.status(400).send("Sorry the nid you entered already exists");   
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
       
    });
    //selecting Farmer from the database
    router.get("/FarmerOneList", async (req,res)=> {
        try{
            let farmerones = await Registration.find({ role: "FarmerOne"});
            res.render("FOList", {farmerones:farmerones});
        } catch (error) {
            res.status(400).send("Unable to find Farmer One in the database")
        }
    })
// //selecting UrbanFarmer from the database
router.get("/UrbanFarmerList", async (req,res)=> {
    try{
        let urbanfarmers = await Registration.find({ role: "UrbanFarmer"});
        res.render("UFList", {urbanfarmers:urbanfarmers});
    } catch (error) {
        res.status(400).send("Unable to find UrbanFarmers in the database")
    }
})


// Update get and post Route
router.get('/farmerOne/update/:id', async (req,res) => {
    try {
      const updatefarmerone = await Registration.findOne({_id:req.params.id})
      res.render('update-farmerone', {farmerone:updatefarmerone});
      console.log('Updated farmerone', updatefarmerone);
    } catch (error) {
      res.status(400).send('Sorry we seem unable to update the Farmer One');
    }
  });
  
  router.post('/farmerOne/update', async (req,res) => {
    try {
      await Registration.findOneAndUpdate({_id:req.query.id}, req.body);
      res.redirect('/FarmerOneList');
    } catch (error) {
      res.status(400).send('Sorry we were unable to update FarmerOne');
    }
  });

// Urban farmer Update get and post Route
router.get('/Urbanfarmer/update/:id', async (req,res) => {
    try {
      const updateurbanfarmer = await Registration.findOne({_id:req.params.id})
      res.render('update-urbanfarmer', {urbanfarmer:updateurbanfarmer});
      console.log('Updated urbanfarmer', updateurbanfarmer);
    } catch (error) {
      res.status(400).send('Sorry we seem unable to update the Urban Farmer');
    }
  });
  
  router.post('/urbanfarmer/update', async (req,res) => {
    try {
      await Registration.findOneAndUpdate({_id:req.query.id}, req.body);
      res.redirect('/UrbanFarmerList');
    } catch (error) {
      res.status(400).send('Sorry we were unable to update FarmerOne');
    }
  });


  // Delete farmerone
router.post('/farmerOne/delete', async (req,res) => {                   // the route path here is attached to the form action of the deletebe button in the productlist.pug file where items from where deleting items will be effected.
    try {
      await Registration.deleteOne({_id:req.body.id});             // await is normally on database operations so the key word await is normally followed by the name of the database collection where the operation is going to take place.
      res.redirect('back');
    } catch (error) {
      res.status(400).send('Sorry farmerone could not be deleted');
    }
  });
  

//Agricultural Officer Routes
router.get('/registerao',(req,res) =>{
    res.render('registerao');
    })
    //check if something entered is alredy existing in the database
    router.post('/registerao',async(req,res) =>{
        console.log(req.body);
        try{
            const user = new Registration(req.body);
            let uniqueExist = await Registration.findOne({foid:req.body.foid});
            let ninNumberExist = await Registration.findOne({nid:req.body.nid});
            if (uniqueExist){
                return res.status(400).send("Sorry foid you entered is aready existing");
            }else if (ninNumberExist){
                 return res.status(400).send("Sorry the nid you entered already exists");   
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
       
    });
    //selecting items from the database
    router.get("/AgricOfficerList", async (req,res)=> {
        try{
            let farmerones = await Registration.find({ role: "AgricOfficer"});
            res.render("AgricOfficerList", {farmerones:farmerones});
        } catch (error) {
            res.status(400).send("Unable to find Agric Officer in the database")
        }
    })


//This is the last line always
module.exports = router;