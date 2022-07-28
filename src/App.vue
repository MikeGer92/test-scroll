<template>
  <div id="app" class="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  data() {
    return {
      showLoader: false,
      scrollPos: 0,
      lastScroll: 0,
      scrollDirect: true
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll()
  },
  methods: {
    async handleScroll () {
      this.lastScroll = this.$store.getters['currentScrollY']
      this.scrollPos = window.scrollY
      // console.log(this.scrollPos)
      // console.log(this.$store.getters['currentScrollY'])
      if (window.scrollY > this.lastScroll) {
        this.scrollDirect = false
      } else {
        this.scrollDirect = true
      }
      await this.$store.dispatch('setIsShowHeader', this.scrollDirect);
      this.$store.dispatch('setCurrentScrollY', this.scrollPos);
      // console.log(this.scrollDirect)
    }
  },
}

</script>

<style lang="scss">
// @import 'assets/index';
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
