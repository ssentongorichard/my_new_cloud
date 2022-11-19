
const uploadsvalidate = (event) => {
    let val = 0;
    
    var datetoday = document.getElementById('datetoday');
    var names = document.getElementById('names');
    var ward = document.getElementById('ward');
    var address = document.getElementById('address');
    var productcode = document.getElementById('productcode');
    var productcategory = document.getElementById('productcategory');
    var productname = document.getElementById('productname');


    
    var datetodayError = document.getElementById('datetodayerr');
    var namesError = document.getElementById('nameserr');
    var wardError = document.getElementById('warderr');
    var addressError = document.getElementById('addresserr');
    var productcodeError = document.getElementById('productcodeerr');
    var productcategoryError = document.getElementById('productcategoryerr');
    var productnameerrError = document.getElementById('productnameerr');

    
    //datetoday
    if(datetoday.value==''){
        datetoday.style.border = '1px solid red';
        datetodayError.textContent='Please enter date of birth';
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
    //Ward
    if(ward.value==''){
        ward.style.border = '1px solid red';
        wardError.textContent='Please specify ward';
        wardError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        ward.style.border='1px solid green';
        wardError.textContent = '';
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
    
    if(val > 0){
        event.preventDefault()
    }
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    