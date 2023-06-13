/*
    CONSEGNA
    1)Chiedere all'utente il numero di km che vuole percorrere e l'età del passeggero
    2)Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
        
        //CONDIZIONE
        2a)il prezzo del biglietto è definito in base ai km (0.21 € al km)
        2b)va applicato uno sconto del 20% per i minorenni
        2c)va applicato uno sconto del 40% per gli over 65.

    3)L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
        


*/

// 1)Chiedere all'utente il numero di km che vuole percorrere

const userDataVoyage = parseInt (prompt ('Inserisci il numero dei Km che dovrai percorrere'));

console.log('userDataVoyage', userDataVoyage , typeof userDataVoyage);

//2)Chiedere all'utente l'età
const userDataAge = parseInt (prompt ('Inserisci la tua età'));

console.log('userDataAge', userDataAge , typeof userDataAge);

// 3)Calcolare il prezzo totale del viaggio in base alle info dell'utente

//4)Verifica l'età dell'utente
if( userDataAge < 18){
    //applico uno sconto del 20%
    const price = 0.21 * userDataVoyage;
    const discount = price * 0.20;
    const priceTotal = price - discount;

    document.querySelector('h4').innerHTML = 'Il Prezzo del biglietto è: €' + priceTotal.toFixed(2);
}    

else if( userDataAge >= 65){
    //gli applico uno sconto del 40%
    const price = 0.21 * userDataVoyage;
    const discount = price * 0.40;
    const priceTotal = price - discount;

    document.querySelector('h4').innerHTML = 'Il Prezzo del biglietto è: €' + priceTotal.toFixed(2);
}

else{
    //non gli applico nessuno sconto
    const price = 0.21 * userDataVoyage ;
    console.log('Il Prezzo a persona è' , price);

    document.querySelector('h4').innerHTML = 'Il Prezzo del Biglietto è: €' + price.toFixed(2);
}

//Inserisci un allert

if(isNaN(userDataAge)){
    //se l'utente non inserisce un numero nel campo Età
    alert('Devi inserire un numero');
}
if(isNaN(userDataVoyage)){
    //se l'utente non inserisce un numero nel campo Km
    alert('Devi inserire i chilometri');
}
