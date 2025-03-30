(function createNavigationDots() {
    const navigationContainer = document.querySelector('.navigation-container');
    const images = document.querySelectorAll('img');
    
    let position = 0;
    images.forEach((image) => {
        const navigationDot = document.createElement('div');
        navigationDot.dataset.position = `${position}`;
        navigationDot.classList.add('navigation-dot');

        navigationContainer.appendChild(navigationDot);
        position += 400;
    });

    updateNavigationDot(0);
})();

(function leftArrowListener() {
    const arrowButton = document.querySelector('.arrow-left');

    arrowButton.addEventListener('click', () => {
        moveSlider('left');
    });
})();

(function rightArrowListener() {
    const arrowButton = document.querySelector('.arrow-right');

    arrowButton.addEventListener('click', () => {
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

    imageSlider.style.left = `-${newPosition}px`;
    updateNavigationDot(newPosition);
}

function updateNavigationDot(position) {
    const oldNavigationDot = document.querySelector('.current-dot');
    const navigationDot = document.querySelector(`[data-position='${position}']`);

    if (oldNavigationDot) oldNavigationDot.classList.remove('current-dot');
    navigationDot.classList.add('current-dot');
}

function startTimeout() {
    setTimeout(() => {
        console.log('a');
    }, 5000);
};

startTimeout();