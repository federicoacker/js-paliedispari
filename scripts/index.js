// ESERCIZIO 1 //
const palindromeString = askUserGenerator("string")("Inserisci una parola che vuoi controllare sia Palindroma");
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

const MAX_VALUE = 10; //Massimo valore per il random number generator
const askEvenOrOddFunction = askUserGenerator("string"); // La funzione che chiederà pari o dispari
let isAskEvenOrOddCorrect = false; // Flag booleana per controllare che la stringa inserita sia effettivamente "pari" o "dispari"

//Ora, vista l'implementazione della nostra funzione askUser, dentro askUserGenerator, noi lì facciamo solo i controlli più basilari
//Ovvero, per le stringhe, controlliamo solo se la stringa sia vuota, per i numbers, controlliamo solo se il number è NaN
//Quindi i controlli di coerenza, dobbiamo farli comunque noi qui nel main
//Potrei modificare le funzioni interne in modo che ricevano anche dei parametri da utilizzare per ampliare il loro ciclo while di controllo
//Dei prompt e fare tutti i controlli là dentro. Ma al momento non ne vale la pena visto quanto sono semplici i controlli.

while(!isAskEvenOrOddCorrect)
{
    askEvenOrOdd = askEvenOrOddFunction("Inserisci pari o dispari");
    if(!(askEvenOrOdd.toLowerCase() === "pari" || askEvenOrOdd.toLowerCase() === "dispari")){
        console.log("Non hai inserito pari o dispari nel prompt, riprova");
    }else{
        isAskEvenOrOddCorrect = true;
    }
}

const askNumberFunction = askUserGenerator("number");
let askNumber = askNumberFunction("Inserisci un numero da 1 a 10");
const generatedNumber = numberGenerator(MAX_VALUE);