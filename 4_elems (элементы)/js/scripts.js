window.onload = function () {
    var div = document.querySelectorAll('.text'); //NodeList

    for (var i = 0; i <= div.length - 1; i++) {
        div[i].addEventListener('click', function () {
            this.style.background = 'orange'
        })
    }
}