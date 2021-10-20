class Bgm{
    constructor (x,y,width,height){
    
    
    
    this.background=Bodies.rectangle(x,y,width,height,{isStatic:true});
    this.width=width;
    this.height=height;
    this.image=loadImage("New.png")
    World.add(world,this.background);
    
    
 
    
    
    }
    
    display(){
      var p=this.background.position;
      push();
     
      imageMode(CENTER);
image(this.image,p.x,p.y,this.width,this.height);
    
    pop();
    
    
    }
    
    
    
    
    
    
    
    }