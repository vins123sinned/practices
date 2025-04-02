(function emailListener() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    initializeEmailValidation(emailInput);
    
    emailInput.addEventListener('input', () => {
        const emailValidity = isValidEmail(emailInput);
        setEmailClass(emailInput, emailValidity);
        updateEmailError(emailValidity, emailInput, emailError);
    });
})();

(function postalListener() {
    const countryInput = document.getElementById('country');
    const postalInput = document.getElementById('postal-code');
    const postalError = document.getElementById('postal-error');

    countryInput.addEventListener('change', () => {
        countryChanged(postalInput, postalError);
    });

    postalInput.addEventListener('input', () => {
        checkPostalCode(postalError);
    });
})();

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isValidEmail(emailInput) {
    const validity = emailInput.value.length >= 3 &&
        emailRegExp.test(emailInput.value);
    return validity;
}

// might add this to all inputs or remove entirely
function initializeEmailValidation(emailInput) {
    const emailValidity = isValidEmail(emailInput);

    setEmailClass(emailInput, emailValidity);
}

function setEmailClass(emailInput, emailValidity) {
    emailInput.className = emailValidity ? 'valid' : 'invalid';
}

function updateEmailError(isValidInput, emailInput, emailError) {
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

function countryChanged(postalInput, postalError) {
    if (postalInput.value.length !== 0) {
        checkPostalCode(postalError)
    } else if (postalError.innerHTML) {
        postalError.textContent = '';
        postalError.removeAttribute('class');
    }
}

function checkPostalCode(postalError) {
    const constraints = {
        us: [
            '^(US-)?\\d{5}$',
            'U.S. postal codes must have exactly 5 digits: e.g. US-94027 or 33109',
        ],
        cn: [
            '^(CN-)?\\d{6}$',
            'Chinese postal codes must have exactly 6 digits: e.g. CN-350316 or 361006',
        ],
        is: [
            '^(IS-)?\\d{3}$',
            'Icelandic postal codes must have exactly 3 digits: e.g. IS-101 or 220',
        ],
        au: [
            '^(AU-)\\d{4}$',
            'Australian postal codes must have exactly 4 digits: e.g. AU-0872 or 2750',
        ],
        eg: [
            '^(EG-)\\d{7}$',
            'Egyptian postal codes must have exactly 7 digits: e.g. EG-3512201 or 4252360',
        ],
    };

    const country = document.getElementById('country').value;
    const postalCodeInput = document.getElementById('postal-code');
    const constraint = new RegExp(constraints[country][0], '');

    if (constraint.test(postalCodeInput.value)) {
        postalError.textContent = '';
        postalError.removeAttribute('class');
    } else {
        postalError.textContent = constraints[country][1];
        postalError.setAttribute('class', 'active');
    }
}

/*
const handleSubmit = (event) => {
  event.preventDefault();

  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateEmailError(emailInput);
};
*/

// is it better to do { arrays } or [ objects ]?
// and what does \\ mean in regex? I'll ask ChatGPT later