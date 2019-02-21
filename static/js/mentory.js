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
    const test = document.createElement('button');
    test.classList.add('Not_clicked');
    test.textContent = 'TestStart';
    document.querySelector('#header').appendChild(test);
    test.addEventListener('click', TEST);


}

function TEST() {
    var startScore = 1000;

    function Score() {
        document.getElementById('score').innerHTML = "Score: " + startScore;
        startScore -= 1;
    }

    let interval = window.setInterval(Score, 1000);
    return interval
}


function main() {
    dragAndDrop();
    countScore()
}


main();