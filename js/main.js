document.onload = () => {
    const l = "https://covers.openlibrary.org/b/id/"
    const db = require('./datubasea.json');
    console.log(db);
    let indizea = 0;
    let izenburua = document.querySelector('p:nth-child(1) > input[type=text]');
    let egilea = document.querySelector('p:nth-child(2) > input[type=text]');
    let data = document.querySelector('p:nth-child(3) > input[type=text]');
    let isbn = document.querySelector('p:nth-child(4) > input[type=text]');

    let irudia = document.getElementById('img');

    izenburua.value = db[indizea].izenburua;
    egilea.value = db[indizea].egilea;
    data.value = db[indizea].data;
    isbn.value = db[indizea].isbn;
    irudia.src = l + db[indizea].irudia;

    
}