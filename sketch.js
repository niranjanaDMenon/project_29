
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boyImage;
var stone,sling;
function preload()
{
	boyImage = loadImage("boy.png");	
	treeImage = loadImage("tree.png");	
}

function setup() {
	createCanvas(800, 700);
	tree = createSprite(600,450,80,80);
	tree.addImage(treeImage);
	tree.scale = 0.35;
	 tree.debug = true;
	 tree.setCollider("rectangle", 0, 0, 20, 80);

	boy = createSprite(160,600,40,80);
	boy.addImage(boyImage);
	boy.scale = 0.075;
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,685,800,10);
//	tree = new Tree(600,450,400,450);
	mango1 = new Mango(495,360,35);
	mango2 = new Mango(490,390,35);
	mango3 = new Mango(590,300,40);
	mango4 = new Mango(590,400,40);
	mango5 = new Mango(620,350,35);
	mango6 = new Mango(700,330,45);
	mango7 = new Mango(710,350,35);

	stone = new Stone(120,570,30);
	sling = new Sling(stone.body,{x:120,y:565})
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  Render.run(render);
}


function draw() {
 
  background(0);
  textSize(20);
  text("Press space to get a second chance to play!!",50,100);
  drawSprites();
  ground.display();
 // tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();
  sling.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);	 
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:120, y:570}) 
	  sling.attach(stone.body);
	}
  }