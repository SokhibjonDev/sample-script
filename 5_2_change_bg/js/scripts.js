window.addEventListener('load', function () {

    let btns = document.querySelectorAll('.btn');
    let navbar = document.querySelector('.navbar');

    for (var i = 0; i <= btns.length - 1; i++) {
        btns[i].addEventListener('click', function () {
            let bgColor = this.getAttribute('data-color')
            navbar.style.background = bgColor
        })
    }
});