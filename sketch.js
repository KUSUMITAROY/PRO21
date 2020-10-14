var bullet , wall;
var speed,weight,  thickness;


function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet  = createSprite(50,200,30,10);
  bullet.shapeColor="white";

  bullet .velocityX=speed;
  bullet .debug=true;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  wall.debug=true;
  
}

function draw() {
  background("black");  

  if (collided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
     
    if (damage>10)
    {
      wall.shapeColor =color(255,0,0);

    }
     
    if (damage<10)
    {
      wall.shapeColor =color(0,255,0);

    }

  }
  
  drawSprites();
}

function collided(Lbullet,Lwall)
{
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge=Lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false
}





























































/*if(wall.x-car.x<(car.width+wall.width)/2 )
{
  car.velocityX=0;
  var deformation =0.5*width*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
if (deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=(0,255,0);
}
}*/