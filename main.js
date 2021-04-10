function preload() {
  
}

function setup() {
  canvas=createCanvas(600, 400);
  canvas.position(150, 150);
  video=createCapture(VIDEO);
  video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    circle(55, 40, 70); 
    rect(90, 30, 420, 20);
    circle(545, 40, 70);
    rect(45, 75, 20, 250);
    circle(55, 360, 70);
    rect(90, 347, 420, 20);
    circle(545, 360, 70);
    rect(535, 75, 20, 250);
}

function take_snapshot()
{
    save('name.png');
}