<template>
  <div class="goods">
    <GoodItem  class="gooditem" v-for="(item, index) in goods" :gooditem="item" :key="index"></GoodItem>
  </div>
</template>

<script>
import GoodItem from "../Goods/GoodItem/GoodItem";
export default {
  components: {
    GoodItem,
  },
  props: {
    goods: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
  .goods {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 2px;
  }
</style>