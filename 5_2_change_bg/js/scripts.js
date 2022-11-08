// window.addEventListener('load', function () {

//     let btns = document.querySelectorAll('.btn');
//     let navbar = document.querySelector('.navbar');

//     for (var i = 0; i <= btns.length - 1; i++) {
//         btns[i].addEventListener('click', function () {
//             let bgColor = this.getAttribute('data-color')
//             navbar.style.background = bgColor
//         })
//     }

// });

// window.onload = function () {
//     let btn = document.querySelectorAll('.btn');
//     let nav = document.querySelector('.navbar');

//     for (let i = 0; i < btn.length; i++) {
//         btn[i].addEventListener('click', function () {
//             let btnBg = this.getAttribute('data-color')
//             nav.style.background = btnBg
//         })
//     }

// }

// window.addEventListener('load', function (e) {
//     let btn = document.querySelectorAll('.btn');
//     let nav = document.querySelector('.navbar');

//     btn.forEach(function (val, index) {
//         console.log(val, index);
//         btn[index].addEventListener('click', setAttribute)

//         function setAttribute() {
//             let bgColor = this.getAttribute('data-color')
//             nav.style.background = bgColor
//         }
//     })
// });

window.addEventListener('load', function (e) {
    let btn = document.querySelectorAll('.btn');
    let nav = document.querySelector('.navbar');

    btn.forEach(function (val, index) { // if , in function stayed one empty, else function not workning
        console.log(val);
        btn[index].addEventListener('click', setAttribute)

        function setAttribute() {
            let bgColor = this.getAttribute('data-color')
            nav.style.background = bgColor
        }
    })
});