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

const MAX_VALUE = 10;
const askEvenOrOdd = askUser("string")("Inserisci pari o dispari");
const askNumber = askUser("number")("Inserisci un numero da 1 a 10");
const generatedNumber = numberGenerator(MAX_VALUE);