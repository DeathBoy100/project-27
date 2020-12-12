
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ceiling1 = new ceiling(400,200,500,40)
	bob1 = new bob(200,550,50)
	bob2 = new bob(300,550,50)
	bob3 = new bob(400,550,50)
	bob4 = new bob(500,550,50)
	bob5 = new bob(600,550,50)
	rope1 = new rope(bob1.body,ceiling1.body,-200,0)
	rope2 = new rope(bob2.body,ceiling1.body,-200,0)
	rope3 = new rope(bob3.body,ceiling1.body,-200,0)
	rope4 = new rope(bob4.body,ceiling1.body,-200,0)
	rope5 = new rope(bob5.body,ceiling1.body,-200,0)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  bob1.display();
  strokeWeight(3);
  rope1.display()
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  ceiling1.display()
 // chain.display()
  
  
}

function keyPressed() {
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce (bob1.body,bob1.body.position,{x:-80,y:-14});
				
	}
}

