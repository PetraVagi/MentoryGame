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

function getSolution() {
    let solution = ["#img-01"];
    return solution;
}

function checkSolution() {
    let gameField = document.getElementById('game-field01');
    gameField.addEventListener("drop", checkSolutionInner);
}

function checkSolutionInner(event) {
    let imageIdsOnGameField = getAllImageIdsFromGameField(20);
    let solution = getSolution();
    for (index = 0; index < solution.length; index++) {
        if (imageIdsOnGameField[index] != solution[index]) {
            alert("Wrong solution... Maybe next time :D");
            return
        }
    }
    alert("Correct.... But let's see the next one.")
    return
}

function getAllImageIdsFromGameField(count) {
    let imgIds = [];
    for (i = 1; i < count; i++) {
        if (i < 10) {
            var id = "#img-0".concat(i);
        } else {
            var id = "#img-".concat(i);
        }
        if (document.querySelector(id) != null) {
            imgIds.push(id);
        } else {
            return imgIds;
        }
    }
    return imgIds;
}

function main() {
    dragAndDrop();
    checkSolution();
}


main();