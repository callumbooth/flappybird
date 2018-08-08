
function nextGen() {

    calcFitness();
    for(let i = 0; i< total; i++) {
        birds[i] = pickOne();
    }
    savedBirds = [];
}

function pickOne() {

    var i = 0;

    var r = random(1);

    while (r > 0) {
        r = r - savedBirds[i].fitness;
        i++;
    }
    i--;

    let bird = savedBirds[i];
    let child = new Bird(bird.brain);
    return child;
}

function calcFitness() {
    let sum = 0;
    for(let bird of savedBirds) {
        sum += bird.score;
    }

    for (let bird of savedBirds) {
        bird.fitness = bird.score / sum;
    }


}