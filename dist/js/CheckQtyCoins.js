var player = {
    name: "Tom",
    coinPlayer: 15,
    toPlay: 5,
    checkPlayability: function() {
        return this.coinPlayer - this.toPlay;
    }
};

const elName =document.getElementById('elName');
elName.textContent = player.name;

var elCoin =document.getElementById('elCoin');
elCoin.textContent = player.checkPlayability();