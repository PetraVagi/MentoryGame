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

function nextCardToShow(taskOrder) {

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
    let id = img.getAttribute("id");
    taskOrder.push(id);
    sessionStorage.setItem("task", taskOrder);




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
                id = "img-0" + number.toString();
            }
            else {
                let number = i+1;
                id = "img-" + number.toString();
            }
        }
    }
    return id
}

function checkSolution() {
    let checkButton = document.getElementById('check-solution');
    checkButton.addEventListener("click", function(event) {
        let count = 0;
        let solutionIdsRaw = sessionStorage.getItem("task");
        let solutionIds = solutionIdsRaw.split(",");
        for (element of solutionIds) {

            if (count > 11) {
                alert("ABSOLÚT WINNER VAGY!");
                return;
            }

            let gameLibrary = document.querySelectorAll(".game-library");
            let divId = gameLibrary[count].id;
            let image = document.getElementById(divId).children[0];
            let imageId = image.id;

            if (imageId != element) {
                alert("Your LOSEEERR!!444!!!");
            }
            count++;
        }
        alert("SOOO GOOOD!!!");
    })
}

function clearSlots(taskOrder) {

    let nextLevelButton = document.getElementById('next-level');
    let gameSlots = document.getElementsByClassName('game-library');

    nextLevelButton.addEventListener('click', function () {
        for (let slot of gameSlots) {
            while (slot.hasChildNodes()) {
                slot.removeChild(slot.firstChild);
            }
        }
        nextCardToShow(taskOrder);
    });
}

function retryLevel() {

    let retryButton = document.getElementById('retry-button');

    retryButton.addEventListener('click', function () {
        window.location.href = '/';
    });
}

function main() {
    let taskOrder = [];
    retryLevel();
    dragAndDrop();
    let start = document.getElementById("start-button");
    start.addEventListener("click", function(event) {
        nextCardToShow(taskOrder);
    });
    checkSolution();
    clearSlots(taskOrder);
}


main();