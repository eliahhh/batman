const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies;
var drops = []
var maxDrops = 100;
var thunderFrame = 0;
var umbrella, b;

function preload(){
    
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    
    engine = Engine.create();
    world = engine.world;
    
    createCanvas(400,700);
    umbrella = new Umbrella(200,500);
    if(frameCount %150 === 0){

        for(var i = 0; i < maxDrops; i++){

            drops.push(new Drop(random(0,400),random(0,400)));
        }
    }
}

function draw(){
    
    background(0);

    Engine.update(engine);
   rand = Math.round(random(1,4));
   if(frameCount%80===0){

    thunderFrame = frameCount;
    b = createSprite(random(10,370),random(10,30),10,10);
    switch(rand){

        case 1: b.addImage(thunder1);
        break;

        case 2: b.addImage(thunder2);
        break;

        case 3: b.addImage(thunder3);
        break;
        
        case 4: b.addImage(thunder4);
        break;

        default:break;
        
    }
    b.scale = random(0.3,0.6);

   }
   if(thunderFrame+10===frameCount && b){

    b.destroy();

   }
   umbrella.display();
   for(var i =0;i<maxDrops;i++){

        drops[i].showDrop();
        drops[i].updateY();

   }
   drawSprites();
}   

