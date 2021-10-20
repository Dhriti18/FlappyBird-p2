class Pillar {
    constructor (x,y,width,height){
    
    
    
    this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
    
    
    this.image=loadImage("new1.png")
    
    
    
    }
    
    display(){
        var p=this.body.position;
        push();
       
        imageMode(CENTER);
  image(this.image,p.x,p.y,this.width,this.height);
      
      pop();
    
    
    
    
    
    
    
    }
    }