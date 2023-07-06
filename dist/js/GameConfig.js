// The script is placed inside an immediately invoket function expresion to protect scope of variable
(function () {
//    PART ONE: create game object and write the details/price 
var game = {
    title: 'rodeo',
    costCoin: 10, //amount in coint
    discount: 50,   //Pourcentage'
    offerPrice: function () {
        var offerRate = this.costCoin * ((100 - this.discount) / 100);
        return offerRate;
    }
};

//  write out the game name, standard rate, and the special rate
var gameName, costGame, specialRate;        //Declare variables
gameName = document.getElementById('game-name');        //Get element
costGame = document.getElementById('cost-game');
specialRate = document.getElementById('special-rate');

gameName.textContent = game.title;
costGame.textContent = '¢' + game.costCoin.toFixed(0);
specialRate.textContent = '¢' + game.offerPrice();

//  PART TWO: calculate and write out the expiry details for the offers
var expiryMsg, today, elEnds;
function offerExpires(today) {
    // Declare variables withing the function for lcal scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    //Add 7days time(milliseconds)
    weekFromToday = new Date(today.getTime() + 7 *  24 * 60 * 60 * 1000);
    // Create arrays t hold the name of days / month
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //Collect the parts of the date t show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day  + ' ' + date + ' ' + month + ' ' + year + '';
    return expiryMsg;
}

today = new Date();         //put today's date in variable
elEnds = document.getElementById('offer-ends');      //get the offerEnds element
elEnds.innerHTML = offerExpires(today);         //add the expiry message

// Finisi the immediately invoked function expression
}());