console.clear();
// 7. Parašyti f-ją, kuri atspausdintų paduodamo skaičiaus daugybos lentelę 

// TEST:
// Multiplication(3) ➞

// 1 * 3 = 3
// 2 * 3 = 6
// 3 * 3 = 9
// Ir t.t.iki
// 10 * 3 = 30

const sk=0;
let sandauga=0;

function Multiplication(sk) {
    for (i=1; i<=10; i++) {
        sandauga = i * sk;
        console.log(`${i} * ${sk} = ${sandauga}`);
    }
    return sandauga;
}
Multiplication(3);
