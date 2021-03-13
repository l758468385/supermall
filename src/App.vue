<template>
  <div id="app">
    <router-view></router-view>
    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <TabBar></TabBar>
  </div>
</template>


<script>
import TabBar from "./components/TabBar/TabBar";
export default {
  components: {
    TabBar,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style lang="less">
</style>
