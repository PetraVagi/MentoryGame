var solution = ["img-01", "img-02"];

function checkSolution(solution) {
    let imageIdsOnGameField = getAllImageIdsFromGameField();
    for (index = 0; index < solution.length; index++) {
        if (imageIdsOnGameField[index] != solution[index]) {
            alert("Wrong solution");
            return
        }
    }
}

function getAllImageIdsFromGameField() {
    let imgIds = [];
    for (i = 1; i < 12; i++) {
        if (i < 10) {
            var id = "#img-0".concat(i);
        } else {
            var id = "#img-".concat(i);
        }
        try {
            let img = document.querySelector(id);
            imgIds.push(img);
        } catch (error) {
            alert("No such image!");
        }
    }
    return imgIds;
}

checkSolution(solution);