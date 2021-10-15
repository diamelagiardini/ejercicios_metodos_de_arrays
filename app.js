//1

// const numeros = [1, 2, 3, 4, 5];

// let numerosMasDiez;

// // solución del ejercicio

// const incrementarDiez = (numero) => {
//     return numero + 10
// }

// numerosMasDiez = numeros.map(incrementarDiez)


// console.log(numeros); // [1, 2, 3, 4, 5]
// console.log(numerosMasDiez); // [11, 12, 13, 14, 15]


//2 

//const numeros = [3, 7, 13, 99];

// solución del ejercicio

// const multiplicarPorDos = (numero) => {
// return numero * 2
// }

// let dobles = numeros.map(multiplicarPorDos)

// console.log(numeros); // [3, 7, 13, 99]
// console.log(dobles); // [6, 14, 26, 198]

//3 

// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// // codear acá la solución del ejercicio

// const agregarSignosAfrase = (frases) => {
//     return `¡${frases}!`
// }

// let frasesExclamadas = frases.map(agregarSignosAfrase)

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

// 4

// const librosDeJS = [
//     'JavaScript for Kids: A Playful Introduction to Programming',
//     'Composing Software',
//     'Eloquent JavaScript: A Modern Introduction to Programming',
//     'JavaScript: The Good Parts',
//     'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//     'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//     'JavaScript: The Definitive Guide',
//     'You Don’t Know JS',
//     'JavaScript Allongé: The Six Edition'
//   ];
  
//   // codear acá la solución del ejercicio
  
//   const agregarLi = () => {
//     return `<li> ${librosDeJS} </li>`
//   }

//   const arrayConLi = librosDeJS.map(agregarLi) 
  
//   const agregarUl = () => {
//       return `<ul>${arrayConLi}</ul>`
//   }
  
//   const arrayFinal = arrayConLi.map(agregarUl)
  
//   console.log(arrayFinal) // se me pone el ul en todas las oraciones 


  // el resultado final debería ser
  // <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>
  
  //5 

//   const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// // codear acá la solución del ejercicio

// const longitudDeFrase = () => {
//     return frases.length
// }

// const longitudes = frases.map(longitudDeFrase)

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(longitudes); // [ 17, 18, 16 ] // Me da 3 3 3 
