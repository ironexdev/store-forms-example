import { defineStore } from "pinia"
import { ref } from "@vue/reactivity"
import {FormInterface} from "store-forms/Form/FormInterface";
import FieldInterface from "store-forms/Form/Field/FieldInterface";
import MyField from "~/MyField";
import EmailRule from "~/store/Rules/EmailRule";

export interface ExampleFormStoreInterface extends FormInterface {
  email: FieldInterface
}

export const useExampleFormStore = defineStore("ExampleForm", (): ExampleFormStoreInterface => {
  const submitted = ref(false)
  const errors = ref({})
  const valid = ref(false)

  const email: FieldInterface = new MyField(
    "email",
    "E-mail",
    "",
    [
      new EmailRule()
    ],
    true,
    [],
    "Method of exchanging messages between people using electronic devices"
  )

  const fields = [email]

  function submit(): Promise<unknown> {
      submitted.value = false

      const response = new Promise(() => "Hello")

      submitted.value = true

      return response
  }

  return { fields, email, submit, errors, submitted, valid }
})
