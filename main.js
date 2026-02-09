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



//PALINDROMA

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
    


//PARI E DISPARI

//chiediamo all'user di scrivere la sua scelta tra even o odd
const user_choice = prompt ("type your choice: even or odd")
console.log(user_choice);
//chiediamo all'user di scegliere un numero da 1 a 5
const user_numb = Number(prompt("type a number, min 1 and max 5"))
console.log(user_numb);

//aprimo una funzione per il numero random del pc
function getPcNumber() {
    return Math.floor(Math.random() * 5) + 1
}
const pc_number = getPcNumber()
console.log(pc_number);


//apriamo una seconda funzione che ci servirà per la somma di due numeri
function sum(num1, num2) {
    const result = (num1 + num2)
    return result
    
}

//diamo come argomento il numero scelto dall'user e il numero random del pc e usiamo una variabile
const totalSum = sum(user_numb, pc_number)
console.log(totalSum);


//SE la somma è pari E la scelta dell'utente è even
if (totalSum % 2 === 0 && user_choice==="even"){
    //ALLORA
    console.log("sum is even");
    console.log("You win!!!👌");
}
//SE la somma è dispari E la scelta dell'utente è odd
else if (totalSum % 2 !== 0 && user_choice==="odd") {
    //ALLORA
    console.log("sum is odd");
    console.log("You win!!!👌");
}
//ALTRIMENTI
else {
    console.log("ohhh...you lose😒");
}



