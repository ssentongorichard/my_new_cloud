const aovalidate = (event) => {
    let val = 0;
    
    var role = document.getElementById('role');
    var datetoday = document.getElementById('datetoday');
    var names = document.getElementById('names');
    var gender = document.getElementById('gender');
    var foid = document.getElementById('foid');
    var password = document.getElementById('password');

    var roleError = document.getElementById('roleerr');
    var datetodayError = document.getElementById('datetodayerr');
    var namesError = document.getElementById('nameserr');
    var genderError = document.getElementById('gendererr');
    var foidError = document.getElementById('foiderr');
    var passwordError = document.getElementById('passworderr');


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
        datetodayError.textContent='Please enter date of birth';
        datetodayError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        datetoday.style.border='1px solid green';
        datetodayError.textContent = '';
    }
    //Names 
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
    //FOID
    const foidRegex = /^[0-9a-zA-Z]+$/; 
    if(foid.value==''){
        foid.style.border = '1px solid red';
        foidError.textContent='Please enter foid';
        foidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else if(!(foid.value.match(foidRegex))){
        foid.style.border = '1px solid red';
        foidError.textContent='Please enter valid foid';
        foidError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        foid.style.border='1px solid green';
        foidError.textContent = '';
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
    
    if(val > 0){
        event.preventDefault()
    }
    
    };
    