jsonDatas.forEach(element => console.log(element));

let traduction = {
    "car": "voiture",
    "house": "logement",
    "game": "jeu",
    "videoGame": "jeuVidéo",
    "show": "événement"
}

jsonDatas.forEach(element => element.translatedType = traduction[element.type]);

console.log(jsonDatas);

// Input & button & checkbox
let input = document.createElement('input');
document.body.append(input);

let text = document.querySelector('input');


const button = document.createElement('button');
button.textContent = 'Develop!';
document.body.append(button);

const alphaBtn = document.createElement('button');
alphaBtn.textContent = 'Tri alphabétique';

const invAlphaBtn = document.createElement('button');
invAlphaBtn.textContent = 'Tri alphabétique inversé';

const ascPriceBtn = document.createElement('button');
ascPriceBtn.textContent = ('Prix croissant');

const descPriceBtn = document.createElement('button');
descPriceBtn.textContent = 'Prix décroissant';


const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
document.body.append(checkbox);



button.onclick = () => {
    for (let i = 0; i < jsonDatas.length; i++) {
        if (text.value === jsonDatas[i].type) {

            let articles = [];

            if (checkbox.checked) {

                for (let j = 0; j < jsonDatas[i].items.length; j++) {

                    if (jsonDatas[i].items[j].quantity > 0) {
                        articles.push(jsonDatas[i].items[j]);
                        console.log(articles);

                        document.body.append(alphaBtn);
                        document.body.append(invAlphaBtn);
                        document.body.append(ascPriceBtn);
                        document.body.append(descPriceBtn);

                        alphaBtn.onclick = () => {
                            articles.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
                            console.log(articles);
                        }

                        invAlphaBtn.onclick = () => {
                            articles.sort((a, b) => (a.name > b.name) ? -1 : (a.name < b.name) ? 1 : 0);
                            console.log(articles);
                        }

                        ascPriceBtn.onclick = () => {
                            articles.sort((a, b) => (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0);
                            console.log(articles);
                        }

                        descPriceBtn.onclick = () => {
                            articles.sort((a, b) => (a.price > b.price) ? -1 : (a.price < b.price) ? 1 : 0);
                            console.log(articles);
                        }
                    }
                }
            }
            else {
                articles.push(jsonDatas[i]);
                console.log(articles);

                document.body.append(alphaBtn);
                document.body.append(invAlphaBtn);
                document.body.append(ascPriceBtn);
                document.body.append(descPriceBtn);

                alphaBtn.onclick = () => {
                    articles.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
                    console.log(articles);
                }

                invAlphaBtn.onclick = () => {
                    articles.sort((a, b) => (a.name > b.name) ? -1 : (a.name < b.name) ? 1 : 0);
                    console.log(articles);
                }

                ascPriceBtn.onclick = () => {
                    articles.sort((a, b) => (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0);
                    console.log(articles);
                }

                descPriceBtn.onclick = () => {
                    articles.sort((a, b) => (a.price > b.price) ? -1 : (a.price < b.price) ? 1 : 0);
                    console.log(articles);
                }
            }
        }
    }
}


// add to array
// ===============================
function addToData () {

    let articleInserted = false;

    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;

    let newObject = {
        "name": name,
        "description": description,
        "price": price,
        "quantity": quantity
    }

    outer_loop:
    for (let i = 0; i < jsonDatas.length; i++) {
        if (type == jsonDatas[i].type) {
            jsonDatas[i].items.push(newObject);

            articleInserted = true;

            alert('Article ajouté dans la famille ' + jsonDatas[i].type);
            break outer_loop;
        }
    }
    if (!articleInserted) {
        alert('La famille n\'existe pas !');
    }
}

let form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    addToData();
    console.log(jsonDatas);
});


for (let i = 0; i < jsonDatas.length; i++) {
    for (let j = 0; j < jsonDatas[i].items.length; j++) {
        console.log(jsonDatas[i].items[j].contact);
    }
}