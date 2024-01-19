export default class ValidatedInputField {
    inputField;
    inputFieldErrorClass;
    errorMessageText;
    errorMessageClass;
    isValid;
    errorElement;
    constructor(inputField, inputFieldErrorClass, errorMessageText, errorMessageClass) {
        this.inputField = inputField;
        this.inputFieldErrorClass = inputFieldErrorClass;
        this.errorMessageText = errorMessageText;
        this.errorMessageClass = errorMessageClass;
        this.isValid = false;
        this.buildErrorElement();
        this.registerEvents();
    }
    buildErrorElement() {
        this.errorElement = document.createElement('span');
        this.errorElement.classList.add(this.errorMessageClass);
        this.errorElement.innerText = this.errorMessageText;
    }
    setErrorState() {
        this.isValid = false;
        this.inputField.classList.add(this.inputFieldErrorClass);
        this.inputField.insertAdjacentElement('beforebegin', this.errorElement);
    }
    unsetErrorState() {
        this.isValid = true;
        this.inputField.classList.remove('state__error');
        this.errorElement.remove();
    }
    evaluateKeyPress(event, keyCode) {
        if (event.code === keyCode.toString()) {
            this.evaluateField();
        }
    }
    registerEvents() {
        this.inputField.addEventListener('focusout', () => this.evaluateField());
        this.inputField.addEventListener('keyup', (event) => this.evaluateKeyPress(event, 13));
        this.inputField.addEventListener('keydown', (event) => this.evaluateKeyPress(event, 9));
    }
}
