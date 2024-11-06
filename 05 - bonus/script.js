/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function salutare(stringa) {

    let date = new Date();
    console.log(date.getHours()); // ora sono le 18
    if (date.getHours() < 13) {
        console.log("buongiorno" + " " + stringa)
    } else if (date.getHours() < 17) {
        console.log("buon pomeriggio" + " " + stringa)
    } else if(date.getHours() > 17){ 
        console.log("buon sera" + " " + stringa)
    }
}
salutare(name)



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.