/* 
- Alert di 5 numeri casuali
- Dopo 30sec dalla chiusura dell'alert l'utente deve: inserire uno alla volta i numeri generati dal precedente alert
- Dopo il completamento, il software deve dichiarare quanti e quali dei numeri sono stati individuati giusti
*/


// Dichiaro la funzione per generare numeri random per l'array randomNumberList
const randomNumberList = randomNumberArray(1, 100, 5);
console.log('Array numeri da memorizzare', randomNumberList);

// Creare un alert con i numeri presenti nell'Array: randomNumberList
alert(`Memorizza questi numeri: ${randomNumberList}`);












/*************************************
            UTILITY FUNCTION 
**************************************/
// Genero numeri random tra totNum a totNum
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// GENERAZIONE DI NUMERI (RANDOM)
// listRandomBumber ----> array in cui verranno inseriti i numeri random
// maxRange ----> variabile function: numeri random da 1 a maxNumber
// pushare nell'array listRandomBumber solo se i numeri non sono gia' presenti finche' non raggiunge un totale di: 5 elementi (in questo caso numeri)
function randomNumberArray(minNumber, maxNumber, totalNumberElement) {

    // Lista array 16 bombe da riempire
    const listRandomBumber = [];

    // Ciclo per generare numeri bomba fino ad arrivare a 16 elementi non duplicati da inserire in listBombsNumber
    while(listRandomBumber.length < totalNumberElement) {

        // Dichiarata la funzione di generatore numeri random da-a
        let maxRange = randomNumber(minNumber, maxNumber);
    
        // Push solo dei lvMaxNumber non presenti ancora in listBombsNumber
        if(!listRandomBumber.includes(maxRange)) {
            listRandomBumber.push(maxRange);
        } 
    }
    return listRandomBumber;
}