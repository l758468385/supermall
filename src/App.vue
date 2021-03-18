<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <TabBar v-if="currentRoute"></TabBar>
  </div>
</template>


<script>
import TabBar from "./components/TabBar/TabBar";
export default {
  components: {
    TabBar,
  },
  computed: {
    currentRoute() {
      return (
        this.$route.path === "/home" ||
        this.$route.path === "/category" ||
        this.$route.path === "/profile" ||
        this.$route.path === "/cart"
      )},
  },
  methods: {},
};
</script>

<style lang="less">
@import "./assets/css/base.css";
</style>
              