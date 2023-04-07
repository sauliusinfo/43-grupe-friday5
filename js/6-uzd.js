console.clear();
// 6. Sukurti f-ją, kuri nustatytų, kuris iš paduodamų parametrų skaičių (n1, n2) yra didesnis. 
// Jei n1 didesnis gražintų tekstą "n1 skaičius didesnis", jei "n2 skaičius didesnis", 
// jei skaičiai lygūs gražintų n1 lygus n2. 

// TEST:
// comparisonNum(10, 20) ➞ "20 yra didesnis skaičius"
// comparisonNum(2, -1) ➞  "2 yra didesnis skaičius"
// comparisonNum(10, 10) ➞ "abu skaičiai lygūs"

let n1 = 0;
let n2 = 0;
let ats = '';

function comparisonNum(n1, n2) {
    if (n1 > n2) {
        ats = `"${n1} yra didesnis skaičius"`;
    } else if (n1 < n2) {
        ats = `"${n2} yra didesnis skaičius"`;
    } else {
        ats = `"abu skaičiai lygūs"`;
    }
    return ats;
}

console.log(`comparisonNum(10, 20) -> ${comparisonNum(10, 20)}`);
console.log(`comparisonNum(2, -1) -> ${comparisonNum(2, -1)}`);
console.log(`comparisonNum(10, 10) -> ${comparisonNum(10, 10)}`);
