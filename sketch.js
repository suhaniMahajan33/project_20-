
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

	//Create the Bodies Here.
  var plane_options={
	isStatic: true
  };
  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() {
  
  background("55");

  Engine.update(engine);
 
  plane=bodies.rectangle(200,390,400,20,plane_options);
  World.add(world,plane);

  drawSprites();
 
}



