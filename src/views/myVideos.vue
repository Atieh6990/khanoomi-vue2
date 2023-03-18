<template>
  <div class="pageParent">
    <div class="title">ویدئو های من :</div>
    <videos ref="videos" :yPage="yPage" :activeRout="activeRout" :videoData="items" class="items" :typeData="1"></videos>
  </div>

</template>

<script>

import videos from "@/components/Home/videos";
import productApi from "@/api/product"
export default {
  name: "myVideos",
  components: {videos},
  data() {
    return {
      yPage: 2,
      activeRout: true,
      videosData:'',
      items: [
        {
          id: 0,
          title: 'آرایشگری',
          name: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 1,
          title: 'آرایشگری',
          name: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 2,
          title: 'آرایشگری',
          name: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 3,
          title: 'آرایشگری',
          name: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 4,
          title: 'آرایشگری',
          name: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 5,
          title: 'آرایشگری',
          name: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        },
        {
          id: 6,
          title: 'آرایشگری',
          name: 'آرایش مناسب برای مهمانی با چند تکنیک ساده',
          duration: '02:38:56'
        }
      ],
    }
  },
  created() {
    this.$root.$emit('deactive_header')
    productApi.myProduct().then(data=>{
      if(data.success){
        this.videosData = data.data
      }
    })
  },
  methods: {
    right() {
      this.$refs.videos.right()
    },
    left() {
      this.$refs.videos.left()
    },
    up() {
      return false
    },
    enter() {
      const param = this.items[this.$refs.videos.enter()]
      // console.log('param', param)
      this.$router.push({
        name: 'detail',
        params: {data: JSON.stringify(param)}
      })
    },
    back() {
      this.$router.go(-1)
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
  /*border: 10px solid red;*/
}

.title {
  position: absolute;
  top: 100px;
  left: 20px;
  width: 1843px;
  text-align: right;
  color: #FFFFFF;
  font-size: 25px;
  direction: rtl;
  padding-right: 100px;
}
.items{
  position: absolute;
  top: 200px;
}
</style>
