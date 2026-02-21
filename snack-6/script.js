console.log('🌿');

const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

/* 1 _ primo array: zucchine più lunghe di almeno 15cm */

  /* const longerThan15 = zucchine.filter(function(zucchina){
    console.log(zucchina.length);
  return zucchina.length >= 15
  });
  console.log(longerThan15); */

  // 👇 versione breve di 👆
  let longerThan15 = zucchine.filter((zucchina) => zucchina.length >= 15);
  console.log(longerThan15);
  
  /* 2 _ secondo array: zucchine restanti */
  
  // FORSE BISOGNEREBBE USARE 👉 "...rest", ⚠️ MA NON LO CAPISCO PROPRIO

    // 👇 soluzione alternativa
    let unpickedZucchine = zucchine.filter((zucchina) => zucchina.length < 15);
    console.log(unpickedZucchine);

