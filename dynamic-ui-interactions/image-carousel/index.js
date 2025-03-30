(function createNavigationDots() {
    const navigationContainer = document.querySelector('.navigation-container');
    const images = document.querySelectorAll('img');
    
    let position = 0;
    images.forEach((image) => {
        const navigationDot = document.createElement('div');
        navigationDot.dataset.position = `${position}`;
        navigationDot.classList.add('navigation-dot');

        navigationDot.addEventListener('click', () => {
            navigationDotClicked(navigationDot.dataset.position);
        });

        navigationContainer.appendChild(navigationDot);
        position += 400;
    });

    updateNavigationDot(0);
})();

(function arrowListeners() {
    const leftArrowButton = document.querySelector('.arrow-left');
    const rightArrowButton = document.querySelector('.arrow-right');

    leftArrowButton.addEventListener('click', () => {
        moveSlider('left');
    });
    
    rightArrowButton.addEventListener('click', () => {
        moveSlider('right');
    });
})();

function moveSlider(direction) {
    const imageSlider = document.querySelector('.image-slider');
    const sliderPosition = window.getComputedStyle(imageSlider).getPropertyValue('left');
    let newPosition;

    if (direction === 'left') {
        if (sliderPosition === '0px') {
            newPosition = 2000;
        } else {
            newPosition = +sliderPosition.match(/\d+/)[0] - 400;
        }
    } else {
        if (sliderPosition === '-2000px') {
            newPosition = 0;
        } else {
            newPosition = +sliderPosition.match(/\d+/)[0] + 400;
        }
    }

    changeSliderPosition(newPosition);
    updateNavigationDot(newPosition);
}

function changeSliderPosition(position) {
    const imageSlider = document.querySelector('.image-slider');
    imageSlider.style.left = `-${position}px`;
}

function updateNavigationDot(position) {
    const oldNavigationDot = document.querySelector('.current-dot');
    const navigationDot = document.querySelector(`[data-position='${position}']`);

    if (oldNavigationDot) oldNavigationDot.classList.remove('current-dot');
    navigationDot.classList.add('current-dot');
}

function navigationDotClicked(position) {
    changeSliderPosition(position);
    updateNavigationDot(position);
}

function startTimeout() {
    setTimeout(() => {
        console.log('a');
    }, 5000);
};

startTimeout();