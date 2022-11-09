// window.addEventListener('load', function (e) {
//     let blockChild = document.querySelectorAll('.block-childs');

//     function RGB() {
//         function R() {
//             Math.floor(Math.random(0, 256))
//         }
//         function G() {
//             Math.floor(Math.random(0, 256))
//         }
//         function B() {
//             Math.floor(Math.random(0, 256))
//         }
//     }

//     blockChild.forEach(function (val, index) {
//         blockChild.style.background = (RGB)
//     });
// });

window.addEventListener('load', function (e) {
    var div = document.querySelectorAll('.block div');

    for (var i = 0; i <= div.length - 1; i++) {
        div[i].addEventListener('click', onClick)

        function onClick() {

            var r = Math.floor(Math.random() * 256)
            var g = Math.floor(Math.random() * 256)
            var b = Math.floor(Math.random() * 256)

            this.style.background = 'rgb(' + r + ',' + g + ',' + b + ')'
        }
    }
});