class GameObject
{
    constructor()
    {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.w = 100;
        this.h = 100;
        this.vx = 0;
        this.vy = 0;
        this.color = "blue";
        
       
        this.currentstate = "circle";
        
    }
    
    drawRect()
    {
        ctx.save();
            
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h);
        
        ctx.restore();
    }
    
    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
    
    shape()
    {
        ctx.beginPath();
        ctx.arc(this.x + this.w / 2,this.y + this.h / 2,50,0,2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    
    changecolor()
    {
        var letters = '0123456789ABCDEF';
        var color = '#';
        
        for (var i = 0; i < 6; i++) 
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        this.color = color;
    }
    
   
}