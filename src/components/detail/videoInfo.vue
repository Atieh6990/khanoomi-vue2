<template>
  <div class="infoParent">
    <div class="title">{{ detailData.title }}</div>
    <div class="shortDes">{{ detailData.description }}</div>
<!--    <div class="category">-->
<!--      <img src="../../assets/images/header/cat.svg">-->
<!--      <span style="padding-right: 10px">دسته بندی : <span class="catTitle">{{ detailData.category.name }}</span></span>-->
<!--    </div>-->
    <div class="duration">
      <div class="durationTitle">
        <img src="../../assets/images/detail/whiteTimer.svg">
        <span style="padding-right: 10px">مدت زمان :</span>
      </div>
      <div style="direction: ltr" class="durationTime">35 : 15 :59</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoInfo',
  props: ['detailData']
}
</script>

<style scoped>
.infoParent {
  position: absolute;
  width: 729px;
  height: 320px;
  top: 47px;
  left: 1020px;
  /*border: 1px solid red;*/
}

.title {
  position: absolute;
  width: 100%;
  height: 78px;
  top: 0px;
  right: 0px;
  /*border: 1px solid red;*/
  color: #FC9A8D;
  font-size: 32px;
  font-weight: 300;
  line-height: 80px;
  letter-spacing: 0em;
  text-align: right;
  direction: rtl;
}

.shortDes {
  position: absolute;
  width:87%;
  height: 44px;
  top: 85px;
  right: 0px;
  /*border: 1px solid red;*/
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: right;
  direction: rtl;
}

.category {
  position: absolute;
  width: 100%;
  height: 40px;
  top: 140px;
  right: 0px;
  /*border: 1px solid red;*/
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: right;
  direction: rtl;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  /*justify-content: center;*/
  align-items: center;
  align-content: center;
}

.duration {
  position: absolute;
  height: 52px;
  width: 312px;
  border-radius: 29px;
  background: #FFFFFF2B;
  top: 222px;
  right: 0px;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  color: #FFFFFF;
  direction: rtl;
}

.durationTitle {
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  /*justify-content: center;*/
  align-items: center;
  align-content: center;
  direction: rtl;
}
</style>
