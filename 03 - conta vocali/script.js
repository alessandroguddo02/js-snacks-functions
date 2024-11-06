/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

//crea funzione
//restituzione numero vocali
const word = 'javascript';


// Dichiara la funzione qui.
function filtroVocali(stringa){
    let vocali = ["a", "e", "i", "o", "u"];
    let vocaliTrovate = 0;

    for(let i = 0; i < stringa.length; i++){
        if(vocali.includes(stringa[i]))
            vocaliTrovate++
    }

    return vocaliTrovate


}


// Invoca la funzione qui e stampa il risultato in console

let results = filtroVocali(word);
console.log(results);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)