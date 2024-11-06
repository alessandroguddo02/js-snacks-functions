/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera 

PIANO PER LA LOGICA

- definisco funzione
- con parametri string array e lettera
- rfiltro array con prerequisiti
    - solo lettere con iniziale come da parametro lettera (chartAt())


*/


// Implemetazione con sintassi della logica
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByLetter ( stringList, letter){
    let filteredString = [];
    for(let i = 0; i < stringList.length; i++){
        const actuaItem = stringList[i] ;

       if(actuaItem.charAt(0).toLowerCase() === letter.toLowerCase()) {
        filteredString.push(actuaItem)
       }
    }


    return filteredString;
}


// Invoca la funzione qui e stampa il risultato in console
let results = filterByLetter(names, "m")
console.log(results)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]