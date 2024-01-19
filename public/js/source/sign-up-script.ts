import ValidatedEmailField from "./validatedEmailField.js";
import SignUpForm from "./signUpForm.js";

const email = new ValidatedEmailField(
  document.querySelector('.email-form__input'),
  'state__error',
  'Valid email required',
  'error-message');

new SignUpForm(
  document.querySelector('.email-form__button'),
  'success.html'
)
  .addField(email);
