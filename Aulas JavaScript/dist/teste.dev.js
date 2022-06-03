"use strict";

/* exercicio de numeros pares
function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 ===0) {
            evenNums.push(array[i]);
        }
    }
    console.log('Os números pares são:',
    evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array); */
// exercicio de numeros pares com exceção 
function returnEvenValues(array) {
  var evenNums = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    } else {
      console.log("".concat(array[i], " n\xE3o \xE9 par!"));
    }
  }

  console.log('Os números pares são:', evenNums);
}

var array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);