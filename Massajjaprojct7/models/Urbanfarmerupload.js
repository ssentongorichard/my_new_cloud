const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
productcode: {
  type: String
},
productcategory: {
  type: String
  
},
productname: {
  type: String
},
producttype: {
  type: String
},
productimage: {
  type: String
},
stockcount: {
  type: Number
},
stockmeasure: {
  type: String
},
quantity: {
  type: Number
},
unitprice: {
  type: Number
},
address: {
  type: String 
},
customeraddress: {
  type: String 
},
customeremail: {
  type: String 
},
uniquenum: {
  type: String
},
datetoday: {
  type: Date
},
ward: {
  type: String
  
},
names: {
  type: String
  
},
pytmode: {
  type: String
},
deliverymode: {
  type: String
},
status: {
  type: String,
  default: "Pending",
  enum: ['Pending', 'Approved']
},
availability: {
  type: String, 
  default: "available",
  enum: ["available", "booked", "N/A"] 
  }
})

module.exports = mongoose.model('UrbanFarmerUpload', userSchema);