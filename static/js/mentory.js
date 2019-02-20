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

    let images = ["images/img_01.jpg", "images/img_02.jpg",
                  "images/img_03.jpg", "images/img_04.jpg",
                  "images/img_05.jpg", "images/img_06.jpg",
                  "images/img_07.jpg", "images/img_08.jpg",
                  "images/img_09.jpg", "images/img_10.jpg",
                  "images/img_11.jpg", "images/img_12.jpg"];

    img.src = getImageByRandomNumber(images);
    img.id = generateId(img, images);

    let div = document.getElementById("game-field");




    div.appendChild(img);

    setTimeout(function(){
    img.parentNode.removeChild(img);
    }, 2000);
}

function getImageByRandomNumber(images) {

let randomImg = Math.floor((Math.random() * 12) + 1);
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


function main() {
    dragAndDrop();
    nextCardToShow();
}


main();