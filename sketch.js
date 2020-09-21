var PLAY = 1;
var END = 0;
var gameState = 1;
var score, fruitGroup, enemyGroup, fruit,  enemy,  sword, fruit1, fruit2, fruit3, fruit4,  randomfruit, r, swordImage, monsterImage,  gameoverImage, monster,knifeSound,  gameoverSound;

function preload(){
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
   monsterImage =            loadAnimation("alien1.png","alien2.png");
    swordImage = loadImage("sword.png");
    gameoverImage =                            loadImage("gameover.png");
  
  gameoverSound = loadSound("gameOverSound.mp3");
  
  knifeSound = loadSound("knifeSwooshSound.mp3");
   
  }
  function setup() {
    createCanvas(600,600);
    sword = createSprite(200,300,20,20);
    sword.addImage(swordImage);

    sword.setCollider("circle",0,0,55);

    score = 0;
    fruitGroup = createGroup();
    enemyGroup = createGroup();

    }

  function draw(){
       background("lightblue");

       if(gameState === PLAY){

       sword.x = World.mouseX;
       sword.y = World.mouseY;

       fruits();
       Enemy();

    if(fruitGroup.isTouching(sword)){
       fruitGroup.destroyEach();
       score = score+1; 
      knifeSound.play();
    }

    else
    {
    if(enemyGroup.isTouching(sword)){
       gameState=END;
      gameoverSound.play();

    sword.addImage(gameoverImage);
    sword.x = 200;
    sword.y = 200;

    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityEach(0);
    enemyGroup.setVelocityEach(0);  

      }
    } 
  }

  drawSprites();

  textSize(30);
  fill("red");
  text("Score : " + score,200,30);

  }

function fruits(){
if(World.frameCount%100===0){
   position = Math.round(random(1,2));
  fruit = createSprite(400,200,20,20);
  
if(position==1){
   fruit.x = 400;
   fruit.velocityX = -(7+(score/4));
  }
else{
if(position==2){
   fruit.x = 0;
   fruit.velocityX = (7+(score/4));
   
  }
  }
if(position == 3){
   fruit.x = 400;
   fruit.velocityX = -(7+(score/4));

} 
else{ 
if(position==4){
   fruit.x = 0;
   fruit.velocityX = (7+(score/4));
   
}  
}
   fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,340));
   
    
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}
 
function Enemy() {

if(World.frameCount%200 === 0){
  monster = createSprite(400,200,20,20);
  monster.addAnimation("moving",monsterImage);
  monster.y = Math.round(random(100,300));
  monster.velocityX = -(8+(score/10));
  monster.setLifetime = 50;
  enemyGroup.add(monster);

  }

  } 
//function position(){

//position = Math.round(random(1,2));
//fruit = createSprite(400,200,20,20);

//if(position==1){
  // fruit.x = 400;
   //fruit.velocityX = -(7+(score/4));
  //}
//else{
//if(position==2){
  // fruit.x = 0;
  // fruit.velocityX = (7+(score/4));
   
 // }
  //}