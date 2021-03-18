<template>
  <div class="tab_bar">
    <TabBarItem class="TabBarItem" path="/home">
      <template v-slot:tab_img
        ><span class="iconfont icon-shouye"></span
      ></template>
      <template v-slot:tab_text> <span>首页</span></template>
    </TabBarItem>
    <TabBarItem class="TabBarItem" path="/category">
      <template v-slot:tab_img
        ><span class="iconfont icon-leimupinleifenleileibie2"></span
      ></template>
      <template v-slot:tab_text> <span>分类</span></template>
    </TabBarItem>
    <TabBarItem class="TabBarItem" path="/cart">
      <template v-slot:tab_img
        ><span class="iconfont icon-gouwuchekong"></span
      ></template>
      <template v-slot:tab_text> <span>购物车</span></template>
    </TabBarItem>
    <TabBarItem class="TabBarItem" path="/profile">
      <template v-slot:tab_img
        ><span class="iconfont icon-gerenzhongxin1"></span
      ></template>
      <template v-slot:tab_text> <span>个人中心</span></template>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem/TabBarItem";
export default {
  name: "TabBar",
  components: {
    TabBarItem,
  },
};
</script>
<style lang="less" scoped>
.tab_bar {
  display: flex;
  text-align: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  background-color: #f6f6f6;
  z-index: 16;
  .TabBarItem {
    flex: 1;
  }
}

.iconfont {
  font-size: 20px;
}
</style>