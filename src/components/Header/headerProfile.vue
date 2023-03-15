<template>
  <div class="profileParent">
    <div class="picParent">
      <img class="userPic" src="../../assets/images/header/userdefaul.png">
    </div>
    <div class="userName">
      {{ (profileData.mobile) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerProfile',
  props: ['profileData'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.profileParent {
  position: absolute;
  height: 135px;
  width: 300px;
  left: 200px;
  top: 0px;
  overflow: hidden;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  direction: ltr !important;
}

.picParent {

  width: 64px;
  height: 64px;
  background: #EEF3FF;
  border-radius: 50%;
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.userPic {
  width: 60px;
  height: 60px;

}

.userName {
  display: flex;
  display: -webkit-flex !important;;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  color: #FFFFFF;
  font-size: 20px;
  direction: ltr;
  padding: 0 15px 0 15px;
}
</style>
