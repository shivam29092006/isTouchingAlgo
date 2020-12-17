var moving, fixed

var rect1, rect2, rect3, rect4

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "yellow";

  moving = createSprite(500,200,60,30);
  moving.shapeColor = "blue";

  rect1 = createSprite(200,100,50,50);
  rect1.shapeColor = "white";

  rect2 = createSprite(350,100,50,50);
  rect2.shapeColor = "white";

  rect3 = createSprite(500,100,50,50);
  rect3.shapeColor = "white";

  rect4 = createSprite(650,100,50,50);
  rect4.shapeColor = "white";
}

function draw() {
  background(0);
  
  moving.x = mouseX
  moving.y = mouseY
  console.log(moving.x - fixed.x)

  if(isTouching(moving, rect3)){
    moving.shapeColor = "red";
  } 
  else{
    moving.shapeColor = "blue";
  }
  drawSprites();
}

function isTouching(object1, object2) {

  if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object1.height/2 + object2.height/2){
    return true;
  }
  else{
    return false;
  }


}