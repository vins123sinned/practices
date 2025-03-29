(function buttonListener() {
    const dropdownButton = document.querySelector('.dropdown-button');

    dropdownButton.addEventListener('click', () => {
        toggleMenuDisplay();
    });
})();

(function itemsListener() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            toggleMenuDisplay();
            // Whatever you want here!
        });
    });
})();

(function hideButton() {
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownContent.classList.add('hidden');
})();

function toggleMenuDisplay() {
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownContent.classList.toggle('hidden');
}