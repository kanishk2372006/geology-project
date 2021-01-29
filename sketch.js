
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  hammer = new GEO(200,500,50,50);
	
		stone = new Stone(300,500,50,50);
		eraser=new Rubber(400,500,50,50)
		
	ground=new Ground(400,590,800,7)
	World.add(world,ground)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("blue");
 hammer.display();
 stone.display();
ground.display();
eraser.display();
eraser.x=mouseX
  drawSprites();

 
}



