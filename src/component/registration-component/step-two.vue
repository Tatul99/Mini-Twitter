<template>
  <div class="row" style="width: 400px">
    <div class="steps row col-9 col-md-12 justify-center">
      <div class="col-1.5 vector1 row justify-center items-center" @click="foo">
        <img src="../../../public/left-vector.png" class="vector" alt="" />
      </div>
      <div
        class="col-10 row justify-center items-center text-weight-bold text-h5"
      >
        Step {{ number }} of 5
      </div>
    </div>
    <step-two-info v-if="number2" />
    <step-three v-if="number == 3" />
    <q-btn
      unelevated
      rounded
      color="black"
      :label="number == 3 ? 'Sing Up' : 'Next'"
      class="col-9 col-md-12 q-mt-md q-mb-md"
      @click="gumar(), (number2 = false)"
    ></q-btn>
  </div>
</template>

<script>
import stepTwoInfo from "./steptwo-info.vue";
import stepThree from "./step-three.vue";
export default {
  components: { stepTwoInfo, stepThree },
  data() {
    return {
      number: 2,
      number2: true,
    };
  },
  methods: {
    gumar() {
      if (this.number < 3) {
        this.number++;
      }
    },
    foo() {
      if (this.number == 2) {
        this.$emit("return");
      }
      if (this.number == 3) {
        this.number2 = true;
        this.number--;
      }
    },
  },
};
</script>

<style>
.vector1 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.vector {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.vector1:hover {
  background-color: rgb(187, 184, 184);
}
</style>
