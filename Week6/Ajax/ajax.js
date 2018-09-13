var sal = 0;
var sal2 = 0;
var sal3 = 0;

var avg1 = 0;
var avg2 = 0;
var avg3 = 0;

var datacount = 0;
var webcount = 0;
var softcount = 0;

var data = document.getElementsByClassName("analysthighest");
var web = document.getElementsByClassName("webhighest");
var soft = document.getElementsByClassName("softhighest");

var fname = document.getElementsByClassName("first");
var lname = document.getElementsByClassName("last");

var average = document.getElementsByClassName("average");

var searchbtn = document.getElementById("search-submit");
var listdatabtn = document.getElementById("list-database-analyst");
var listwebbtn = document.getElementById("list-web-developer");
var listsoftbtn = document.getElementById("list-software-engineer");
var output = document.getElementsByClassName("output");

fetch('http://ict.neit.edu/evanrense/salaries.php')
        
        .then(function(response)
        {
            return response.json();
        })
        
        .then(function(myLink)
        {
            console.log(myLink);
    
            for(i = 0; i< myLink.length; i++)
            {
                
                if(myLink[i].jobTitle == "Database Analyst")
                {
                    
                    avg1 += parseFloat(myLink[i].salary);
                    datacount ++;
                    
                    if(myLink[i].salary > sal2)
                    {
                        sal2 = myLink[i].salary;
                        data[0].innerHTML= sal2;
                        fname[0].innerHTML = myLink[i].name.first;
                        lname[0].innerHTML = myLink[i].name.last;
                    
                    }
                }

                if(myLink[i].jobTitle == "Web Developer")
                {
                    avg2 += parseFloat(myLink[i].salary);
                    webcount ++;
                    
                    if(myLink[i].salary > sal)
                    {
                        sal = myLink[i].salary;
                        web[0].innerHTML= sal;
                        fname[1].innerHTML = myLink[i].name.first;
                        lname[1].innerHTML = myLink[i].name.last;
                    
                    }
                    
                }
                
                if(myLink[i].jobTitle == "Software Developer")
                {
                    avg3 += parseFloat(myLink[i].salary);
                    softcount ++
                    
                    if(myLink[i].salary > sal3)
                    {
                        sal3 = myLink[i].salary;
                        soft[0].innerHTML = sal3;
                        fname[2].innerHTML = myLink[i].name.first;
                        lname[2].innerHTML = myLink[i].name.last;
                    }
                }
                
                
            }
            
    
            avg1 = avg1/datacount;
            avg2 = avg2/webcount;
            avg3 = avg3/softcount;
            
            if(avg1 > avg2 && avg1 > avg3)
            {
                average[0].style.color = "green";
                
            }
    
            else if(avg2 > avg1 && avg2 > avg3)
            {
                average[1].style.color = "green";
                
            }
        
            else if(avg3 > avg2 && avg3 > avg1)
            {
                average[2].style.color = "green";
                
            }
            
            
            average[0].innerHTML = avg1;
            average[1].innerHTML = avg2;
            average[2].innerHTML = avg3;
        
            document.getElementById("search-submit").addEventListener("click", search)
            document.getElementById("list-database-analyst").addEventListener("click", list)
            document.getElementById("list-web-developer").addEventListener("click", list)
            document.getElementById("list-software-engineer").addEventListener("click", list)
            
            function search(event)
            {
                var fname = document.getElementById("first-name").value;
                var lname = document.getElementById("last-name").value;
                
                var result = myLink.filter(myfilter);
                function myfilter(item)
                {
                    if(item.name.first.match(fname) || item.name.last == lname)
                    {
                        return item;
                    }
                }
                output[0].innerHTML = "";
                result.forEach(function(person){
                    let name = document.createElement('div');
                    let salary = document.createElement('div');
                    let job = document.createElement('div');
                    
                    var nameText = document.createTextNode(person.name.first + " " + person.name.last);
                    var salaryText = document.createTextNode(person.salary);
                    var jobText = document.createTextNode(person.jobTitle);
                    
                    name.appendChild(nameText);
                    salary.appendChild(salaryText);
                    job.appendChild(jobText);
                    
                    output[0].appendChild(name);
                    output[0].appendChild(salary);
                    output[0].appendChild(job);
                })
                
                console.log(result);
            }
            
            function list(event)
            {
                
                var result = myLink.filter(myfilter);
                function myfilter(item)
                {
                    if(event.target.hasAttribute("database-analyst"))
                    {
                        if(item.jobTitle == "Database Analyst")
                        {
                            return item;
                        }
                    }
                    
                    else if(event.target.hasAttribute("web-developer"))
                    {
                        if(item.jobTitle == "Web Developer")
                        {
                            return item;
                        }
                    }
                    
                    else if(event.target.hasAttribute("software-engineer"))
                    {
                        if(item.jobTitle == "Software Developer")
                        {
                            return item;
                        }
                    }
                }
                    output[1].innerHTML = "";
                    result.forEach(function(person){
                    let name = document.createElement('div');
                    let salary = document.createElement('div');
                    let job = document.createElement('div');
                    
                    var nameText = document.createTextNode(person.name.first + " " + person.name.last);
                    var salaryText = document.createTextNode(person.salary);
                    var jobText = document.createTextNode(person.jobTitle);
                    
                    name.appendChild(nameText);
                    salary.appendChild(salaryText);
                    job.appendChild(jobText);
                    
                    output[1].appendChild(name);
                    output[1].appendChild(salary);
                    output[1].appendChild(job);
                })
                
                console.log(result);
            }
    
    
    
    
    
    
    
        console.log(avg1,avg2,avg3);
        console.log(sal,sal2,sal3);
        })

