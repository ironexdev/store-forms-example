<template>
  <form @submit.prevent="submitForm">
    <input :name="form.email.name" v-model="form.email.value" :placeholder="form.email.title">
    <input type="submit" value="Submit">
    {{ errors }}
    <br>
    Is form valid - {{ form.valid }}
    <br>
    Is form submitted - {{ form.submitted }}
  </form>
</template>

<script setup lang="ts">
/* Definition ****************************************************************/
/*****************************************************************************/
import { useExampleFormStore } from "~/store/ExampleForm";
import { useValidateForm } from "store-forms/composables/useValidateForm";

const form = useExampleFormStore()
const errors = ref({})

/* Functions *****************************************************************/
/*****************************************************************************/
async function submitForm () {
  errors.value = useValidateForm(form.fields, form.valid)

  form.valid = !Object.keys(errors.value).length

  await form.submit()
}
</script>
