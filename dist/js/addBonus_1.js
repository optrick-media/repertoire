// Get all buttons as a NodeList
let elementButtonAddLorem = document.querySelectorAll(".button-addLorem");
console.log(elementButtonAddLorem);
// Convert buttons NodeList to an array
let arrayButtonAddLorem = Array.from(elementButtonAddLorem);
console.log(arrayButtonAddLorem);

// Get all lorem-add as a NodeList
const loremAdd = document.querySelectorAll(".lorem-add");
console.log(loremAdd);
// Convert buttons NodeList to an array
let arrayLoremAdd = Array.from(loremAdd);
console.log(arrayLoremAdd);



//function qui 
elementButtonAddLorem.forEach(elementAddLorem => {

    elementAddLorem.addEventListener('click', () => loremAdd[0].classList.toggle("add"));
});
