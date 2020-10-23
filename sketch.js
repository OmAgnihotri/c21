var fixedRect,movingRect;
function setup() {
  createCanvas(800,1200);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=5;

  movingRect=createSprite(400,800,80,50);
  movingRect.shapeColor="green";
  movingRect.velocityY=-5;


}

function draw() {
  background(0);
  bounceOff(fixedRect,movingRect);
   
  
   
    
  drawSprites();
}

