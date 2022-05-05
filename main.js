tint_color=""

function setup(){
    canvas=createCanvas(640,400);
    canvas.position(70,150);
    video=createCapture(VIDEO)
    video.hide()
}

function  draw (){
    image(video,0,0,640,400)
    tint(tint_color)
}

function  take_snapshot  () {
    save ("mypic.png");

}

function   applytint (){
    tint_color=document.getElementById("tintcolor").value;


}
