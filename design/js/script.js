// Activating strict mode
'use strict';

////////////////////////////
/////// SELECTING ELEMENTS

const inputFirstname = document.querySelector('#firstname');
const inputLastname = document.querySelector('#lastname');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const submitBtn = document.querySelector('.btn');

const iconsError = document.querySelectorAll('.icon--error');
const messagesError = document.querySelectorAll('.message--error');
const form = document.querySelector('form');

////////////////////////////
/////// IMPLEMENTING FUNCTIONALITY

function validateInput(
  valInput,
  closestContainerClass,
  inputFieldName,
  regex = ''
) {
  if ((regex && !regex.test(valInput)) || !valInput) {
    inputFieldName.style.borderColor = 'hsl(0, 100%, 74%)';
    if (regex) inputFieldName.style.color = 'hsl(0, 100%, 74%)';
    for (let icon of iconsError) {
      if (icon.closest(closestContainerClass)) {
        icon.classList.remove('hidden');
      }
    }

    for (let message of messagesError) {
      if (message.closest(closestContainerClass)) {
        message.classList.remove('hidden');
      }
    }
  } else {
    inputFieldName.style.borderColor = 'hsl(246, 25%, 77%)';
    if (regex) inputFieldName.style.color = 'hsl(246, 25%, 77%)';

    for (let icon of iconsError) {
      if (icon.closest(closestContainerClass)) {
        icon.classList.add('hidden');
      }
    }

    for (let message of messagesError) {
      if (message.closest(closestContainerClass)) {
        message.classList.add('hidden');
      }
    }
  }
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const valFirstname = inputFirstname.value;
  const valLastname = inputLastname.value;
  const valEmail = inputEmail.value;
  const valPassword = inputPassword.value;

  validateInput(valFirstname, '.container__input--firstname', inputFirstname);
  validateInput(valLastname, '.container__input--lastname', inputLastname);
  validateInput(valEmail, '.container__input--email', inputEmail, emailRegex);
  validateInput(valPassword, '.container__input--password', inputPassword);
});
