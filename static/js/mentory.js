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



function main() {
    dragAndDrop();
}


main();