
var customeraddress = document.getElementById('customeraddress');
var customeremail = document.getElementById('customeremail');




var customeraddressError = document.getElementById('customeremailerr');
var customeremailError = document.getElementById('customeraddresserr');

// create a fucntion to check phone number
const checkAddress = () => {
    let aplhabet = /^[A-Za-z]+$/

    // check if empty
    if (customeraddress.value === "") {
        customeraddress.style.border = '2px solid red'
        customeraddress.focus()
        customeraddressError.textContent='Please enter your address';
        customeraddressError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    }

    // check whether value matches alphabet regex
    else if (!(customeraddress.value.match(aplhabet) )) {
        customeraddress.style.border = '2px solid red'
        customeraddressError.textContent='Please enter a valid address';
        customeraddressError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        customeremail.focus()
    } else {
        customeraddress.style.border = '2px solid green'
        customeraddressError.textContent = '';
    }
}

const checkEmail = () => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/
    
    // check if empty
    if (customeremail.value === "") {
        customeremail.style.border = '2px solid red'
        customeremailError.textContent='Please enter your email';
        customeremailError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        customeremail.focus()
    }
    else if (!(customeremail.value.match(emailRegex))) {
        customeremail.style.border = '2px solid red'
        customeremailError.textContent='Please enter your email';
        customeremailError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    } else {
        customeremail.style.border = '2px solid green'
        customeremailErr.textContent = '';
    }

}

//  let numbers = /^[0-9]+$/
// let alphanumeric = /^[0-9a-zA-Z]+$/
// let aplhabet = /^[A-Za-z]+$/
// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/