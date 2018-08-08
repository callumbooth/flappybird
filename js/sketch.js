// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

const total = 200;
var birds = [];
var savedBirds = [];
var pipes = [];
var counter = 0;
var cycles = 100;
let slider;

function setup() {
    createCanvas(640, 480);
    slider = createSlider(1, 100, 1);
    for (let i = 0; i < total; i++) {
        birds[i] = new Bird();
    }
    //pipes.push(new Pipe());
}

function draw() {

    for(let n = 0; n < slider.value(); n++) {
        if (counter % 75 == 0) {
            pipes.push (new Pipe());
        }
        counter ++;
        for (let k = birds.length-1; k >= 0; k--) {
    
            if (birds[k].y == height) {
                console.log(birds[k]);
                savedBirds.push(birds.splice(k,1)[0]);
                
            } else if (birds[k].y == 0) {
                //console.log(birds[k]);
                savedBirds.push(birds.splice(k,1)[0]);
            }
        }
        for (var i = pipes.length - 1; i >= 0; i--) {
            pipes[i].update();

            for (let j = birds.length-1; j >= 0; j--) {
                
                if (pipes[i].hits(birds[j])) {
                    savedBirds.push(birds.splice(j,1)[0]);
                }
            }
            

            if (pipes[i].offscreen()) {
                pipes.splice(i, 1);
            }
        }

        for(let bird of birds) {
            bird.think(pipes);
            bird.update();
        }

        if (birds.length === 0) {
            counter = 0;
            nextGen();
            pipes = [];
        }
    }

    //All the drawing stuff
    background(0);
    for (let bird of birds) {
        bird.show();
    }
    for (let pipe of pipes) {
        pipe.show();
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