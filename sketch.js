
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(400,350,30);

	

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  
  mango1.display();
  
 
}



