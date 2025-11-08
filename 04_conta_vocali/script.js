/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getVowel(string) {
    let vowels = 0;
    if (string.match(/[aeiou]/gi)) {
        vowels = string.match(/[aeiou]/gi).length;
    }
    return vowels
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getVowel(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)