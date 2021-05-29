status = "";

function preload(){
img = loadImage("bed.jpg");
}

function setup(){
canvas= createCanvas(640,420);
canvas.center();

ObjectDetector= ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML=" STATUS : DETECTING OBJECTS";
}

function draw(){
image(img,0,0,640,420);
fill("#FF0000");
text("bed",50,70);
stroke("#FF0000");
noFill();
rect(30,50,600,350);
}

function modelLoaded(){
    console.log("MODEL LOADED!");
    status=true;
    ObjectDetector.detect(img,gotResults);
}

function gotResults(error,results){
if(error){
    console.error("error");
}
else{
    console.log(results);
    objects = results;
}
}
