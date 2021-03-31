<template>
  <div class="cart">
    <!-- 导航 -->
    <NavBar class="nav-bar">
      <template v-slot:center> 购物车({{ cartLength }}) </template>
    </NavBar>
    <!-- 商品列表 -->
    <CartList></CartList>
    <!-- 底部汇总 -->
    <CartListBottom class="CartListBottom"></CartListBottom>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/Navbar";
import CartListBottom from "./childComps/CartListBottom";
import CartList from "./childComps/CartList";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartListBottom,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style lang="less" scoped>

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.CartListBottom {
 
}
</style>