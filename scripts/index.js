// ESERCIZIO 1 //
const palindromeString = (askUserGenerator("string"))("Inserisci una parola che vuoi controllare sia Palindroma");
const isStringPalindrome = isPalindrome(palindromeString);

if(isStringPalindrome !== -1){
    if(isStringPalindrome){
        console.log(`La stringa ${palindromeString} è palindroma`);
    }else{
        console.log(`La stringa ${palindromeString} non è palindroma`);
    }
}
else{ //Questo viene loggato solo
    console.log("C'è stato un errore nel controllo della stringa inserita, forse hai utilizzato male la funzione isPalindrome()?");
}

// ESERCIZIO 2 //

const MAX_VALUE = 10; //Massimo valore per l'utente da inserire
const MIN_VALUE = 1; //Minimo valore per l'utente da inserire
const askEvenOrOddFunction = askUserGenerator("string"); // La funzione che chiederà pari o dispari all'utente

let winner = ""; // La stringa in cui salveremo il vincitore del piccolo gioco
let isAskEvenOrOddCorrect = false; // Flag booleana per controllare che la stringa inserita sia effettivamente "pari" o "dispari"
let askEvenOrOdd; // La stringa in cui salveremo se l'utente ci dice pari o dispari
let askNumber; // La stringa in cui chiederemo il numero all'utente
let isAskNumberCorrect = false; // flag booleana per controllare che il numero inserito sia all'interno dell'intervallo che abbiamo chiesto all'utente


//Ora, vista l'implementazione della nostra funzione askUser, dentro askUserGenerator, noi lì facciamo solo i controlli più basilari
//Ovvero, per le stringhe, controlliamo solo se la stringa sia vuota, per i numbers, controlliamo solo se il number è NaN
//Quindi i controlli di coerenza, dobbiamo farli comunque noi qui nel main
//Potrei modificare le funzioni interne in modo che ricevano anche dei parametri da utilizzare per ampliare il loro ciclo while di controllo
//Dei prompt e fare tutti i controlli là dentro. Ma al momento non ne vale la pena visto quanto sono semplici i controlli.

while(!isAskEvenOrOddCorrect) // Controllo che l'utente abbia inserito o pari o dispari
{
    askEvenOrOdd = askEvenOrOddFunction("Inserisci pari o dispari");
    if(!(askEvenOrOdd.toLowerCase().replaceAll(" ", "") === "pari" || askEvenOrOdd.toLowerCase().replaceAll(" ", "") === "dispari")){
        console.log("Non hai inserito pari o dispari nel prompt, riprova");
    }else{
        isAskEvenOrOddCorrect = true;
    }
}

const askNumberFunction = askUserGenerator("number"); // La funzione che chiederà il numero all'utente

while(!isAskNumberCorrect){ // Controllo che l'utente abbia inserito un numero tra 1 e 10
    askNumber = askNumberFunction("Inserisci un valore da 1 a 10");
    if(!(askNumber < MIN_VALUE || askNumber > MAX_VALUE)){
        isAskNumberCorrect = true;
    }
}

const generatedNumber = numberGenerator(MAX_VALUE); // Genero il valore a caso tra 1 e 10

console.log(`Hai inserito ${askNumber}, il computer ha generato ${generatedNumber}`); // Comunico all'utente il valore che ha inserito e quello generato dal computer

const sum = askNumber + generatedNumber; // faccio la somma dei due valori

const evenOrOddNumber = evenOrOdd(sum); // Uso la funzione per vedere se è pari o dispari

if(evenOrOddNumber === 1){ // Se dispari
    console.log(`La somma di ${askNumber} e ${generatedNumber} è ${sum} che è dispari`); // comunico il risultato
}
else if(evenOrOddNumber === 0){// Se pari
    console.log(`La somma di ${askNumber} e ${generatedNumber} è ${sum} che è pari`); // comunico il risultato
}
else{// caso limite, la funzione potrebbe restituire -1 se c'è stato un errore 
// nel trattamento dei dati fino ad'ora e per un motivo o per un altro, è stata mandata una stringa di testo a questa funzione. 
// E' qui solo per controllare che non ci siano errori nel codice
    console.error(`C'è stato un errore nella funzione per il controllo di pari e dispari, vai a controllarla`);
}

//Controlliamo se aveva ragione il player
if(askEvenOrOdd.toLowerCase() === "pari"){ // Se il player aveva inserito che è pari
    (evenOrOddNumber === 0) && (winner = "L'utente"); // Se è uscito effettivamente pari allora vince l'utente
    (evenOrOddNumber === 1) && (winner = "Il computer"); // Altrimenti il computer
}
else if(askEvenOrOdd.toLowerCase() === "dispari"){// Se il player aveva inserito che è dispari
    (evenOrOddNumber === 0) && (winner = "Il computer"); // Se è uscito pari vince il computer
    (evenOrOddNumber === 1) && (winner = "L'utente"); // altrimenti l'utente
}
//Comunichiamo il risultato in console
console.log(`L'utente aveva provato a indovinare ${askEvenOrOdd}`);
console.log(`
Il vincitore è:
${winner}`
);