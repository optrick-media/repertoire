var elementCards=document.getElementsByClassName("card");function openCard(){document.getElementById("card::after").style.opacity="0"}console.log(elementCards),document.getElementById("card").onclick=function(){openCard()};