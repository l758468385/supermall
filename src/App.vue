<template>
  <div id="app">
    <NavBar class="navbar">
      <template v-slot:center>购物街</template>
    </NavBar>
    <router-view></router-view>

    <TabBar></TabBar>
  </div>
</template>


<script>
import TabBar from "./components/TabBar/TabBar";
import NavBar from "./components/NavBar/Navbar"

export default {
  components: {
    TabBar,
    NavBar

  },
  computed: {

  },
  methods: {

  },
};
</script>

<style lang="less">
@import "./assets/css/base.css";
.navbar {
  background-color: var(--color-tint);
  color: #fff;

}
</style>
              