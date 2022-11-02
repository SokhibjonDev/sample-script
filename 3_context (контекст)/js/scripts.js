window.onload = function () {
    var web = document.querySelector('.text');


    web.onmouseover = function () {
        web.innerHTML = 'Meni hover qilishdi'
        web.style.background = 'red'
        web.style.margin = '100px auto'
    }

    web.onmouseleave = function () {
        web.innerHTML = 'Hoverni qaytar'
        web.style.background = 'green'
    }


    web.onclick = function () {
        web.innerHTML = 'Meni bosishdi'
        web.style.background = 'yellow'
        web.style.transition = '.5s'
        web.style.transform = 'rotate(720deg)'
    }


}