       /******************* Selectors *******************/
const menuCheckbox = document.querySelector("input#menu-checkbox");
const menuIcons = document.querySelector("label.menu-icons");
const form = document.getElementById("contact-form");

        /******************* Event Listeners *******************/

menuCheckbox.addEventListener('change', toggleIcon);
// menuIcons.addEventListener('click', toggleIcon);

        /******************* Functions *******************/

function toggleIcon() {
        const burgerIcon = document.querySelector('#burger-icon');
        const closeIcon = document.querySelector('#close-icon');

        console.log('worked')

        if (menuCheckbox.checked) {
                burgerIcon.classList.add('element-none');
                closeIcon.classList.remove('element-none');
                // console.log('1-worked')
        }
        else {
                burgerIcon.classList.remove('element-none');
                closeIcon.classList.add('element-none');
                // console.log('2-worked')
        }
}



// Page transition SWUP library
// const swup = new Swup();