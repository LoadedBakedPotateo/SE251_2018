// JavaScript Document
var div = document.querySelector("#form");
var condiv = document.querySelector("#confirmation");

var fname = document.querySelector("#first-name");
var lname = document.querySelector("#last-name");
var email = document.querySelector("#email");
var emailcon = document.querySelector("#emailcon");
var phone = document.querySelector("#phone");
var submit = document.querySelector("#submit");

var firsttxt = document.querySelector("#firsttxt");
var lasttxt = document.querySelector("#lasttxt");
var emailtxt = document.querySelector("#emailtxt");
var emailcontxt = document.querySelector("#emailcontxt");
var phonetxt = document.querySelector("#phonetxt");

var span = document.querySelectorAll('span');
var result = "";
var info = document.querySelector("#info");

submit.addEventListener("click", Main);

function Main(e)
{ 
    check(fname, firsttxt, 0);
    check(lname, lasttxt, 1);
    check(email, emailtxt, 2);
    check(emailcon, emailcontxt, 3);
    check(phone, phonetxt, 4);
    
    result = emailtest(email, emailcon);
    
    if(result == true)
    {   
        emailtxt.style.color = "black";
        emailcontxt.style.color = "black";
        span[2].innerHTML = "";
        span[3].innerHTML = "";
    }
    
    else
    {
        emailtxt.style.color = "red";
        emailcontxt.style.color = "red";
        span[2].innerHTML = "*";
        span[3].innerHTML = "*";
    }
   
    
    
    
    if(fname.value != "" && lname.value != "" && email.value != "" && emailcon.value != "" && phone.value != "" && result == true)
    {
        div.style.display = "none";
        condiv.style.display = "block";
        var str = fname.value;
        str += lname.value;
        str += "<br>";
        str += email.value;
        str += "<br>";
        str += phone.value;
        
        info.innerHTML = str;
        
    }
}

function check(name, text, index)
{
    
    if(name.value == "")
    {
        text.style.color = "red";
        span[index].innerHTML ="*";
        
    }
    
    else
    {
        text.style.color = "black";
        span[index].innerHTML ="";
    }
    
}

function emailtest(name, name2, text, index)
{
    var result = "";
    
    if(name.value == name2.value && name.value != "" && name2.value != "")
    {
        result = true;
       
    }
    
    else
    {
        result = false;
        
    }
    
    return result;
}