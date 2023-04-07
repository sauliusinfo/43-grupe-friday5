console.clear();
// 3. Parašyti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, 
// antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. 
// Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių. 
// 
// TEST:
// basketballPoints(5, 25, 10) ➞ 85
// basketballPoints(1, 1, 1) ➞ 6
// basketballPoints(10, 20, 5) ➞ 65

let baudos =0;
let dvitaskiai =0;
let tritaskiai =0;
const bauda =1; const dvitaskis =2; const tritaskis =3;

function basketballPoints(baudos, dvitaskiai, tritaskiai) {
    komanda = baudos * bauda
            + dvitaskiai * dvitaskis
            + tritaskiai * tritaskis;
    return komanda;
}
console.log(`basketballPoints(5, 25, 10) ➞ ${basketballPoints(5, 25, 10)}`);
console.log(`basketballPoints(1, 1, 1) ➞ ${basketballPoints(1, 1, 1)}`);
console.log(`basketballPoints(10, 20, 5) ➞ ${basketballPoints(10, 20, 5)}`);
