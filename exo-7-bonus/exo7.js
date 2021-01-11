console.log("exo-7");

console.log(jsonDatas);

var allArticles = [];

for (let i = 0; i < jsonDatas.length; i++) {
    for (let j = 0; j < jsonDatas[i].items.length; j++) {
        jsonDatas[i].items[j].type = jsonDatas[i].type;
        jsonDatas[i].items[j].contact = jsonDatas[i].items[j].contact.firstName + ' ' + jsonDatas[i].items[j].contact.lastName;
        allArticles.push(jsonDatas[i].items[j]);
    }
}

function newTab() {

    for (let i = 0; i < allArticles.length; i++) {

        let tableRow = document.createElement('tr');

        for (let prop in allArticles[i]) {
            let tableCell = document.createElement('td');
            tableCell.innerHTML = allArticles[i][prop];
            tableRow.append(tableCell);
        }
        document.getElementById('tableau').appendChild(tableRow);
    }
}

newTab();


function objectToData() {

    let newObject = {
        "name": document.getElementById('name').value,
        "description": document.getElementById('description').value,
        "price": document.getElementById('price').value,
        "quantity": document.getElementById('quantity').value
    }

    allArticles.push(newObject);
}


let form = document.getElementById('f');

form.addEventListener('submit', e => {
    e.preventDefault();
    objectToData();

    let parent = document.getElementById('tableau');
    
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
    newTab();
});