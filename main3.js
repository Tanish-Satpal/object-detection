img="";
Status = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img= loadImage('img3.png');
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Clock",250,132);
    noFill();
    stroke("#FF0000");
    rect(250,132,147,126);
}

function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results)
}