
function nextGen() {

    calcFitness();


    for(let i = 0; i< total; i++) {
        birds[i] = pickOne();
    }
}

function pickOne() {

    let childBird
    return childBird;
}

function calcFitness() {
    let sum = 0;
    for(let bird of birds) {
        sum += bird.score;
    }

    for (let bird of birds) {
        bird.fitness = bird.score / sum;
    }


}