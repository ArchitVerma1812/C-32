const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getbgimg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
    background(backgroundImg);
}
Engine.update(engine);
}

async function getbgimg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=00 && hour<06){
        backgroundImg = ("sunset12.png");
    }
    else if(hour>=06 && hour<08){
        bg=("sunrise1.png")
    }
    else if(hour>=08 && hour<09){
        bg=("sunrise2.png")
    }
    else if(hour>=09 && hour<11){
        bg=("sunrise3.png")
    }
    else if(hour>=11 && hour<12){
        bg=("sunrise4.png")
    }
    else if(hour>=12 && hour<15){
        bg=("sunrise5.png")
    }
    else if(hour>=15 && hour<18){
        bg=("sunrise6.png")
    }
    else if(hour>=18 && hour<19){
        bg=("sunset7.png")
    }
    else if(hour>=19 && hour<20){
        bg=("sunset8.png")
    }
    else if(hour>=20 && hour<21){
        bg=("sunset9.png")
    }
    else if(hour>=21 && hour<22){
        bg=("sunset10.png")
    }
    else if(hour>=22 && hour<23){
        bg=("sunset11.png")
    }
    else {
        bg=("sunset11.png");
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
