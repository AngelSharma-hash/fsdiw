class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen (1).png");
      
        World.add(world , this.body);
      
    }
    
    display(){
        var pencil = this.body.position;
        
        fill("white");
        rectMode(CENTER);
        rect(pencil.x,pencil.y,this.width,this.height);

        image(this.image,400,420,200,150);
      
    }
}                        