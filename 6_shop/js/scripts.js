// window.addEventListener('load', function (e) {
//     var carts = document.querySelectorAll('.cart-item');
//     var total = document.querySelector('.total b');
//     var sum = 0

//     for (var i = 0; i <= carts.length - 1; i++) {
//         carts[i].addEventListener('click', function () {
//             // this.classList.add('cart-active') // starts class
//             // this.classList.remove('cart-active') // delete class
//             // this.classList.contains('cart-active') // boolean class

//             let contains = this.classList.contains('cart-active')
//             let price = this.getAttribute('data-price')
//             console.log(price);

//             if (contains) {
//                 this.classList.remove('cart-active')
//                 sum = sum - +price
//             } else {
//                 this.classList.add('cart-active')
//                 sum = sum + +price
//             }

//             total.innerHTML = sum
//         })
//     }
// });

window.addEventListener('load', function (e) {
    let carts = document.querySelectorAll('.cart-item');
    var total = document.querySelector('.total b');
    let sum = 0

    for (let i = 0; i < carts.length - 1; i++) {
        carts[i].addEventListener('click', function () {
            var contains = this.classList.contains('cart-active')
            let price = this.getAttribute('data-price')

            if (contains) {
                this.classList.remove('cart-active')
                sum = sum - +price
            } else {
                this.classList.add('cart-active')
                sum = sum + +price
            }
            total.innerHTML = sum
        })
    }
});