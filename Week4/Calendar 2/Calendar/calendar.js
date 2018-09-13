
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var allMonthYes = document.getElementById("yes");
var allMonthNo = document.getElementById("no");


$(document).ready(function()
{	
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) 
{
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) 
{
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();
    var str = "";
    
    console.log(firstDayOfMonth);
    console.log(d);
    console.log(numberOfDaysInMonth);
    console.log(firstDayOfWeek);
    
    for(i=0; i < firstDayOfWeek; i++)
    {
        str += "<div class = 'blankday'></div>";
    }
    
    for(i=1; i<=numberOfDaysInMonth; i++)
    {
        str += "<div class = 'day'>" + i + "</div>";
    }
    
    $("#results").html(str);
    
    
    
    function click()
    {
        if(this.style.backgroundColor === "")
        {
            this.style.backgroundColor = "green";
        }
        
        else if(this.style.backgroundColor == "green")
        {
            this.style.backgroundColor = "red";
        }
        
        else
        {
            this.style.backgroundColor = "";
        }
    }
     
    
    var changecolor = document.querySelectorAll(".day");
    console.log(changecolor);
    
    for(i = 0; (i < numberOfDaysInMonth); i++)
    {
        changecolor[i].addEventListener("click", click);
    }
    
    function click2()
    {
        for(i = 0; (i < changecolor.length); i++)
        {
            changecolor[i].style.backgroundColor = "green";
        }
    }
    
    function click3()
    {
        
       for(i = 0; (i < changecolor.length); i++)
        {
            changecolor[i].style.backgroundColor = "red";
        }
    }
    
    
    allMonthYes.addEventListener("click",click2);
    allMonthNo.addEventListener("click",click3);
    
}


