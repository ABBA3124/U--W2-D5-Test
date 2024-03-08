/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'] 
  for (let i = 0; i < pets.length; i++) {
    console.log("stampiamo tutti gli elementi:", pets[i])
  } 


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()
console.log("ordine alfabetico", pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()
console.log("invertiamo", pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const abcde = pets.shift()
pets.push(abcde)
console.log("primo elemento/ultimo", pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "ME932ZH"
}
console.log("change log - aggiunte targhe auto", cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const addonCar = {
  brand: "Ferrari",
  model: "488 Pista",
  color: "red",
  trims: ['life', 'style', 'r-line'],
}
cars.push(addonCar)
console.log("Change log - aggiunta nuova auto:",cars)

for (let i = 0; i < cars.length; i++) {
  const car = cars[i]
  car.trims = car.trims.slice(0, car.trims.length - 1)
}
console.log("rimuoviamo ultimo elemento della proprietà trims da ogni auto",cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims.length > 0) {
    justTrims.push(cars[i].trims[0])
  }
}
console.log("prova" ,justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const car = cars[i]
  if (car.color[0].toLocaleLowerCase() === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0 
while (i < numericArray.length) {
  if (numericArray[i] === 32) {
    break
  }
  console.log("stop 100", numericArray[i])
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
let numeri = [];

for (let z = 0; z < charactersArray.length; z++) {
  switch (charactersArray[z]) {
    case "a":
      numeri.push("1");
      break;
    case "b":
      numeri.push("2");
      break;
    case "c":
      numeri.push("3");
      break;
    case "d":
      numeri.push("4");
      break;
    case "e":
      numeri.push("5");
      break;
    case "f":
      numeri.push("6");
      break;
    case "g":
      numeri.push("7");
      break;
    case "h":
      numeri.push("8");
      break;
    case "i":
      numeri.push("9");
      break;
    case "j":
      numeri.push("10");
      break;
    case "k":
      numeri.push("11");
      break;
    case "l":
      numeri.push("12");
      break;
    case "m":
      numeri.push("13");
      break;
    case "n":
      numeri.push("14");
      break;
    case "o":
      numeri.push("15");
      break;
    case "p":
      numeri.push("16");
      break;
    case "q":
      numeri.push("17");
      break;
    case "r":
      numeri.push("18");
      break;
    case "s":
      numeri.push("19");
      break;
    case "t":
      numeri.push("20");
      break;
    case "u":
      numeri.push("21");
      break;
    case "v":
      numeri.push("22");
      break;
    case "w":
      numeri.push("23");
      break;
    case "x":
      numeri.push("24");
      break;
    case "y":
      numeri.push("25");
      break;
    case "z":
      numeri.push("26");
      break;
    default:
  }
}
console.log("id lettere:", numeri);
