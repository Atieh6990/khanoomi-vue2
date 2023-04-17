<template>
  <div class="pageParent">
    <category :yPage="yPage" ref="category" :activeRout="activeRout" :catData="catData"
              v-if="catData.length>0"></category>
    <slideShow :yPage="yPage" ref="slideShow" :activeRout="activeRout" :slideShowData="slideShowData"
               v-if="slideShowData.length>0"></slideShow>
    <videos :yPage="yPage" ref="videos" :activeRout="activeRout" :videoData="videoData"
            v-if="videoData.length>0" :typeData="0"></videos>
  </div>
</template>

<script>
import category from '@/components/Home/category'
import slideShow from '@/components/Home/slideShow'
import videos from '@/components/Home/videos'
import catApi from '@/api/catApi'
import productApi from '@/api/product'
import func from '../mixins/func'
import {mapMutations, mapGetters} from 'vuex'
import {ROAST_CONFIG} from "@/config";

export default {
  name: 'Home',
  mixins: [func],
  components: {
    category,
    slideShow,
    videos
  },
  data() {
    return {
      yPage: 0, // 0->cat , 1->slideShow , 2->videos
      activeRout: true,
      catData: '',
      slideShowData: '',
      videoData: ''
    }
  },
  created() {
      this.getUserAuth()
    // if(ROAST_CONFIG.is_Development == 1){
    //   this.setAuthToken(ROAST_CONFIG.TEST_TOKEN)
    //   this.getCat()
    //   this.getProduct()
    // }else{
    //   this.getUserAuth()
    // }
  },
  methods: {
    ...mapMutations(['setAuthToken']),
    ...mapGetters(['getAuthToken']),
    goToLogin(data) {
      // alert('0->' + data.hasTk)
      // alert('1->' + data.authTk)
      if (data.hasTk == false) {
        this.$router.push({path: '/login'})
      } else {
        // alert('dare')
        this.setAuthToken(data.authTk);
        setTimeout(() => {
          this.$root.$emit('show_header')
          this.$root.$emit('get_profile')
          this.$root.$emit('deactive_header')
          this.getCat()
          this.getProduct()
        }, 1000)
      }
    },
    getCat() {
      catApi.category().then(data => {
        if (data.success) {
          this.catData = data.data
          this.slideShowData = data.data[0].sub_category
        }
      })
    },
    getProduct() {
      productApi.product().then(data => {
        if (data.success) {
          this.videoData = data.data
        }
      })
    },
    right() {
      switch (this.yPage) {
        case 0:
          this.$refs.category.right()
          break
        case 1:
          this.$refs.slideShow.right()
          break
        case 2:
          this.$refs.videos.right()
          break
      }
    },
    left() {

      switch (this.yPage) {
        case 0:
          this.$refs.category.left()
          break
        case 1:
          this.$refs.slideShow.left()
          break
        case 2:
          this.$refs.videos.left()
          break
      }
    },
    up() {
      // console.log(this.yPage)
      if (this.yPage === 0) {
        return false
      } else {
        switch (this.yPage) {
          case 1:
            this.yPage = 0
            break
          case 2:
            this.yPage = 1
            break
        }
        return true
      }
    },
    down() {
      // console.log(this.activeRout)
      switch (this.yPage) {
        case 0:
          this.yPage = 1
          break
        case 1:
          this.yPage = 2
          break
      }
    },
    enter() {
      switch (this.yPage) {
        case 0: {
          this.slideShowData = ''
          const catSelect = JSON.parse(this.$refs.category.enter())
          setTimeout(() => {
            this.slideShowData = this.catData[catSelect.select].sub_category
            // console.log( this.slideShowData)
          }, 10)

        }
          break
        case 1: {
          const param = this.$refs.slideShow.enter()
          // console.log('param', param)
          this.$router.push({
            name: 'detail',
            params: {data: JSON.stringify(param)}
          })
        }
          break
        case 2: {
          const param = this.$refs.videos.enter()
          // alert(JSON.stringify(param))
          this.$router.push({
            path: '/detail/' + new Date().getTime(),
            query: {data: param}
          })
        }

          break
      }
    },
    subCategory() {
      return this.catData[this.$refs.category.enter().select].sub_category
    },
    back() {
      console.log('exit app !!!')
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
</style>
