// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.bathrooms = 1;

// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage = true;

// ===========================================================================================

// functions
let addPlayer = (first, last, age) => team._players.push(
    {
        firstName: first,
        lastName: last,
        age: age
    }
);

let addGame = (oppo, tPoints, oPoints) => team._games.push(
    {
        opponent: oppo,
        teamPoints: tPoints,
        opponentPoint: oPoints
    }
);


// js
let team = {
    _players: [
        {
            firstName: 'Johan',
            lastName: 'Himal',
            age: 29
        }, 
        {
            firstName: 'Florine',
            lastName: 'Taigueur',
            age: 27
        },
        {
            firstName: 'Hugo',
            lastName: 'Blet',
            age: 32
        },
        {
            firstName: 'Alexis',
            lastName: 'Lophone',
            age: 28
        }
    ],
    _games: [
        {
            opponent: 'Beauxbaton',
            teamPoints: 25,
            opponentPoint: 50
        },
        {
            opponent: 'Poudlard',
            teamPoints: 68,
            opponentPoint: 3
        },
        {
            opponent: 'Durmstrong',
            teamPoints: 29,
            opponentPoint: 17
        }
    ]
}

addPlayer('Emma', 'Nifique', 22);

addGame('Magne', 43, 32);

console.log(team);
