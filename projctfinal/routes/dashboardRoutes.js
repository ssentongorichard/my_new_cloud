const express = require('express');
const router = express.Router();
// const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');

//Importing model
const Registration = require('../models/User');
const UrbanFarmerUpload = require('../models/Urbanfarmerupload');

//structure of a route
// router.get('/dashboardao',connectEnsureLogin.ensureLoggedIn(), (req,res) =>{
// res.render('dashboardAO');
// })
// router.post('/dashboard',async(req,res) =>{
//     console.log(req.body);

//AO Aggregating routes--------------------------------
router.get("/dashboardao", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'AgricOfficer'){
        try {
            let totalPoultry = await UrbanFarmerUpload.aggregate([
            { $match: { productcategory: "Poultry" } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$stockcount" },
            totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },    
            }}
            ])
            let totalHort = await UrbanFarmerUpload.aggregate([
                { $match: { productcategory: "Horticulture" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])
            let totalDairy = await UrbanFarmerUpload.aggregate([
                { $match: { productcategory: "Dairy" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])

            //calculating Orders
            let totalOrders = await UrbanFarmerUpload.aggregate([
                { $match: { availability: "booked" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])
            
            console.log("Poultry collections", totalPoultry)
            console.log("Hort collections", totalHort)
            console.log("Dairy collections", totalDairy)

            res.render("dashboardAO", { 
            title: 'Reports', 
            totalP:totalPoultry[0],
            totalH:totalHort[0],
            totalD:totalDairy[0],
            totalO:totalOrders[0],
            });
            
            router.post('/dashboardao',async(req,res) =>{
                console.log(req.body);
            });

        } catch (error) {
            res.status(400).send("unable to find items in the database");
        }
        
    }else {
        res.send("This page is only accessed by Agric Officer")
    }
}); 



    
//FO Aggregating routes--------------------------------
router.get("/dashboardfo", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'FarmerOne'){
        try {
            let totalPoultry = await UrbanFarmerUpload.aggregate([
            { $match: { productcategory: "Poultry" } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$stockcount" },
            totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },    
            }}
            ])
            let totalHort = await UrbanFarmerUpload.aggregate([
                { $match: { productcategory: "Horticulture" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])
            let totalDairy = await UrbanFarmerUpload.aggregate([
                { $match: { productcategory: "Dairy" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])

            //calculating Orders
            let totalOrders = await UrbanFarmerUpload.aggregate([
                { $match: { availability: "booked" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])
            
            console.log("Poultry collections", totalPoultry)
            console.log("Hort collections", totalHort)
            console.log("Dairy collections", totalDairy)

            res.render("dashboardFO", { 
            title: 'Reports', 
            totalP:totalPoultry[0],
            totalH:totalHort[0],
            totalD:totalDairy[0],
            totalO:totalOrders[0],
            });
            
            router.post('/dashboardfo',async(req,res) =>{
                console.log(req.body);
            });

        } catch (error) {
            res.status(400).send("unable to find items in the database");
        }
        
    }else {
        res.send("This page is only accessed by Farmer Ones")
    }
}); 



//UF Aggregating routes--------------------------------
router.get("/dashboarduf", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    req.session.user = req.user;
    if(req.user.role == 'UrbanFarmer'){
        try {
            let totalPoultry = await UrbanFarmerUpload.aggregate([
            { $match: { productcategory: "Poultry" } },
            { $group: { _id: "$all", 
            totalQuantity: { $sum: "$stockcount" },
            totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },    
            }}
            ])
            let totalHort = await UrbanFarmerUpload.aggregate([
                { $match: { productcategory: "Horticulture" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])
            let totalDairy = await UrbanFarmerUpload.aggregate([
                { $match: { productcategory: "Dairy" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])

            //calculating Orders
            let totalOrders = await UrbanFarmerUpload.aggregate([
                { $match: { availability: "booked" } },
                { $group: { _id: "$all", 
                totalQuantity: { $sum: "$stockcount" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$stockcount" ] } },
            }}
            ])
            
            console.log("Poultry collections", totalPoultry)
            console.log("Hort collections", totalHort)
            console.log("Dairy collections", totalDairy)

            res.render("dashboardUF", { 
            title: 'Reports', 
            totalP:totalPoultry[0],
            totalH:totalHort[0],
            totalD:totalDairy[0],
            totalO:totalOrders[0],
            });
            
            router.post('/dashboarduf',async(req,res) =>{
                console.log(req.body);
            });

        } catch (error) {
            res.status(400).send("unable to find items in the database");
        }
        
    }else {
        res.send("This page is only accessed by Urban Farmer")
    }
}); 


//This is the last line always
module.exports = router;