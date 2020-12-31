const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld, myengine;
var box1,box2;
var ground;
function setup() {
  createCanvas(400,400);
  
  myengine=Engine.create();
  //myworld is myengine's world
  myworld=myengine.world;


  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,50);
  ground=new Ground(200,380,400,15);
}

function draw() {
  background("black");

  Engine.update(myengine);

  box1.display();
  box2.display();
  ground.display();
  
}