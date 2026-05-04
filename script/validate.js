
function checkform()
{
	var pname = document.getElementById("name").value;   // get value of name textfield
	var phone = document.getElementById("phone").value;  // get value of phone textfield 
	var email = document.getElementById("email").value;  // get value of email textfield 
		
	if(pname == "")         // check if the name is blank 
	{
		document.getElementById("err").innerHTML = "Name cannot be blank";    
		document.getElementById("name").focus();   // set the focus back to name textfield 
		return false;
	}
	else
	{
		document.getElementById("err").innerHTML = "";  // clear the error message 
	}
	
		
	if(phone == "")    // check if the phone is blank
	{
		document.getElementById("err").innerHTML = "Phone cannot be blank";
		document.getElementById("phone").focus();   // set the focus back to phone textfield
		return false;
	}
	else
	{
		document.getElementById("err").innerHTML = "";    // clear the error message 
	}
	if(phone.length < 10 || phone.length > 10)    // check if the phone number is 10 digits or not
	{
		document.getElementById("err").innerHTML = "Phone should be 10 digits only";
		document.getElementById("phone").focus();   // set the focus back to phone textfield
		return false;
	}
	else
	{
		document.getElementById("err").innerHTML = "";   // clear the error message
	}
	
	
	var numbers = /^[0-9]+$/;   // set the pattern for phone number to be only digits 0-9
	
	if(phone.match(numbers))   // check if the phone number is only digits or not as per the pattern 
	{
		document.getElementById("err").innerHTML = "";   // if pattern is matched clear the error message 
	}
	else
	{
		document.getElementById("err").innerHTML = "Phone no should contain only numbers"   
		document.getElementById("phone").focus();  // set the focus back to phone textfield 
		return false;
	}
	
	if(email == "")    // check if the email is blank 
	{
		document.getElementById("err").innerHTML = "Email cannot be blank";
		document.getElementById("email").focus();   // set the focus back to email textfield
		return false;
	}
	
	
	var emailpat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   // set the pattern for email format matching
	
	if(email.match(emailpat))   // check of the email is as per the pattern or not 
	{
		document.getElementById("err").innerHTML = "";    // if pattern is matched, clear the error message 
	}
	else
	{
		document.getElementById("err").innerHTML = "Email address format is not correct"
		document.getElementById("email").focus();    // set the focus back to email textfield 
		return false;
	}
	document.getElementById("err").innerHTML = "";   
	return true;
}
