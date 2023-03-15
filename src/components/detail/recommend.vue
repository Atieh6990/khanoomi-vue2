<template>
  <div class="recommendParent">
    <div class="recommendChild">
      <div class="itemContent" v-for="(item , index) in items" :key="index" :id="'recommend_' + index"
           :class="[(select == index && yPage==0 && activeRout) ? 'hover':'']">
        <img src="../../assets/images/home/testVideo.png" class="slideBack">
        <img class="logo" src="../../assets/images/home/Khanoumi-logo.svg">
        <div class="footer">
          <div class="timerBox">
            <img class="timeIcon" src="../../assets/images/home/timer.svg">
            <div class="time">{{ item.duration }}</div>
          </div>

          <div class="playBack">
            <img src="../../assets/images/home/play.svg" class="playLogo">
          </div>

          <div class="title"><b>{{ item.title }}</b></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IScroll from '../../js/iscroll'

export default {
  name: 'recommend',
  props: ['yPage', 'activeRout'],
  components: {
    // IScrollView
    // Flickity
  },
  data () {
    return {
      myScroll: '',
      select: 0,
      items: [
        {
          id: 0,
          title: 'آرایشگری',
          des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 1,
          title: 'آرایشگری',
          des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 2,
          title: 'آرایشگری',
          des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 3,
          title: 'آرایشگری',
          des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 4,
          title: 'آرایشگری',
          des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 5,
          title: 'آرایشگری',
          des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 6,
          title: 'آرایشگری',
          des: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        }
      ],
      options: {
        mouseWheel: true,
        preventDefault: false,
        scrollY: true,
        momentum: true,
        scrollbars: false,
        interactiveScrollbars: true,
        shrinkScrollbars: 'none',
        fadeScrollbars: false,
        mouseMove: true,
        bounce: false
      }
    }
  },
  created () {
    this.scrollInit()
  },
  methods: {
    scrollInit () {
      this.myScroll = ''
      if (this.myScroll === '') {
        setTimeout(() => {
          this.myScroll = new IScroll('.recommendParent', {
            scrollY: true,
            momentum: true,
            preventDefault: false,
            scrollbars: false,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'none',
            fadeScrollbars: false,
            mouseMove: true,
            bounce: false
          })
        }, 10)
      }
    },
    down () {
      if (this.select < (this.items.length) - 1) {
        this.select++
        this.myScroll.scrollToElement('#recommend_' + this.select, 590, false, -180)
        this.myScroll.refresh()
      }
    },
    up () {
      if (this.select > 0) {
        this.select--
        this.myScroll.scrollToElement('#recommend_' + this.select, 590, false, true)
        this.myScroll.refresh()
        return true
      }
    },
    left () {
    },
    enter () {
      return this.items[this.select]
    }
  }
}
</script>

<style scoped>
.recommendParent {
  position: absolute;
  width: 320px;
  height: 618px;
  top: 320px;
  left: 1428px;
  /* border: 1px solid red; */
  overflow: hidden;
}

.recommendChild {
  position: absolute;
  width: 100%;
  /*overflow: hidden;*/
  right: 0px;
}

.itemContent {
  /*background: rgba(31, 32, 48, 0.45);*/
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);*/
  border-radius: 18px;
  color: #FFFFFF;
  margin-top: 26px;
  float: right;
  width: 299px;
  height: 190px;
  /*Width: 190px;*/
  /*Height: 299px;*/
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

.slideBack {
  width: 100%;
  height: 100%;
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
  top: 140px;
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
  width: 120px;
  left: 166px;
  top: 11px;
  font-weight: 300;
  font-size: 16px;
  color: #141B22;
  text-align: right;
  direction: rtl;
}
</style>
