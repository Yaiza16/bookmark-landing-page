const nav = document.getElementById('nav');
const header = document.getElementById('header');

export default function navIntersection(){

    const sectionOptions = {
        rootMargin: "-50px 0px 0px 0px"
    };

    const sectionObserver = new IntersectionObserver(function(entries, sectionOneObserver){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                nav.classList.add('nav--scrolled')
            }else{
                nav.classList.remove('nav--scrolled')
            }
        })
    }, sectionOptions);

    sectionObserver.observe(header)
}