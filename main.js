status1="";
object=[];
audio1="";
function preload(){
    audio1=loadSound("alarm.mp3");
}

function setup(){
    canvas=createCanvas(450,350);
    canvas.position(425,200);
    video=createCapture(VIDEO);
    video.hide();

    objectdetect=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("apple").innerHTML="Detecting Objects";
}

function modelLoaded(){
    console.log("Model is Loaded");
    status1=true;
}

function gotResults(error, results){
    if (error){
        console.log("Error")
    }
    object=results;
    console.log(results)
}

function start(){

}

function draw(){
        image(video,0,0,450,350);

        if (status1 != ""){
            objectdetect.detect(video, gotResults);
            for (i=0; i<object.length; i++){
            if (object[i].label=="person"){
                console.log(object[i].label)
            document.getElementById("banana").innerHTML="Baby Found";
            audio1.stop();
        }
        else{
            document.getElementById("banana").innerHTML="Baby Not Found";
            audio1.play();
        }
        if (object.length == 0){
            document.getElementById("banana").innerHTML="Baby Not Found";
            audio1.play();
        }
    }
}
    }