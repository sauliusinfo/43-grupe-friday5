console.clear();
// 5. Parašyti f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. Gražiname true arba false

// TEST:
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false

let sk1 =0;
let sk2 =0;
let ats = '';

function isSameNum(sk1, sk2) {
    if (sk1 === sk2) {
        ats = true;
    } else {
        ats = false;
    }
    return ats;
}

console.log(`isSameNum(4, 8) -> ${isSameNum(4, 8)}`);
console.log(`isSameNum(2, 2) -> ${isSameNum(2, 2)}`);
console.log(`isSameNum(2, "2") -> ${isSameNum(2, "2")}`);
