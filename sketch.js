
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
   trex=createSprite(50,160,40,80)
}

function draw(){
  background("yellow")
  
drawSprites();
}
