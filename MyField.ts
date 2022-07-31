import Field from "store-forms/Form/Field/Field";

function translate(message: string){
  return message + " Field"
}

export default class MyField extends Field { // Example for translations
  public requiredErrorMessage = translate("Required")
}
