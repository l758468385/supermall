<template>
  <div class="TabBarItem">
    <div class="tabitem" @click="itemClick" :class="{active:this.$route.path === path}">
      <div><slot name="tab_img"></slot></div>
      <div><slot name="tab_text"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      Type:String,
      

    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    itemClick() {
      // 防止重复路由跳转，catch一下异常
      this.$router.push(this.path).catch(()=> {})

    },
  },
};
</script>

<style lang="less" scoped>
.active{
  color: #f12e62;
}
</style>