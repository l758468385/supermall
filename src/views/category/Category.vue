<template>
  <div class="category">
    <p>我是Category</p>
  </div>
</template>

<script>
import { getHomeMultidate } from "@/api/home";
export default {
  name: "Category",
  methods: {
    getSwiper() {
      getHomeMultidate().then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.getSwiper();
  },
};
</script>

<style lang="less" scoped>
</style>