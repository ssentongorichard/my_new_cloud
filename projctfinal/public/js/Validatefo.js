//regex for foid
// const unregex = /^FO-([0-9]{3})+$/;

const fovalidate = (event) => {
let val = 0;

var role = document.getElementById('role');
var datetoday = document.getElementById('datetoday');
var names = document.getElementById('names');
var dateofbirth = document.getElementById('dateofbirth');
// var ward = document.getElementById('ward');
var gender = document.getElementById('gender');
var activity = document.getElementById('activity');
var username = document.getElementById('username');
var yearsofstay = document.getElementById('yearsofstay');
var foid = document.getElementById('foid');
var nid = document.getElementById('nid');
var phone = document.getElementById('phone');
var password = document.getElementById('password');
var address = document.getElementById('address');

// var yearsofstay = document.getElementById('yearsofstay');
// var email = document.getElementById('email');
// var residence = document.getElementById('residence');



var roleError = document.getElementById('roleerr');
var datetodayError = document.getElementById('datetodayerr');
var namesError = document.getElementById('nameserr');
var dateofbirthError = document.getElementById('dateofbirtherr');
// var wardError = document.getElementById('warderr');
var genderError = document.getElementById('gendererr');
var activityError = document.getElementById('activityerr');
var usernameError = document.getElementById('usernameerr');
var yearsofstayError = document.getElementById('yearsofstayerr');
var foidError = document.getElementById('foiderr');
var nidError = document.getElementById('niderr');
var phoneError = document.getElementById('phoneerr');
var passwordError = document.getElementById('passworderr');
var addressError = document.getElementById('addresserr');



// var yearsofstayError = document.getElementById('yearsofstayerr');
// var emailError = document.getElementById('emailerr');
// var residenceError = document.getElementById('residenceerr');

//Role
if(role.value=='role'){
    role.style.border = '1px solid red';
    roleError.textContent='Please specify role';
    roleError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    role.style.border='1px solid green';
    roleError.textContent = '';
}

//datetoday
if(datetoday.value==''){
    datetoday.style.border = '1px solid red';
    datetodayError.textContent='Please enter date of registration';
    datetodayError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    datetoday.style.border='1px solid green';
    datetodayError.textContent = '';
}
//Full Name 
const namesRegex = /^([a-zA-Z])+(\s)+[a-zA-Z]+$/; 
if(names.value==''){
    names.style.border = '1px solid red';
    namesError.textContent='Enter two names with one space in between';
    namesError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}
else if(!(names.value.match(namesRegex))){
    names.style.border = '1px solid red';
    namesError.textContent='Enter two names with one space in between';
    namesError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}
else{
    names.style.border='1px solid green';
    namesError.textContent = '';
}

//dob
if(dateofbirth.value==''){
    dateofbirth.style.border = '1px solid red';
    dateofbirthError.textContent='Please enter date of birth';
    dateofbirthError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    dateofbirth.style.border='1px solid green';
    dateofbirthError.textContent = '';
}
// //Ward
// if(ward.value==''){
//     ward.style.border = '1px solid red';
//     wardError.textContent='Please specify ward';
//     wardError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
//     val++
// }else{
//     ward.style.border='1px solid green';
//     wardError.textContent = '';
// }

//Gender
if(gender.value=='select your Gender'){
    gender.style.border = '1px solid red';
    genderError.textContent='Please specify gender';
    genderError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    gender.style.border='1px solid green';
    genderError.textContent = '';
}

//Activity
if(activity.value=='select activity'){
    activity.style.border = '1px solid red';
    activityError.textContent='Please specify activity';
    activityError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    activity.style.border='1px solid green';
    activityError.textContent = '';
}

//USERNAME
const usernameRegex = /^[0-9a-zA-Z]+$/; 
if(username.value==''){
    username.style.border = '1px solid red';
    usernameError.textContent='Please enter username';
    usernameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else if(!(username.value.match(usernameRegex))){
    username.style.border = '1px solid red';
    usernameError.textContent='Please enter valid username';
    usernameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    username.style.border='1px solid green';
    usernameError.textContent = '';
}

//Years of stay
if(yearsofstay.value==''){
    yearsofstay.style.border = '1px solid red';
    yearsofstayError.textContent='Enter years at current residence';
    yearsofstayError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else if(!((yearsofstay.value)>10)){
    yearsofstay.style.border = '1px solid red';
    yearsofstayError.textContent='years of stay must be greater than 10';
    yearsofstayError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
val++
}else{
    yearsofstay.style.border='1px solid green';
    yearsofstayError.textContent = '';
}


//FO ID
const foidRegex = /^[0-9a-zA-Z]+$/; 
if(foid.value==''){
    foid.style.border = '1px solid red';
    foidError.textContent='Please enter unique ID';
    foidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else if(!(foid.value.match(foidRegex))){
    foid.style.border = '1px solid red';
    foidError.textContent='Please enter valid unique ID';
    foidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    foid.style.border='1px solid green';
    foidError.textContent = '';
}

//NIN
const nidRegex = /^[0-9a-zA-Z]+$/; 
if(nid.value==''){
    nid.style.border = '1px solid red';
    nidError.textContent='Please enter nid';
    nidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else if(!(nid.value.match(nidRegex))){
    nid.style.border = '1px solid red';
    nidError.textContent='Please enter valid nid';
    nidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    nid.style.border='1px solid green';
    nidError.textContent = '';
}

//Phone Number
const phoneRegex = /^\(?([0-9]{4})\)?[-.]?([0-9]{6})$/; 
if(phone.value==''){
    phone.style.border = '1px solid red';
    phoneError.textContent='Please enter phone number';
    phoneError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++

}else if(!(phone.value.match(phoneRegex))){
    phone.style.border = '1px solid red';
    phoneError.textContent='Enter phone number without country code.';
    phoneError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    phone.style.border='1px solid green';
    phoneError.textContent = '';
}

//password
if(password.value ==''){
    password.style.border = '1px solid red';
    passwordError.textContent='Please enter password';
    passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else if(password.value.length < 5){
    password.style.border = '1px solid red';
    passwordError.textContent='Should be greater than 5 characters';
    passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else if(password.value.length > 16){
    password.style.border = '1px solid red';
    passwordError.textContent='Should be less than 17 characters';
    passwordError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}
else{
    password.style.border='1px solid green';
    passwordError.textContent = '';
}

//Address - Directions to home
if(address.value==''){
    address.style.border = '1px solid red';
    addressError.textContent='Please enter home address';
    addressError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    val++
}else{
    address.style.border='1px solid green';
    addressError.textContent = '';
}
// //doreg
// if(doreg.value==''){
//     doreg.style.border = '1px solid red';
//     doregError.textContent='Please enter date of registration';
//     doregError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
//     val++
// }else{
//     doreg.style.border='1px solid green';
//     doregError.textContent = '';
// }
// //Residence type
// if(residenceType.value==''){
//     residenceType.style.border = '1px solid red';
//     residencetypeError.textContent='Please specify residence type';
//     residencetypeError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
//     val++
// }else{
//     residenceType.style.border='1px solid green';
//     residencetypeError.textContent = '';
// }




if(val > 0){
    event.preventDefault()
}

}













