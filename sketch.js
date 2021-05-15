const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground,ball;

function setup() {
 var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  console.log(ground);
  console.log(ground.type);

  var ball_option = {
    restitution:1
  }

  ball = Bodies.circle(50,50,45,ball_option);
  World.add(world,ball);
  

}

function draw() {
  background("black"); 
  
  Engine.update(engine);

  push();
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 20);
  pop();
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,45,45);

 
}