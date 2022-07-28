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
      if (window.scrollY > this.lastScroll) {
        this.scrollDirect = false
      } else if (window.scrollY < this.lastScroll || window.scrollY === 0){
        this.scrollDirect = true
      }
      await this.$store.dispatch('setIsShowHeader', this.scrollDirect);
      this.$store.dispatch('setCurrentScrollY', this.scrollPos);
    }
  },
}

</script>

<style lang="scss">
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
