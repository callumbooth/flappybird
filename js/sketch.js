// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

const total = 100;
var birds = [];
var pipes = [];

function setup() {
    createCanvas(640, 480);
    for (let i = 0; i < total; i++) {
        birds[i] = new Bird();
    }
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        for (let j = birds.length-1; j >= 0; j--) {
            
            if (pipes[i].hits(birds[j])) {
                birds.splice(j,1);
            }
        }
        

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    for(let bird of birds) {
        bird.think(pipes);
        bird.update();
        bird.show();
    }

    if (birds.length === 0) {
        nextGen();
    }

    if (frameCount % 75 == 0) {
        pipes.push(new Pipe());
    }
}

/*
function keyPressed() {
    if (key == ' ') {
        bird.up();
        //console.log("SPACE");
    }
}
*/