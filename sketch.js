const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon, towerImage;

var cannonBall

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png"); // relative addressing
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angleMode(DEGREES)
  angle = 15
  cannon = new Cannon(180, 110, 130, 100, angle)

  cannonBall = new CannonBall(cannon.x, cannon.y)
}

function draw() {
  background(190)
  image(backgroundImg, 0, 0, width, height)
  Engine.update(engine);

  push();
  fill("brown")
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop(); 

  cannonBall.display()
  cannon.display()
}

function keyReleased(){
  if(keyCode == UP_ARROW){
    cannonBall.shoot()
  }
}