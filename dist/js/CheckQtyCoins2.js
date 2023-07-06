function player (name, coinPlayer, toPlay) {
    this.name = name;
    this.coinPlayer = coinPlayer;
    this.toPlay = toPlay;
    this.checkPlaybility = function() {
        return this.coinPlayer - this.toPlay;
    }
}

const nameX = new player('Tom', 15, 5);
const nameY = new player('Steph', 25, 4);

var detailsX = nameX.name + ' Coins:  ';
       detailsX += nameX.checkPlaybility();
var elNameX  = document.getElementById('elName-X');
elNameX.textContent = detailsX;

var detailsY = nameY.name + ' Coins:  ';
       detailsY += nameY.checkPlaybility();
var elNameY  = document.getElementById('elName-Y');
elNameY.textContent = detailsY;