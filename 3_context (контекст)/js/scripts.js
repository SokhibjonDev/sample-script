// window.onload = function () {
//     var web = document.querySelector('.text');


//     web.onmouseover = function () {
//         web.innerHTML = 'Meni hover qilishdi'
//         web.style.background = 'red'
//         web.style.margin = '100px auto'
//     }

//     web.onmouseleave = function () {
//         web.innerHTML = 'Hoverni qaytar'
//         web.style.background = 'green'
//     }


//     web.onclick = function () {
//         web.innerHTML = 'Meni bosishdi'
//         web.style.background = 'yellow'
//         web.style.transition = '.5s'
//         web.style.transform = 'rotate(720deg)'
//     }


// }
window.onload = function () {
    var text = document.querySelector('.text');

    text.onmouseover = () => {
        text.style.background = 'orange'
        text.style.color = 'black'
        text.innerHTML = "Hello there"
    }
    text.onclick = () => {
        text.style.background = 'red'
        text.style.color = 'white'
        text.innerHTML = "I`m Darth Vader"
    }
    text.onmouseleave = () => {
        text.innerHTML = "Bye there"
        text.style.background = 'greenyellow'
        text.style.color = 'black'
    }
    function dblclick() {
        text.style.background = 'blue'
        text.innerHTML = 'Skywalker'
    }
    text.addEventListener('dblclick', dblclick)

}



// onmouseover = Stylesheet in Javascript tagName => hover // succesful
// onclick = Javascsript = code || tag  => functionClick() // succesful
// onmouseover = Style Javascript tagName => hover is over // succesful
// addEventListener  => "dblclick" it's doubleClick function succcesful