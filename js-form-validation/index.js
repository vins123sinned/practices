(function emailListener() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    initializeEmailValidation(emailInput);
    
    emailInput.addEventListener('input', () => {
        const emailValidity = isValidEmail(emailInput);
        setEmailClass(emailInput, emailValidity);
        updateError(emailValidity, emailInput, emailError);
    });
})();

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isValidEmail(emailInput) {
    const validity = emailInput.value.length >= 3 &&
        emailRegExp.test(emailInput.value);
    return validity;
}

function updateError(isValidInput, emailInput, emailError) {
    if (isValidInput) {
        emailError.textContent = '';
        emailError.removeAttribute('class');
        return;
    } else if (emailInput.value.length < 3) {
        emailError.textContent = 'Email length is too short! (3 characters minimum)';
    } else if (!emailRegExp.test(emailInput.value)) {
        emailError.textContent = 'Value is not an email!';
    }

    emailError.setAttribute('class', 'active');
}

function setEmailClass(emailInput, emailValidity) {
    emailInput.className = emailValidity ? 'valid' : 'invalid';
}

function initializeEmailValidation(emailInput) {
    const emailValidity = isValidEmail(emailInput);

    setEmailClass(emailInput, emailValidity);
}

/*
const handleSubmit = (event) => {
  event.preventDefault();

  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};
*/