////p1 = player 1
let p1;

////d1 = door 1
let d1;
let d2;
let d3;

////k1 = key 1
let k1;
let k2;
let k3;

////b1 = box(platform)1
let b1,b2,b3,b4,b5,b6,b7,b8,b9;

////g1 = guard 1
let g1,g2,g3,g4

////level controls
var stage = 0 //which stage the game is currently on
  //0 = splash
  //1 = level 1
  //2 = win screen
  //3 = lose screen
  //4 = level 2
  //5 = level 3

////counters 
var score = 0;
var lives = 3;

////walking checkers
var step = 0;
var lookingRight = false;
var lookingLeft = true;

//////gravity stuff
var jump = false; 
var direction = 1; //gravity in the y-direction
var velocity = 2; //speed of player
var jumpPower = 15; //strength of the jump
var fallingSpeed = 2; //same as velocity var
var minHeight = 375; //level with the ground
var maxHeight = 50; //max height of top of screen
var jumpCounter = 0; //keeps track of how many times the player jumps

////multi-media
var player;
var playerLeft1;
var playerLeft2;
var playerRight1;
var playerRight2;
var playerJump
var guardLeft1;
var guardLeft2;
var guardRight1;
var guardRight2;
var platform;
var landscape;//this is for the background image
var jumpSound;
var keyItem;
var keySound;
var guard;
var hitSound;
var door;
var winSound;
var loseSound;
var themeSong;
var doorSound;


function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  
  ////background music
  themeSong.loop();
  
  ////Players
  p1 = new Player(500,370,90,90,5);
  
  ////Doors
  d1 = new Door(700,335,150,150);
  d2 = new Door(590,100,150,150);
  d3 = new Door(80,335,150,150);
  
  ////Keys
  k1 = new Key(410,60,50,50);
  k2 = new Key(100,200,50,50);
  k3 = new Key(720,100,50,50);
  
  ////Platforms
  b1 = new Platform(200,300,200,40)
  b2 = new Platform(500,300,200,40)
  b3 = new Platform(400,110,200,40)
  b4 = new Platform(120,300,200,40)
  b5 = new Platform(650,300,200,40)
  b6 = new Platform(620,194,200,40)
  b7 = new Platform(370,170,200,40)
  b8 = new Platform(680,160,200,40)
  b9 = new Platform(400,240,200,40)
  
  ////Guards
  g1 = new Guard(300,370,75,85,200,2,1,300);
  g2= new Guard(120,240,75,85,120,1,75);
  g3= new Guard(380,108,75,85,380,1,90);
  g4= new Guard(400,178,75,85,1,85);
}

function draw() {
  background(220);
  
  ////STAGE FUNCTIONS
  if(stage == 0){
    splash();
  }
  if(mouseIsPressed == true){
    stage = 1;
  }
  if(stage == 1){
    level1();
  }
  
  if(stage == 2){
    winScreen();
  }
  
  if(stage == 3){
    loseScreen();
  }
  
  if(stage == 4){
    level2();
  }
  
  if(stage == 5){
    level3();
  }
  
  ////CALL FUNCTIONS
  //collide();
  
}

///////////////////////////////////////////////////////////////////SPLASHES
function splash(){
  background('grey');
  image(splashImage, width/2, height/2, width, height)
  
  ////title
  fill('white');
  stroke(0);
  strokeWeight(10);
  textSize(100);
  text('Collecting Keys', width/2, 120);
  textSize(20);
  strokeWeight(5);
  text('By: Mikaeyla Gensler', width/2, 200);
  
  ////instructions
  textSize(35);
  text('How To Play:', width/2, 300 );
  textSize(20)
  text('Use The Left and Right Arrow Keys To Move', width/2, 345 );
  text('Use The Up Arrow Key To Jump', width/2, 370 );
  text('Unlock The Doors With A Key', width/2, 397);
  text('Collect 3 Keys To Win!', width/2, 425);
  
  textSize(35)
  text('CLICK THE SCREEN TO START!', width/2, 470);
  
}

///////////////////////////////////////////////////////////////////WIN AND LOSE SCREENS

////win screen
function winScreen(){
    image(splashImage, width/2, height/2, width, height)
  fill('white');
  stroke(0);
  strokeWeight(10);
  textSize(100);
  text('You Win!', width/2, 120);
  themeSong.stop();
}

////lose screen
function loseScreen(){
    image(splashImage, width/2, height/2, width, height)
  fill('white');
  stroke(0);
  strokeWeight(10);
  textSize(100);
  text('You Lose!', width/2, 120);
  themeSong.stop();
}

//////////////////////////////////////////////////////////////////PLATFORM COLLISION
//function collide(){
//     if(Player.x >= Platform.x-Platform.width/2 && Player.x <= Platform.x+Platform.width/2 && Player.y + Player.height/2 >= Platforn.y - Platform.height/2 && Player.y - Player.height/2 <= Platform.y+Platform.height/2 && jump == false){
// 		Player.y = Platform.y-55;//dont fall and rest on top of platform
// 		velocity = 0; //
// 		jumpCounter = 0;//allows us to jump again from platform
// 	}//for platform 
// }

///////////////////////////////////////////////////////////////////LEVELS

//////////////////////////////////////////////////////////////////////////LEVEL 1
function level1(){
    ////appearance stuff
    background('grey');
  image(landscape, width/2, height/2, width, height)
  
  //draw door
    d1.show();  
  
  //draw key
    k1.show();
    k1.collect();
    
    //draw platforms
    b1.show();
    b2.show();
    b3.show();
    // b1.collide();
    // b2.collide();
    // b3.collide();
  
   //draw player
    p1.show();
    p1.move();
    p1.jump();
  
    //draw guard
    g1.show();
  
    ////frame
    noFill();
    stroke(0);
    strokeWeight(10);
    rect(width/2, height/2, width, height);
    
    ////draw the platforms
    stroke(0);
    strokeWeight(5);
    fill('gray');
  
  ////scoreboard
    fill('white');
    stroke(0);
    strokeWeight(10);
    textSize(30);
    text('Keys Collected:', 120, 40);
    text(score,250,40);
  
    ////lives
    fill('white');
    stroke(0);
    strokeWeight(10);
    textSize(30);
    text('Lives:', 700, 40);
    text(lives,760,40);
 
    ////triggers lose screen
    if(lives <= 0){
      loseSound.play();
      stage = 3;
    }
  
}

///////////////////////////////////////////////////////////////////////////LEVEL 2
function level2(){
  
  image(landscape, width/2, height/2, width, height);
  haveKey1 = false;
  
  //draw door
  d2.show();
  
  //draw key
    k2.show();
    k2.collect();
  
  //draw platforms
    b4.show();
    b5.show();
    b6.show();
    b7.show();
//     b4.collide();
//     b5.collide();
//     b6.collide();
//     b7.collide();
  
   //draw player
    p1.show();
    p1.move();
    p1.jump();
  
  //draw guard
    g2.show();
    g3.show();
  
 
////level 2 frame
  noFill();
    stroke(0);
    strokeWeight(10);
    rect(width/2, height/2, width, height);
  
  ////scoreboard
    fill('white');
    stroke(0);
    strokeWeight(10);
    textSize(30);
    text('Keys Collected:', 120, 40);
    text(score,250,40);
  
    ////lives
    fill('white');
    stroke(0);
    strokeWeight(10);
    textSize(30);
    text('Lives:', 700, 40);
    text(lives,760,40);
  
  if(lives <= 0){
      loseSound.play();
      stage = 3;
    }
}

///////////////////////////////////////////////////////////////////LEVEL 3
function level3()
{
    
    image(landscape, width/2, height/2, width, height);
  haveKey1 = false;
  haveKey2 = false;
  
  //draw door
    d3.show();
  
  //draw key
    k3.show();
    k3.collect();
  
    //draw platforms
    b8.show();
    b9.show();
    // b8.collide();
    // b9.collide();
  
  //draw guard
    g4.show();
  
  //draw player
    p1.show();
    p1.move();
    p1.jump();
  
   ////frame
  noFill();
    stroke(0);
    strokeWeight(10);
    rect(width/2, height/2, width, height);
  
  ////scoreboard
    fill('white');
    stroke(0);
    strokeWeight(10);
    textSize(30);
    text('Keys Collected:', 120, 40);
    text(score,250,40);
  
    ////lives
    fill('white');
    stroke(0);
    strokeWeight(10);
    textSize(30);
    text('Lives:', 700, 40);
    text(lives,760,40);
  
  //lose screen
  if(lives <= 0){
      loseSound.play();
      stage = 3;
    }
}
  
///////////////////////////////////////////////////////////////////LOADS AUDIO/IMAGES
function preload(){
  
  player = loadImage('assets/player_idle.png')
  playerLeft1 = loadImage('assets/player_left1.png');
  playerLeft2 = loadImage('assets/player_left2.png');
  playerRight1 = loadImage('assets/player_right1.png');
  playerRight2 = loadImage('assets/player_right2.png');
  playerJump = loadImage('assets/player_jump.png');
  playerIdle = loadImage('assets/player_idle.png')
  
  platform = loadImage('assets/RockTile.png')
  landscape = loadImage('assets/dungeon_wall.png')
  walkway = loadImage('assets/dungeon_floor.jpg')
  jumpSound = loadSound('assets/Jump_03.mp3')
  
  splashImage = loadImage('assets/splash_background.png')
  
  keyItem = loadImage('assets/key.png');
  keySound = loadSound('assets/Pickup_04.mp3');
  hitSound = loadSound('assets/Hit_03.mp3');
  
  guard = loadImage('assets/idle_1.png');
  guardLeft1 = loadImage('assets/left1.png');
  guardLeft2 = loadImage('assets/left2.png');
  guardRight1 = loadImage('assets/right1.png');
  guardRight2 = loadImage('assets/right2.png');
  
  door = loadImage('assets/door.png');
  doorSound = loadSound('assets/door-01.mp3');
  
  winSound = loadSound('assets/Jingle_Win_00.mp3');
  loseSound = loadSound('assets/Jingle_Lose_00.mp3');
  themeSong = loadSound('assets/Dungeon_Theme.mp3');
  
}
///////////////////////////////////////////////////////////////////CLASSES
class Player {
  constructor(x, y, height, width, speed){
    this.x = x;
    this.y = y; 
    this.width = width;
    this.height = height;
    this.speed = speed;
  }
  move(){
    if(keyIsDown(LEFT_ARROW)){
      p1.x = p1.x-p1.speed; 
      lookingLeft = true;
    }
  else
    {
      lookingLeft = false;
    }
    
  if(keyIsDown(RIGHT_ARROW)){
      p1.x = p1.x+p1.speed;
    lookingRight = true;
    }
  else
  {
    lookingRight = false;
  }
  
  if(keyIsDown(UP_ARROW)){
    //console.log("jumped");
    jump = true;
  }
  else{
    jump = false;
  }
}
  show(){
     if(lookingRight == true)
  {
    lookingLeft = false;
    step = step + 1;//walking
    if(step == 0){
      image(playerRight1,p1.x,p1.y,p1.width,p1.height);
    }
    else if(step == 1){
      image(playerRight1,p1.x,p1.y,p1.width,p1.height);
    } 
    else if(step == 2){
      image(playerRight1,p1.x,p1.y,p1.width,p1.height);
    }
     else if(step == 3){
      image(playerRight2,p1.x,p1.y,p1.width,p1.height);
    }
     else if(step == 4){
      image(playerRight2,p1.x,p1.y,p1.width,p1.height);
    }
     else if(step == 5){
      image(playerRight2,p1.x,p1.y,p1.width,p1.height);
       step = 0;
    }
  }
  
   if(lookingLeft == true)
  {
    lookingRight = false;
    step = step + 1;//walking
    if(step == 0){
      image(playerLeft1,p1.x,p1.y,p1.width,p1.height);
    }
    else if(step == 1){
      image(playerLeft1,p1.x,p1.y,p1.width,p1.height);
    } 
    else if(step == 2){
      image(playerLeft1,p1.x,p1.y,p1.width,p1.height);
    }
     else if(step == 3){
      image(playerLeft2,p1.x,p1.y,p1.width,p1.height);
    }
     else if(step == 4){
      image(playerLeft2,p1.x,p1.y,p1.width,p1.height);
    }
     else if(step == 5){
      image(playerLeft2,p1.x,p1.y,p1.width,p1.height);
       step = 0;
    }
  }
  
  if(lookingRight == false && lookingLeft == false && jump == false){
    image(playerIdle,p1.x,p1.y,p1.width,p1.height);
  }
  else if(lookingRight == false && lookingLeft == false && jump == true){
    image(playerJump, p1.x,p1.y,p1.width,p1.height);
  }
}
  jump(){
    if(this.y >= minHeight && jump == false){
    this.y = this.y;
    jumpCounter = 0;//resets the jump counter once landed on the ground
  }
  else{
    this.y = this.y + (direction*velocity);//makes the gravity work
  }
  
    if(jump == true){
      if(this.y <= maxHeight || jumpCounter >= jumpPower){
        
        if(this.y >= minHeight){
          this.y = minHeight;
        }
      else{  
        velocity = fallingSpeed; //falling
      }
    }
      else{
        jumpSound.play();
      velocity = -jumpPower;//jumping
      jumpCounter = jumpCounter + 1; //adds to the jump counter
      }
  }
  else{
  velocity = fallingSpeed;
    }
  
  //vertical wall barriers
  if(this.x+this.width/2 >= width){
    this.x = this.x-5;
  }//if hit right wall, stop walking
  
  if(this.x-this.width/2 <= 0){
    this.x = this.x+5;
  }//if hit left wall, stop walking
}
  
}

class Guard{
  constructor(x,y,width,height,position,speed,direction,distance){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.direction = direction;
    this.distance = distance;
  }
  show(){
    image(guard,this.x,this.y,this.width,this.height);
  }
  move(){
      if(Player.x == this.x-this.width/2 && Player.x <= this.x+this.width/2 && Player.y >= this.y-this.height/2 && Player.y <= this.y+this.height/2){
      lives = lives-1;
      Player.x = 600;
      Player.y = 375;
      hitSound.play();
    }
     this.x = this.x + (this.speed*this.direction);
  if(this.x >= this.position + this.distance || this.x <= this.position-this.distance){
    this.direction = this.direction * -1;
  }
  }
}

class Key{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  show(){
    image(keyItem,this.x,this.y,this.width,this.height);
  }
  collect(){
    if( Player.x >= this.x - this.width/2 && Player.x <= this.x+this.width/2 && Player.y >= this.y-this.height/2 && Player.y <= this.y+this.height/2){
    //player grabs the key
    score = score+1;
    this.x = -1000;//removes key from the screen
    keySound.play();
    haveKey1 = true;
    console.log("you have a key!")
  }
  }
}

class Platform{
  constructor(x,y,width,height)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  show(){
    image(platform, this.x, this.y, this.width, this.height);
  }
  collide(){
      if(Player.x >= this.x-this.width/2 && Player.x <= this.x+this.width/2 && Player.y + Player.height/2 >= this.y - this.height/2 && Player.y - Player.height/2 <= this.y+this.height/2 && jump == false){
		Player.y = this.y-55;//dont fall and rest on top of platform
		velocity = 0; //
		jumpCounter = 0;//allows us to jump again from platform
	}//for platform 
}
  
}

class Door{
  constructor(x,y,width,height)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  show(){
    image(door, this.x, this.y, this.width, this.height);
  }
}