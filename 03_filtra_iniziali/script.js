/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByInitials(array, letter) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
            result.push(array[i])
        }
    }

    return result
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByInitials(names, 'a'))



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]