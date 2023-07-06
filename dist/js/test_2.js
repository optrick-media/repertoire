
1

let elementButtonAddLorem = document.querySelectorAll(".button-addLorem");
let arrayButtonAddLorem = Array.from(elementButtonAddLorem);
console.log(arrayButtonAddLorem)
var i = 0, length = arrayButtonAddLorem.length;
console.log(length)


function attrEquiv(selector, attr, setterFunction) {
    document.querySelectorAll(".button-addLorem").forEach((el, i) => {
      el.setAttribute(attr, setterFunction.call(el, i, attr)) // bind `el` to `this`
    })
  }
  attrEquiv('.stroke-double, .stroke-single', 'title', function(index, attr) {
    console.log(this);
  })


for (i; i < length; i++) {
    if (document.addEventListener) {
        arrayButtonAddLorem[i].addEventListener("click", function() {
            // use keyword this to target clicked button
            console.log(arrayButtonAddLorem);
        });
    } else {
        elementButtonAddLorem[i].attachEvent("onclick", function() {
            // use buttons[i] to target clicked button
        });
    };
};

