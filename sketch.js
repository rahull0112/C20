var mR, fR
function setup() {
  createCanvas(800,400);
  mR=createSprite(400, 200, 50, 50);
  mR.shapeColor="green";
  fR=createSprite(200, 200, 50, 50);
  fR.shapeColor="green";
  mR.debug=true;
  fR.debug=true;
}

function draw() {
  background(255,255,255); 
  mR.x=World.mouseX;
  mR.y=World.mouseY;
  
  if(mR.x-fR.x<fR.width/2+mR.width/2 &&fR.x-mR.x<fR.width/2+mR.width/2 &&mR.y-fR.y<fR.width/2+mR.width/2 &&fR.y-mR.y<fR.width/2+mR.width/2){
    mR.shapeColor="red";
    fR.shapeColor="red";
  }
  else{
    mR.shapeColor="green";
    fR.shapeColor="green";
  }
  drawSprites();
}