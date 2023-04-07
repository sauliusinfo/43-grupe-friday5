console.clear();
// 4. Parašyti f-ją, kuriai būtų paduodami du parametrai (skaičiai), ir f-ja gražintų true  jei dviejų skaičių
// sumą yra mažiau arba lygų 100 ir false jei daugiau už 100. 

// TEST:
// lessThan100(22, 15) ➞ true
// lessThan100(83, 34) ➞ false
// lessThan100(3, 77) ➞ true

let sk1 =0;
let sk2 =0;
let ats = '';

function lessThan100(sk1, sk2) {
    if (sk1+sk2 <= 100) {
        ats = true;
    } else {
        ats = false;
    }
    return ats;
}

console.log(`lessThan100(22, 15) -> ${lessThan100(50, 50)}`);
console.log(`lessThan100(83, 34) -> ${lessThan100(83, 34)}`);
console.log(`lessThan100(3, 77) -> ${lessThan100(3, 77)}`);
