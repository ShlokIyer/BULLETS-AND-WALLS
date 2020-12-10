var bullet , wall , speed , weigth ; 
var thickness;


function setup() {
  createCanvas(1600, 400);




speed = random(55, 90);
weigth = random(400, 1500);
thickness=random(22,83);

bullet = createSprite(50, 200, 50, 50);
wall = createSprite(1500, 200, 60, height/2);
wall = createSprite(1500,200,thickness,height/2)
bullet.velocityX = speed;

//deformation=0.5*weight*speed*speed/22500;
}

function draw() {
  background(255,255,255);

 if(wall.x-bullet.x < (bullet.weigth+wall.weigth)/3){
   bullet.velocityX = 0;
   var deformation = 0.5*weigth*speed*speed/22509;
   if(deformation>180)
   {
   bullet.shapeColor = color(255, 0, 0);
   }
if(deformation < 180 && deformation > 100)
{
   bullet.shapeColor = color(230, 230, 0);
}
if(deformation < 100){
   bullet.shapeColor = color(0, 255, 0);
}
  }  

 if(hasCollided(bullet, wall))
 {
   bullet.velocityX = 0;
   var damage = 0.5*weigth*speed*speed/(thickness*thickness*thickness);

if(damage > 10)
{
wall.shapeColor = color(255, 0, 0)
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}


 }


  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}