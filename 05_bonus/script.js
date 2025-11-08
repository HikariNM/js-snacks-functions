/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetingsByTime(name){
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes()
    console.log(`Sono le ${hours}:${minutes}`);
    if (hours > 5 && hours <= 13 ) {
        return `Buongiorno ${name}`;
    } else if (hours > 13 && hours <= 17){
        return `Buon pomeriggio ${name}`
    } else if (hours > 17 && hours <= 21){
        return `Buonasera ${name}`;
    } else {
        return `Buonanotte ${name}`;
    }
    
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greetingsByTime(name))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.