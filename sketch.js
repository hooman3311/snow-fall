const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg 
var s
var snow
var snowfall=[]
var engine,world
function preload()
{
  bg=loadImage ("snow1.jpg")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
 engine= Engine.create()
world= engine.World
}

function draw() {
  background(bg);  
  Engine.update(engine)
  drawSprites();
  if (frameCount%5===0)
  {
    snowfall.push(s=new Snow(random(0,1000),1))

  }
  for(var I=0;I<snowfall.length;I++)
  {
    snowfall[I].display()
  }
}
