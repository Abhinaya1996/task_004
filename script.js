document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const size = (container.clientWidth / 5);
    let counter = 0;
    
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    disablePrevButton();

    const slides = document.querySelectorAll('.container-box');

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            counter = index; 
            updateActiveSlide(); 
            if (counter === 0) {
                disablePrevButton();
                enablenextButton();
            } else if (counter === slides.length - 1) {
                disablenextButton();
                enablePrevButton();
            } else {
                enablePrevButton();
                enablenextButton();
            }
        });
    });

    function disablePrevButton() {
        prevButton.removeEventListener('click', prevElement); 
        prevButton.style.opacity = '0.3'; 
        prevButton.style.pointerEvents = 'none'; 
    }

    function enablePrevButton() {
        prevButton.addEventListener('click', prevElement); 
        prevButton.style.opacity = ''; 
        prevButton.style.pointerEvents = ''; 
    }


    function disablenextButton() {
        nextButton.removeEventListener('click', nextElement); 
        nextButton.style.opacity = '0.3'; 
        nextButton.style.pointerEvents = 'none'; 
    }

    function enablenextButton() {
        nextButton.addEventListener('click', nextElement); 
        nextButton.style.opacity = ''; 
        nextButton.style.pointerEvents = ''; 
    }
    
    function updateActiveSlide() {
        const slides = document.querySelectorAll('.container-box');
        slides.forEach((slide, index) => {
            if (index === counter) {
                slide.classList.add('active');
                slide.style.backgroundImage = "url('assets/wheel-bg.jpg')";
            } else {
                slide.classList.remove('active');
                slide.style.backgroundImage = '';
            }
        });
    }

    // updateActiveSlide();

    function nextElement() {
        // console.log(counter);
        if (counter < 4) {
            container.style.transition = '.8s ease-in-out';
            container.style.transform = 'translateX('+ (-size  * counter) +'px)';
            updateActiveSlide();
            counter++;
        }
        if(counter > 0){
            enablePrevButton();
        }
        if(counter == 4){
            disablenextButton();
        }
        if(counter == 4){
            counter--;
        }
    }

    function prevElement() {
        // console.log(counter);
        if (counter > 0) {
            counter--;
            container.style.transition = '.8s ease-in-out';
            container.style.transform = 'translateX('+ (-size  * counter) +'px)';
            updateActiveSlide();
        }
        if(counter < 4){
            enablenextButton();
        }
        if(counter == 0){
            disablePrevButton();
        }
        if(counter == 0){
            counter++;
        }
    }

    next.addEventListener('click', nextElement, false);
    prev.addEventListener('click', prevElement, false);
});
