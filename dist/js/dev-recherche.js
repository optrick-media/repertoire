// Get all buttons as a HTMLCollection
const arrayButtonAddLorem = document.getElementsByClassName("button-addLorem")
console.log(arrayButtonAddLorem)

// Get all buttons as a NodeList
let elementButtonAddLorem = document.querySelectorAll(".button-addLorem");
console.log(elementButtonAddLorem);

// Get all lorem-add as a HTMLCollection
const arrayLoremAdd = document.getElementsByClassName("lorem-add");
console.log(arrayLoremAdd);

//object split into an array of strings
function attrEquiv(selector, attr, setterFunction) {
    document.querySelectorAll(".button-addLorem").forEach((el, i) => {
      el.setAttribute(attr, setterFunction.call(el, i, attr)) // bind `el` to `this`
    })
  }
  attrEquiv('.stroke-double, .stroke-single', 'title', function(index, attr) {
    console.log(this);
    const list = (this).classList;
    console.log(list);
    // const cleanList = list.forEach() => ".classList.remove('button-addLorem')";

    // console.log(cleanList);
  })
  
//match two class fro two array ?



