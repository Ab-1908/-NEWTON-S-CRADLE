const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var roof;
var chain;
var bobD = 25;

function setup() {
  createCanvas(800, 700);
  
	  engine = Engine.create();
    world = engine.world;

    roof = new Roof (350,200,270,20);
    
   bobObject1 = new Paper (250,400,25);
   bobObject2 = new Paper (300,400,25);
   bobObject3 = new Paper (350,400,25);
   bobObject4 = new Paper (400,400,25);
   bobObject5 = new Paper (450,400,25);

   rope1 = new Rope(bobObject1.body,roof.body,bobD*4*(-1));
   rope2 = new Rope(bobObject2.body,roof.body,bobD*2*(-1));
   rope3 = new Rope(bobObject3.body,roof.body,bobD*0);
   rope4 = new Rope(bobObject4.body,roof.body,bobD*2*(1));
   rope5 = new Rope(bobObject5.body,roof.body,bobD*4*(1));
	
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

      Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-45, y:-45});

	}
}

