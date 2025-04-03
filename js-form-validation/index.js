(function emailListener() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    initializeEmailValidation(emailInput, emailRegExp);
    
    emailInput.addEventListener('input', () => {
        const emailValidity = isValidEmail(emailInput, emailRegExp);
        setEmailClass(emailInput, emailValidity);
        updateEmailError(emailInput, emailError, emailRegExp, emailValidity);
    });
})();

(function postalListener() {
    const countryInput = document.getElementById('country');
    const postalInput = document.getElementById('postal-code');
    const postalError = document.getElementById('postal-error');

    const constraints = {
        us: [
            '^(US-)?\\d{5}$',
            'U.S. postal codes must have exactly 5 digits: e.g. US-94027 or 33109',
            '12345',
        ],
        cn: [
            '^(CN-)?\\d{6}$',
            'Chinese postal codes must have exactly 6 digits: e.g. CN-350316 or 361006',
            '123456',
        ],
        is: [
            '^(IS-)?\\d{3}$',
            'Icelandic postal codes must have exactly 3 digits: e.g. IS-101 or 220',
            '123',
        ],
        au: [
            '^(AU-)\\d{4}$',
            'Australian postal codes must have exactly 4 digits: e.g. AU-0872 or 2750',
            '1234',
        ],
        eg: [
            '^(EG-)\\d{7}$',
            'Egyptian postal codes must have exactly 7 digits: e.g. EG-3512201 or 4252360',
            '1234567',
        ],
    };

    initializePostalValidation(postalInput, constraints);

    countryInput.addEventListener('change', () => {
        const placeholder = constraints[countryInput.value][2];
        countryChanged(postalInput, postalError, placeholder, constraints);
    });

    postalInput.addEventListener('input', () => {
        const country = document.getElementById('country').value;
        const constraint = new RegExp(constraints[country][0], '');
        const postalValidity = isValidPostal(postalInput, constraint);
        setPostalClass(postalInput, postalValidity);
        updatePostalError(postalError, constraints);
    });
})();

(function passwordListener() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    // regExp by anubhava from stackOverflow (My regex isn't that good yet!)
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    initializePasswordValidation(passwordInput, passwordRegExp);
    
    passwordInput.addEventListener('input', () => {
        const passwordValidity = isValidPassword(passwordInput, passwordRegExp);
        setPasswordClass(passwordInput, passwordValidity);
        updatePasswordError(passwordInput, passwordError, passwordValidity);
        
        doubleCheckConfirm();
    });

    passwordInput.addEventListener('focusin', () => {
        passwordError.classList.remove('hidden');
    });

    passwordInput.addEventListener('focusout', () => {
        passwordError.classList.add('hidden');
    });
})();

(function confirmPasswordlistener() {
    const confirmInput = document.getElementById('confirm-password');
    const confirmError = document.getElementById('confirm-error');

    initializeConfirmValidation(confirmInput);

    confirmInput.addEventListener('input', () => {
        const confirmValidity = isValidConfirm(confirmInput);
        setConfirmClass(confirmInput, confirmValidity);
        updateConfirmError(confirmError, confirmValidity);
    });
})();

(function submitListener() {
    const submit = document.getElementById('submit');
    
    submit.addEventListener('click', handleSubmit);
})();

function isValidEmail(emailInput, emailRegExp) {
    const validity = emailInput.value.length >= 3 &&
        emailRegExp.test(emailInput.value);
    return validity;
}

function initializeEmailValidation(emailInput, emailRegExp) {
    const emailValidity = isValidEmail(emailInput, emailRegExp);

    setEmailClass(emailInput, emailValidity);
}

function setEmailClass(emailInput, emailValidity) {
    emailInput.className = emailValidity ? 'valid' : 'invalid';
}

function updateEmailError(emailInput, emailError, emailRegExp, isValidInput) {
    if (isValidInput) {
        emailError.textContent = '';
        emailError.removeAttribute('class');
        return;
    } else if (emailInput.value.length < 3) {
        emailError.textContent = 'Email length is too short! (3 characters minimum)';
    } else if (!emailRegExp.test(emailInput.value)) {
        emailError.textContent = 'Value is not an email!';
    }

    emailError.classList.add('error');
}

function isValidPostal(postalInput, postalRegExp) {
    const validity = postalRegExp.test(postalInput.value);
    return validity;
}

function initializePostalValidation(postalInput, constraints) {
    const country = document.getElementById('country').value;
    const constraint = new RegExp(constraints[country][0], '');

    const postalValidity = isValidPostal(postalInput, constraint);

    setPostalClass(postalInput, postalValidity);
    postalInput.placeholder = constraints[country][2];
}

function setPostalClass(postalInput, postalValidity) {
    postalInput.className = postalValidity ? 'valid' : 'invalid';
}

function countryChanged(postalInput, postalError, placeholder, constraints) {
    postalInput.placeholder = placeholder;

    if (postalInput.value.length !== 0) {
        updatePostalError(postalError, constraints);
    } else if (postalError.innerHTML) {
        postalError.textContent = '';
        postalError.removeAttribute('class');
    }
}

function updatePostalError(postalError, constraints) {
    const country = document.getElementById('country').value;
    const postalInput = document.getElementById('postal-code');
    const constraint = new RegExp(constraints[country][0], '');

    if (constraint.test(postalInput.value)) {
        postalError.textContent = '';
        postalError.removeAttribute('class');
    } else {
        postalError.textContent = constraints[country][1];
        postalError.classList.add('error');
    }
}

function isValidPassword(passwordInput, passwordRegExp) {
    const validity = passwordInput.value.length >= 6 &&
        passwordRegExp.test(passwordInput.value);
    return validity;
}

function initializePasswordValidation(passwordInput, passwordRegExp) {
    const passwordValidity = isValidPassword(passwordInput, passwordRegExp);

    setPasswordClass(passwordInput, passwordValidity);
}

function setPasswordClass(passwordInput, passwordValidity) {
    passwordInput.className = passwordValidity ? 'valid' : 'invalid';
}

function updatePasswordError(passwordInput, passwordError, isValidInput) {
    if (isValidInput) {
        //make any leftover close icon into checks
        const closeIcon = document.querySelector('.close');
        if (closeIcon) closeIcon.textContent = 'check';
        passwordError.removeAttribute('class');
    } else {
        passwordError.replaceChildren();
        
        const requirements = [
            [
                '(?=.*?[A-Z])',
                'At least one uppercase letter',
            ],
            [
                '(?=.*?[a-z])',
                'At least one lowercase letter',
            ],
            [
                '(?=.*?[0-9])',
                'At least one digit',
            ],
            [
                '(?=.*?[#?!@$%^&*-])',
                'At least one special character (#?!@$%^&*-)',
            ],
            [
                '^.{8,}$',
                'Minimum of 8 characters'
            ]
        ];

        requirements.forEach((requirement) => {
            const requirementContainer = document.createElement('div');
            const requirementIcon = document.createElement('span');
            const requirementPara = document.createElement('para');

            requirementIcon.classList.add('material-symbols-outlined');
            requirementPara.textContent = requirement[1];

            const constraint = new RegExp(requirement[0]);
            if (constraint.test(passwordInput.value)) {
                requirementIcon.textContent = 'check';
                requirementIcon.classList.add('check');
            } else {
                requirementIcon.textContent = 'close';
                requirementIcon.classList.add('close');
            }

            requirementContainer.appendChild(requirementIcon);
            requirementContainer.appendChild(requirementPara);
            passwordError.appendChild(requirementContainer);
        });

        passwordError.classList.add('error');
    }
}

function isValidConfirm(confirmInput) {
    const passwordValue = document.getElementById('password').value;
    const validity = confirmInput.value === passwordValue;
    
    return validity;
}

function initializeConfirmValidation(confirmInput) {
    const confirmValidity = isValidConfirm(confirmInput);

    setConfirmClass(confirmInput, confirmValidity);
}

function setConfirmClass(confirmInput, confirmValidity) {
    confirmInput.className = confirmValidity ? 'valid' : 'invalid';
}

function updateConfirmError(confirmError, isValidInput) {
    if (isValidInput) {
        confirmError.textContent = '';
        confirmError.removeAttribute('class');
    } else {
        confirmError.textContent = 'Passwords do not match!';
        confirmError.classList.add('error');
    }
}

function doubleCheckConfirm() {
    const confirmInput = document.getElementById('confirm-password');
    const confirmError = document.getElementById('confirm-error');

    const confirmValidity = isValidConfirm(confirmInput);
    setConfirmClass(confirmInput, confirmValidity);
    updateConfirmError(confirmError, confirmValidity);
}

function handleSubmit(event) {
    event.preventDefault();
    
    // possibly redundant, but serves as a good reference for future forms!
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
    const postalInput = document.getElementById('postal-code');
    const postalError = document.getElementById('postal-error');
    const country = document.getElementById('country').value;
    const constraint = new RegExp(constraints[country][0], '');

    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const confirmInput = document.getElementById('confirm-password');
    const confirmError = document.getElementById('confirm-error');

    const emailValidity = isValidEmail(emailInput, emailRegExp);
    setEmailClass(emailInput, emailValidity);
    updateEmailError(emailInput, emailError, emailRegExp, emailValidity);

    const postalValidity = isValidPostal(postalInput, constraint);
    setPostalClass(postalInput, postalValidity);
    updatePostalError(postalError, constraints);

    const passwordValidity = isValidPassword(passwordInput, passwordRegExp);
    setPasswordClass(passwordInput, passwordValidity);
    updatePasswordError(passwordInput, passwordError, passwordValidity);

    if (passwordError.classList.contains('hidden')) passwordError.classList.remove('hidden');

    const confirmValidity = isValidConfirm(confirmInput);
    setConfirmClass(confirmInput, confirmValidity);
    updateConfirmError(confirmError, confirmValidity);

    if (emailValidity && postalValidity &&
        passwordValidity && confirmValidity) {
            document.body.replaceChildren();

            const congratulations = document.createElement('h1');
            congratulations.textContent = 'You did it!';
            document.body.appendChild(congratulations);
    }
}
