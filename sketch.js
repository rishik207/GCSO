const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000,200,60,height / 2);
}

function draw() {
  background(255,255,255);
  car.velocityX = speed;
  fill(80,80,80);
  car.collide(wall);

  if (hasCollided(car,wall))  {
    if (damage > 10)
    {
      wall.shapeColor = color(255,0,0)
    }

    if (damage < 10)
    {
      wall.shapeColor = color(0,255,0)
    }
  }

  drawSprites();
}

function hasCollided(car,wall){
  carRightEdge = car.x + car.width;
  wallLeftEdge = wall.x;
  
  if (carRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}