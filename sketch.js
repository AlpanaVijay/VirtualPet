var ball;
var database;
var foodCount = 0;
var dogImg, happyDog;

function preload(){
dogImg = loadImage("Dog.png");
happyDog = loadImage("happydog.png");
}

function setup(){
    createCanvas(500,500);
  database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.addImage(dogImg);
    ball.scale = 0.3;

    var ballref = database.ref("food");
    ballref.on("value",readdata);
}

function draw(){

    background("white");
    if(keyWentDown(UP_ARROW)){
        database.ref("/").update({
        'food' : foodCount - 1,
    })
        ball.addImage(happyDog);
    }

    
    text("Foods = " + foodCount, 10, 100);
    drawSprites();
}


function readdata(data){
foodCount = data.val();
}

