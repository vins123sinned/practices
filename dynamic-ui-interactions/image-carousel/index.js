(function leftArrowListener() {
    const arrowButton = document.querySelector('.arrow-left');

    arrowButton.addEventListener('click', () => {
        moveLeft();
    });
})();

(function rightArrowListener() {
    const arrowButton = document.querySelector('.arrow-right');

    arrowButton.addEventListener('click', () => {
        moveRight();
    });
})();

function moveRight() {
    const imageSlider = document.querySelector('.image-slider');
    const sliderPosition = window.getComputedStyle(imageSlider).getPropertyValue('left');

    if (sliderPosition === '-2000px') {
        imageSlider.style.left = '0';
    } else {
        const newPosition = +sliderPosition.match(/\d+/)[0] + 400;
        imageSlider.style.left = `-${newPosition}px`;
    }
}

function moveLeft() {
    const imageSlider = document.querySelector('.image-slider');
    const sliderPosition = window.getComputedStyle(imageSlider).getPropertyValue('left');

    if (sliderPosition === '0px') {
        imageSlider.style.left = '-2000px';
    } else {
        const newPosition = +sliderPosition.match(/\d+/)[0] - 400;
        imageSlider.style.left = `-${newPosition}px`;
    }
}