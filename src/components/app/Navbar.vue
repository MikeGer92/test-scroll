<template>
  <div class="navbar-wrapper">
    <div class="header">
      <div class="header__wrapper">
        <div class="header__wrapper_pages">
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="div"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
            >
            <a href="#"
              class="header__wrapper_pages-link"
              @mouseover="isMain(link.title)"
              :class="{'header__wrapper_pages-link-active': $route.path === `${link.url}`}"
            >
              <img :src="`${link.src}`"  class="header__wrapper_pages-icon">
              {{ link.title }}
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showPopup: false,
      links: [
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
      ]
    }
  },
  methods: {
    modal() {
      this.$emit('modal')
    },
    isMain(title) {
      if (title === 'НОВЫЕ АВТОМОБИЛИ') {
        this.modal()
      }
    }
  }
}
</script>

<style lang="scss">
.active {
  height: 40px;
  display: flex;
  align-items: center;
  background: greenyellow;
  border-radius: 10px;
  color: #FFFFFF;
}
.header {
	display: flex;
  width: 100%;
	max-width: 1920px;
	background: #FFFFFF;
  &__wrapper {
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    &_pages {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      &-link {
        display: flex;
        align-items: center;
        width: 185px;
        height: 40px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;  
        margin-right: 10px;
        color: #828282;
        text-decoration: none;
        &-active {
          color: #FFFFFF;
          text-decoration: none;
        }
      }
      &-icon {
        display: flex;
        width: 30px;
        height: 30px;
        margin: 0 10px; 
      }
    }
  }
}
</style>