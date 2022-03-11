<template>
  <div class="row q-mt-xl justify-start" style="width: 400px">
    <div class="text-h5 col-9 col-md-12 text-weight-bold q-mb-lg">
      Customize your experience
    </div>
    <div class="text-h5 col-9 col-md-12 text-weight-bold q-mb-md">
      Track where you see Twitter content across the web
    </div>
    <div class="col-9 col-md-12 row q-mb-xl">
      <div class="col-11">
        Twitter uses this data to personalize your experience. This web browsing
        history will never be stored with your name, email, or phone number.
      </div>
      <div class="col-1">
        <div class="">
          <q-checkbox v-model="val"></q-checkbox>
        </div>
      </div>
    </div>
    <div class="col-9 col-md-12">
      By signing up, you agree to our
      <a href="https://twitter.com/ru/tos#new" target="black">Terms</a>,<a
        href="https://twitter.com/ru/privacy"
        target="black"
        >Privacy Policy</a
      >,and
      <a
        href="https://help.twitter.com/ru/rules-and-policies/twitter-cookies"
        target="black"
        >Cookie Use</a
      >
      . Twitter may use your contact information, including your email address
      and phone number for purposes outlined in our Privacy Policy.
      <a href="https://twitter.com/ru/privacy" target="black">Learn more</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: true,
    };
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
