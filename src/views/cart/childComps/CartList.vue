<template>
  <div>
    <CartListItem
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
      
    ></CartListItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Scroll from "../../../components/Scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  components: {
    // Scroll,
    CartListItem,
  },
  data() {
    return {
      testvalue: 1,
    };
  },
  methods: {},
  computed: {
    // 引入vuex辅助mapGetters 辅助函数
    // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
    /* https://vuex.vuejs.org/zh/guide/getters.html */
    ...mapGetters(["cartList"]),
  },
};
</script>

<style lang="less" scoped>
</style>