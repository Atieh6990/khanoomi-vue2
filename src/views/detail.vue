<template>
  <div class="pageParent">
<!--    {{ detailData }}-->
    <videoInfo :detailData="detailData"></videoInfo>
    <recommend :yPage="yPage" ref="recommend" :activeRout="activeRout"></recommend>
    <demo :yPage="yPage" ref="demo" :activeRout="activeRout" :videoUrl="detailData.video"
          :price="((typeof detailData.price == undefined || typeof detailData.price == 'undefined') ? (-1) : (detailData.price)) "></demo>
  </div>
</template>

<script>

import videoInfo from '@/components/detail/videoInfo'
import recommend from '@/components/detail/recommend'
import demo from '@/components/detail/demo'
import func from '../mixins/func'

export default {
  name: 'detail',
  mixins: [func],
  components: {
    videoInfo,
    recommend,
    demo
  },
  data() {
    return {
      yPage: 1, // 0->recommend , 1->btn
      activeRout: true,
      detailData: '',
      playType: false, //play:true , pause:false
    }
  },
  created() {
    this.detailData = this.$route.query.data
    // alert('title' + this.detailData.title)
  },
  methods: {
    down() {
      switch (this.yPage) {
        case 0:
          this.$refs.recommend.down()
          break
      }
    },
    up() {
      switch (this.yPage) {
        case 0:
          if (!this.$refs.recommend.up()) {
            return false
          }
          break
        case 1:
          return false
      }
      return true
    },
    left() {
      switch (this.yPage) {
        case 0:
          this.yPage = 1
          break
        case 1:
          this.$refs.demo.left()
          break
      }
    },
    right() {
      switch (this.yPage) {
        case 0:
          break
        case 1:
          if (!this.$refs.demo.right()) {
            this.yPage = 0
          }
          break
      }
    },
    enter() {
      switch (this.yPage) {
        case 0:
          this.$refs.recommend.enter()
          break
        case 1:
          this.$refs.demo.enter()
          break
      }
    },
    playPauseVideo() {
      this.PPVideo(!this.playType)
    },
    seekForward() {
      this.seekVideo(0)
    },
    seekBackward() {
      this.seekVideo(1)
    },
    killVideo() {
      this.$refs.demo.killVideo()
    },
    back() {
      if (this.yPage == 1) {
        this.$refs.demo.back()
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped>
.pageParent {
  position: absolute;
  width: 1920px;
  left: 0px;
  top: 134px;
  height: 940px;
  /*border: 1px solid red;*/
}
</style>
