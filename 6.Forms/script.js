const firstNameInput = document.querySelector('#firstname');
const displayNameSpan = document.querySelector('#display-firstname');


// firstNameInput.addEventListener('keyup', () => {

// const textString = firstNameInput.value;
// displayNameSpan.textContent = textString;

// });


firstNameInput.addEventListener('keyup', () => {
  if (firstNameInput.value !== displayNameSpan.textContent) {
    displayNameSpan.textContent = firstNameInput.value;
  }
});

const ageInput = document.querySelector('#age');
const aHardTruthSection = document.querySelector('#a-hard-truth');

ageInput.addEventListener('keyup', () => {
  const age = parseInt(ageInput.value);

  if (age < 18) {
    aHardTruthSection.style.visibility = 'hidden';
  } else {
    aHardTruthSection.style.visibility = 'visible';
  }
});
const passwordInput1 = document.querySelector('#pwd');
const passwordInput2 = document.querySelector('#pwd-confirm');

passwordInput1.addEventListener('keyup', () => {
  checkPasswordStrength(passwordInput1);
});

passwordInput2.addEventListener('keyup', () => {
  checkPasswordStrength(passwordInput2);
});

const checkPasswordStrength = (passwordInput) => {
  const password = passwordInput.value;

  // Check if the password is too short.
  if (password.length < 6) {
    passwordInput.style.backgroundColor = 'red';
  } else {
    passwordInput.style.backgroundColor = 'white';
  }

  // Check if the passwords match.
  if (password !== passwordInput2.value) {
    passwordInput.style.backgroundColor = 'red';
    passwordInput2.style.backgroundColor = 'red';
  } else {
    passwordInput.style.backgroundColor = 'white';
    passwordInput2.style.backgroundColor = 'white';
  }
};

const darkModeSelect = document.querySelector('#toggle-darkmode');

darkModeSelect.addEventListener('change', () => {
  const darkMode = darkModeSelect.value === 'dark';

  if (darkMode) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});
