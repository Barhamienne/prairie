/*(function() {
    let i = document.querySelector('#menu')
    i.addEnventListener('click', function() {
        document.body.classList.add('has-vertical-menu')
    })
})()


function boutonmenu() {
    document.getElementById('menu').classList.fa('active');

} */


var i = 0;

function boutonmenu() {
    if (i == 0) {
        document.getElementById("menu").style.
        transform = 'rotate(0deg)';
        document.getElementById("list").style.
        left = '0';
        i = 1;
    } else {
        document.getElementById("menu").style.
        transform = 'rotate (0deg)';
        document.getElementById("list").style.
        left = '-200px';
        i = 0;
    }
}