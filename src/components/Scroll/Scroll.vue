<template>
  <div class="wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null,
      Y: 0,
    };
  },
  probeType: {
    type: Number,
    default: 0, //默认不实时监听，节省性能
  },
  pullUpLoad: {
    type: Boolean,
    default: false,
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 重新获取的封装
    refresh() {
      console.log("---- bs刷新 ----");
      this.scroll && this.scroll.refresh();
    },
  },
  mounted() {
    const scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true,
      click: true,
      probeType: 3,
      pullingUp: true,
    });
    this.scroll = scroll;
    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
       
      // console.log(this.Y);
      this.$emit("position", -(position.y));
    });
    // 监听下拉到底
    this.scroll.on("pullingUp", () => {
      console.log("到底");
      this.$emit("pullingUp");
    });
  },
  updated() {},
};
</script>

<style lang="less" scoped>
.wrapper {
  background-color: #fff;
}
</style>