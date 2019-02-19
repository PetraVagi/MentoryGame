function dragAndDrop() {
    let libraryImages = document.getElementById('footer');
    let gameImages = document.getElementById('game-field');
    dragula([libraryImages, gameImages])

}


function main() {
    dragAndDrop();
}


main();