console.clear();
// 3. Parašyti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, 
// antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. 
// Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių. 

let baudos =0;
let dvitaskiai =0;
let tritaskiai =0;
const bauda =1; const dvitaskis =2; const tritaskis =3;

function zalgiris(baudos, dvitaskiai, tritaskiai) {
    komanda = baudos * bauda
            + dvitaskiai * dvitaskis
            + tritaskiai * tritaskis;
    return komanda;
}
console.log(`Komanda is viso surinko tasku: ${zalgiris(9, 9, 9)}`);
