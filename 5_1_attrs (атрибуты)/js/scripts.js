// Example

// window.addEventListener('load', function () {
//     var div = document.querySelectorAll('.text'); //array

//     for (var i = 0; i <= div.length - 1; i++) {
//         div[i].addEventListener('click', function () {
//             var bg = this.getAttribute('data-color')
//             this.style.background = bg
//         })
//     }
// });

// Practice

window.addEventListener('load', function () {
    var web = document.querySelectorAll('.text');

    for (var i = 0; i <= web.length; i++) {
        web[i].addEventListener('click', function () {
            let SetBground = this.getAttribute('data-color')
            this.style.background = SetBground
        })
    }
});