const arrowIcon = document.querySelectorAll('.icon-arrow');
const answers = document.querySelectorAll('.faq-question-answer');


export default function dropDownFaq(){
    arrowIcon.forEach(arrow =>{
        arrow.addEventListener('click', () =>{
            arrow.classList.toggle('icon-arrow--active')

            let cardContainer = arrow.closest('.faq-question');
            let answer = cardContainer.querySelector('.faq-question-answer')

            if (!answer.classList.contains('faq-question-answer--active')){
                answer.classList.add('faq-question-answer--active')
            }else{
                answer.classList.remove('faq-question-answer--active')
            }

        })
    })
}