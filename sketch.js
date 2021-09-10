var path,boy,coin
var pathImg,boyImg,coinImg;
var treasureCollection = 0;
var coinG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("boy.jpg");
  coinImg = loadImage("coin.jpg");
  
}

function setup(){
  
  createCanvas(400,600);
path=createSprite(2000,300);
path.addImage(pathImg);
path.velocityY = 4;



boy = createSprite(70,550,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
coinG=new Group();


}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCoin();
    

    if (coinG.isTouching(boy)) {
      coinG.destroyEach();
      treasureCollection=treasureCollection+500;
    }
  }
  {
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }

}

function createCoin() {
  if (World.frameCount % 200 == 0) {
  var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.12;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coinG.add(coin);
  }
}
