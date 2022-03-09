<template>
  <div class="sign-main" style="width: 400px">
    <div class="row q-mb-md">
      <div class="col-9 col-md-12">
        <q-input
          outlined
          v-model="text"
          label="phone,email, or username  "
          :dense="dense"
          class="q-mb-lg col-11 col-md-12"
        ></q-input>
      </div>
      <div class="col-9 col-md-12 row">
        <q-btn
          unelevated
          rounded
          color="primary"
          class="bg-black q-mb-lg col-12"
          >Next</q-btn
        >

        <q-btn
          outline
          rounded
          color="#dadce0"
          class="btn2 text-weight-bolder q-mb-lg col-12"
        >
          Forgot password?</q-btn
        >
        <q-btn
          @click="$emit('chengeBool')"
          outline
          rounded
          color="black"
          class="btn4 text-weight-bolder text-blue-4 col-12"
          ><span>Sign up</span></q-btn
        >
      </div>
    </div>

    <!-- <div class="row" style="width: 600px">
      <div class="col-6">
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4"></div>
        </div>
      </div>
      <div class="col-6"></div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
