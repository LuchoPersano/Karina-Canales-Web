var vh = window.innerHeight;
var vw = window.innerWidth;
var bookImgs = document.getElementsByClassName('pageimg');
var book = document.getElementById('flipbook');
var container = document.getElementById('container');
var hard1 = document.getElementsByClassName('hardoncase1');
var hard2 = document.getElementsByClassName('hardoncase2');

for(var i = 4; i <= 40; i++){
    if(i < 10){
        var newPage = `
        <div>
            <img class="page${i}img pageimg" id="page${i}img" src="img/María-Paz-INTERIORES-lo-ultimo_page-000${i}.jpg" alt="página ${i} del libro Cuentos para María Paz de Karina Canales">
        </div>
        `;
    } else{
        var newPage = `
        <div>
            <img class="page${i}img pageimg" id="page${i}img" src="img/María-Paz-INTERIORES-lo-ultimo_page-00${i}.jpg" alt="página ${i} del libro Cuentos para María Paz de Karina Canales">
        </div>
        `;
    }
    book.insertAdjacentHTML('beforeend', newPage);
}


if(vh < vw){
    for (var i = 0; i < bookImgs.length; i++) {
        bookImgs[i].style.height = '40vw';
    }
    book.style.width = container.style.width = '80vw';
    book.style.height = container.style.height = '40vw';
    for(var i = 0; i < hard1.length; i++){
        hard1[i].className += ' hard';
    }
    $('#flipbook').turn({
        display: 'double',
        duration: 1000,
        autoCenter: true,
    });
} else {
    for (var i = 0; i < bookImgs.length; i++) {
        bookImgs[i].style.width = '85vw';
    }
    book.style.width = container.style.width = '85vw';
    book.style.height = container.style.height = '85vw';
    for(var i = 0; i < hard2.length; i++){
        hard2[i].className += ' hard';
    }
    $('#flipbook').turn({
        display: 'single',
        duration: 1000
    });
}