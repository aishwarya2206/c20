var box1f,box2m
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  box1f=createSprite(200,100,50,50);
  box1f.shapeColor="yellow";
  box1f.debug=true;
  box2m=createSprite(200,300,50,80);
  box2m.shapeColor="yellow";
  box2m.debug=true;
}

function draw() {
  background("blue");  
  box2m.x=World.mouseX;
  box2m.y=World.mouseY;
  if(box2m.x-box1f.x<box1f.width/2+box2m.width/2&&
    box1f.x-box2m.x<box1f.width/2+box2m.width/2&&
    box2m.y-box1f.y<box1f.height/2+box2m.height/2&&
    box1f.y-box2m.y<box1f.height/2+box2m.height/2){
  box1f.shapeColor="red";
  box2m.shapeColor="red";
  }
else {
  box1f.shapeColor="yellow";
  box2m.shapeColor="yellow";
}
  drawSprites();
}