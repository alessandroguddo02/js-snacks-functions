/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function createArray (newArray){                    //creo funzione
    let myArray = [];                               //creo variabile di accumulo
    for(let i = 0; i < newArray.length; i++){       //creo ciclo
        myArray.push(newArray[i].charAt(0))
        
    }

    return myArray
}

// Invoca la funzione qui e stampa il risultato in console

let risultato = createArray(names)   // variabile con risultato della funzione
console.log(risultato)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]