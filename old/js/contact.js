function validEmail(email)
{
	var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
	var checkend=/\.[a-zA-Z]{2,3}$/;
	if((email.search(exclude) != -1) || (email.search(checkend) == -1)) { return false; }
	var atPos = email.indexOf("@",0);
	var pPos1 = email.indexOf(".",0);
	var periodPos = email.indexOf(".",atPos);
	var pos1 = pPos1;
	var pos2 = 0;

	while (pos2 > -1)
	{
		pos2 = email.indexOf(".",pos1+1);
		if (pos2 == pos1+1) { return false; }
		else { pos1 = pos2; }
	}

	if (atPos == -1) { return false; }
	if (atPos == 0) { return false; }
	if (pPos1 == 0) { return false; }
	if(email.indexOf("@",atPos+1) > -1) { return false; }
	if(periodPos == -1) { return false; }
	if(atPos+1 == periodPos) { return false; }
	if(periodPos+3 > email.length) { return false; }
return true;
}

function isBlank(fieldName)
{
	var len,k,flg;
	flg=true;
	if(fieldName!=null)
	{
		len=fieldName.length;
		for(k=0;k<len;k++)
		{
			if(fieldName.substring(k,k+1)!=" ")
			flg=false;
		}
	}
return flg;
}

function charsOnlyWithSpaces(fieldName)
{
	var validChars = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var temp;

	for(var i=0; i < fieldName.length; i++)
	{
		temp = fieldName.substring(i,i+1);
		if(validChars.indexOf(temp) == "-1")
		{
			return false;
		}
	}	
}

function numbersOnly(fieldName)
{
	var validChars = "0123456789";
	var temp;

	for(var i=0; i < fieldName.length; i++)
	{
		temp = fieldName.substring(i,i+1);
		if(validChars.indexOf(temp) == "-1") { return false; }
	}
}

function validate()
{
	var frmObj = document.avnet;		
	
	
	if(isBlank(frmObj.name.value) || (frmObj.name.value=="Name"))
	{
		alert("Please enter your Name");
		frmObj.name.focus();
		return false;
	}
	else
	{
		if(charsOnlyWithSpaces(frmObj.name.value)==false)
		{
			alert("Please enter your Name");
			frmObj.name.focus();
			return false;
		}
	}

	

if(isBlank(frmObj.mobile.value) || (frmObj.mobile.value=="Cell No"))

	{

		alert("Please enter your Phone No.");

		frmObj.mobile.focus();

		frmObj.mobile.select();

		return false;

	}

	else

	{

		if(numbersOnly(frmObj.mobile.value)==false)

		{

			alert("Phone No. can contain only numbers");

			frmObj.mobile.focus();

			frmObj.mobile.select();

			return false;

		}



		/*if(frmObj.mobile.value.length <11)

		{

			alert("Mobile No. cannot be less than 10 digit.");

			frmObj.mobile.focus();

			frmObj.mobile.select();

			return false;

		}*/

		

	}

	if(validEmail(frmObj.email.value) == false)
	{
			alert("Please enter your valid Email ID");
			frmObj.email.focus();
			frmObj.email.select();
			return false;
	}
	
	

	if(isBlank(frmObj.lastname.value) || (frmObj.lastname.value=="city"))
	{
		alert("Please Enter Your City Name");
		frmObj.lastname.focus();
		return false;
	}
	else
	{
		if(charsOnlyWithSpaces(frmObj.lastname.value)==false)
		{
			alert("Enter only Alphabets");
			frmObj.lastname.focus();
			return false;
		}
	}
	

	if(isBlank(frmObj.companyname.value) || (frmObj.companyname.value== "area"))
		{
			alert("Please enter your Area Name");
			frmObj.companyname.focus();
			return false;
		}
	else
	{
		if(charsOnlyWithSpaces(frmObj.companyname.value)==false)
		{
			alert("Enter only Alphabets");
			frmObj.companyname.focus();
			frmObj.companyname.select();
			return false;
		}
	}

	/*if(isBlank(frmObj.address.value) || (frmObj.address.value=="address"))
	{
		alert("Please enter your Message");
		frmObj.address.focus();
		return false;
	}*/
	
/*	if(isBlank(frmObj.zip.value) || (frmObj.zip.value=="Zip Code"))
	{
		alert("Please enter your Zip Code.");
		frmObj.zip.focus();
		frmObj.zip.select();
		return false;
	}
	else
	{
		if(numbersOnly(frmObj.zip.value)==false)
		{
			alert("zips code can contain only numbers");
			frmObj.zip.focus();
			frmObj.zip.select();
			return false;
		}
		
	}*/
/*if(isBlank(frmObj.enquiry.value) || (frmObj.enquiry.value==""))
	{
		alert("Please enter your end customer name");
		frmObj.enquiry.focus();
		return false;
	}*/
	
	
	// if(isBlank(frmObj.message.value) || (frmObj.message.value=="message"))
	// {
	// 	alert("Please enter your Message");
	// 	frmObj.message.focus();
	// 	return false;
	// }
	
	
}