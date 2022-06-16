/* 
- Alert di 5 numeri casuali
- Dopo 30sec dalla chiusura dell'alert l'utente deve: inserire uno alla volta i numeri generati dal precedente alert
- Dopo il completamento, il software deve dichiarare quanti e quali dei numeri sono stati individuati giusti
*/


// Variabili 
const totalElements = 5;


// Dichiaro la funzione per generare numeri random per l'array randomNumberList
const randomNumberList = randomNumberArray(1, 100, 5);

// Creare un alert con i numeri presenti nell'Array: randomNumberList
alert(`Memorizza questi numeri: ${randomNumberList}`);


// Creare un setTimeout della durata di 30 sec. dalla chiusura dell'alert con function: userNUmbers
setTimeout(userNumbers, 1000);

function userNumbers() {   
   
    // Registrare userNumbers array da tenere in conto di tutti i tentativi
    const userNumberList = [];
    // Registrare solo gli userNumbers corretti
    const correctNumbers = [];

    // Variabile messaggio per non superare la soglia di numeri indicata
    let userMesage = 'Fai attenzione, non andare oltre il numero 100 o al di sotto di 1';


    // 5 promt diversi consecutivi in cui l'utente inserira' i numeri dell'array userNumberList e correctNumbers
    while( userNumberList.length < totalElements){
        const userNumber = parseInt( prompt('Scrivi un numero memorizzato da 1 a 100'));

        // Push solo dei numeri che non sono ancora presenti in userNumberList, dei numeri inferiori o uguali a 100 e quelli superiori o uguali a 1
        if(!userNumberList.includes(userNumber) && userNumber <= 100 && userNumber >= 1) {
            userNumberList.push(userNumber);
        } 
        // Se supera i 100 o va al di sotto di 1 si aziona alert di avvertimento
        else if(userNumber > 100 || userNumber < 1) {
            alert(userMesage)
        }
        // Push solo dei numeri corretti e che non siano gia' presenti nel correctNumbers per evitare duplicati
        if(randomNumberList.includes(userNumber) && !correctNumbers.includes(userNumber)) {
            correctNumbers.push(userNumber);
        }
    }
    
    // Messaggio per l'utente con i tentativi esatti e i numeri giusti
    alert(`Il tuo punteggio è: ${correctNumbers.length}/${totalElements} con i seguenti i numeri: ${correctNumbers}`)
}





/*************************************
            UTILITY FUNCTION 
**************************************/
// Genero numeri random tra totNum a totNum
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// GENERAZIONE DI NUMERI (RANDOM)
// listRandomNumber ----> array in cui verranno inseriti i numeri random
// maxRange ----> variabile function: numeri random da 1 a maxNumber
// pushare nell'array listRandomBumber solo se i numeri non sono gia' presenti finche' non raggiunge un totale di: 5 elementi (in questo caso numeri)
function randomNumberArray(minNumber, maxNumber, totalNumberElement) {

    // Lista array da riempire
    const listRandomNumber = [];

    // Ciclo per generare numeri bomba fino ad arrivare a 16 elementi non duplicati da inserire in listBombsNumber
    while(listRandomNumber.length < totalNumberElement) {

        // Dichiarata la funzione di generatore numeri random da-a
        let maxRange = randomNumber(minNumber, maxNumber);
    
        // Push solo dei maxRange non presenti ancora in listRandomNumber
        if(!listRandomNumber.includes(maxRange)) {
            listRandomNumber.push(maxRange);
        } 
    }
    return listRandomNumber;
}


