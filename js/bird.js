// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

class Bird {
    constructor() {
        this.y = height / 2;
        this.x = 64;

        this.gravity = 0.7;
        this.lift = -10;
        this.velocity = 0;
        this.dead = false;
        
        this.score = 0;
        this.fitness = 0;

        this.brain = new NeuralNetwork(4, 4, 1);
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    think(pipes) {


        //Find the closest pipe
        let closest = null;
        let closestDist = Infinity;
        for (let i = 0; i < pipes.length; i++) {
            let d = pipes[i].x - this.x;
            if (d < closestDist && d > 0) {
                closest = pipes[i];
                closestDist = d;
            }
            
        }

        let inputs = [];

        inputs[0] = this.y / height;
        inputs[1] = closest.top / height;
        inputs[2] = closest.bottom / height;
        inputs[3] = closest.x / width;

        let output = this.brain.predict(inputs);
        if (output[0] > 0.5) {
            this.up();
        }
    }

    up() {
        this.velocity = 0;
        this.velocity += this.lift;
    }

    update() {
        this.score++;
        this.velocity += this.gravity;
        // this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }

}