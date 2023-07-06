let classToSpliceButton = "button-addLorem";

// Get all buttons as a NodeList
let elementButtonAddLorem = document.querySelectorAll(".button-addLorem");
console.log(elementButtonAddLorem);
//object split into an array of strings
function attrEquiv(selector, attr, setterFunction) {
    document.querySelectorAll(".button-addLorem").forEach((el, i) => {
      el.setAttribute(attr, setterFunction.call(el, i, attr)) // bind `el` to `this`
    })
  }
  attrEquiv('.stroke-double, .stroke-single', 'title', function(index, attr) {
    console.log(this);
  })

  

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
