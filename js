let index = 0; 
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length; 


function moveSlide(step) {
    index += step; 

    
    if (index < 0) {
        index = totalImages - 1;
    }

    /
    if (index >= totalImages) {
        index = 0;
    }

    document.querySelector('.carousel-images').style.transform = `translateX(-${index * 100}%)`;
}
