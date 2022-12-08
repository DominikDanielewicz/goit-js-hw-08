'use strict';
import throttle from 'lodash/throttle';

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateForm();

form.addEventListener(
  'input',
  throttle(() => {
    const settings = {
      email: email.value,
      message: message.value,
    };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();

  try {
    const formValues = localStorage.getItem(LOCALSTORAGE_KEY);
    if (formValues === null) {
      return undefined;
    } else {
      const parsedFormValues = JSON.parse(formValues);
      console.log(
        `Object: ${localStorage.getItem(LOCALSTORAGE_KEY)}, Email: ${
          parsedFormValues.email
        }, Message: ${parsedFormValues.message}`
      );
      localStorage.clear();
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
});

function updateForm() {
  try {
    const formValues = localStorage.getItem(LOCALSTORAGE_KEY);
    if (formValues === null) {
      return undefined;
    } else {
      const parsedFormValues = JSON.parse(formValues);
      email.textContent = parsedFormValues.email;
      message.textContent = parsedFormValues.message;
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
