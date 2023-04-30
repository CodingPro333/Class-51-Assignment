var canvas, backgrounImage
var gameState = 1;
var answer;
var database;
var gameOver;

function setup(){
  canvas = createCanvas(1000,4000); 

  
}

function draw(){
 background("lightblue");
 fill("Red")
 textSize(40)
 text("Press the right key to answer the question",180,90)
if(gameState === 1){
 fill("black");
 textSize(50);
 text("Question 1",380,350)
 text("Simplify 11^3-1327",340,410)
 if(keyDown("4")){
    gameState = 2;
 }
 if(gameState === 2){
  fill("yellow");
  textSize(80);
  text("Nice!",450,200);
 }

 
}
 drawSprites();
}