console.log('🌿');


const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

/* 👇 con map() */
/* const successivi = numbers.map(function(numb) {
  numb ++
  console.log(numb);
  return numb
})
console.log(successivi); */

/* 👇 con map() e arrow function */
/* const successivi = numbers.map(numb => numb ++)
console.log(successivi); */

/* 👇 con forEach() */
/* const successivi = [];

numbers.forEach(function(numb) {
  numb ++
  successivi.push(numb)
})
console.log(successivi);  */

/* 👇 con forEach() e arrow function */
const successivi = [];

numbers.forEach(numb => successivi.push(numb + 1))
console.log(successivi); 