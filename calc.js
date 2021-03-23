var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');

let discount_code_applied= false;

const decreaseNumber = (incdec, itemprice,productval) => {
   
    

    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    var productval = document.getElementById(productval);
   
    console.log(itemprice.innerHTML);
    console.log(productval.innerHTML);

    // console.log(itemval.value);
    if (itemval.value <= 0) {
        total_cart_amt.innerHTML =0;
        itemval.value = 0;
        
        alert('Negative quantity not allowed');
       

    } 
    
    
    else {
        
     
            error_trw.innerHTML = "Enter valid code and Click on Apply 👇";
            discount_code_applied=false;
            itemval.value = parseInt(itemval.value) - 1;
            itemval.style.background = '#fff';
            itemval.style.color = '#000';
            itemprice.innerHTML = parseInt(itemprice.innerHTML) -parseInt(productval.innerHTML);
            product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - parseInt(productval.innerHTML);
        
        
                total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);

        
       
       
    
    }
    
}
const increaseNumber = (incdec, itemprice,productval) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    var productval = document.getElementById(productval);
  
    
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    }

        
        else {
            error_trw.innerHTML = "Enter valid code and Click on Apply 👇";
            discount_code_applied=false;
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + parseInt(productval.innerHTML);
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(productval.innerHTML);
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);

        }
        
    

}

    
    const discount_code = () => {
    
   
       
        let totalamtcurr = parseInt(total_cart_amt.innerHTML);
        let currproduct_total_amt= parseInt(product_total_amt.innerHTML);
        let error_trw = document.getElementById('error_trw');
        if (discountCode.value === 'GetGreen' && !discount_code_applied) {
            if((currproduct_total_amt)>800)
            {
                let newtotalamt = totalamtcurr - ((20 * totalamtcurr) / 100);
                total_cart_amt.innerHTML = newtotalamt;
                error_trw.innerHTML = "Awesome Blossom<br> You Got 20% Discount.";
                discount_code_applied=true;

            }
           else{
            error_trw.innerHTML = "Minimum cart Value 801";
            document.getElementById("discount_code1").value="";
            
           }
           
            
           
        }
       else if (discountCode.value === 'FIRSTBUY' && !discount_code_applied) {
            
                let newtotalamt = totalamtcurr - ((35 * totalamtcurr) / 100);
                total_cart_amt.innerHTML = newtotalamt;
                error_trw.innerHTML = "Awesome Blossom-FIRSTBUY <br> You Got 35% Discount.";
                discount_code_applied=true; 
           
        }
        else if(discount_code_applied){
            error_trw.innerHTML = "Already Applied";
        }
        else 
        {
            error_trw.innerHTML = "Invalid Cupon Used";
        }
        
    }
    function clearFunc()
	{
		document.getElementById("discount_code1").value="";
		
    }
    
  
    
  
       
        
        



  
  

