<template>
  <div class="mobileParent">
    <div class="mobileBox" :class="[(ypos == 0 && activeRout ? 'hover':'')]">
<!--    <div class="mobileBox">-->
      <!--      <input class="mobileInp" v-model="phone" ref="mobile" v-if="typeInpShow == 1">-->
      <!--      <ValidationProvider>-->
      <input
          autocomplete="off"
          ref="mobile"
          v-if="typeInpShow == 1"
          id="phone"
          v-model="phone"
          class="mobileInp"
          maxlength="11"
          @blur="validate"
          @keypress="validate"
          @change="validate"
          @input="validate"
      />
      <!--      </ValidationProvider>-->

      <div class="mobileInp" v-if="typeInpShow == 0">{{ phone }}</div>
    </div>
    <div class="submitBtn" :class="[(ypos == 1 && activeRout ? 'hover':'')]">ارسال</div>
  </div>
</template>

<script>
import {Validator, extend} from 'vee-validate';
import '../../styles/global.css'
// import * as veeValidate from 'vee-validate';
// import * as yup from 'yup'
// const loginFormSchema = yup.object().shape({
//   phone: yup.string().matches('^(?=.*[0-9])', 'تلفن  باید فقط شامل عدد باشد').length(11, 'تلفن  باید 11 رقم باشد.').required('تلفن  الزامی است')
// });
// const validator = (value, args) => {
//   // Return a Boolean or a Promise that resolves to a boolean.
// };
export default {
  name: 'mobile',
  props: ['activeRout'],
  computed: {},
  data() {
    return {
      ypos: 0,
      typeInpShow: 1,
      phoneIsValid: false,
      phone: '',
      // values: {
      //   phone: "",
      // },
      // errors: {
      //   phone: "",
      // },
    }
  },
  created() {
  },
  methods: {

    validate() {
      // console.log("pgone", this.phone)

      if (this.phone == '') {
        this.$root.$emit('show_err', 'تلفن  الزامی است')
        return false
      }

      if (this.phone.length < 11 || this.phone.length > 11) {
        this.$root.$emit('show_err', 'تلفن  باید 11 رقم باشد.')
        return false
      }

      const dateReg = /^(?=.*[0-9])/;
      if (!this.phone.match(dateReg)) {
        this.$root.$emit('show_err', 'تلفن  باید فقط شامل عدد باشد')
        return false
      }

      this.phoneIsValid = true
      // console.log('655454', val);
      // Validator.extend('phone', {
      //   message: "injaaaaaa",
      //   validate: value => {
      //     const strong_password = new RegExp(
      //         "^(?=.*[0-9])"
      //     ); // regex to check our strong password
      //
      //     const res = strong_password.test(val); //Test the regex. Test function returns a true or false value.
      //     console.log(res)
      //   }
      // });
    },
    // validate(field) {
    //   loginFormSchema
    //       .validateAt(field, this.values)
    //       .then(() => {
    //         this.phoneIsValid = true
    //         this.$root.$emit('show_err', "")
    //       })
    //       .catch(err => {
    //         console.log(err);
    //         this.phoneIsValid = false
    //         this.$root.$emit('show_err', err.message)
    //         /*
    //           {
    //             errors: ["email is a required field"],
    //             inner: [],
    //             message: "email is a required field",
    //             name: "ValidationError",
    //             params: {path: "email", value: "", originalValue: "", label: undefined},
    //             path: "email",
    //             type: "required",
    //             value: "",
    //             // ..
    //           }
    //         */
    //       });
    // },
    down() {
      if (this.ypos < 1) {
        this.typeInpShow = 0
        // this.$refs.mobile.blur()
        this.$root.$emit('show_err', '')
        this.ypos++
      }
    },
    up() {
      if (this.ypos > 0) {
        this.ypos--
      }
    },
    enter() {
      // console.log(this.ypos,this.phoneIsValid)
      if (this.ypos === 0) {
        this.typeInpShow = 1
        setTimeout(() => {
          this.$refs.mobile.focus()
        }, 100)
        // this.$refs.email.$el.focus();
      } else {

        if (this.phoneIsValid) {
          this.$root.$emit('getVerifyCode', this.phone)
        }else {
          this.$root.$emit('show_err', 'تلفن  الزامی است')
        }
      }
    }
  }
}
</script>

<style scoped>
.mobileParent {
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  width: 100%;
}

.mobileBox {
  height: 89px;
  width: 644px;
  border-radius: 65px;
  /*border: 1px solid rgba(255, 0, 0, .5);*/
  border: 5px solid #5a4e63 !important;
  /*border: 5px solid red !important;*/
  margin-top: 45px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.mobileInp {
  width: 85%;
  height: 95%;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0.5em;
  color: #FFFFFF;
  background-color: transparent;
  border: 0px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.submitBtn {
  height: 89px;
  width: 644px;
  left: 638px;
  top: 599px;
  border-radius: 65px;
  margin-top: 45px;
  background: linear-gradient(0deg, #D77C79, #D77C79),
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
  font-size: 30px;
  font-weight: 400;
  line-height: 51px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.normal{
  /*border: 5px solid red;*/
}
.hover {
  border: 5px solid #FFFFFF !important
}
</style>
