(function createNavigationDots() {
    const navigationContainer = document.querySelector('.navigation-container');
    const images = document.querySelectorAll('img');
    const shoutouts = document.querySelectorAll('.image-shoutout');
    
    let position = 0;
    images.forEach(() => {
        const navigationDot = document.createElement('div');
        navigationDot.dataset.position = `${position}`;
        navigationDot.classList.add('navigation-dot');

        navigationDot.addEventListener('click', () => {
            navigationDotClicked(navigationDot.dataset.position);
        });

        navigationContainer.appendChild(navigationDot);
        position += 400;
    });

    position = 0;
    shoutouts.forEach((shoutout) => {
        shoutout.dataset.shoutoutPosition = position;
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
    // Update navigation dot first so startTimeout has the new position!
    clearTimeout(timeout);
    startTimeout();
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

    updateShoutout(position);
}

function navigationDotClicked(position) {
    changeSliderPosition(position);
    updateNavigationDot(position);
    clearTimeout(timeout);
    startTimeout();
}

function updateShoutout(position) {
    const shoutoutContainer = document.querySelector('.shoutout-container');
    const shoutout = document.querySelector(`[data-shoutout-position='${position}']`).cloneNode(true);
    
    shoutoutContainer.replaceChildren();
    shoutoutContainer.appendChild(shoutout);
}

function startTimeout() {
    const currentPosition = +document.querySelector('.current-dot').dataset.position;
    let newPosition;

    if (currentPosition === 2000) {
        newPosition = 0;
    } else {
        newPosition = currentPosition + 400;
    }

    // Delete any preexisting timeout before creating a new one
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        changeSliderPosition(newPosition);
        updateNavigationDot(newPosition);
        // continuously advances the slide until arrow or dot clicked
        startTimeout();
    }, 5000);
};

// Global variables are frowned upon, but for the scope of this
// practice it is the best way to set and clear timeouts!
let timeout;

startTimeout();