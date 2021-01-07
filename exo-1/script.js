let kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");

let celsius = kelvin - 273;
// dans la variable celsius, j'utilise la variable kelvin pour ma soustraction

let fahrenheit = celsius * (9/5) + 32;
// j'utilise la variable celsius pour mon calcul, dans la variable déclarée 'fahrenheit'

console.log(Math.floor(fahrenheit));
// j'utilise la fonction interne math.floor pour arrondir le résultat de fahreneitz