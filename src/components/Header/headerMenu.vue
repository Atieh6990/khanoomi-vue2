<template>
  <div class="menuParent">
    <div class="menuItem" v-for="(item) in items" :key="item.id" :class="[(select == item.id && active) ? 'hover':'']">
      <div class="line" v-if="select == item.id &&active"></div>
      <div class="itemContent">
        <img :src="require('../../assets/images/header/'+item.icon)">
        <div class="menuTitle">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerMenu',
  props: ['active'],
  data () {
    return {
      select: 0,
      items: [
        {
          id: 0,
          name: 'خانه',
          icon: 'home.svg'
        },
        {
          id: 1,
          name: 'دسته بندی',
          icon: 'cat.svg'
        },
        {
          id: 2,
          name: 'ویدئوهای من',
          icon: 'video.svg'
        }
      ]
    }
  },
  methods: {
    left () {
      if (this.select < this.items.length - 1) {
        this.select++
      }
    },
    right () {
      if (this.select > 0) {
        this.select--
      }
    },
    enter () {
      return this.items[this.select]
    }
  }
}
</script>

<style scoped>
.menuParent {
  position: absolute;
  height: 135px;
  width: 970px;
  left: 780px;
  top: 0px;
  /*border: 1px solid red;*/
  overflow: hidden;
}

.menuItem {
  position: relative;
  float: right;
  height: 135px;
  width: 170px;
  margin-right: 0px;
  border: 1px solid transparent;
  /*border: 1px solid green;*/
}

.line {
  position: absolute;
  width: 170px;
  left: 0px;
  top: 124px;
  height: 10px;
  background: #F44932;
}

.itemContent {
  direction: rtl;
  position: absolute;
  width: 170px;
  left: 0px;
  top: 0px;
  height: 124px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
}

.menuTitle {
  font-size: 18px;
  color: #ffffff;
  padding: 0 15px 0 15px;
  direction: rtl;
}

.hover {
  background: rgba(244, 73, 50, 0.15);
  border: 1px solid #F44932 !important;
}
</style>
