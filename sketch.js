//Create variables here
var waitingdog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  happyImage = loadImage('happydog.png') 
  dogImage = loadImage('dog.png')
}

function setup() {
  var database = firebase.database();
  console.log(database);
  createCanvas(500, 500);

   waitingdog = createSprite(250,250,250,250);
   waitingdog.addImage(dogImage);
  waitingdog.scale = 0.25;
    

    

    foodStock = database.ref('food');
    foodStock.on("value",readStock,showError);


}


function draw() {  
  background(46, 139, 87);

  if (keyIsDown == "Up_Arrow"){
    writeStock(foodS)
    dog.addImage(happyImage)
  }
  drawSprites();
  //add styles here

}


function readStock(data){
  foodS = data.val();
  console.log(foodS)
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1 ; 
  }

  database.ref('/').update({
    food:x
  })
}



function showError(){
  console.log("Error in writing to the database");
}


