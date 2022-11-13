const express= require('express');
const router = express.Router(); 
const multer = require('multer');
const connectEnsureLogin = require('connect-ensure-login');
// Importing the User Model or Schema
const UrbanFarmerUpload = require('../models/Urbanfarmerupload');
const Registration = require('../models/User');
const { get } = require('mongoose');
// see comments.txt



// image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
  cb(null, file.originalname);
  }
  });
  
  // instantiate variable upload to store multer functionality to upload image
  var upload = multer({ storage: storage }) 

// Upload Product/Produce route
// router.get("/ufarmerupload", async (req, res) => {
//   let urbanFarmerList = await Registration.find({role: 'urbanfarmer'});
//   res.render('ufupload', {urbanfarmers:urbanFarmerList});
// });

router.get("/ufarmerupload", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  req.session.user = req.user
  try {
    res.render("ufupload",{currentUser:req.session.user});
  } catch (error) {
    res.status(400).send('We are un able to get the user');
  }
});
  
router.post("/ufarmerupload", connectEnsureLogin.ensureLoggedIn(), upload.single('productimage'), async (req, res) => {
  console.log(req.body);
  try {
    const product = new UrbanFarmerUpload(req.body);
    product.productimage = req.file.path;
    await product.save();
      res.redirect('/ufarmerupload');
    }
    catch (error) {
      res.status(400).send("Sorry we were unable to save the product.");
      console.log(error);
  }
});

// Getting List of Produce From Database; The sort on line 55 is to get the most currently added product show up at the top.
router.get('/productlist',connectEnsureLogin.ensureLoggedIn(), async (req,res) => {
  req.session.user = req.user
  try {
    // const order = {_id:-1}
    let products = await UrbanFarmerUpload.find().sort({$natural:-1});
    res.render('productlisttable', {myproducts:products,currentUser:req.session.user});
  } catch (error) {
    res.status(400).send("Sorry there are no products matching your request");
    console.log(error);
  }
});

// Update get and post Route
router.get('/produce/update/:id', async (req,res) => {
  try {
    const updateProduct = await UrbanFarmerUpload.findOne({_id:req.params.id})
    res.render('update-product', {product:updateProduct});
    console.log('Updated Produce', updateProduct);
  } catch (error) {
    res.status(400).send('Sorry we seem unable to update the product');
  }
});

router.post('/produce/update', async (req,res) => {
  try {
    await UrbanFarmerUpload.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/productlist');
  } catch (error) {
    res.status(400).send('Sorry we were unable to update product');
  }
});

// Approve get and post Route
router.get('/produce/approve/:id', async (req,res) => {
  try {
    const updateProduct = await UrbanFarmerUpload.findOne({_id:req.params.id})
    res.render('approve', {product:updateProduct});
    console.log('Product approved', updateProduct);
  } catch (error) {
    res.status(400).send('Sorry we seem unable to approve the product');
  }
});

router.post('/produce/approve', async (req,res) => {
  try {
    await UrbanFarmerUpload.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/productlist');
  } catch (error) {
    res.status(400).send('Sorry we were unable to update product');
  }
});

// Changing availability Route
router.get('/produce/available/:id', async (req,res) => {
  try {
    const saleProduct = await UrbanFarmerUpload.findOne({_id:req.params.id})
    res.render('availability', {item:saleProduct});
    console.log('Product approved', saleProduct);
  } catch (error) {
    res.status(400).send('Sorry we seem unable to approve the product');
  }
});

router.post('/produce/available', async (req,res) => {
  try {
    await UrbanFarmerUpload.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/seeapprovedlist');
  } catch (error) {
    res.status(400).send('Sorry we were unable to update product');
  }
});

// Urban farmer dashboard route
router.get('/uf-area', connectEnsureLogin.ensureLoggedIn(), (req, res) => {           // esures login to access urban farmer area or dashboard
  req.session.user = req.user;
  if (req.user.role == 'urbanfarmer') {
    res.render('dash-uf');
  } else {
    res.send('This page is only accessible by Urban farmer');
  }
});

// Return approved list
router.get('/seeapprovedlist', async (req,res) => {
  try {
    // const order = {_id:-1}
    let products = await UrbanFarmerUpload.find().sort({$natural:-1});
    res.render('listofapproved', {goods:products});
    console.log(products)
  } catch (error) {
    res.status(400).send("Sorry there are no products matching your request");
    console.log(error);
  }
});
// Return availablity list
router.get('/seelistedlist', async (req,res) => {
  try {
    // const order = {_id:-1}
    let products = await UrbanFarmerUpload.find().sort({$natural:-1});
    res.render('marketlist', {goods:products});
    console.log(products)
  } catch (error) {
    res.status(400).send("Sorry there are no products matching your request");
    console.log(error);
  }
});

// Order get and post Route
router.get('/produce/order/:id', async (req,res) => {
  try {
    const updateProduct = await UrbanFarmerUpload.findOne({_id:req.params.id})
    res.render('order', {product:updateProduct});
    console.log('Product approved', updateProduct);
  } catch (error) {
    res.status(400).send('Sorry we seem unable to approve the product');
  }
});

router.post('/produce/order', async (req,res) => {
  try {
    await UrbanFarmerUpload.findOneAndUpdate({_id:req.query.id}, req.body);
    res.redirect('/seelistedlist');
  } catch (error) {
    res.status(400).send('Sorry we were unable to update product');
  }
});
// Return orders list
router.get('/seeorderslist', async (req,res) => {
  try {
    // const order = {_id:-1}
    let products = await UrbanFarmerUpload.find().sort({$natural:-1});
    res.render('orderslist', {goods:products});
    console.log(products)
  } catch (error) {
    res.status(400).send("Sorry there are no products matching your request");
    console.log(error);
  }
});


// Delete Product
router.post('/produce/delete', async (req,res) => {                   // the route path here is attached to the form action of the deletebe button in the productlist.pug file where items from where deleting items will be effected.
  try {
    await UrbanFarmerUpload.deleteOne({_id:req.body.id});             // await is normally on database operations so the key word await is normally followed by the name of the database collection where the operation is going to take place.
    res.redirect('back');
  } catch (error) {
    res.status(400).send('Sorry product could not be deleted');
  }
});


module.exports = router; 
