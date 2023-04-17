<template>
  <div id="app">
    <!--    <div style="position: absolute;width: 50px;height: 50px;left: 50px;top: 50px; background-color: #0074D9"></div>-->
    <loading v-if="loading"></loading>
    <Header ref="Header"></Header>
    <transition name="fade" mode="out-in">
      <!--      <router-view v-slot="{ Component }">-->
      <!--        <component :is="Component" :key="$route.fullPath" ref="routeView"></component>-->
      <!--      </router-view>-->
      <router-view :key="$route.fullPath" ref="routeView"></router-view>
    </transition>
  </div>
</template>
<script>
import Header from './components/Header/header'
import router from './router'
import {mapMutations, mapGetters} from 'vuex'
import {ROAST_CONFIG} from '@/config'
import axios from 'axios'
import func from './mixins/func'
import loading from "@/components/loading";

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next()
  } else {
    next() // make sure to always call next()!
  }
})
export default {
  components: {
    Header, loading
  },
  mixins: [func],
  watch: {
    '$route'(to, from) {
      // console.log('to =>   ' + (to.name) + '   from =>   ' + (from.name))
      this.currentPage = to.name
    }
  },
  data() {
    return {
      loading: false,
      network: false,
      currentPage: '',

    }
  },
  created() {
    console.log('start !!!!')



     // this.setAuthToken(ROAST_CONFIG.TEST_TOKEN)
    // this.$router.push({path: '/'})
    //  alert(this.$cookies.isKey(ROAST_CONFIG.cookies_key))
    //  this.$cookies.set(ROAST_CONFIG.cookies_key, ROAST_CONFIG.TEST_TOKEN)
    // setTimeout(()=>{
    //   alert(this.$cookies.get(ROAST_CONFIG.cookies_key) + ' *****' + this.$cookies.isKey(ROAST_CONFIG.cookies_key))
    // },1000)

    window.addEventListener('keydown', this.keyEvent)
    // if (this.$cookies.isKey(ROAST_CONFIG.cookies_key)) {
    //   this.setAuthToken(this.$cookies.get(ROAST_CONFIG.cookies_key))
    // } else {
    //   this.$router.push({name: 'login'})
    // }

    axios.interceptors.request.use((config) => {
      // alert('interceptors ->'+JSON.stringify(config))
      config.headers.Authorization = 'Bearer ' + this.getAuthToken()
      this.loading = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    axios.interceptors.response.use((response) => {
      this.loading = false
      return response
    }, error => {
     // alert(error)
      if (error.response.status === 401) {
        this.loading = false
        this.$router.push({path: 'login'})
      }
      // return Promise.reject(error);
    })


    this.$root.$on('PostMessages', (data) => {
      // alert(data.type + '****' + data.data)
      if (data.type && data.type == 'getUserAuth') {
        this.$refs.routeView.goToLogin(data.data)
      }

      if (data.type && data.type == 'returnPage') {
        this.handleExit()
        return false
      }
      // if (data.type && data.type == 'returnPage') {
      //   this.handleExit()
      //   return false
      // }

      if (data.type && data.type == 'checkFullScreen') {
        return false
      }
    })

  },
  methods: {
    ...mapMutations(['setAuthToken']),
    ...mapGetters(['getAuthToken']),
    keyEvent(event) {
      const keyCode = event.keyCode
      // alert(keyCode + '**' + this.currentPage)
      switch (keyCode) {
        case 38: // UP
          if (this.loading === false && this.network === false) {
            if (!this.$refs.routeView.up()) {
              this.$refs.routeView.activeRout = false
              this.$refs.Header.active = true
            }
          }
          break
        case 39:// Right

          if (this.loading === false && this.network === false) {

            if (this.$refs.Header.active) {
              this.$refs.Header.right()
            } else {
              this.$refs.routeView.right()
            }
          }
          break
        case 37:// Left

          if (this.loading === false && this.network === false) {
            if (this.$refs.Header.active) {
              this.$refs.Header.left()
            } else {
              this.$refs.routeView.left()
            }
          }
          break
        case 40:// Down
          if (this.loading === false && this.network === false) {
            // console.log(this.$refs.Header.active)
            if (this.$refs.Header.active) {
              this.$refs.Header.active = false
              this.$refs.routeView.activeRout = true
            } else {
              this.$refs.routeView.down()
            }
          }
          break
        case 13:// Enter

          if (this.loading === false && this.network === false) {
            if (this.$refs.Header.active) {
              if (this.currentPage == 'detail') {
                this.$refs.routeView.killVideo()
              }
              this.$refs.Header.enter()
            } else {
              this.$refs.routeView.enter()
            }
          }
          break
        case 10009:// Return
          this.handleExit()
          break
        case 8:// BackspaceKeyboard
          break
        case 187:// Return
          this.handleExit()
          break
        case 10182:// EXIT
          break
        case 46:
          break
        case 65376:// keyboarddone
          if (this.loading === false && this.network === false) {

          }
          break
        case 65385:// keyboardcancel
          if (this.loading === false && this.network === false) {

          }
          break
        case 48:// key0
        case 49:// key1
        case 50:// key2
        case 51:// key3
        case 52:// key4
        case 53:// key5
        case 54:// key6
        case 55:// key7
        case 56:// key8
        case 57:// key9
          break
        case 10190:// keyPRE-CH
          break
        case 412:// PREVIOUS
          break
        case 417:// NEXT
          break
        case 179:// PAUSE

          if (this.loading === false && this.network === false && this.currentPage == 'detail') {
            this.$refs.routeView.playPauseVideo()
          }
          // this.playPauseVideo(!this.playType)
          break
        case 415:// PLAY
          break
        case 413:// STOP
          break
        case 228:// ff
          if (this.loading === false && this.network === false && this.currentPage == 'detail') {
            this.$refs.routeView.seekForward()
          }
          // this.seekVideo(0)//0->forward
          break
        case 227:// bf
          if (this.loading === false && this.network === false && this.currentPage == 'detail') {
            this.$refs.routeView.seekBackward()
          }
          // this.seekVideo( 1)//0->backward
          break
      }
    },
    handleExit() {
      if (this.currentPage == 'Home' || this.currentPage == 'login' || this.currentPage == '') {
        this.exitAndroidApp();
      } else {
        this.$refs.routeView.back()
      }
    }
  }
}
</script>
<style>
#app {

  top: 0;
  left: 0;
  position: fixed;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('./assets/images/back.jpg');
  /*background: radial-gradient(47.27% 47.27% at 50.57% 52.73%, #0E1234 0%, rgba(10, 37, 62, 0.79) 100%) !* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected *!;*/

}

@font-face {
  font-family: 'BYekan';
  font-weight: normal;
  font-style: normal;
  src: url('assets/font/BYekan.ttf');
}

body, input, select, label, div, span, p {
  font-family: "BYekan" !important;
}

textarea:focus, input:focus, img, div, polygon, canvas, span, p {
  outline: none;
}

* {
  -webkit-transform: translateZ(1);
  -moz-transform: translateZ(1);
  -ms-transform: translateZ(1);
  -o-transform: translateZ(1);
  transform: translateZ(1);
  /*    -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;*/
  /*    -webkit-text-size-adjust: none;
      -moz-text-size-adjust: none;
      -ms-text-size-adjust: none;
      -o-text-size-adjust: none;*/
  /*    text-size-adjust: none;*/
  /*    text-rendering: geometricPrecisio;
      -webkit-text-rendering: geometricPrecisio;
      -moz-text-rendering: geometricPrecisio;
      -ms-text-rendering: geometricPrecisio;
      -o-text-rendering: geometricPrecisio;*/
  /*    image-rendering: crisp-edges;
      -webkit-image-rendering: crisp-edges;
      image-rendering: pixelated;
      -webkit-image-rendering: pixelated;*/

}

img {
  image-rendering: auto !important;
}
</style>
