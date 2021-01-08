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

function totalTeamPoints() {
    let total = 0;
    for (let i = 0; i < team._games.length; i++) {
        total += team._games[i].teamPoints;
    }
    return total;
}

function averageOpponents() {
    let total = 0;
    let average = 0;
    for (let i = 0; i < team._games.length; i++) {
        total += team._games[i].teamPoints;
    }
    average = total / team._games.length;
    return average.toFixed(2);
}

function findOlderPlayer() {

    let olderPlayer = team._players[0];

    for (let i = 1; i < team._players.length; i++) {

        let currentPlayer = team._players[i];

        if (currentPlayer.age >= olderPlayer.age) {
            olderPlayer = currentPlayer;
        }
    }
    console.log('Le joueur le plus agé est ' + olderPlayer.firstName + ' ' + olderPlayer.lastName + ' et est agé de ' + olderPlayer.age + ' ans.');
}

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
addPlayer('Agathe', 'Eau', 25);
addPlayer('Mickael', 'Fique', 33);

addGame('MerlinSchool', 35, 29);
addGame('Niort', 56, 37);
addGame('Paris Sorcier Germain', 10, 9);


console.log('Notre équipe a marqué ' + totalTeamPoints() + ' points cette année !');

console.log('Les équipes adverses ont eu une moyenne de ' + averageOpponents() + ' points cette année !')

console.log(findOlderPlayer());

team._players.sort((a, b) => (a.lastName < b.lastName) ? -1 : (a.lastName > b.lastName) ? 1 : 0);
console.log(team._players);