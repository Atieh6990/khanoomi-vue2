<template>
  <div class="pageParent">
    <category :yPage="yPage" ref="category" :activeRout="activeRout" :catData="catData"
              v-if="catData.length>0"></category>
    <slideShow :yPage="yPage" ref="slideShow" :activeRout="activeRout" :slideShowData="slideShowData"
               v-if="slideShowData.length>0"></slideShow>

  </div>
</template>

<script>
import category from "@/components/Home/category";
import slideShow from "@/components/Home/slideShow";
import catApi from "@/api/catApi";

export default {
  name: "categories",
  components: {
    category,
    slideShow,
  },
  data() {
    return {
      yPage: 0, // 0->cat , 1->slideShow
      activeRout: true,
      catData: '',
      slideShowData: '',
    }
  },
  created() {
    this.$root.$emit('deactive_header')
    catApi.category().then(data => {
      if (data.success) {
        this.catData = data.data
        this.slideShowData = data.data[0].sub_category
      }
    })
  },
  methods: {
    right() {
      switch (this.yPage) {
        case 0:
          this.$refs.category.right()
          break
        case 1:
          this.$refs.slideShow.right()
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
          const catSelect = JSON.parse(this.$refs.category.enter())
          this.slideShowData = this.catData[catSelect.select].sub_category
        }
          break
        case 1: {
          const param = this.$refs.slideShow.enter()
          this.$router.push({
            name: 'detail',
            params: {data: JSON.stringify(param)}
          })
        }
          break
      }
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
</style>
