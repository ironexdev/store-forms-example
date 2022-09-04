<template>
  <form @submit.prevent="submitForm">
    <input :name="form.email.name" v-model="form.email.value" :placeholder="form.email.title">
    <i>{{ form.email.description }}</i>
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
import {storeToRefs} from "pinia";

const form = useExampleFormStore()
const { errors, submitted, valid } = storeToRefs(form)

/* Functions *****************************************************************/
/*****************************************************************************/
async function submitForm () {
  errors.value = useValidateForm(form.fields)
  valid.value = !Object.keys(errors.value).length

  await form.submit()
}
</script>
