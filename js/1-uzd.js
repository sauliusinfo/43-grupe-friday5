console.clear();
// 1. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
// padidinamas vienetu ir gražinamas rezultatas

// TEST:
// addition(0) ➞ 1
// addition(9) ➞ 10
// addition(-3) ➞ -2

const x = 0;
let skaicius = 0;

function addition(x) {
    skaicius = x+1;
    return skaicius;
}
console.log(`addition(0) -> ${addition(0)}`);
console.log(`addition(9) -> ${addition(9)}`);
console.log(`addition(-3) -> ${addition(-3)}`);
