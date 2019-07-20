//jshint esversion: 7

//req. 1a
let isPunct = function(ch) {
  let punctSymbols = /,.;!/;
  return ch.match(punctSymbols);
};

//req. 1b
function zapPunct(str) {
  String newStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  return newStr;
}

//req. 1c
function zapCaps(str){
  return str.toLowerCase();
}

//req. 1d & 2(freeVerse.js)
function freeVersify(str) {
  String freeStr = zapCaps(str);
  freeStr = freeStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"\n\t")
  return freeStr;

}



//req. 3a
var SumOfPropeDrivisors = n=>[...Array(n+1).keys()].slice(1)
   .reduce((s, a)=>s+(!(n % a) && a), 0);

function isAbundant(n) {
  if((SumOfPropeDrivisors(n)-n) > n) {
    return true;
  }
  else {
    return false;
  }
}

//req. 3b
let countRange = a,b => {

    list = "";
    for(var i = a; a <= b; i++){
      list.append(i);
    }
    return list;
}

//req. 3c
let rollDie = function() {
  return Math.floor(Math.random() * 6 + 1);
};

let rollDoubles = target => {
  let counter = 0;
  let dice1;
  let dice2;

  while (dice1 != target && dice2 != target) {
    dice1 = rollDie();
    dice2 = rollDie();
    ++counter;
  }

  return counter;
};

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
