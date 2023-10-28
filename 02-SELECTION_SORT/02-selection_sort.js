"use strict";

function findSmaller(arr){
  let smaller = arr[0]
  let smaller_index = 0

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < smaller) {
      smaller = arr[i]
      smaller_index = i
    }
  }

  return smaller_index
}

function selectionSort(arr){
  const newArray = []
  let copyArray = arr.slice()

  for(let i = 0; i < arr.length; i++){
    let smaller = findSmaller(copyArray)
    newArray.push(copyArray.splice(smaller, 1)[0]);
  }

  return newArray
}

console.log(selectionSort([5, 3, 6, 2, 10]))

/*

 Quando passa um array como um argumento para uma função em JavaScript,
 está passando uma referência ao array original, e as modificações feitas
 no array dentro da função afetarão diretamente o array original.
 É por isso que, em JavaScript, pode ser necessário criar uma cópia do array
 antes de modificá-lo, para preservar o estado original do array.

*/