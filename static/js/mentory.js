function checkSolution() {
    let imgs = getAllImages();
    for (img of imgs) {
        console.log("Hurray!");
    }
}

function getAllImages() {
    let imgs = [];
    for (i; i <= 12; i++) {
        if (i < 10) {
            let id = "0".concat(i);
        } else {
            let id = i;
        }
        img = document.getElementById(id);
        id.push(imgs);
    }
    return imgs;
}