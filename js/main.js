window.onload = () => {
    
    const l = "https://covers.openlibrary.org/b/id/"
    let indizea = 0;
    let izenburua = document.querySelector('p:nth-child(1) > input[type=text]');
    let egilea = document.querySelector('p:nth-child(2) > input[type=text]');
    let d = document.querySelector('p:nth-child(3) > input[type=text]');
    let isbn = document.querySelector('p:nth-child(4) > input[type=text]');

    let eskuin = document.getElementById('eskuin');
    let ezker = document.getElementById('ezker');

    let irudia = document.getElementById('img');


    const clickEzker = () => {
        console.log("Ezker botoia sakatu da")
        if(indizea == 0) {
            indizea = db.length - 1;
        } else {
            indizea--;
        }
        balioakAldatu(indizea);
    };

    const clickEskuin = () => {
        console.log("Eskuin botoia sakatu da")
        if(indizea == db.length - 1) {
            indizea = 0;
        } else {
            indizea++;
        }
        balioakAldatu(indizea);
    };

    const balioakAldatu = (indizea) => {
        console.log(indizea)
        izenburua.value = db[indizea].izenburua
        egilea.value = db[indizea].egilea
        d.value = db[indizea].data
        isbn.value = db[indizea].isbn
        irudia.src = l + db[indizea].filename
    };

    let db;

    fetch('../datubasea.json')
    .then(response => response.json())
    .then(data => {
        db = data;

        balioakAldatu(0);

        ezker.addEventListener('click', clickEzker);
        eskuin.addEventListener('click', clickEskuin);
        
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
    
}