import ValidatedInputField from "./validatedInputField";

export default class SignUpForm {
  private fields: Array<ValidatedInputField>;

  constructor(public submitButton: HTMLButtonElement, public formActionHREF: string) {
    this.fields = [];
    this.registerSubmitButton()
  }

  addField(field: ValidatedInputField) {
    this.fields.push(field);
    return this;
  }

  private registerSubmitButton(): void {
    this.submitButton.addEventListener('click', (event: MouseEvent): void => {
      if (!this.fields.every((field: ValidatedInputField) => field.isValid)) {
        this.fields.forEach((field: ValidatedInputField) => field.evaluateField());
        event.preventDefault();
      }
    });
  }
}