<template>
  <div class="home">
    <Loader v-if="showLoader" />
    <div class="home__wrapper" >
      <div class="home__blocks" v-for="(block, idx) in blocks" :key="idx">
        <h1>{{ block.title }}</h1>

        <div class="home__blocks_block">
          <BlockItem :unit="item" v-for="item in unitsList" :key="item.id"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Loader from '@/components/app/Loader.vue'
import BlockItem from '@/components/BlockItem.vue'
export default {
  name: 'Home',
  components: { Loader, BlockItem },
  data() {
    return {
      showLoader: false,
      showHeader: this.$store.getters['isShowHeader'],
      scrollPos: 0,
      newScrollPos: 0,
      blocks: [
        {title: 'ПОДБОРКИ', url: '/', src: require('/src/assets/images/nineSqr.png'), exact: true},
        {title: 'ВСЕ КАТЕГОРИИ', url: '/all_cat', src: require('/src/assets/images/fourSqr.png')},
        {title: 'ГДЕ ПОЕСТЬ', url: '/eats', src: require('/src/assets/images/eats.png')},
        {title: 'ПРОДУКТЫ', url: '/products', src: require('/src/assets/images/products.jpg')},
        {title: 'ЗАПРАВКИ', url: '/fuel', src: require('/src/assets/images/fuel.png')},
        {title: 'СКИДКИ', url: '/rest', src: require('/src/assets/images/rest.png')},
        {title: 'КЕШБЭК', url: '/cash', src: require('/src/assets/images/rest.png')},
        {title: 'ОДЕЖДА', url: '/close', src: require('/src/assets/images/rest.png')},
        {title: 'ДЛЯ РЕМОНТА', url: '/repaire', src: require('/src/assets/images/rest.png')},
        {title: 'ЭЛЕКТРОНИКА', url: '/elect', src: require('/src/assets/images/rest.png')},
      ],
      unitsList: [
        {id: 0, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'},
        {id: 1, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'},
        {id: 3, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'},
        {id: 4, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'},
        {id: 5, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'},
        {id: 6, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'},
        {id: 7, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'},
        {id: 8, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'},
        {id: 9, title: 'Круто.РУ', logo: require('../assets/images/logopng.png'), descr: 'Бла-бла-бла-бла-бла-бла. Может и вам повезет'}
      ]
    }
  },
  computed: {
    currentScrollY() {
      return this.$store.getters['currentScrollY'];
    },
    isShowHeader() {
      return this.$store.getters['isShowHeader'];
    }
  },

  watch: {
    currentScrollY() {
      this.changeShowHeader()
    }
  },
  methods: {
    changeShowHeader() {
      // this.scrollPos = this.$store.getters['currentScrollY']
      // this.newScrollPos = window.scrollY
      // console.log(this.newScrollPos)

      // if (this.scrollPos < 100) {
      //   this.showHeader = true;
      // } else {
      //   this.showHeader = false;
      // }
      // console.log(this.showHeader)
      
    },
  },
  mounted() {
    this.changeShowHeader()
  }
  

}
</script>
<style lang="scss">
::-webkit-scrollbar { /* chrome based */
    width: 0px;  /* ширина scrollbar'a */
    background: transparent;  /* опционально */
}

html {
    -ms-overflow-style: none;  /* IE 10+ */
    scrollbar-width: none; /* Firefox */
}
.home {
  max-width: 1920px;
  // height: 100vh;
  display: flex;
  overflow-y: hidden;
  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__blocks {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    // -webkit-scrollbar { width: 0 };
    // -ms-overflow-style: none;
    // overflow: -moz-scrollbars-none; 
    &_block {
      display: flex;
      flex-direction: row;
      width: 3500px;
      height: 220px;
      border: 1px solid blueviolet;
      border-radius: 10px;
      margin: 10px;
      
    }
  }
}
</style>