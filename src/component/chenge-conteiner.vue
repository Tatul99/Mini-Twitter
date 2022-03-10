<template>
  <div class="compo-main">
    <q-btn
      unelevated
      rounded
      color="primary"
      class="btn3 text-weight-bolder"
      @click="$emit('chengeSignUp')"
      >Sign up with phone or email</q-btn
    >
    <div class="mini-text">
      By signing up, you agree to the
      <a target="blanck" href=" https://twitter.com/ru/tos">
        Terms of Service
      </a>
      and
      <a target="blanck" href="https://twitter.com/ru/privacy">
        Privacy Policy</a
      >
      including
      <a
        target="blanck"
        href="https://help.twitter.com/ru/rules-and-policies/twitter-cookies"
      >
        Cookie Use.</a
      >
    </div>
    <div class="sign-div q-mt-md">
      <div class="zapros text-h5 text-weight-bolder q-mb-sm">
        Already have an account?
      </div>
      <q-btn
        @click="$emit('chengeBool')"
        outline
        rounded
        color="black"
        class="btn4 text-weight-bolder text-blue-4"
        ><span>Sign In</span></q-btn
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn3 {
  width: 400px;
  height: 50px;
  background-color: rgb(29, 155, 240) !important;
}
.mini-text {
  width: 400px;
}
.mini-text a {
  text-decoration: unset;
  color: rgb(29, 155, 240);
}
span {
  color: rgb(29, 155, 240) !important;
}
.mini-text a:hover {
  text-decoration: underline;
}
.btn4 {
  width: 400px;
  height: 50px;
}

@media all and (max-width: 600px) {
  .btn3 {
    width: 300px;
  }
  .btn4 {
    width: 300px;
  }
  .mini-text {
    width: 300px;
  }
}
</style>
