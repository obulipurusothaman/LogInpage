//form-1
function jscript(){
var uname=document.forms["myform"]["uname"].value;
var upswd=document.forms["myform"]["upswd"].value;

if(uname==null || uname==""){
document.getElementById("errorBox").innerHTML=alert("Enter UserName")
return false;
}

if(upswd==null || upswd==""){
document.getElementById("errorBox").innerHTML="Enter UserPassword";
return false;
}

if(upswd!="" && upswd !=""){
alert("LogIn Successfully");
}
}
//form-2
function jscript1(){
var uname1=document.forms["myform2"]["uname1"].value;
var mail=document.forms["myform2"]["mail"].value;
var upswd1=document.forms["myform2"]["upswd1"].value;
var retypeupswd=document.forms["myform2"]["retypeupswd"].value;

if(uname1==null || uname1==""){
document.getElementById("errorBox").innerHTML=alert("Enter UserName");
return false;
}

if(mail==null || mail==""){
document.getElementById("errorBox").innerHTML=alert("Enter EmailId");
return false;
}

if(upswd1==null || upswd1==""){
document.getElementById("errorBox").innerHTML=alert("Enter UserPassword");
return false;
}

if(retypeupswd==null || retypeupswd==""){
document.getElementById("errorBox").innerHTML=alert("Enter Re-Type Password");
return false;
}

if(upswd1 != retypeupswd){
document.getElementById("errorBox").innerHTML=alert("Password Dont Match");
return false;
}

if(uname1!="" && mail!="" && upswd1!="" && retypeupswd!=""){
alert("Registration Sucessfull");
}
}
//form-2
//function jscript1(){
//var uname1=document.forms["myform2"]["uname1"].value;
//var mail=document.forms["myform2"]["mail"].value;
//var upswd1=document.forms["myform2"]["upswd1"].value;
//var retypeupswd=document.forms["myform2"]["retypeupswd"].value;
//
//if(uname1==null || uname1==""){
//document.getElementById("errorBox").innerHTML=alert("Enter UserName");
//return false;
//}
//
//if(mail==null || mail==""){
//document.getElementById("errorBox").innerHTML=alert("Enter EmailId");
//return false;
//}
//
//if(upswd1==null || upswd1==""){
//document.getElementById("errorBox").innerHTML=alert("Enter UserPassword");
//return false;
//}
//
//if(retypeupswd==null || retypeupswd==""){
//document.getElementById("errorBox").innerHTML=alert("Enter Re-Type Password");
//return false;
//}
//
//if(upswd1 != retypeupswd){
//document.getElementById("errorBox").innerHTML=alert("Password Dont Match");
//return false;
//}
//
//if(uname1!="" && mail!="" && upswd1!="" && retypeupswd!=""){
//alert("Registration Sucessfull");
//}
//}
//}