<template>
  <div class="videosParent">
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <div class="itemContent" v-for="(item, index) in videoData" :key="index"
           :class="[(select == index && yPage==2 && activeRout) ? 'hover':'']">
        <img src="../../assets/images/home/testVideo.png" class="slideBack">
        <img class="logo" src="../../assets/images/home/Khanoumi-logo.svg">
        <div class="footer">
          <div class="timerBox">
            <img class="timeIcon" src="../../assets/images/home/timer.svg">
            <div class="time">{{ '02:26:30' }}</div>
          </div>

          <div class="playBack">
            <img src="../../assets/images/home/play.svg" class="playLogo">
          </div>

          <div class="title"><b>{{ cutString(item.name, 20) }}</b></div>
        </div>
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import '../../styles/global.css'
import func from '../../mixins/func'

export default {
  name: 'videos',
  props: ['yPage', 'activeRout', 'videoData'],
  mixins: [func],
  components: {
    Flickity
  },

  data() {
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
      //   },
      //   {
      //     id: 5,
      //     title: 'آرایشگری',
      //     des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
      //     duration: '02:38:56'
      //   },
      //   {
      //     id: 6,
      //     title: 'آرایشگری',
      //     des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
      //     duration: '02:38:56'
      //   }
      // ],
      flickityOptions: {
        pageDots: false,
        accessibility: false,
        contain: true,
        draggable: false,
        freeScroll: false,
        adaptiveHeight: true,
        prevNextButtons: false,
        cellAlign: 'right',
        rightToLeft: true


      },
      select: 0,
      indexToStartScroll: 3
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next()
    },
    previous() {
      this.$refs.flickity.previous()
    },
    left() {
      if (this.select < this.videoData.length - 1) {
        this.select++
        if (this.select > this.indexToStartScroll) {
          this.next()
        }
        return true
      } else {
        return false
      }
    },
    right() {
      if (this.select > 0) {
        this.previous()
        this.select--
        return true
      } else {
        return false
      }
    },
    up() {
      return false
    },
    down() {
      return false
    },
    enter() {
      // return this.items[this.select]
    },
    back() {
    }
  }
}
</script>

<style scoped>
.videosParent {
  position: absolute;
  top: 507px;
  left: 20px;
  width: 1843px;
  height: 225px;
  /*border: 1px solid red;*/
  direction: rtl;
  overflow: hidden;
}

.flickity {
  /*position: relative;*/
  height: 100%;
  direction: rtl;

}

.itemContent {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  color: #FFFFFF;
  margin-left: 26px;
  float: right;
  Width: 333px;
  height: 212px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  border: 6px solid transparent;
  position: relative;

}

.hover {
  border: 6px solid #FF2E00
}

.logo {
  position: absolute;
  left: 14px;
  top: 16px;
}

.footer {
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 163px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(4px);
  border-radius: 0px 0px 18px 18px;
}

.timerBox {
  position: absolute;
  width: 115px;
  height: 30px;
  left: 14px;
  top: 12px;
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

.playBack {
  position: absolute;
  height: 34px;
  width: 34px;
  top: 7px;
  left: 130px;
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

.playLogo {
  width: 28px;
  height: 28px;
}

.title {
  position: absolute;
  height: 30px;
  width: 154px;
  left: 166px;
  top: 11px;
  font-weight: 300;
  font-size: 16px;
  color: #141B22;
  text-align: right;
  direction: rtl;
}

</style>
