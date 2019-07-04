// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per
// i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Esattamente quelle devono essere le stringhe di output.

// principali variabili
var numeri;

numeri = [];

// ciclo per creare array da 1 a 100
for (var i = 1; i <= 100; i++) {
  numeri.push(i);
}

// ciclo per stampare array
for (var j = 0; j < numeri.length; j++) {
  // prima verifica dei multipli di 5 e 3
  if (numeri[j] % 3 == 0 && numeri[j] % 5 == 0) {
    numeri[j] = '"FizzBuzz"';
  } if (numeri[j] % 3 == 0) { // verifica multipli del 3
   numeri[j] = '"Fizz"';
 } if (numeri[j] % 5 == 0) { // verifica dei multipli del 5
   numeri[j] = '"Buzz"';
 }
 console.log(numeri[j]); // stampa dei vari numeri
}
