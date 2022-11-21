
const uploadsvalidate = (event) => {
    let val = 0;
    
    var datetoday = document.getElementById('datetoday');
    var productcode = document.getElementById('productcode');
    var productcategory = document.getElementById('productcategory');
    var productname = document.getElementById('productname');
    var stockcount = document.getElementById('stockcount');
    var stockmeasure = document.getElementById('stockmeasure');
    var organic = document.getElementById('organic');
    var noneorganic = document.getElementById('noneorganic');
    var names = document.getElementById('names');
    var unitprice = document.getElementById('unitprice');
    var pytmode = document.getElementById('pytmode');
    var deliverymode = document.getElementById('deliverymode');
    var productimage = document.getElementById('productimage');
    var customeremail = document.getElementById('customeremail');
    var customeraddress = document.getElementById('customeraddress');
    var ward = document.getElementById('ward');
    var address = document.getElementById('address');
    


    
    var datetodayError = document.getElementById('datetodayerr');
    var productcodeError = document.getElementById('productcodeerr');
    var productcategoryError = document.getElementById('productcategoryerr');
    var productnameError = document.getElementById('productnameerr');
    var stockcountError = document.getElementById('stockcounterr');
    var stockmeasureError = document.getElementById('stockmeasureerr');
    var producttypeError = document.getElementById('producttypeerr');
    var namesError = document.getElementById('nameserr');
    var unitpriceError = document.getElementById('unitpriceerr');
    var pytmodeError = document.getElementById('pytmodeerr');
    var deliverymodeError = document.getElementById('deliverymodeerr');
    var productimageError = document.getElementById('productimageerr');
    var customeremailError = document.getElementById('customeremailerr');
    var customeraddressError = document.getElementById('customeraddresserr');
    var wardError = document.getElementById('warderr');
    var addressError = document.getElementById('addresserr'); 

    
    //datetoday
    if(datetoday.value==''){
        datetoday.style.border = '1px solid red';
        datetodayError.textContent='Please enter date';
        datetodayError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        datetoday.style.border='1px solid green';
        datetodayError.textContent = '';
    }
    //productcode
    if(productcode.value==''){
        productcode.style.border = '1px solid red';
        productcodeError.textContent='Productcode is required';
        productcodeError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        productcode.style.border='1px solid green';
        productcodeError.textContent = '';
    }
    //productcategory
    if(productcategory.value==''){
        productcategory.style.border = '1px solid red';
        productcategoryError.textContent='Productcategory is required';
        productcategoryError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        productcategory.style.border='1px solid green';
        productcategoryError.textContent = '';
    }
     //Product Name 
     if(productname.value==''){
         productname.style.border = '1px solid red';
         productnameError.textContent='Enter productname ';
         productnameError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
         val++
     }
     else{
         productname.style.border='1px solid green';
         productnameError.textContent = '';
     }

    //stockcount
    if(stockcount.value==''){
        stockcount.style.border = '1px solid red';
        stockcountError.textContent='Enter stock count';
        stockcountError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        stockcount.style.border='1px solid green';
        stockcountError.textContent = '';
    }

    //stockmeasure
    if(stockmeasure.value==''){
        stockmeasure.style.border = '1px solid red';
        stockmeasureError.textContent='Enter stock count';
        stockmeasureError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        stockmeasure.style.border='1px solid green';
        stockmeasureError.textContent = '';
    }
    //producttype
    if(!organic.checked && !noneorganic.checked){
        organic.style.border = '1px solid red';
        producttypeError.textContent='Choose product type';
        producttypeError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        producttypeError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        organic.style.border='1px solid green';
        producttypeError.textContent = '';
    }
    //Names 
    // const namesRegex = /^([a-zA-Z])+(\s)+[a-zA-Z]+$/; 
    if(names.value==''){
        names.style.border = '1px solid red';
        namesError.textContent='Enter two names with one space in between';
        namesError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }
    // else if(!(names.value.match(namesRegex))){
    //     names.style.border = '1px solid red';
    //     namesError.textContent='Enter two names with one space in between';
    //     namesError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    //     val++
    // }
    else{
        names.style.border='1px solid green';
        namesError.textContent = '';
    }

    //Unitprice
    if(unitprice.value==''){
        unitprice.style.border = '1px solid red';
        unitpriceError.textContent='Enter unitprice';
        unitpriceError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        unitprice.style.border='1px solid green';
        unitpriceError.textContent = '';
    }
    //paymentmode
    if(pytmode.value==''){
        pytmode.style.border = '1px solid red';
        pytmodeError.textContent='Enter pytmode';
        pytmodeError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        pytmode.style.border='1px solid green';
        pytmodeError.textContent = '';
    }
    //deliverymode
    if(deliverymode.value==''){
        deliverymode.style.border = '1px solid red';
        deliverymodeError.textContent='Enter deliverymode';
        deliverymodeError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        deliverymode.style.border='1px solid green';
        deliverymodeError.textContent = '';
    }
    //productimage
    if(productimage.value==''){
        productimage.style.border = '1px solid red';
        productimageError.textContent='chooseproductimage';
        productimageError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }else{
        productimage.style.border='1px solid green';
        productimageError.textContent = '';
    }
    //hidden customeremail
    if(!(customeremail.value=='')){
        customeremailError.textContent = 'no input needed';
        customeremailError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }
    
    else {
        customeremailError.textContent = '';
        customeremailError.style ="color:green; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
    }

    //hidden customeraddress
    if(!(customeraddress.value=='')){
        customeraddressError.textContent = 'no input needed';
        customeraddressError.style ="color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
        val++
    }
    
    else {
        customeraddressError.textContent = '';
        customeraddressError.style ="color:green; font-size:12px; font-family:Arial, Helvetica, Sans-serif;";
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    