var gameDimension = 3;
var vacantBoxId = 9;

function slide(event) {
    var tileClicked = event.target;
    var boxClicked = tileClicked.parentNode;
    var destinationBoxId = testVacant(boxClicked);
    if (destinationBoxId > 0) {
        var destinationBox = document.getElementById(destinationBoxId);
        destinationBox.appendChild(tileClicked);
        vacantBoxId = parseInt(boxClicked.id);
    }
}

function testVacant(boxClicked) {
    var distance = Math.abs(boxClicked.id - vacantBoxId);
    if (distance == 1 || distance == gameDimension) return vacantBoxId;
    return 0;
}