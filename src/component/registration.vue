<template>
  <div class="row" style="width: 400px" v-if="!StepTwobool">
    <q-input
      ref="nameRef"
      v-model="name"
      label="Name"
      hint="Name and surname"
      lazy-rules
      :rules="nameRules"
      maxlength="50"
      counter
      outlined
      class="my-input col-9 col-md-12 q-mb-md"
    ></q-input>

    <q-input
      ref="ageRef"
      outlined
      v-model="phone"
      :label="bool ? 'telephone' : 'Email'"
      lazy-rules
      :rules="ageRules"
      class="col-9 col-md-12"
    ></q-input>
    <div
      class="q-mb-md cursor-pointer text-primary underline"
      @click="bool = !bool"
    >
      {{ bool ? "Use email instead" : "Use phone instead" }}
    </div>
    <div class="col-9 col-md-12">
      <span class="text-weight-bold"> Date of birth </span> <br />
      will not be shown publicly. Confirm your own age, even if this account is
      for a business, a pet, or something else.
    </div>
    <q-input
      v-model="date"
      filled
      type="date"
      hint="Native date"
      class="col-9 col-md-12"
    ></q-input>
    <q-btn
      unelevated
      rounded
      :disable="!bool2"
      color="black"
      label="next"
      class="col-9 col-md-12 q-mt-md"
      @click="StepTwobool = !StepTwobool"
    ></q-btn>
    <q-btn
      @click="$emit('chengeSignUp')"
      outline
      rounded
      color="black"
      class="btn4 text-weight-bolder text-blue-4 col-9 col-md-12 q-mt-md q-mb-lg"
      ><span>Sign up</span></q-btn
    >
  </div>
  <step-two v-if="StepTwobool" @return="StepTwobool = false" />
</template>

<script>
import { computed } from "vue";
import StepTwo from "./registration-component/step-two.vue";
export default {
  components: { StepTwo },
  emits: ["chengeSignUp"],
  data() {
    return {
      date: "",
      bool: true,
      name: "Name",
      nameRef: null,
      model: null,
      phone: "+374569931",
      ageRef: null,
      StepTwobool: false,
      nameRules: [(val) => (val && val.length > 0) || "Please enter oure name"],
      ageRules: [
        (val) =>
          (val !== null && val !== "+" && val !== "") || "Please type your age",
      ],
    };
  },
  computed: {
    bool2() {
      return !!(this.date && this.name && this.phone);
    },
  },
  provide() {
    return {
      date: computed(() => this.date),
      name: computed(() => this.name),
      phone: computed(() => this.phone),
    };
  },
};
</script>

<style lang="scss">
.underline:hover {
  text-decoration: underline;
}
// @import url(css/mixins.scss);
// .my-input {
//   width: 400px;
//   @include xs {
//     border: 1px solid brown !important;
//   }
// }
</style>
