exports.buttonListener = function() {
    const dropdownButton = document.querySelector('.dropdown-button');

    dropdownButton.addEventListener('click', () => {
        toggleMenuDisplay();
    });
};

exports.itemsListener = function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            toggleMenuDisplay();
            // Whatever you want here!
        });
    });
};

exports.hideContent = function() {
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownContent.classList.add('hidden');
};

exports.toggleMenuDisplay = function() {
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownContent.classList.toggle('hidden');
};