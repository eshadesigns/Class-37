var playerCount, gameState, database, backgroundImg;
var form, player, game;
var allPlayers = [];
var bgCar;
var car1, car2, car3;
var cars=[];

function preload(){
 bgCar = loadImage("bgCar.jpeg");
}
function setup(){
database=firebase.database();
gameState=0;
game=new Game();
game.getState();
game.start();
createCanvas(displayWidth, displayHeight);
}

function draw(){
    background(bgCar);
    if(playerCount===3){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
}
 