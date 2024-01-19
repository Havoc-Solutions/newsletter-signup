export default abstract class ValidatedInputField {
  public isValid: boolean;
  private errorElement: HTMLSpanElement;

  constructor(
    public inputField: HTMLInputElement,
    public inputFieldErrorClass: string,
    public errorMessageText: string,
    public errorMessageClass: string,
  ) {
    this.isValid = false;
    this.buildErrorElement();
    this.registerEvents();
  }

  private buildErrorElement(): void {
    this.errorElement = document.createElement('span');
    this.errorElement.classList.add(this.errorMessageClass);
    this.errorElement.innerText = this.errorMessageText;
  }

  protected setErrorState(): void {
    this.isValid = false;
    this.inputField.classList.add(this.inputFieldErrorClass);
    this.inputField.insertAdjacentElement('beforebegin', this.errorElement);
  }

  protected unsetErrorState(): void {
    this.isValid = true;
    this.inputField.classList.remove('state__error');
    this.errorElement.remove();
  }

  abstract evaluateField(): void

  private evaluateKeyPress(event: KeyboardEvent, keyCode: number): void {
    if (event.code === keyCode.toString()) {
      this.evaluateField();
    }
  }

  private registerEvents(): void {
    this.inputField.addEventListener('focusout', () => this.evaluateField());
    // Handle ENTER key
    this.inputField.addEventListener('keyup', (event: KeyboardEvent) => this.evaluateKeyPress(event, 13));
    // Handle TAB key
    this.inputField.addEventListener('keydown', (event: KeyboardEvent) => this.evaluateKeyPress(event, 9));
  }
}