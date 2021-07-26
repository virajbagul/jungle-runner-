
var play=1;
var end=0;
var gamestate=1;
var man ,manimg
var lion,lionimg;
var ground;
var background1,backgroundimg;
var lionGroup;
var score=0;

function preload(){
  
  
 manimg=loadImage("hurry-up-2785528.svg")
  
 lionimg  = loadImage("loin-470302.svg");
 backgroundimg=loadImage("2020.jpg");
  song=loadSound("Temple-Run-Running-Theme.mp3");
  

}



function setup() {
  createCanvas(windowWidth,windowHeight);
  man=createSprite(100,height-140,10,10);
  man.addImage(manimg);
  man.scale=0.25 ;
 
   background1=createSprite(200,200,50,50);
   background1.addImage(backgroundimg);
  background1.velocityX=-6;
     background1.depth = man.depth;
    man.depth = man.depth + 1;

    
   ground = createSprite(1000,height-130 ,2000,20);
   ground.velocityX=-4   
 ground.visible=false; 
  ground.x = ground.width /2;
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
 
  // monkey.debug=true;
  man.setCollider("circle",0,0,10);
  lionGroup=createGroup() ;
 
}



function draw() {
background(0)
  
  console.log(gamestate);

  if (gamestate===play){
  if (ground.x<10){
  ground.x = ground.width /2;
}
    score=Math.ceil(frameCount/frameRate());            if(keyDown("space")&& man.y >=height-120) {
        man.velocityY = -12;
  
    }
    if (man.isTouching(lionGroup)){
      gamestate=end;
    }
    
  obstacles();
    //add gravity
  if (background1.x<200){
    background1.x=background1.width/2;
  }
 
    man.velocityY = man.velocityY + 0.8
  man.collide (ground);
   
 if(keyDown("space")&&man.y >=height-220) {
        man.velocityY = -12;
 }
 
   
 
 }
    if (gamestate===end){
      man.destroy();
      lionGroup.destroyEach();
      background1.destroy();
      fill("orange");
      stroke("red");
       strokeWeight(5);
      textSize(40);
  text("THE MAN WAS KILLED BY LION",-5,200 );
    }

  
  
  
  drawSprites();
   textSize(20);
  fill(0);
  text("Score: "+score,100,50);

} 




function obstacles(){
  if (frameCount%200 === 0){
    var lion=createSprite(600,height-140,10,10);
    lion.addImage(lionimg);
    lion.scale=0.6;
    
    lion.lifetime = 300;
    lion.velocityX = -6;
   
   //add each obstacle to the group
    lionGroup.add(lion);
  }
}