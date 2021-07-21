const app = document.getElementById('app');
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

export default function menuToggle(){
    hamburger.addEventListener('click', () =>{
        if (!nav.classList.contains('nav--opened')){
            nav.classList.add('nav--opened');
            app.classList.add('app--disabledScroll')
        }else{
            nav.classList.remove('nav--opened');
            app.classList.remove('app--disabledScroll')
        }
    })
}