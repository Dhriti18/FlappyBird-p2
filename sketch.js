var stage,bird,birdin,pillar;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
var engine,world;
var p,score;
var gameState=1;
var pillarGroup,score;
function preload(){
  p1=loadImage("Pillar.png")
  p=loadImage("new1.png")
  p2=loadImage("new.png")
}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  stage=createSprite(1100,-262,2000,700);
  stage.addImage("i",p2)
stage.scale=2;
// /stage.velocityX=-2

  pillar1=createSprite(1000,330,20,220);
  pillar1.addImage("i",p)
pillar1.scale=0.6;
  pillar2=createSprite(900,340,140,340);
  pillar2.addImage("ier",p)
  pillar2.scale=0.6;
  pillar3=createSprite(800,350,130,200);
  pillar3.addImage("iw",p)
  pillar3.scale=0.6;
  pillar4=createSprite(700,330,130,160);
  pillar4.addImage("ic",p)
  pillar4.scale=0.6;
  pillar5=createSprite(600,340,150,190);
  pillar5.addImage("icc",p)

  pillar5.scale=0.6;
  pillar6=createSprite(500,350,160,210);

  pillar6.addImage("ier",p)
  pillar6.scale=0.6;
  pillar7=createSprite(400,330,190,200);
  pillar7.addImage("if",p)
  pillar7.scale=0.6;
  pillar8=createSprite(300,360,140,170);
  pillar8.addImage("iff",p)
  pillar8.scale=0.6;
  pillar9=createSprite(1020,100,150,310);
  pillar9.addImage("ies",p1)
  pillar9.scale=0.65;
  pillar10=createSprite(900,100,100,330);
  pillar10.addImage("ij",p1)
  pillar10.scale=0.65;
  pillar11=createSprite(780,80,70,360);
  pillar11.addImage("ifg",p1)
  pillar11.scale=0.65;
  pillar12=createSprite(660,90,80,310);
  pillar12.addImage("irw",p1)
  pillar12.scale=0.65;
  pillar13=createSprite(540,90,90,360);
  pillar13.addImage("iww",p1)
  pillar13.scale=0.65;
  pillar14=createSprite(420,80,80,250);
  pillar14.addImage("fig",p1)
  pillar14.scale=0.65;
  pillar15=createSprite(300,90,90,310);
  pillar15.addImage("ihh",p1)
  pillar15.scale=0.65;
  
  //sprite bird

 pillarGroup = new Group();
 bird=new Bird(100,100,200,100);
  birdin=new BBird(100,100,200,100);
 stage=new Bgm(100,380,2000,10);
  //sprite bird
 
  score = 0;


}

function draw() {
  Engine.update(engine);
  
if(gameState===1){
 background("pink");  
 
  fill("White")
  stroke("blue")
  strokeWeight(4)
  textSize(30);
text("PRESS 'S' TO START",400,300)
fill("blue")
stroke("red")
strokeWeight(1)
textSize(20);
text 
("A bird named Weimer was given a challenge to cross this way  to save her kingdom,make the bird reach the end!",
10,100)
bird.visible=false;
}



  if(gameState===2){
    background("white");  
    
    stage.velocityX=-10;
    score = score + Math.round(getFrameRate()/60);
    if (stage.x < 0){
    stage.x = stage.width/2;
    }
    stage.display();bird.display();
  birdin.display();
  birdin.body.position.x=bird.x;
  birdin.body.position.y=bird.y;
 drawSprites();
bird.bird.velocityY = bird.bird.velocityY+0.8;
 
  }
  if(gameState===3){
    background("pink")
    text("Score: "+ score,30,50);
   text("HightestScore:"+localStorage.getItem("HighestScore"),30,20);
  }
     
  if(pillarGroup.isTouching(bird)){
    
    gameState = 3;
}
if((touches.length > 0 || keyDown("SPACE")) && bird.bird.y  >= height-120) {
  
  bird.bird.velocityY = -10;
   touches = [];
}



}
function keyTyped() {
  if(key==="s"){
         gameState=2;
    
    
  } 


  function keyPressed() {
    if (keyCode===32) {
  
    bird.bird.velocityY=-10;

//Matter.Body.setStatic(birdin.body,false)
   // Matter.Body.setVelocity(birdin.body,{x:0,y:-10});
         

    }
    // Matter.body.setPosition(bird.body,70,100,20,20);
   if((keyCode===RIGHT_ARROW)){
     bird.bird.x=bird.bird.x+10
    }

  }
}
if(localStorage.getItem ("HighestScore")<score){
 localStorage.setItem("HighestScore" ,score);
}
