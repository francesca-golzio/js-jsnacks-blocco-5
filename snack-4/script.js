console.log('🌿');


const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']


/* 👇 con for() e .push() */
/* const authors = [];
for(i = 0; i < posts.length; i++) {
  let authorName = posts[i].author;
  console.log(authorName);
  authors.push(authorName);
  //console.log(authors);  
}
console.log(authors);  */

/* 👇 con .forEach() e .push() */
/* const authors = [];
posts.forEach(function(post) {
  let authorName = post.author;
  //console.log(authorName);
  authors.push(authorName);
  //console.log(authors);  
})
console.log(authors);   */

/* 👇 con .forEach(), arrow function e .push() */
/* const authors = [];
posts.forEach(post => authors.push(post.author))
console.log(authors);   */

/* 👇 con .map() */
/* const authors = posts.map(function (post) {
  //console.log(post.author);
  return post.author;  
})
console.log(authors); */

/* 👇 con .map() e arrow function */
const authors = posts.map(post => post.author);
console.log(authors);