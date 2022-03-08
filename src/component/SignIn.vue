<template>
  <div class="sign-main">
    <q-input
      outlined
      v-model="text"
      label="phone,email, or username  "
      :dense="dense"
      style="max-width: 400px; height: 45px"
      class="q-mb-lg"
    ></q-input>
    <q-btn
      unelevated
      rounded
      color="primary"
      class="bg-black q-mb-lg"
      style="width: 400px; height: 45px"
      >Next</q-btn
    >
    <q-btn
      outline
      rounded
      color="#dadce0"
      class="btn2 text-weight-bolder q-mb-lg"
      style="width: 400px; height: 45px"
    >
      Forgot password?</q-btn
    >
    <q-btn
      @click="$emit('chengeBool')"
      outline
      rounded
      color="black"
      class="btn4 text-weight-bolder text-blue-4"
      style="width: 400px; height: 45px"
      ><span>Sign up</span></q-btn
    >
    <q-input
      outlined
      label="Name"
      counter
      maxlength="50"
      :dense="dense"
      style="max-width: 400px"
    >
    </q-input>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
