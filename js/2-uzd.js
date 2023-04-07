console.clear();
// 2. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos) 
// ir  konvertuotų valandos į sekundes, bei gražintų rezultatą

// TEST:
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400

const min= 60;
const sec= 60;
let konvert= 0;

function howManySeconds(konvert) {
    konvert= konvert *min *sec;
    return konvert;
}
console.log(`howManySeconds(2) -> ${howManySeconds(2)}`);
console.log(`howManySeconds(10) -> ${howManySeconds(10)}`);
console.log(`howManySeconds(24) -> ${howManySeconds(24)}`);
