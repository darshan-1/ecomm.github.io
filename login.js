function loginuser()
	{
	    var email= document.getElementById("useremail").value;
		var pwd= document.getElementById("userpassword").value;			
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		 if(email=='')
		{
			error_reg_mailempty.innerHTML = "Please Enter User-Email";
			
		}
		else if (!filter.test(email))
		{
			error_reg_mailinvalid.innerHTML = "Please enter valid email";
		}
	
		else if(pwd=='')
		{
			error_reg_pwdempty.innerHTML = "Please enter Password";
			
		}
		else
		{
			alert('Thank You for Login & You will soon be Redirected to GreenHunch Website');   
		error_reg_mailempty.innerHTML = " ";
		error_reg_mailinvalid.innerHTML = " ";
		
		error_reg_pwdempty.innerHTML = " ";
			   window.location = "index.html"; 
		}
	}
	function clearFunc()
	{
		document.getElementById("l1").value="";
		document.getElementById("l2").value="";
	}

	function user_register()
	{
		window.location= "registration.html";
	}