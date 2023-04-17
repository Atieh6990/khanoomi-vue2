<template>
  <div class="demoParent">

    <div v-if="showPoster" class="onPoster">

      <img src="../../assets/images/detail/posterTest.svg" class="playBox">
      <div class="playBlurBack">
        <div class="playBack">
          <img src="../../assets/images/detail/playOnPoster.svg">
        </div>
      </div>

    </div>

    <div class="button play" :class="[(btnIndex==0 && activeRout && yPage ==1) ? 'btnHover':'']">
      <img src="../../assets/images/detail/playIcon.svg" class="btnIcon">
<!--      <span class="btnTxt">{{price}}</span>-->
      <span class="btnTxt" v-if="price == 0">نمایش</span>
      <span class="btnTxt" v-else>خریداری</span>
    </div>

    <div class="button fullScreen" :class="[(btnIndex==1 && activeRout && yPage ==1) ? 'btnHover':'']">
      <!--      <img :src="fullScreenIcon" class="btnIcon">-->
      <span class="btnTxt">بزرگ نمایی</span>
    </div>

  </div>
</template>

<script>
import fun from '../../mixins/func'
import {ROAST_CONFIG} from "@/config";

export default {
  name: 'demo',
  props: ['yPage', 'activeRout', 'videoUrl', 'price'],
  mixins: [fun],
  data() {
    return {
      showPoster: true,
      isFullScree: false,
      posterUrl: '',
      btnIndex: 0
    }
  },
  methods: {
    right() {
      if (this.btnIndex === 0) {
        this.btnIndex = 1
        return true
      }
      return false
    },
    left() {
      if (this.btnIndex === 1) {
        this.btnIndex = 0
        return true
      }
      return false
    },
    enter() {
      if (this.btnIndex === 0) {
        // alert(this.price)
        if (this.price != 0) {
          this.openBrowser('https://www.khanoumi.com/')
        } else {
          this.showPoster = false
          this.playVideo(this.videoUrl)
        }

      }
      if (this.btnIndex === 1) {
        // console.log('fullscreen')
        if (this.showPoster == false) {
          this.isFullScree = true
          this.toggleFullScreen(true)
        }
      }
    },
    // seek(){
    //   this.seekVideo(1500)
    // },
    back() {
      // alert(this.isFullScree)
      if (this.isFullScree) {
        this.toggleFullScreen(false)
        this.isFullScree = false
      } else {
        this.killVideo()
        this.$router.go(-1)
      }
    },
    killVideo(){
      this.showPoster = true
      this.stopVideo(this.videoUrl)
    }
  }
}
</script>

<style scoped>

.demoParent {
  position: absolute;
  top: 75px;
  left: 150px;
  width: 911px;
  height: 650px;
  /*border: 1px solid blue;*/
}

.playBox {
  position: absolute;
  height: 542px;
  width: 911px;
  left: 2px;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 18px;
}

.btnHover {
  border: 3px solid #EEF3FF !important;
}

.button {
  width: 435px;
  height: 75px;
  color: #FFFFFF;
  top: 572px;
  border-radius: 16px;
  position: absolute;
  font-weight: 400;
  font-size: 24px;
  direction: rtl;
  z-index: 10;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  border: 3px solid transparent;
}

.play {
  left: 2px;
  background: #F44932;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
}

.fullScreen {
  right: 2px;
  background: #5B79AC;
  border: 1px solid #273D5B;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
}

.btnIcon {
  /*float: right;*/
  /*margin-top: 15px;*/
  /*padding-left: 10px;*/
  /*margin-right: 30%;*/
}

.btnTxt {
  /*float: left;*/
  margin-right: 15px;
  direction: rtl;
}

.playBlurBack {
  box-sizing: border-box;
  position: absolute;
  width: 142px;
  height: 143px;
  left: 385px;
  top: 194px;
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
  height: 95px;
  width: 95px;
  top: 19px;
  left: 18px;
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
</style>
