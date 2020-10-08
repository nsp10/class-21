var fixedRect, movingRect;
var fixed , moving ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  fixed = createSprite(50 , 200 , 20, 30 );
  fixed.velocityX = 5;
  fixed.shapeColor = "yellow" ;
  moving = createSprite(500 , 200 , 20,30);
  moving.velocityX = -5;
  moving.shapeColor = "blue";
}

function draw() {
  background(0,0,0);
  bounceOff( fixed , moving );
  bounceOff(fixedRect , movingRect );
  drawSprites();
}