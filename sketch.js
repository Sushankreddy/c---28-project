
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint = Matter.Constraint;

var boy,imgboy;
var stone,stoneimg
var mango1,mongo2,mango3,mongo4,mango5,mongo6 ;
var tree,treeimg;
var chain;
function preload()
{
	imgboy = loadImage("boy.png");
	stoneimg = loadImage("stone.png");
	treeimg = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

     boy=createSprite(250,600,20,100);
	boy.addImage(imgboy);

	stone=createSprite(245,600,20,20);
	stone.addImage(stoneimg);

	tree=createSprite(245,600,20,20);
	tree.addImage(treeimg);

	mango1 = new Mango(600,200,20,20);
	mango2 = new Mango(620,200,20,20);
	mango3 = new Mango(650,190,20,20);
	mango4 = new Mango(620,220,20,20);
	mango5 = new Mango(650,250,20,20);
	mango6 = new Mango(700,200,20,20);
	
	


	var boy_options = {
		isStatis: true
	}

	engine = Engine.create();
	world = engine.world;
  
	boy = Bodies(250,600,20,100,boy_options);
	World.add(world,boy);

	tree = Bodies(600,400,300,400,{isStatis:true});
	World.add(world,tree);
	
	stone = Bodies(245,600,20,100);
	World.add(world,stone);

	World.add(world,chain);


	Engine.run(engine);

	var options = {
		bodyA: boy.body,
		bodyB: stone.body,
		stiffness: 4
	}

	var chain = Constarint(options);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  line(boy.body.position.x,boy.body.position.y,stone.body.position.x,stone.body.position.y);
 
}

function mouseDragged(){
	Matter.body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    this.chain.bodyA = null;
}


