
    var elementCards = document.getElementsByClassName('card');
    console.log(elementCards);

    document.getElementById("card").onclick = function() {openCard()};
        function openCard() {
            document.getElementById("card::after").style.opacity = "0";
	    }
