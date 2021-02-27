
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 FoodGroup=createGroup();
  obstaclesGroup=createGroup();
}



function setup() 
{
  createCanvas(600,200);
monkey = createSprite(50,150,20,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  ground = createSprite(600,185,900,10);
  ground.velocityX=-4;
  score=0;
  survivaltime=0;
  
}


function draw() 
{
background(225);
  survivaltime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivaltime,100,50);
  score = Math.round(getFrameRate()/60);
  text("Score: "+score,500,50);
  
  if(keyDown("space"))
    {
      monkey.velocityY = -12;
       
    }
 monkey.velocityY = monkey.velocityY+0.8;
  ground.x=ground.width/2;
  if(ground.x < 0)
    {
      ground.x=ground.width/2;
    }
  monkey.collide(ground);
  
  food();
  obstacles();
  drawSprites();
  
}
function food()
{
  if(frameCount%80 ===0)
    {
      var banana = createSprite(600,120,40,10);
    
    banana.y = Math.round(random(100,150));
      
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  
    }
}
function obstacles()
{
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(300,155,10,40);
    obstacle.velocityX=-3;
    obstacle.addImage(obstacleImage);
     obstacle.scale = 0.1;
    obstacle.lifetime = 300;
  obstacle.collide(ground);
    obstaclesGroup.add(obstacle);
    
}
}





