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


for(var i=0; i<6; i++)
{
    lil[i] = new GameObject();
    lil[i].vx = Math.random()*7;
    lil[i].vy = Math.random()*7;
}

function main()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    for(i=0; i<lil.length; i++)
    {
        lil[i].move();
        
        if(lil[i].y > canvas.height-lil[i].h)
        {
            lil[i].vy = -lil[i].vy;
            lil[i].currentstate = "circle";
            lil[i].changecolor();
        }
        
        if(lil[i].x > canvas.width-lil[i].w)
        {
            lil[i].vx = -lil[i].vx;
            lil[i].currentstate = "square";
            lil[i].changecolor();
        }
        
        if(lil[i].y < 0)
        {
            lil[i].vy = -lil[i].vy;
            lil[i].currentstate = "circle";
            lil[i].changecolor();
        }
        
        if(lil[i].x < 0)
        {
            lil[i].vx = -lil[i].vx;
            lil[i].currentstate = "square";
            lil[i].changecolor();
        }
        
        states[currentstate](lil[i]);
    }
    
}