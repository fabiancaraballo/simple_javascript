//jshint esversion: 7

//helper functions
function zapCaps(str){
  return str.toLowerCase();
}

function freeVersify(str) {
  let freeStr = zapCaps(str);
  freeStr = freeStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'\t\n');
  return freeStr;
}

//1. define the event handler (call-back function that handles onclick event)
var main = function() {
    //get user input from web page
    var newStr = String(document.querySelector("input").value);

    //display result on web page
    document.querySelector("div").innerHTML = freeVersify(newStr);
};

//2. register the handler after the DOM is complete

window.addEventListener('load', function () {
    //select the button and register the handler
    document.querySelector("button").addEventListener("click", main);
});

/* older method, also works:
window.onload = function() {
    //select the button and register the handler
    document.querySelector("button").addEventListener("click", main);
};
*/
