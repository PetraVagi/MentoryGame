function checkSolution() {
    let imgs = getAllImages();
    for (img of imgs) {
        console.log("Hurray!");
    }
}

function getAllImages() {
    let imgs = [];
    for (i = 1; i <= 12; i++) {
        if (i < 10) {
            var id = "game-field0".concat(i);
        } else {
            var id = "game-field".concat(i);
        }
        img = document.getElementById(id);
        imgs.push(img);
    }
    return imgs;
}

checkSolution();