// window.addEventListener('load', function (e) {
//     let btn = document.querySelector('.btn');
//     let inp = document.querySelector('.pass');

//     btn.addEventListener('click', function () {
//         let contains = this.classList.contains('btn-primary')

//         if (contains) {
//             this.classList.remove('btn-primary')
//             this.classList.add('btn-success')
//         } else {
//             this.classList.add('btn-primary')
//             this.classList.remove('btn-success')
//         }

//         var attr = inp.getAttribute('type')
//         if (attr === 'password') {
//             inp.setAttribute('type', 'text')
//             this.innerHTML='Скрыть пароль'
//         }else{
//             inp.setAttribute('type', 'password')
//             this.innerHTML='Показать пароль'
//         }
//     })
// });

// Parctice makes perfect

window.addEventListener('load', function (e) {
    let btn = document.querySelector('.btn');
    let inp = document.querySelector('.pass');

    btn.addEventListener('click', showPassword)

    function showPassword() {
        let contains = this.classList.contains('btn-primary')

        if (contains) {
            this.classList.remove('btn-primary')
            this.classList.add('btn-success')
        } else {
            this.classList.add('btn-primary')
            this.classList.remove('btn-success')
        }

        let attr = inp.getAttribute('type')

        if (attr === 'password') {
            inp.setAttribute('type', 'text')
            this.innerHTML = 'Скрыть пароль'
        } else {
            inp.setAttribute('type', 'password')
            this.innerHTML = 'Показать пароль'
        }
    }
});