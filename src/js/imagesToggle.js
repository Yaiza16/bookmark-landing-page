const options = document.querySelectorAll('.features-options__item');
const images = document.querySelectorAll('.features-img');

const containerElements = {
    title: document.getElementById('title-container'),
    description: document.getElementById('description-container')
}


const elements = [
    {
        id: 1,
        title: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        id: 2,
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        id: 3,
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    },
]

let optionsImages = {
    previousImage: 0,
    nextImage: null,
}

let animationEnd = true;

export default function imagesToggle(){

    options.forEach(option =>{

        option.addEventListener('click', () =>{
            console.log('Beging of beging' + optionsImages.previousImage)
            if (!option.classList.contains('features-options__item--active') && animationEnd){
                removeClass(options, 'features-options__item--active')
                option.classList.add('features-options__item--active')

                optionsImages.nextImage = parseInt(option.dataset.index)

                animationEnd = false
                images[optionsImages.previousImage].classList.add('features-img--moveOut');
                console.log('Before animationend' + optionsImages.previousImage)

                images[optionsImages.previousImage].addEventListener('animationend', () =>{
                    images[optionsImages.previousImage].classList.remove('features-img--active', 'features-img--moveOut')
                    console.log('After animationend' + optionsImages.previousImage)
                    console.log(images[optionsImages.previousImage])
                    images[optionsImages.nextImage].classList.add('features-img--active');


                    animationEnd = true  
                    optionsImages.previousImage = optionsImages.nextImage;    //VERY CAREFUL !!!!. Image's animation lasts more than that of title and description. In the opposite situation, this line should be happen when animationend  of title               
                })  

                //Set up title and description
                containerElements.title.classList.add('features-layout-inf__title--zoomOut')
                containerElements.description.classList.add('features-layout-inf__desc--fadeOut')

                //Title animation and description animation last the same so both of them finish at the same time.
                containerElements.title.addEventListener('animationend', () =>{
                    containerElements.title.classList.remove('features-layout-inf__title--zoomOut')
                    containerElements.description.classList.remove('features-layout-inf__desc--fadeOut')
                    containerElements.title.classList.add('features-layout-inf__title--zoomIn')
                    containerElements.description.classList.add('features-layout-inf__desc--fadeIn')

                    //Set up new title and description text
                    containerElements.title.innerHTML = elements[optionsImages.nextImage].title;
                        containerElements.description.innerHTML = elements[optionsImages.nextImage].description;
                            containerElements.title.classList.remove('features-layout-inf__title--zoomIn')
                            containerElements.description.classList.remove('features-layout-inf__desc--fadeIn');
                })
            }
        })
    })
}

function removeClass(array, className){
    array.forEach(ar =>{
        if (ar.classList.contains(className)){
            ar.classList.remove(className)
        }
    })
}