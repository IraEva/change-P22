const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.5
	}
	bob1 = Bodies.circle(180,55,10,ball_options);
  World.add(World,bob1);
  Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});

  bob2 = Bodies.circle(220,40,15,ball_options);
  World.add(world,bob2);
  Matter.Body.applyForce(bob2,bob2.position,{x:-40,y:-35});

  bob3 = Bodies.circle(240,49,10,ball_options);
  World.add(world,bob3);
  Matter.Body.applyForce(bob3,bob3.position,{x:-30,y:-25});

  bob4 = Bodies.circle(170,45,15,ball_options);
  World.add(world,bob4);
  Matter.Body.applyForce(bob4,bob4.position,{x:-20,y:-15});

  bob5 = Bodies.circle(280,35,10,ball_options);
  World.add(world,bob5);
  Matter.Body.applyForce(bob5,bob5.position,{x:-10,y:-5});
  
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
    rectMode(CENTER);
    ellipseMode(RADIUS);
    background("#99004d");
    
    rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
    push();
    strokeWeight(2);
    stroke(255);
    line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
    line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
    pop();  
  
  //create ellipse shape for multiple bobs here
    ellipse(bob1.position.x,bob1.position.y,10);
    ellipse(bob2.position.x,bob2.position.y,15);
    ellipse(bob3.position.x,bob3.position.y,10);
    ellipse(bob4.position.x,bob4.position.y,15);
    ellipse(bob5.position.x,bob5.position.y,10);
}
    
 //Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed ()
{
  if(keyCode==RIGHT_ARROW)
{
  Matter.body.applyForce()
}
}













