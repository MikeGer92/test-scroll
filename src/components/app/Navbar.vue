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
// @media (max-width: 605px) {
//   .active {
//     height: 38px;
//     border-radius: 19px;
//   }
//   .header {
//     display: none;
//   }
//   .header-small {
//     display: flex;
//     width: 100%;
//     max-width: 600px;
//     height: 38px;
//     align-items: center;
//     &__popup {
//       // position: absolute;
//       // margin: 10px 12px;
//       &_btn {
//         margin: 12px;
//         display: block;
//         width: 23px;
//         height: 20px;
//         &-active {
//           margin-top: 22px;
//         }
//         &-item {
//           display: block;
//           width: 24px;
//           height: 4px;
//           margin-bottom: 4px;
//           background: #FFA724;
//           border-radius: 50px;
//           &:last-child {
//             margin-bottom: 0;
//           }
//           &--active {
//             &:nth-child(1) {
//               margin: -4px 0;
//               transform: rotate(-45deg);
//             }
//             &:nth-child(2) {
//               display: none;
//             }
//             &:nth-child(3) {
//               margin: -4px 0;
//               transform: rotate(45deg);
//             }
//           }
//         }
//       }
//       &_pages {
//         width: 200px;
//         z-index: 2;
//         background-color: #fff;
//         position: absolute;
//         left: 6px;
//         top: 42px;
//         &-link {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 165px;
//           height: 38px;
//           margin-left: 12px;
//           font-size: 12.4343px;
//           line-height: 15px;
//           font-weight: 700;
//           color: #828282;
//           text-decoration: none;
//           &--active {
//             // width: 200px;
//             height: 38px;
//             color: #fff;
//             text-decoration: none;
//           }
//         }
//         & img {
//           width: 14px;
//           height: 6px;
//           margin-left: 12px;
//         }
//       }
//     }
//     &__logo {
//       display: flex;
//       width: 67px;
//       height: 33px;
//       margin: 3px 0 3px 0px;
//     }
//     &__wrapper {
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       margin-left: 0px;
//       &_contact {
//         display: flex;
//         align-items: center;
//         font-family: 'Inter';
//         font-style: normal;
//         font-weight: 900;
//         font-size: 12.4343px;
//         line-height: 15px;
//         color: #10205F;
//       }
//       &_info {
//         display: flex;
//         flex-direction: column;
//         &-days, &-hours {
//           font-family: 'Inter';
//           font-style: normal;
//           font-weight: 900;
//           font-size: 8.55323px;
//           line-height: 10px;
//           text-align: right;
//           color: #FFA724;
//         }
//       }
//     }
//   }
// }
</style>