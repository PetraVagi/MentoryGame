function getSolution() {
    var solution = ["#img-01", "#img-03"];
    return solution;
}

function checkSolution() {
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

checkSolution();