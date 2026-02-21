console.log('🌿');


const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

/* 👇 con .forEach() e .push() */
/* let evenNums = [];
nums.forEach(function(num){
  if(num % 2 === 0) {
    evenNums.push(num);
  }
  return evenNums;
})
console.log(evenNums); */

/* 👇 con .filter() */
/* let evenNums = nums.filter(getEvenNums);
function getEvenNums(num) {
  return num % 2 === 0;
}
console.log(evenNums); */

/* 👇 con .filter() versione breve con arrow function*/
let evenNums = nums.filter(num => (num % 2 === 0));
console.log(evenNums);