console.log('🌿');


const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// 👇 forEach() con funzione anonima
/* names.forEach(function(element) {
  console.log(element)
}
); */

// 👇 forEach() con arrow function
names.forEach((element) =>
  console.log(element)
);