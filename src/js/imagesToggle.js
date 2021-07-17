const options = document.querySelectorAll('.features-options__item');
const images = document.querySelectorAll('.features-img');

const elementsContainer = {
    // image: document.getElementById('image-container'),
    title: document.getElementById('title-container'),
    description: document.getElementById('description-container')
}

let animationRun = false;
const elements = [
    {
        id: 1,
        // image: './assets/images/illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        id: 2,
        // image: './assets/images/illustration-features-tab-2.svg',
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        id: 3,
        // image: './assets/images/illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    },
]


export default function imagesToggle(){
    options.forEach(option =>{
        option.addEventListener('click', () =>{
            if (!option.classList.contains('features-options__item--active') && !animationRun){
                //Update selected option
                removeClassName(options, 'features-options__item--active');
                option.classList.add('features-options__item--active')

                //Set up new image
                // Look for the active image and add new class with animation
                images.forEach(image =>{
                    if (image.classList.contains('features-img--active')){
                        image.classList.add('features-img--moveOut')
                        animationRun = true;

                        //Once animation ends, remove both classes and set up new image
                         image.addEventListener('animationend', () =>{
                             animationRun = false
                             image.classList.remove('features-img--active', 'features-img--moveOut')
                             setUpImage(option) 
                        })
                    }
                })

                //Set up new title and description
                elements.forEach(el =>{
                    if (el.id == option.dataset.index){
                        // elementsContainer.image.src = el.image;
                        elementsContainer.title.classList.add('features-layout-inf__title--zoomOut')
                        elementsContainer.description.classList.add('features-layout-inf__desc--fadeOut')

                        //Title animation and description animation last the same so both of them finish at the same time.
                        elementsContainer.title.addEventListener('animationend', () =>{
                            elementsContainer.title.classList.remove('features-layout-inf__title--zoomOut')
                            elementsContainer.description.classList.remove('features-layout-inf__desc--fadeOut')
                            elementsContainer.title.classList.add('features-layout-inf__title--zoomIn')
                            elementsContainer.description.classList.add('features-layout-inf__desc--fadeIn')

                            elementsContainer.title.innerHTML = el.title;
                            elementsContainer.description.innerHTML = el.description;
                            elementsContainer.title.addEventListener('animationend', () =>{
                                elementsContainer.title.classList.remove('features-layout-inf__title--zoomIn')
                                elementsContainer.description.classList.remove('features-layout-inf__desc--fadeIn')

                            })
                        }) 
                    }
                })
            }
        })
    })
}

const removeClassName = (items, className) =>{
    items.forEach(item =>{
        if (item.classList.contains(className)){
            item.classList.remove(className)
        }
    })
}

const setUpImage = item =>{
    images.forEach(image =>{
        if (image.dataset.index == item.dataset.index){
            console.log(image.dataset.index)
            console.log(item.dataset.index)

            image.classList.add('features-img--active')
        }
    })
}