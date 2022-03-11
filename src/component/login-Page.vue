<template>
  <div class="login-main">
    <div class="row reverse">
      <div class="col-xs-12 col-md-6">
        <div class="row wrap justify-center items-center q-ml-lg">
          <div class="col-12">
            <div class="content">
              <div class="mini-icon-div justify-start">
                <div class="mini-icon"></div>
              </div>
              <div class="tit col-12 q-mt-xl q-mb-xl">
                <div class="big-title text-h1 text-weight-bold">
                  Happening now
                </div>
              </div>
              <div
                class="mini-title text-h3 text-weight-bolder q-mt-md q-mb-lg"
              >
                Join Twitter today.
              </div>
              <div class="buttons column" style="width: 400px">
                <div class="btn-div row fit items-center q-mb-lg">
                  <div class="btn1-div col-9 col-md-12 row">
                    <q-btn outline rounded border-color="" class="btn1 col-12">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        class="gmail-icon"
                      >
                        <g>
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          ></path>
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          ></path>
                          <path fill="none" d="M0 0h48v48H0z"></path>
                        </g>
                      </svg>
                      Sign up with phone or email</q-btn
                    >
                  </div>
                </div>
                <div class="btn-div row fit items-center">
                  <div class="btn2 col-9 col-md-12 row">
                    <q-btn
                      outline
                      rounded
                      color="black"
                      class="text-weight-bolder col-12"
                      ><div class="apple"></div>
                      Sign up with Apple</q-btn
                    >
                  </div>
                </div>
              </div>
              <div class="line-div row q-mt-md q-mb-lg" style="width: 400px">
                <div class="col-9 col-md-12">
                  <div class="line row justify-center items-center">or</div>
                </div>
              </div>
            </div>
            <div class="chenge-content">
              <chenge-content
                v-if="bool && bool2"
                @chengeBool="foo"
                @chengeSignUp="foo2"
                class="q-mb-md"
              />
              <sign-in @chengeBool="foo" v-if="!bool" />
              <registration v-if="!bool2" @chengeSignUp="foo2" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-6 reverse">
        <div class="image row justify-center items-center q-pt-xs">
          <div class="twitter-icon"></div>
        </div>
      </div>
    </div>

    <div class="fotter-text-div row justify-center">
      <div class="fotter-text row wrap justify-center cursor-pointer">
        <a href="">About</a>
        <a href="">Help Center</a>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Accessibility</a>
        <a href="">Ads info</a>
        <a href="">Blog</a>
        <a href="">Status</a>
        <a href="">Careers</a>
        <a href="">Brand Resources</a>
        <a href="">Advertising</a>
        <a href="">Marketing</a>
        <a href="">Twitter for Business</a>
        <a href="">Developers</a>
        <a href="">Directory</a>
        <a href="">Settings</a>
        © 2022 Twitter, Inc.
      </div>
    </div>
  </div>
</template>

<script>
import ChengeContent from "./chenge-conteiner.vue";
import SignIn from "./SignIn.vue";
import Registration from "./registration.vue";
export default {
  components: { ChengeContent, SignIn, Registration },
  data() {
    return {
      bool: true,
      bool2: true,
    };
  },
  methods: {
    foo() {
      return (this.bool = !this.bool);
      console.log((this.bool = !this.bool));
    },
    foo2() {
      this.bool2 = !this.bool2;
      console.log(this.bool2);
    },
  },
};
</script>

<style lang="scss">
@import "../css/mixins.scss";
.image {
  background-image: url("../../public/login-image.png");

  height: 90vh;
}

.twitter-icon {
  /* -webkit-mask-image: url("../../public/twitter-white.png"); */
  mask-image: url("../../public/twitter-white.png");
  -webkit-mask-size: 100%;
  mask-size: 100%;
  width: 500px;
  height: 600px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #fff;
  /* color: #fff; */
}
.mini-icon {
  mask-image: url("../../public/twitter-white.png");
  -webkit-mask-size: 100%;
  mask-size: 100%;
  width: 80px;
  height: 80px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: rgb(29, 155, 240);
}

.apple {
  background-image: url("../../public/apple.png");
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  margin-right: 10px;
}

.btn1:hover {
  border: noone;
  border: 1px solid rgba(39, 128, 139);
  background-color: rgb(230, 255, 252, 1) !important;
}
.gmail-icon {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}
.line {
  position: relative;
}
.line:before {
  content: "";
  width: 47%;
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  background-color: rgb(29, 27, 27, 0.2);
}
.line:after {
  content: "";
  width: 47%;
  position: absolute;
  top: 50%;
  right: 0;
  height: 1px;
  background-color: rgb(29, 27, 27, 0.2);
}

.fotter-text {
  width: 1500px;

  margin-bottom: 30px;
}
.fotter-text a {
  font-size: 16px;
  color: rgb(65, 63, 63);
  text-decoration: unset;
  margin-right: 15px;
}
.fotter-text a:hover {
  text-decoration: underline;
}
.fotter-text-div {
  width: 100%;
}
// @mixin xs {
//   @media (max-width: 599px) {
//     @content;
//   }
// }
.big-title {
  @include xs {
    // color: rgb(29, 155, 240) !important;
    font-size: 55px;
  }
}
.mini-title {
  @include xs {
    font-size: 30px;
  }
}
</style>
