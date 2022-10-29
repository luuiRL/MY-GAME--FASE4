var gameState = "play";
var gameState = "end";
var gameOver, gameOverImg, gameOverSound;

var WarriorLife = 250, WarriorLifeImg, WarriorLifeGroup;
var slimeLife = 2;
var Sword, SwordImg;

var restart, restartImg;


//Cavaleira;

var Warrior = 250;
//CORRIDA
var WarriorRun1, WarriorRun2, WarriorRun3, WarriorRun4 , WarriorRun5, WarriorRun6, WarriorRun7, WarriorRun8;
//PARADA
var WarriorIdle1, WarriorIdle2, WarriorIdle3, WarriorIdle4, WarriorIdle5, WarriorIdle6;
//CORRIDA PRO OUTRO LADO
var WarriorRunReverse1, WarriorRunReverse2, WarriorRunReverse3, WarriorRunReverse4, WarriorRunReverse5, WarriorRunReverse6, WarriorRunReverse7, WarriorRunReverse8;
//PARADA PRO OUTRO LADO
var WarriorIdleReverse1, WarriorIdleReverse2, WarriorIdleReverse3, WarriorIdleReverse4, WarriorIdleReverse5, WarriorIdleReverse6;
//ATAQUE
var WarriorAttack1,  WarriorAttack2,  WarriorAttack3,  WarriorAttack4,  WarriorAttack5,  WarriorAttack6,  WarriorAttack7,  WarriorAttack8,  WarriorAttack9, WarriorAttack10, WarriorAttack11, WarriorAttack12;

var WarriorDie1, WarriorDie2, WarriorDie3, WarriorDie4, WarriorDie5, WarriorDie6, WarriorDie7, WarriorDie8, WarriorDie9, WarriorDie10, WarriorDie11;



//////////////////////////////////////////////////

//Fundo;
var bg_img, bg;

//////////////////////////////////////////////////

//Esqueleto;

var Skeleton, SkeletonATK, SkeletonF, SkeletonHit, SkeletonWalk, SkeletonIdle;

//////////////////////////////////////////////////

//Slime;

var slime, slime2, slime3, slime4, slime5, slime6, slime7, slime8, slime9;
var slimeGroup;
var slimeMove1, slimeMove2, slimeMove3, slimeMove4;
var slimeDie1, slimeDie2, slimeDie3, slimeDie4;
var slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5;

//MOVIMENTAÇÃO
var direction = 1;
var velocityX = 0;

function preload() {
  bg_img = loadImage("dungeon do meu game.png"); 


  

  //CAVALEIRO
  //corrida
  WarriorRun1 = loadImage("assets/WarriorRun/Warrior_Run_1.png");
  WarriorRun2 = loadImage("assets/WarriorRun/Warrior_Run_2.png");
  WarriorRun3 = loadImage("assets/WarriorRun/Warrior_Run_3.png");
  WarriorRun4 = loadImage("assets/WarriorRun/Warrior_Run_4.png");
  WarriorRun5 = loadImage("assets/WarriorRun/Warrior_Run_5.png");
  WarriorRun6 = loadImage("assets/WarriorRun/Warrior_Run_6.png");
  WarriorRun7 = loadImage("assets/WarriorRun/Warrior_Run_7.png");
  WarriorRun8 = loadImage("assets/WarriorRun/Warrior_Run_8.png");



  //corrida reversa
  WarriorRunReverse1 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_1.png");
  WarriorRunReverse2 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_2.png");
  WarriorRunReverse3 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_3.png");
  WarriorRunReverse4 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_4.png");
  WarriorRunReverse5 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_5.png");
  WarriorRunReverse6 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_6.png");
  WarriorRunReverse7 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_7.png");
  WarriorRunReverse8 = loadImage("assets/WarriorRunReverse/Warrior_RunReverse_8.png");



  //parado
  WarriorIdle1 = loadImage("assets/WarriorIdle/Warrior_Idle_1.png");
  WarriorIdle2 = loadImage("assets/WarriorIdle/Warrior_Idle_2.png");
  WarriorIdle3 = loadImage("assets/WarriorIdle/Warrior_Idle_3.png");
  WarriorIdle4 = loadImage("assets/WarriorIdle/Warrior_Idle_4.png");
  WarriorIdle5 = loadImage("assets/WarriorIdle/Warrior_Idle_5.png");
  WarriorIdle6 = loadImage("assets/WarriorIdle/Warrior_Idle_6.png");



  //parado reverso
  WarriorIdleReverse1 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_1.png");
  WarriorIdleReverse2 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_2.png");
  WarriorIdleReverse3 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_3.png");
  WarriorIdleReverse4 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_4.png");
  WarriorIdleReverse5 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_5.png");
  WarriorIdleReverse6 = loadImage("assets/WarriorIdleReverse/Warrior_IdleReverse_6.png");



  //ataque
  WarriorAttack1 = loadImage("assets/WarriorAttack/Warrior_Attack_1.png");
  WarriorAttack2 = loadImage("assets/WarriorAttack/Warrior_Attack_2.png");
  WarriorAttack3 = loadImage("assets/WarriorAttack/Warrior_Attack_3.png");
  WarriorAttack4 = loadImage("assets/WarriorAttack/Warrior_Attack_4.png");
  WarriorAttack5 = loadImage("assets/WarriorAttack/Warrior_Attack_5.png");
  WarriorAttack6 = loadImage("assets/WarriorAttack/Warrior_Attack_6.png");
  WarriorAttack7 = loadImage("assets/WarriorAttack/Warrior_Attack_7.png");
  WarriorAttack8 = loadImage("assets/WarriorAttack/Warrior_Attack_8.png");
  WarriorAttack9 = loadImage("assets/WarriorAttack/Warrior_Attack_9.png");
  //2°Attack
  WarriorAttack10 = loadImage("assets/WarriorAttack/Warrior_Attack_10.png");
  WarriorAttack11 = loadImage("assets/WarriorAttack/Warrior_Attack_11.png");
  WarriorAttack12 = loadImage("assets/WarriorAttack/Warrior_Attack_12.png");


  //morte
  WarriorDie1 = loadImage("assets/WarriorDie/Warrior_Death_1.png");
  WarriorDie2 = loadImage("assets/WarriorDie/Warrior_Death_2.png");
  WarriorDie3 = loadImage("assets/WarriorDie/Warrior_Death_3.png");
  WarriorDie4 = loadImage("assets/WarriorDie/Warrior_Death_4.png");
  WarriorDie5 = loadImage("assets/WarriorDie/Warrior_Death_5.png");
  WarriorDie6 = loadImage("assets/WarriorDie/Warrior_Death_6.png");
  WarriorDie7 = loadImage("assets/WarriorDie/Warrior_Death_7.png");
  WarriorDie8 = loadImage("assets/WarriorDie/Warrior_Death_8.png");
  WarriorDie9 = loadImage("assets/WarriorDie/Warrior_Death_9.png");
  WarriorDie10 = loadImage("assets/WarriorDie/Warrior_Death_10.png");
  WarriorDie11 = loadImage("assets/WarriorDie/Warrior_Death_11.png");



  //vida
  WarriorLifeImg = loadImage("vida.png");
  gameOverSound = loadSound("dark-souls-you-died-By-Tuna.mp3");
  restartImg = loadImage("restart.png");




  //SLIME
  slimeMove1 = loadImage("assets/SlimeMove/slime-move-0.png");
  slimeMove2 = loadImage("assets/SlimeMove/slime-move-1.png");
  slimeMove3 = loadImage("assets/SlimeMove/slime-move-2.png");
  slimeMove4 = loadImage("assets/SlimeMove/slime-move-3.png");

  slimeATQ1 = loadImage("assets/SlimeATQ/slime-attack-0.png");
  slimeATQ2 = loadImage("assets/SlimeATQ/slime-attack-1.png");
  slimeATQ3 = loadImage("assets/SlimeATQ/slime-attack-2.png");
  slimeATQ4 = loadImage("assets/SlimeATQ/slime-attack-3.png");
  slimeATQ5 = loadImage("assets/SlimeATQ/slime-attack-4.png");

  slimeDie1 = loadImage("assets/SlimeDie/slime-die-0.png");
  slimeDie2 = loadImage("assets/SlimeDie/slime-die-1.png");
  slimeDie3 = loadImage("assets/SlimeDie/slime-die-2.png");
  slimeDie4 = loadImage("assets/SlimeDie/slime-die-3.png");

  gameOverImg = loadImage("gameOver.png");




  
  //WarriorRun
  WarriorRun1.playing = true;
  WarriorRun2.playing = true;
  WarriorRun3.playing = true;
  WarriorRun4.playing = true;
  WarriorRun5.playing = true;
  WarriorRun6.playing = true;
  WarriorRun7.playing = true;

  WarriorRun1.looping = false;
  WarriorRun2.looping = false;
  WarriorRun3.looping = false;
  WarriorRun4.looping = false;
  WarriorRun5.looping = false;
  WarriorRun6.looping = false;
  WarriorRun7.looping = false;

  //WarriorRunReverse
  WarriorRunReverse1.playing = true;
  WarriorRunReverse2.playing = true;
  WarriorRunReverse3.playing = true;
  WarriorRunReverse4.playing = true;
  WarriorRunReverse5.playing = true;
  WarriorRunReverse6.playing = true;
  WarriorRunReverse7.playing = true;
  WarriorRunReverse8.playing = true;

  WarriorRunReverse1.looping = false;
  WarriorRunReverse2.looping = false;
  WarriorRunReverse3.looping = false;
  WarriorRunReverse4.looping = false;
  WarriorRunReverse5.looping = false;
  WarriorRunReverse6.looping = false;
  WarriorRunReverse7.looping = false;
  WarriorRunReverse8.looping = false;

  //WarriorIdle
  WarriorIdle1.playing = true;
  WarriorIdle2.playing = true;
  WarriorIdle3.playing = true;
  WarriorIdle4.playing = true;
  WarriorIdle5.playing = true;
  WarriorIdle6.playing = true;

  WarriorIdle1.looping = true;
  WarriorIdle2.looping = true;
  WarriorIdle3.looping = true;
  WarriorIdle4.looping = true;
  WarriorIdle5.looping = true;
  WarriorIdle6.looping = true;

  //WarriorIdleReverse
  WarriorIdleReverse1.playing = true;
  WarriorIdleReverse2.playing = true;
  WarriorIdleReverse3.playing = true;
  WarriorIdleReverse4.playing = true;
  WarriorIdleReverse5.playing = true;
  WarriorIdleReverse6.playing = true;

  WarriorIdleReverse1.looping = true;
  WarriorIdleReverse2.looping = true; 
  WarriorIdleReverse3.looping = true; 
  WarriorIdleReverse4.looping = true;
  WarriorIdleReverse5.looping = true;
  WarriorIdleReverse6.looping = true;

  //WarriorAttack
  WarriorAttack1.playing = true;
  WarriorAttack2.playing = true;
  WarriorAttack3.playing = true;
  WarriorAttack4.playing = true;
  WarriorAttack5.playing = true;
  WarriorAttack6.playing = true;
  WarriorAttack7.playing = true;
  WarriorAttack8.playing = true;
  WarriorAttack9.playing = true;

  WarriorAttack1.looping = false;
  WarriorAttack2.looping = false;
  WarriorAttack3.looping = false;
  WarriorAttack4.looping = false;
  WarriorAttack5.looping = false;
  WarriorAttack6.looping = false;
  WarriorAttack7.looping = false;
  WarriorAttack8.looping = false;
  WarriorAttack9.looping = false;

  WarriorAttack10.playing = true;
  WarriorAttack11.playing = true;
  WarriorAttack12.playing = true;

  WarriorAttack10.looping = false;
  WarriorAttack11.looping = false;
  WarriorAttack12.looping = false;

  //dying

  WarriorDie1.playing = true;
  WarriorDie2.playing = true;
  WarriorDie3.playing = true;
  WarriorDie4.playing = true;
  WarriorDie5.playing = true;
  WarriorDie6.playing = true;
  WarriorDie7.playing = true;
  WarriorDie8.playing = true;
  WarriorDie9.playing = true;
  WarriorDie10.playing = true;
  WarriorDie11.playing = true;

  WarriorDie1.looping = false;
  WarriorDie2.looping = false;
  WarriorDie3.looping = false;
  WarriorDie4.looping = false;
  WarriorDie5.looping = false;
  WarriorDie6.looping = false;
  WarriorDie7.looping = false;
  WarriorDie8.looping = false;
  WarriorDie9.looping = false;
  WarriorDie10.looping = false;
  WarriorDie11.looping = false;

  //SLIME
  //move
  slimeMove1.playing = true;
  slimeMove2.playing = true;
  slimeMove3.playing = true;
  slimeMove4.playing = true;

  slimeMove1.looping = true;
  slimeMove2.looping = true;
  slimeMove3.looping = true;
  slimeMove4.looping = true;

  //attack
  slimeATQ1.playing = true;
  slimeATQ2.playing = true;
  slimeATQ3.playing = true;
  slimeATQ4.playing = true;
  slimeATQ5.playing = true;

  slimeATQ1.looping = false;
  slimeATQ2.looping = false;
  slimeATQ3.looping = false;
  slimeATQ4.looping = false;
  slimeATQ5.looping = false;

  //die
  slimeDie1.playing = false;
  slimeDie2.playing = false;
  slimeDie3.playing = false;
  slimeDie4.playing = false;

  slimeDie1.looping = false;
  slimeDie2.looping = false;
  slimeDie3.looping = false;
  slimeDie4.looping = false;

}

function setup() {
  createCanvas(1536,270);
  frameRate(50);

  bg = createSprite(displayWidth/2-20,displayHeight/2-300,20,20);
  bg.addImage(bg_img);
  bg.scale = 1.1;

  textSize(40);
  text("VIDA: ", +WarriorLife, 80, 60);

  
  WarriorLife = createSprite(5,25)
  Sword = createSprite(displayWidth/2-10, displayHeight/2-206, 50, 5, 5);
 

  Warrior = createSprite(5,displayHeight/2-215, 135);
  Warrior.scale = 2;
  Warrior.addAnimation('Running', WarriorRun1, WarriorRun2, WarriorRun3, WarriorRun4, WarriorRun5, WarriorRun6, WarriorRun7, WarriorRun8);
  Warrior.addAnimation('ReverseRunning', WarriorRunReverse1, WarriorRunReverse2, WarriorRunReverse3, WarriorRunReverse4, WarriorRunReverse5, WarriorRunReverse6, WarriorRunReverse7, WarriorRunReverse8);
  Warrior.addAnimation('Idling', WarriorIdle1, WarriorIdle2, WarriorIdle3, WarriorIdle4, WarriorIdle5, WarriorIdle6);
  Warrior.addAnimation('ReverseIdling', WarriorIdleReverse1, WarriorIdleReverse2, WarriorIdleReverse3, WarriorIdleReverse4, WarriorIdleReverse5, WarriorIdleReverse6);
  Warrior.addAnimation("Attacking", WarriorAttack1, WarriorAttack2, WarriorAttack3, WarriorAttack4, WarriorAttack5, WarriorAttack6, WarriorAttack7, WarriorAttack8, WarriorAttack9);
  Warrior.addAnimation("Attacking2", WarriorAttack10, WarriorAttack11, WarriorAttack12);
  Warrior.addAnimation('WDying', WarriorDie1, WarriorDie2, WarriorDie3, WarriorDie4, WarriorDie5, WarriorDie6, WarriorDie7, WarriorDie8, WarriorDie9, WarriorDie10, WarriorDie11);

  //colisor
  Warrior.debug = true;
  Warrior.setCollider("rectangle",-5, 3, 35, 20, 90);
  
  WarriorLife.addImage(WarriorLifeImg);

  WarriorLifeGroup = new Group();
  WarriorLifeGroup.add(WarriorLife);
  WarriorLife.scale = 0.07
  WarriorLife.x = camera.x


  //slime

  
  slime = createSprite(random(width/2, 1536), height -35);
  slime.debug = true;
  slime.setCollider("rectangle", 1,11,23,35,90);
  slime.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime.changeAnimation('Moving');
  slime.scale = 2.2;

  slime2 = createSprite(random(width/2, 1536), height -35);
  slime2.debug = true;
  slime2.setCollider("rectangle", 1,11,23,35,90);
  slime2.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime2.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime2.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime2.changeAnimation('Moving');
  slime2.scale = 2.2;

  slime3 = createSprite(random(width/2, 1536), height -35);
  slime3.debug = true;
  slime3.setCollider("rectangle", 1,11,23,35,90);
  slime3.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime3.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime3.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime3.changeAnimation('Moving');
  slime3.scale = 2.2;

  slime4 = createSprite(random(width/2, 1536), height -35);
  slime4.debug = true;
  slime4.setCollider("rectangle", 1,11,23,35,90);
  slime4.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime4.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime4.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime4.changeAnimation('Moving');
  slime4.scale = 2.2;

  slime5 = createSprite(7515, height -35);
  slime5.debug = true;
  slime5.setCollider("rectangle", 1,11,23,35,90);
  slime5.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime5.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime5.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime5.changeAnimation('Moving');
  slime5.scale = 2.2;

  slime6= createSprite(7516, height -35);
  slime6.debug = true;
  slime6.setCollider("rectangle", 1,11,23,35,90);
  slime6.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime6.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime6.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime6.changeAnimation('Moving');
  slime6.scale = 2.2;

  slime7 = createSprite(1536, height -35);
  slime7.debug = true;
  slime7.setCollider("rectangle", 1,11,23,35,90);
  slime7.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime7.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime7.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime7.changeAnimation('Moving');
  slime7.scale = 2.2;

  slime8 = createSprite( 5316, height -35);
  slime8.debug = true;
  slime8.setCollider("rectangle", 1,11,23,35,90);
  slime8.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime8.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime8.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime8.changeAnimation('Moving');
  slime8.scale = 2.2;

  slime9 = createSprite(1536, height -35);
  slime9.debug = true;
  slime9.setCollider("rectangle", 1,11,23,35,90);
  slime9.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime9.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime9.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime9.changeAnimation('Moving');
  slime9.scale = 2.2;

  slimeGroup = new Group();
  slimeGroup.add(slime);
  slimeGroup.add (slime2);
  slimeGroup.add(slime3);
  slimeGroup.add(slime4);
  slimeGroup.add(slime5);
  slimeGroup.add(slime6);
  slimeGroup.add(slime7);
  slimeGroup.add(slime8);
  slimeGroup.add(slime9);

  
  Warrior.scale = 2;


  textSize(15);
}

function draw() {
  background(0);

  if(gameState = "play"){

    //espada

    Sword.x = Warrior.x

    //velocidade dos monstros
    slime.velocityX = -1;
    slime2.velocityX = -1;
    slime3.velocityX = -1;
    slime4.velocityX = -1;
    slime5.velocityX = -1;
    slime6.velocityX = -1;
    slime7.velocityX = -1;
    slime8.velocityX = -1;
    slime9.velocityX = -1;
    

    //camera
    WarriorLife.x = camera.x

//texto
textSize(40);
text("VIDA: ", +WarriorLife, 80, 60);

//movimentar o PC

//lado direito
if(keyDown("d")){

direction = 1
  Warrior.changeAnimation('Running');
  velocityX = 3

}


 
Warrior.x = Warrior.x + velocityX;
if (velocityX == 0){
  if(direction == 1){
    Warrior.changeAnimation("Idling");
  }
  else{
    Warrior.changeAnimation("ReverseIdling");
  }
}

//lado esquerdo

if(keyDown("a")){
  direction = -1
  velocityX = -3
  Warrior.changeAnimation('ReverseRunning');
}

//lado correto de acordo com a movimentação
if(!keyDown("a") && !keyDown("d")){
  velocityX = 0
}
camera.position.x = Warrior.position.x;



//Atacando
if(keyDown("space")){

  Warrior.changeAnimation('Attacking');
  Warrior.velocityX = 0;
  Sword.debug = true;
  Sword.setCollider("rectangle", 0, 0, 100, 120, 90);
  Sword.x = Warrior.x

  //dano

      if(slime.isTouching(Sword)){

      slime.destroy();
       
        }
        
      
          if(slime2.isTouching(Sword)){
    
          slime2.destroy();
           
            }

          

              if(slime3.isTouching(Sword)){
        
              slime3.destroy();
               
                }

               

                  if(slime4.isTouching(Sword)){
            
                  slime4.destroy();
                   
                    }

                    
                  if(slime5.isTouching(Sword)){
            
                    slime5.destroy();
                     
                      }

                      
                  if(slime6.isTouching(Sword)){
            
                    slime6.destroy();
                     
                      }

                      
                  if(slime7.isTouching(Sword)){
            
                    slime7.destroy();
                     
                      }

                      
                  if(slime8.isTouching(Sword)){
            
                    slime8.destroy();
                     
                      }

                      
                  if(slime9.isTouching(Sword)){
            
                    slime9.destroy();
                     
                      }
                    
                
            
    
  //animaçao do ataque
 Warrior.changeAnimation('Attacking');
 Warrior.changeAnimation('Attacking2');
 Warrior.frameDelay = 10;
 Warrior.velocityX = 0;

  
}
  }

  if(gameState = "end"){

if(slimeGroup.isTouching(Warrior)){
  Warrior.changeAnimation('WDying');

  gameOver = createSprite(3758, 134);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1;
  gameOver.position.x = camera.position.x

  restart = createImg('restart.png');
  restart.position(10, 10);
  restart.size(60,60);
  restart.mouseClicked(reset);

bg.destroy();
Warrior.destroy();
Sword.destroy();
slime.destroy();
slime2.destroy();
slime3.destroy();
slime4.destroy();
slime5.destroy();
slime6.destroy();
slime7.destroy();
slime8.destroy();
slime9.destroy();
WarriorLife.destroy();
gameOverSound.play();

  
}



  }
            
          
  
  
  drawSprites();
}

function reset(){
  location.reload();
}

  

