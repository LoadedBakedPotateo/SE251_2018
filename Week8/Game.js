var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var timer = setInterval(main, 1000/60);
var lil = [];

states = [];
states["square"] = function(obj)
{
    obj.drawRect();
}
states["circle"] = function(obj)
{
    obj.shape();
}



for(var i=0; i<4; i++)
{
    lil[i] = new GameObject();
    lil[i].vx = Math.random()*9;
    lil[i].vy = 0;
    lil[i].y = 0;
}

function main()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
        if(u)
        {
            lil[0].vy+=-1;
        }
        if(d)
        {
            lil[0].vy+=1;
        }
        if(l)
        {
            lil[0].vx+=-1;
        }
        if(r)
        {
            lil[0].vx+=1;
        }
    
    for(i=0; i<lil.length; i++)
    {
        
        
        lil[i].move();
        lil[i].vy += .5;
        lil[i].vy *= .97;
        lil[i].vx *= .97;
        
        if(i>0)
        {
            lil[i].vx = (lil[i-1].x - lil[i].x)/7;
            lil[i].vy = (lil[i-1].y - lil[i].y)/7;
        }
        
        if(lil[i].y > canvas.height-lil[i].h)
        {
            lil[i].y = canvas.height-lil[i].h
            lil[i].vy = -lil[i].vy;
            lil[i].currentstate = "circle";
            lil[i].changecolor();
        }
        
        if(lil[i].x > canvas.width-lil[i].w)
        {
            lil[i].x = canvas.width-lil[i].w
            lil[i].vx = -lil[i].vx;
            lil[i].currentstate = "square";
            lil[i].changecolor();
        }
        
        if(lil[i].y < 0)
        {
            lil[i].y = 0
            lil[i].vy = -lil[i].vy;
            lil[i].currentstate = "circle";
            lil[i].changecolor();
        }
        
        if(lil[i].x < 0)
        {
            lil[i].x = 0
            lil[i].vx = -lil[i].vx;
            lil[i].currentstate = "square";
            lil[i].changecolor();
        }
        
        states[lil[i].currentstate](lil[i]);
    }
    
}
var u = false;
var d = false;
var l = false;
var r = false;
document.addEventListener("keydown", press)
function press(e){
    if(e.keyCode == 38)
        {
            u = true;
        }
     if(e.keyCode == 40)
        {
            d = true;
        }
    if(e.keyCode == 37)
        {
            l = true;
        }
    if(e.keyCode == 39)
        {
            r = true;
        }
}


document.addEventListener("keyup", release)
function release(e){
    if(e.keyCode == 38)
        {
            u = false;
        }
    if(e.keyCode == 40)
        {
            d = false;
        }
     if(e.keyCode == 37)
        {
            l = false;
        }
    if(e.keyCode == 39)
        {
            r = false;
        }
}
