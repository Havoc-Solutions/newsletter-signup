import ValidatedInputField from './validatedInputField.js';

export default class ValidatedEmailField extends ValidatedInputField {
  validate(): RegExpMatchArray {
    return this.inputField.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  }

  evaluateField(): void {
    return this.validate() ? this.unsetErrorState() : this.setErrorState();
  }
}