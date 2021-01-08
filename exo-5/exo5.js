// you can write js here

console.log('exo-5');

let input = 'I like to spit with my back!';
input = input.toLowerCase();

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

let resultArray = [];

for (let letter of input) {
    console.log(letter);
    if (vowels.indexOf(letter) !== -1) {
        resultArray.push(letter);
    }
}

console.log(resultArray.join(''));
// s'il y a des quotes dans join(), le resultat s'afficher en string (donc sans virgules)