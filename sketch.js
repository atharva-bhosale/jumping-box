
var surface1;

var surface2;

var surface3;

var surface4;

var box;

var sound;

var bounce1;

var bounce2;

var bounce3;


//var edge=createEdgeSprite;

//var   edge = createEdgeSprite();

function preload(){
  sound=loadSound("music.mp3")
}

function setup(){
    surface1=createSprite(50,390,100,20);
    surface1.shapeColor="blue"

    surface2=createSprite(150,390,100,20);
    surface2.shapeColor="green"

    surface3=createSprite(250,390,100,20);
    surface3.shapeColor="yellow"

    surface4=createSprite(350,390,100,20);
    surface4.shapeColor="red"

    box=createSprite(box.x=random(50,350),200,20,20);
    box.shapeColor="lightblue"
    box.velocityX=-3;
    box.velocityY=-3;

    bounce1=createSprite(400,200,20,400);
  
    bounce2=createSprite(200,0,400,20);

    bounce3=createSprite(0,200,20,400);
  
}

function draw(){
    background(0);



    box.bounceOff(bounce1);
    box.bounceOff(bounce2);
    box.bounceOff(bounce3);


    if(box.isTouching(surface1)){
      box.velocityX=0;
      box.velocityY=0;
      
      box.shapeColor="blue";
      sound.stop();
           
    }

    if(box.isTouching(surface2)){
      sound.play();
      box.bounceOff(surface2);

      box.shapeColor="green";
    }

    if(box.isTouching(surface3)){
      sound.play();
      box.bounceOff(surface3);
      box.shapeColor="yellow";

    }

    if(box.isTouching(surface4)){
      box.velocityX=0;
      box.velocityY=0;
    box.shapeColor="red";
     sound.stop();

    }

    drawSprites();

}