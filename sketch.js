
var trex ,trex_running, ground ,groundimg;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimg=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)

  
  //create a trex sprite

  trex=createSprite(50,150,20,40);
 trex.addAnimation("trex running",trex_running)
 trex.scale=0.5;

ground=createSprite(200,180,600,30);
ground.addImage("ground",groundimg);
}

function draw(){
  background("black")
trex.collide(ground);
if(keyDown("space")){
trex.velocityY=-10
}
trex.velocityY=trex.velocityY+0.5;













drawSprites();  

}
