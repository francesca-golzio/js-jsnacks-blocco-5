console.log('🌿');

const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

/* 👇 con il ciclo for() */
/* for (let index = 0; index < people.length; index++) {
  const person = people[index].name;
  console.log(person);  
} */

/* 👇 con forEach() */
/* people.forEach(function(person) {
  console.log(person.name);  
}); */

/* 👇 con forEach() e arrow function */
/* people.forEach(person => console.log(person.name)); */


/* 👇 con map() */
/* let names = people.map(function(person){
  console.log(person.name);  
}) */

/* 👇 con map() e arrow function */
let names = people.map(person => console.log(person.name));
