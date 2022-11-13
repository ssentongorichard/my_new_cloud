const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
role: {
    type:String,
    // required: true
},
username: {
    type:String,
    trim: true
},
password: {
    type:String,
    // required: true,
    trim: true

},   
datetoday:{
    type:Date,
    // required: true,
    trim: true
},
names: {
    type:String
},
dateofbirth:{
    type:Date
},
ward: {
    type:String
},
gender: {
    type:String
},

activity: {
    type:String
},
residence: {
    type:String
},
foid: {
    type:String,
    unique: true
},
nid: {
    type:String,
    unique: true
},
phone: {
    type:String
},
yearsofstay: {
    type:Number,
    trim: true
},
address: {
    type:String
},
})
userSchema.plugin(passportLocalMongoose,{
 usernameField: 'foid'  
})
module.exports = mongoose.model('Registration',userSchema);