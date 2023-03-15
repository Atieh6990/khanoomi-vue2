<template>
  <div class="slideParent">
    <!--    <div class="blurBox corner_0"></div>-->
    <!--    <div class="blurBox corner_1"></div>-->
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <div class="itemContent" v-for="(item, index) in slideShowData" :key="index"
           :class="[(select == index && yPage==1 && activeRout) ? 'hover':'']">
        <img src="../../assets/images/home/testSlide.png" class="slideBack">
        <div class="title">{{ item.category.name }}</div>
        <div class="subTitle">{{ item.title }}</div>

        <div class="playBlurBack">
          <div class="playBack">
            <img src="../../assets/images/home/play.svg">
          </div>
        </div>

        <img class="logo" src="../../assets/images/home/Khanoumi-logo.svg">

        <div class="footer">
          <div class="timerBox">
            <img class="timeIcon" src="../../assets/images/home/timer.svg">
            <div class="time">{{ '02:38:56' }}</div>
          </div>
        </div>
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import '../../styles/global.css'

export default {
  name: 'slideShow',
  props: ['yPage', 'activeRout', 'slideShowData'],
  components: {
    Flickity
  },
  data () {
    return {
      // items: [
      //   {
      //     id: 0,
      //     title: 'آرایشگری',
      //     des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
      //     duration: '02:38:56'
      //   },
      //   {
      //     id: 1,
      //     title: 'آرایشگری',
      //     des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
      //     duration: '02:38:56'
      //   },
      //   {
      //     id: 2,
      //     title: 'آرایشگری',
      //     des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
      //     duration: '02:38:56'
      //   },
      //   {
      //     id: 3,
      //     title: 'آرایشگری',
      //     des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
      //     duration: '02:38:56'
      //   },
      //   {
      //     id: 4,
      //     title: 'آرایشگری',
      //     des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
      //     duration: '02:38:56'
      //   }
      // ],
      flickityOptions: {
        pageDots: true,
        contain: true,
        draggable: true,
        adaptiveHeight: true,
        prevNextButtons: false,
        rightToLeft: true,
        groupCells: '80%',
        initialIndex: 1,
        accessibility: true,
        selectedAttraction: 0.01,
        friction: 0.15
      },
      select: 1,
      indexToStartScroll: 3
    }
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    },
    left () {
      // console.log(this.select, this.slideShowData.length)
      if (this.select < this.slideShowData.length - 1) {
        this.next()
        this.select++
        return true
      } else {
        return false
      }
    },
    right () {
      if (this.select > 0) {
        this.previous()
        this.select--
        return true
      } else {
        return false
      }
    },
    up () {
      return false
    },
    down () {
      return false
    },
    enter () {
      // console.log('enter', this.slideShowData[this.select].description)
      return this.slideShowData[this.select]
    },
    back () {
    }
  }
}
</script>

<style scoped>
.slideParent {
  position: absolute;
  top: 140px;
  left: 0px;
  width: 1920px;
  height: 310px;
  /*border: 1px solid red;*/
  direction: rtl;
}

.flickity {
  position: relative;
  height: 100%;
  direction: rtl;
}

.itemContent {
  /*background: rgba(31, 32, 48, 0.45);*/
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);*/
  border-radius: 18px;
  color: #FFFFFF;
  margin-left: 26px;
  float: right;
  width: 813px;
  height: 260px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  border: 6px solid transparent;
}

.blurBox {
  position: absolute;
  width: 108px;
  height: 260px;
  top: 6px;
  background-color: #000000;
  opacity: 0.7;
  z-index: 10;
}

.corner_0 {
  left: 1827px;
  border-radius: 18px 0px 0px 18px;
}

.corner_1 {
  left: 0px;
  border-radius: 0px 18px 18px 0px;
}

.title {
  position: absolute;
  width: 336px;
  height: 55px;
  right: 46px;
  top: 36px;
  font-weight: 300;
  font-size: 32px;
  line-height: 55px;
  color: #141B22;
  text-align: right;
  direction: rtl;
}

.subTitle {
  position: absolute;
  height: 28px;
  width: 336px;
  right: 46px;
  top: 91px;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: right;
  direction: rtl;
  color: #141B22;
}

.logo {
  position: absolute;
  left: 20px;
  top: 40px;
}

.playBlurBack {
  box-sizing: border-box;
  position: absolute;
  width: 72px;
  height: 72px;
  left: 45px;
  top: 124px;
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid #FFFFFF;
  backdrop-filter: blur(2px);
  border-radius: 14px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 20;
}

.playBack {
  position: absolute;
  top: 14px;
  left: 11px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.footer {
  position: absolute;
  width: 100%;
  height: 60px;
  left: 0px;
  top: 200px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(4px);
  border-radius: 0px 0px 18px 18px;
}

.timerBox {
  position: absolute;
  width: 115px;
  height: 30px;
  left: 43px;
  top: 16px;
  background: #FFFFFF;
  border-radius: 29px;
}

.timeIcon {
  position: absolute;
  left: 7px;
  top: 7px;
}

.time {
  position: absolute;
  height: 19px;
  width: 64px;
  left: 32px;
  top: 5px;
  color: #141B22;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  text-align: left;
}

.hover {
  border: 6px solid #FF2E00
}
</style>
