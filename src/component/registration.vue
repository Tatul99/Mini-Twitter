<template>
  <div class="row" style="width: 400px">
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
      v-model="age"
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

    <q-input
      v-model="date"
      filled
      type="date"
      hint="Native date"
      class="col-9 col-md-12"
    ></q-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      bool: true,
      name: null,
      nameRef: null,
      model: null,
      age: null,
      ageRef: null,
      nameRules: [(val) => (val && val.length > 0) || "Please enter oure name"],
      ageRules: [
        (val) =>
          (val !== null && val !== "+" && val !== "") || "Please type your age",
      ],
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
