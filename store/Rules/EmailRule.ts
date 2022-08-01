import RuleInterface from "store-forms/Form/Rules/RuleInterface"
export default class EmailRule implements RuleInterface {
  public test (value): boolean {
    return value.includes("@")
  }

  public message (): string {
    return "Invalid e-mail"
  }
}
