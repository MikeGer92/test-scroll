<template>
  <div class="block-item">
    <div class="block-item__unit">
      <div class="block-item__unit_wrapper">
        <div class="block-item__unit_title">{{ unit.title }}</div>
        <div class="block-item__unit_logo"><img :src="`${unit.logo}`" /></div>
        <div class="block-item__unit_descr">{{ unit.descr }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlockItem',
  props: {
    unit: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.block-item {
  &__unit {
    display: flex;
    width: 250px;
    height: 200px;
    margin: 10px 20px;
    border: 1px solid brown;
    border-radius: 20px;
    &_wrapper {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_title {
      font-family: 'Courier New', Courier, monospace;
      font-size: 22px;
      font-weight: normal;
      color: gray;
    }
    &_logo {
      display: flex;
      width: 200px;
      height: 120px;
      & img {
        width: 100%;
        height: auto;
      }

      object-fit: contain;
    }
    &_descr {
      font-family: 'Courier New', Courier, monospace;
      font-size: 10px;
      font-weight: normal;
      color: green;
    }
  }
}
</style>