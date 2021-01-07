// you can write js here
console.log('exo-2');

let isRegistered;
let age;

if (!isRegistered) {
    var raceNumber = Math.floor(Math.random()*1000);
}

if (age >= 18 && isRegistered) {
    console.log('You will race at 9:30 am ');
}
else if (age >= 18 || isRegistered) {
    console.log('You will race at 11:00 am ' + raceNumber);
}
else if (age < 18 || !isRegistered) {
    console.log('You will race at 12:30 pm ' + raceNumber);
}
else {
    console.log('Go to see the registration desk');
}