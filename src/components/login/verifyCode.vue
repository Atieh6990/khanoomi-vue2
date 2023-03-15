<template>
  <div class="codeParent">
    <div class="codeBox">
      <div class="code" :class="[(ypos == 0 && xpos==i && activeRout ? 'hover':'')]"
           v-for="(key, i) in activationKeyFields"
           :key="i">
        <input class="codeInp" v-model="key.value" :data-length="key.length" :data-index="i" :ref="'input_'+ i"
               v-if="typeInpShow == 1"
               type="number"
               maxlength="1"
               @input="handleActivationInput($event)"
               @keydown="($event.keyCode == 40 || $event.keyCode == 38) ? ($event.preventDefault()):('')"
               @keyup="($event.keyCode == 40 || $event.keyCode == 38) ? ($event.preventDefault()):('')"
        >
        <div class="codeInp" v-if="typeInpShow == 0">{{ key.value }}</div>
      </div>
    </div>
    <div class="submitBtn" :class="[(ypos == 1 && activeRout ? 'hover':'')]">ورود</div>
    <div class="back" :class="[(ypos == 2 && activeRout ? 'hover':'')]"><img src="../../assets/images/login/back.png">
    </div>
    <span class="backTxt">بازگشت</span>
  </div>

</template>

<script>
export default {
  name: 'verifyCode',
  props: ['activeRout'],
  data() {
    return {
      ypos: 0,
      xpos: 0,
      activationCode: '',
      typeInpShow: 0,
      activationKeyFields: [
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        },
        {
          length: 1,
          value: ''
        }
      ]
    }
  },
  methods: {
    enter() {
      if (this.ypos === 0) {
        this.typeInpShow = 1
        setTimeout(() => {
          this.$refs[`input_${this.xpos}`][0].focus()
        }, 100)
      } else if(this.ypos === 1){
        for (const i in this.activationKeyFields) {
          this.activationCode += this.activationKeyFields[i].value.toString()
        }
        this.$root.$emit('login', this.activationCode)
        // console.log(this.activationCode)
      }else {
        this.$root.$emit('backOnVerify')
      }
    },
    handleActivationInput(e) {
      const value = e.target.value
      const index = parseInt(e.target.dataset.index)
      const maxlength = e.target.dataset.length

      if (this.activationKeyFields[index].value.length > maxlength) {
        e.preventDefault()
        this.activationKeyFields[index].value = value.slice(0, 1)
        try {
          this.$refs[`input_${parseInt(index + 1)}`][0].focus()
          this.xpos++
          // this.$refs['input_' + (index + 1)].focus()
        } catch (e) {
        }
        return
      }
      // Shift focus to next input field if max length reached
      if (value.length >= maxlength) {
        // console.log(this.activationKeyFields[index + 1])
        if (typeof this.activationKeyFields[index + 1] === 'undefined') {
          e.preventDefault()
          this.$refs[`input_${parseInt(index)}`][0].blur()
          this.typeInpShow = 0
          this.xpos = -1
          this.ypos = 1
          return
        }
        this.$refs[`input_${parseInt(index + 1)}`][0].focus()
        this.xpos++
        // this.$refs['input_' + (index + 1)].focus()
        e.preventDefault()
      }
    },
    right() {
      // console.log(this.xpos, this.activationKeyFields.length - 1, this.typeInpShow)
      if (this.xpos < this.activationKeyFields.length - 1 && this.typeInpShow === 1) {
        this.$refs[`input_${parseInt(this.xpos)}`][0].blur()
        this.xpos++
        this.activationKeyFields[this.xpos].value = ''
        this.$refs[`input_${parseInt(this.xpos)}`][0].focus()
      }
    },
    left() {
      if (this.xpos > 0 && this.typeInpShow === 1) {
        this.$refs[`input_${parseInt(this.xpos)}`][0].blur()
        this.xpos--
        this.activationKeyFields[this.xpos].value = ''
        this.$refs[`input_${parseInt(this.xpos)}`][0].focus()
      }
    },
    up() {
      // console.log(this.ypos)
      if (this.ypos === 1) {
        this.xpos = 0
        this.ypos = 0
      }else if(this.ypos === 2){
        this.ypos = 1
      }
    },
    down() {
      // console.log(this.ypos)
      if (this.ypos === 1) {
        this.ypos++
      }
    }
  }
}
</script>

<style scoped>
.codeParent {
  direction: ltr;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  width: 100%;
}

.codeBox {
  margin-top: 45px;
  height: 89px;
  width: 100%;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.code {
  height: 89px;
  width: 144px;
  border-radius: 65px;
  border: 5px solid #5a4e63 !important;
  margin-left: 22px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.codeInp {
  width: 85%;
  height: 95%;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 41px;
  /*letter-spacing: 0.5em;*/
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
  /*padding: 0px !important;*/
}

.hover {
  border: 5px solid #FFFFFF !important
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
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
  border: 5px solid transparent;
}

.back {
  height: 103px;
  width: 103px;
  border-radius: 50%;
  border: 5px solid #5a4e63;
  margin-top: 45px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.backTxt {
  height: 100%;
  width: 75px;
  font-size: 24px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
  margin-top: 20px;
}
</style>
