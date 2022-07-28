<template>
	<div class="main-layout-body" >
    <div class="block__search" >
      <input type="text" class="block__search_field" placeholder="поиск по всем категориям">
    </div>
    <div v-if="isShowHeader" class="blocks__wrapper" @scroll="changeShowHeader()">
      <Navbar></Navbar>
    </div>
    <div class="content__block">
      <router-view></router-view>
    </div>
	</div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
export default {
	name: 'main',
  components: { Navbar },
  data() {
    return {

    }
  },
  computed: {
    isShowHeader() {
      return this.$store.getters['isShowHeader'];
    },
    currentScrollY() {
      return this.$store.getters['currentScrollY'];
    },
  },
  watch: {
    currentScrollY() {
      this.changeShowHeader()
    }
  },
  methods: {
    changeShowHeader() {
      // console.log(window.scrollY)
    }
  },
  mounted() {
    this.changeShowHeader()
  }
}

</script>

<style lang="scss">
.main-layout-body{
	display: flex;
  flex-direction: column;
	max-width: 1920px;
  overflow-y: hidden;
}
.block__search {
  width: 100%;
  max-width: 400px;
  position: fixed;
  display: flex;
  margin: 10px 0;
  z-index: 2;
  &_field {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background: lightgray;
    padding: 0 20px;
    font-size: 18px;
    color: black;
    overflow-y: hidden;
  }
}
.blocks__wrapper {
  position: fixed;
  top: 80px;
  left: 10px;
  overflow-y: scroll;
  z-index: 2;
}
.content__block {
  position: absolute;
  top: 120px;
  left: 10px;
  z-index: 1;
}
	
</style>