var ball;
var database;
var gameState=0;
var playerCount;
var form,player,game;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    

}

function draw(){
    background("white");
   game=new Game();
   game.getState();
   game.start();
}