/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
*/

/*
1 - recuperare elementi age, pathway e price in pagina
2 - generare il prezzo standard per Km
3 - generare gli sconti applicati
4 - chiedere all'utente di inserire la sua Età e distanza
5 - calcolare il prezzo del biglietto 
6 - stampare il risultato sullo schermo
*/

// 1 - recuperare elementi age, pathway e price in pagina
const ageElement = document.getElementById('age');
const pathwayElement = document.getElementById('pathway');
const priceElement = document.getElementById('price');
// console.log(ageElement, pathwayElement, priceElement)

// 2 - generare il prezzo standard per Km 
// 3 - generare gli sconti applicati
const price = 0.21;
const price_minor = price - 0.042 ;
const price_hover65 = price - 0.084 ;
// console.log(price, price_minor, price_hover65)

// 4 - chiedere all'utente di inserire la sua Età e distanza
const yourAge = prompt('Inserisci la tua età', 20);
const yourPathway = prompt('Inserisci la distanza della tratta in km', 20);
// console.log(yourAge, yourPathway);

