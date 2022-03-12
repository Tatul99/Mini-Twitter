<template>
  <div class="row" style="width: 400px">
    <div class="text-h5 text-weight-bold col-9 col-md-12 q-mt-md">
      Create your account
    </div>
    <q-input
      ref="nameRef"
      v-model="name"
      label="Name"
      lazy-rules
      :rules="nameRules"
      outlined
      class="my-input col-9 col-md-12 q-mb-md"
    ></q-input>
    <q-input
      ref="nameRef"
      v-model="phone"
      label="Phone"
      lazy-rules
      :rules="nameRules"
      outlined
      class="my-input col-9 col-md-12 q-mb-md"
    ></q-input>
    <q-input
      ref="nameRef"
      v-model="date"
      label="Birth date"
      lazy-rules
      :rules="nameRules"
      outlined
      class="my-input col-9 col-md-12 q-mb-md"
    ></q-input>
    <div class="col-9 col-md-12 q-mt-xl">
      By signing up, you agree to the
      <a href="https://twitter.com/ru/tos#new" target="blanck"
        >Terms of Service</a
      >
      and
      <a href="https://twitter.com/ru/privacy" target="blanck">Privacy Policy</a
      >, including
      <a
        href="https://help.twitter.com/ru/rules-and-policies/twitter-cookies"
        target="blanck"
        >Cookie Use</a
      >. Twitter may use your contact information, including your email address
      and phone number for purposes outlined in our Privacy Policy, like keeping
      your account secure and personalizing our services, including ads.
      <a href="https://twitter.com/ru/privacy" target="black">Learn more</a> .
      Others will be able to find you by email or phone number, when provided,
      unless you choose otherwise here.
    </div>
  </div>
</template>

<script>
export default {
  inject: ["date", "phone", "name"],

  mounted() {
    console.log(this.date, this.phone, this.name);
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(29, 155, 240);
}
a:hover {
  text-decoration: underline;
}
</style>
