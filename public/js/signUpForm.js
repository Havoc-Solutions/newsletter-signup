export default class SignUpForm {
    submitButton;
    formActionHREF;
    fields;
    constructor(submitButton, formActionHREF) {
        this.submitButton = submitButton;
        this.formActionHREF = formActionHREF;
        this.fields = [];
        this.registerSubmitButton();
    }
    addField(field) {
        this.fields.push(field);
        return this;
    }
    registerSubmitButton() {
        this.submitButton.addEventListener('click', (event) => {
            if (!this.fields.every((field) => field.isValid)) {
                this.fields.forEach((field) => field.evaluateField());
                event.preventDefault();
            }
        });
    }
}
