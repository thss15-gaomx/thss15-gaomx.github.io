let mySound;

function preload() {
    mySound = loadSound('assets/ticking.mp3');
}

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    mySound.setVolume(0.5);
    mySound.play();
}

function draw() {
    background(0);
    strokeWeight(20);
    
    stroke(255,100,150);
    noFill();
    let sec = map(second(), 0, 60, 0, 360);
    arc(200, 200, 280, 280, -90, sec - 90);
    
    stroke(255,200,250);
    let min = map(minute(), 0, 60, 0, 360);
    arc(200, 200, 230, 230, -90, min - 90);
    
    stroke(250,250,255);
    let hou = map(hour(), 0, 24, 0, 360);
    arc(200, 200, 180, 180, -90, hou - 90);
}
