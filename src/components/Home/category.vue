<template>
  <div class="catParent">
    <catFlickity class="flickity" ref="catFlickity" :options="flickityOptions">
      <div class="itemContent" v-for="(item , index) in catData" :key="item.id"
           :class="[(catSelect == index && yPage==0 && activeRout) ? 'hover':'']">
        {{ item.name }}
      </div>
    </catFlickity>
  </div>
</template>

<script>

import catFlickity from 'vue-flickity'

export default {
  name: 'category',
  props: ['yPage', 'activeRout', 'catData'],
  components: {
    catFlickity
  },
  data() {
    return {
      catSelect: 0,
      catIndexToStartScroll: 7,
      count: 50,
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
      }
    }
  },
  methods: {
    catNext() {
      this.$refs.catFlickity.next()
    },
    catPrevious() {
      this.$refs.catFlickity.previous()
    },
    left() {
      if (this.catSelect < this.catData.length - 1) {
        this.catSelect++
        if (this.catSelect > this.catIndexToStartScroll) {
          this.catNext()
        }
        return true
      } else {
        return false
      }
    },
    right() {
      if (this.catSelect > 0) {
        this.catPrevious()
        this.catSelect--
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
      const send = {id: this.catData[this.catSelect], select: this.catSelect}
      return JSON.stringify(send)
    },
    back() {
    }
  }
}
</script>

<style scoped>
.catParent {
  position: absolute;
  top: 0px;
  left: 195px;
  width: 1550px;
  height: 140px;
  /*border: 1px solid red;*/
  direction: rtl;
}

.flickity {
  top: 25%;
  position: relative;
  height: 100%;
  direction: rtl;
}

.itemContent {
  background: rgba(31, 32, 48, 0.45);
  border: 2px solid #383131;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 59px;
  padding: 5px 50px 5px 50px;
  color: #FFFFFF;
  margin-left: 26px;
  font-size: 18px;
  float: right;
  position: relative;
  height: 50px;
  min-width: 80px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.hover {
  background: linear-gradient(0deg, #F44932, #F44932),
  linear-gradient(0deg, #FF2E00, #FF2E00);
  border: 2px solid #FF2E00;
}
</style>
