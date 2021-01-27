const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stone,boy,boyimg,ground,tree,mango1,mango2,mango3,mango4,mango5,mango7,mango8,mango9,mango10,sling;

function preload(){
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(100,550,70);
	boy=Bodies.rectangle(100,490,10,10);
	ground=new Ground(800,690,1600,20);
	tree=new Tree(1200,430,500,500);
	mango1=new Mango(1150,350,50,50);
	mango2=new Mango(1200,390,50,50);
	mango3=new Mango(1340,300,50,50);
	mango4=new Mango(1380,350,50,50);
	mango5=new Mango(1050,400,50,50);
	mango6=new Mango(1200,250,50,50);
	mango7=new Mango(1170,300,50,50);
	mango8=new Mango(1230,320,50,50);
	mango9=new Mango(1280,350,50,50);
	mango10=new Mango(1090,350,50,50);

	sling=new Slingshot(stone.body,{x:190,y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  image(boyimg,50,490,250,250);
  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  sling.display();
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(sling.body,{x:mouseX,y:mouseY})

function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode===32){
       sling1.attach(bird1.body);
    }
}



}
