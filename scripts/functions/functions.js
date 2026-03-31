function isPalindrome (stringToCheck){ // Funzione che controlla se una stringa inserita è palindroma e restituisce true o false,
// restituisce -1 se ciò che è stato inserito non è una stringa o è una stringa vuota. 
    //Innanzitutto farò un controllo per vedere se ciò che è stato inserito è una stringa o è vuota
    if(typeof(stringToCheck) !== "string" || stringToCheck === ""){
        return -1;
    }

    stringToCheck = stringToCheck.toLowerCase(); // Trasformo in lowercase la stringa in modo che i controlli siano giusti

    let isMismatchFound = false; // Flag per controllare se abbiamo trovato due lettere diverse ai lati opposti della stringa (quindi la parola non è palindroma)

    //Dopo il controllo si passerà al ciclo for che controllerà se la stringa è palindroma
    //Sto pensando magari 1 solo ciclo, 2 iteratori, uno dall'inizio della stringa, 
    // uno dalla fine che controllano lettere a lati opposti della stringa fino a incontrarsi a metà.

    const halfIndexLower = Math.floor(stringToCheck.length/2); // Metà lunghezza inferiore
    const halfIndexUpper = Math.ceil(stringToCheck.length/2); // Metà lunghezza superiore

    //Li calcoliamo così per un motivo semplice, se la parola è fatta da un numero pari di lettere, ad esempio 6,
    // allora entrambi punteranno a indice 3 che è il quarto elemento, quindi il ciclo controllerà 
    // stringa[0] con stringa[5] 
    // stringa[1] con stringa[4]
    // stringa[2] con stringa[3] 
    // e si fermerà.
    // Se invece, la parola dovesse avere lunghezza dispari, tipo 7.
    // Allora halfIndexLower sarà 3, e halfIndexUpper sarà 4. 
    // Quindi il nostro ciclo controllerà:
    // stringa[0] con stringa[6]
    // stringa[1] con stringa[5]
    // stringa[2] con stringa[4]
    // E resterà in mezzo stringa 3 che non verrà controllata perché tanto sarebbe la stessa sia per i che per j nel ciclo
    
    for(let i = 0, j = stringToCheck.length-1; i<halfIndexLower && j>=halfIndexUpper && !isMismatchFound; i++, j--){ // Ciclo che itera i a salire da 0 alla metà della stringa e j a scendere dalla fine alla metà(inclusa) della stringa;
        const charFromStart = stringToCheck[i]; // Variabile di supporto: il carattere i-esimo
        const charFromEnd = stringToCheck[j]; // Variabile di supporto: il carattere j-esimo;
        if(charFromStart !== charFromEnd){ // Se i due valori sono diversi
            isMismatchFound = true; // Mettiamo la flag a true che ci fa uscire dal ciclo
        }
    }
    //Restituirò il risultato
    return !isMismatchFound; //Restituisco l'opposto della flag che ci dice che le lettere non combaciano.
}


function evenOrOdd (numberToCheck){ // Funzione che restituirà 1 se il numero è dispari o 0 se il numero è pari o -1 se non ha ricevuto un numero.
    //(Accetta anche stringhe, finché contengono solo un numero senza spazi).
    //Prima cosa da fare, un controllo per vedere se il valore passato è effettivamente un numero.
    //Poi posso fare il controllo semplicemente con un modulo e restituire il valore del modulo. 
    // (Ti viene da chiederti se a sto punto non era più intelligente usare direttamente il modulo).
    if(isNaN(Number(numberToCheck))){
        return -1;
    }
    return Number(numberToCheck)%2;
}

function numberGenerator(maxValue = 1){ // Funzione che genera un numero a caso, basandosi sul maxValue che gli viene passato, default 1, e lo restituisce.
    //Allora prima cosa, un controllo per vedere che maxValue sia un numero, se non lo è, restituiremo 0 come risultato sempre.
    if(isNaN(Number(maxValue))){
        return 0;
    }
    //Poi creeremo una variabile che verrà inizializata con una formula di Math.random che rispecchi ciò che vogliamo come funzionamento
    //In questo caso, un bel Math.floor(Math.random() * maxValue) + 1; dovrebbe proprio darci tutti i numeri casuali da 1 a maxValue
    const randomNumber = Math.floor(Math.random() * Number(maxValue)) + 1; //Qui facciamo il casting a Number di maxValue 
    // nel caso in cui ci sia passato come stringa ma contenga solo un numero, ce ne siamo assicurati con il check di prima
    // In teoria è superfluo fare il casting perché essendoci un * la stringa verrebbe in automatico castata a Number se possibile.
    // Però meglio specificarlo per chiarezza.
    //A questo punto lo restituiremo.
    return randomNumber;
}