var player = new Object();
player.name = 'Tom';
player.coinPlayer = 15;
player.toPlay = 5;
player.checkPlayability = function() {
    return this.coinPlayer - this.toPlay;
};

const elName = document.getElementById('elName');
elName.textContent = player.name;

var elCoin =document.getElementById('elCoin');
elCoin.textContent = player.checkPlayability();