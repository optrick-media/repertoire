
let elementCardsHover = document.querySelectorAll(".card-hover");
elementCardsHover.forEach(elementCards => {
    elementCards.addEventListener('click', () => elementCards.classList.toggle("revelation"));
});
