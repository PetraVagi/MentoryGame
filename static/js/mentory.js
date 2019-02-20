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

function nextCardToShow() {

    let img = document.createElement("img");

    let images = ["static/images/img_01.jpg", "static/images/img_02.jpg",
                  "static/images/img_03.jpg", "static/images/img_04.jpg",
                  "static/images/img_05.jpg", "static/images/img_06.jpg",
                  "static/images/img_07.jpg", "static/images/img_08.jpg",
                  "static/images/img_09.jpg", "static/images/img_10.jpg",
                  "static/images/img_11.jpg", "static/images/img_12.jpg"];

    img.src = getImageByRandomNumber(images);
    img.id = generateId(img, images);

    let div = document.getElementById("game-field01");




    div.appendChild(img);

    setTimeout(function(){
    img.parentNode.removeChild(img);
    }, 2000);
}

function getImageByRandomNumber(images) {

let randomImg = Math.floor(Math.random() * 11);
for (let i = 0; i <= images.length-1; i++) {

        if (randomImg == i) {
            return images[i]
        }
    }
}

function generateId(img, images) {


    let id;
    for (let i = 0; i <= images.length-1; i++) {

        if(images[i] == img.getAttribute("src")) {
            if(i < 9) {
                let number = i+1;
                id = "game-field-img-0" + number.toString();
            }
            else {
                let number = i+1;
                id = "game-field-img-" + number.toString();
            }
        }
    }
    return id
}

function checkSolution() {

    var solution = [];

    let startButton = document.getElementById('start-game');
    startButton.addEventListener("click", function(event) {
        let newSolutionElementId = document.querySelector("#game-field-img-01")
        solution.push(newSolutionElementId);
    });

    let nextLevelButton = document.getElementById('next-level');
    nextLevelButton.addEventListener("click", function(event) {
        clearGameField();
        newFooter();
        nextCardToShow();
        let newSolutionElementId = document.querySelector("#game-field-img-01")
        solution.push(newSolutionElementId);
    });

    let checkButton = document.getElementById('check-solution');
    checkButton.addEventListener("click", function(event) {

        let imageIdsOnGameField = getAllImageIdsFromGameField(20);

        for (index = 0; index < solution.length; index++) {
            if (imageIdsOnGameField[index] != solution[index]) {
                alert("Wrong solution... Maybe next time :D");
                main();
            }
        }
        alert("Correct.... But let's see the next one.")
    });
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

function clearGameField() {
    for (i = 1; i < 13; i++) {
        if (i < 10) {
            var id = "img-0".concat(i);
        } else {
            var id = "img-".concat(i);
        }
        let img = document.getElementById(id);
        img.parentNode.removeChild(img);
    }
}

function newFooter() {
    let images = ["static/images/img_01.jpg", "static/images/img_02.jpg",
                  "static/images/img_03.jpg", "static/images/img_04.jpg",
                  "static/images/img_05.jpg", "static/images/img_06.jpg",
                  "static/images/img_07.jpg", "static/images/img_08.jpg",
                  "static/images/img_09.jpg", "static/images/img_10.jpg",
                  "static/images/img_11.jpg", "static/images/img_12.jpg"];
    for (i = 1; i < 13; i++) {
        if (i < 10) {
            var id = "img-0".concat(i);
        } else {
            var id = "img-".concat(i);
        }
        let img = document.createElement("img");
        img.src = images[i];
        img.id = id;
        if (i < 10) {
            var divId = "footer-field0".concat(i);
        } else {
            var divId = "footer-field".concat(i);
        }
        document.getElementById(divId).appendChild(img)
    }
}


function main() {
    dragAndDrop();
    nextCardToShow();
    checkSolution();
}


main();