function dragAndDrop() {

    let libraryImages = document.getElementsByClassName('footer-library');
    let gameImages = document.getElementsByClassName('game-library');

    // defines containers argument for dragula to take
    let containers = [];
    for (let libraryImage of libraryImages) {
        containers.push(libraryImage);
    }
    for (let gameImage of gameImages) {
        containers.push(gameImage);
    }

    dragula(containers, {
        copy: true
    });
}


function countScore() {
    let startButton = document.getElementById('start');
    startButton.addEventListener('click', function () {
        startButton.classList.toggle('clicked')
    })
}


var startScore = 1000;
var score = document.getElementById('score');

function Score() {
    startScore -= 1;
    score.innerHTML = "Score: " + startScore;
}

var interval = window.setInterval(Score, 1000);


function main() {
    dragAndDrop();
    countScore()
}


main();