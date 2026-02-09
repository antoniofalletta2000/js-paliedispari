/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo? */

//chiediamo all'user di scrivere una parola in minuscolo
const word = prompt("type a word in lowercase")
console.log(word);

//apriamo una funzione chiamata itsPalindrome il cui parametro è la parola scritta dall'user
function itsPalindrome(word) {
    //creiamo una variabile che ci servirà per metterci la parola al contrario
    let reversedWord = ""
    
    //apriamo un ciclo for che leggerà al contrario la parola dell'user
    for (let i = word.length - 1; i >= 0; i--) {
        //creiamo una variabile per associare gli index della parola
        const char = word[i]
        //scriviamo che la variabile della parola al contrario è data dalla somma di se stessa e degli indici della parola dell'user
        reversedWord += char  
    } 
    //SE la parola dell'user è uguale a se stessa al contrario
    if (reversedWord===word){
        //ALLORA mi ritornerà il valore booleano true
        return true
    }
    //ALTRIMENTI
    else {
        //mi ritornerà il valore booleano false
        return false
    }
    
} 
    //stampiamo il risultato della funzione
    console.log(itsPalindrome(word));
    





