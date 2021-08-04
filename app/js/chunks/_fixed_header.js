// fixed menu
const header = document.querySelector('.header');

if (header) {
    window.onscroll = function () {
        fixedHeader();
    };
}

function fixedHeader() {
    if (window.pageYOffset >= 50) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}
