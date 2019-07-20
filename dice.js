//jshint esversion: 7

//req. 3d
let rollTargetDie = function(){
  return Math.floor(Math.random() * 11 + 2);
}


let rollTarget = target => {
  let newCounter = 0;
  let dice1;
  let dice2;

   while (dice1 != target && dice2 != target) {
     dice1 = rollTargetDie();
     dice2 = rollTargetDie();
     ++newCounter;
  }
  return newCounter;


}

let main = function() {


  let count = Number(document.querySelector("input").value);

  let imgArr = document.querySelectorAll("img");
  
  document.querySelector("div").innerHTML =  rollTarget(count);

};

//register the handler after the DOM is complete
window.addEventListener("load", function() {
  //select the button and register the handler
  document.querySelector("button").addEventListener("click", main);
});
