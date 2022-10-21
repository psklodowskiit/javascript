
//Zad.1a
let sentence = "Lorem ipsum dolor sit amet, consectetur adipiscinge elit,";
//podzielenie ciagu na słowa z zalozeniem ze dzielimy po spacjach//
let x = sentence.split(" ");
//wyswietlenie z policzeniem  dugosci
console.log( "Liczba wyrazów w tym tekscie: " + x.length );

//Zad 1b
//liczenie wystepowania A
const letter = sentence.split("a");
console.log(letter.length - 1);


//Zad 1c
const longestWord = (sentence) => {
  const strArray = sentence.split(' ');                 //tablica String    podzielenie zdania po spacji                  
  const sortedStrArray = strArray.sort( (A, B) => { return B.length - A.length; }  );

  return sortedStrArray[0];
  
}
console.log("Najdłuższe słowo to: " + longestWord(sentence));
   
 
// Zad. 1d. wyświetla liczbę słów o długości takiej jak najdłuższe w ciągu
 
let sentence2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

function findLongestWord(word) {
  var longWord = word.split(' ').sort(function (a, b)
  {
    return b.length - a.length;
  });
  // 2. return length of the first sorted element array
  return longWord[0].length;
}
console.log(findLongestWord(sentence2));





//Zadanie2 DNA

//import data from './brca1.json';
//console.log(data);



//Zadanie 3. 
let height = 8;

for (let i=1; i <= height; i++) {
    let space = height- i;
    let hashes = i;
    let output = "";
   for(let j = 1; j <= space; j++) {
    output = output + " "; 
       }
   for( let k =1; k <= hashes; k++ ){
    output = output + "#";
  
   }

  
   output = output + " "; 

   for( let k =1; k <= hashes; k++ ){
    output = output + "#";
  
   }
    console.log (output);
}








      // 4. Karta kredytowa - napisz program, który powie, czy numer karty kredytowej jest prawidłowy i jakiego typu jest to karta (American Express / MasterCard / Visa)
// a. Do walidacji numeru karty - używany jest algorytm Luhna (https://en.wikipedia.org/wiki/Luhn_algorithm)
// b. Założyć:
// i. Wszystkie numery American Express zaczynają się od 34 lub 37;
// ii. Numery MasterCard zaczynają się od 51, 52, 53, 54 lub 55;
// iii. Wszystkie numery wizowe zaczynają się od 4
// iv. American Express używa 15-cyfrowych numerów
// v. MasterCard używa 16-cyfrowych liczb
// vi. Visa używa 13- i 16-cyfrowych numerów
// c. Wyświetl typ karty lub NIEPRAWIDŁOWA