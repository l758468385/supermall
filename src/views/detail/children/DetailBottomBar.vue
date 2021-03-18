<template>
  <div class="bottom-bar">
    <div class="bar-item">
      <div class="bar-left">
        <div>
          <img src="../../../assets/img/common/客服.png" alt="" />
          <span class="text">客服</span>
        </div>
        <div>
          <img src="../../../assets/img/common/店铺.png" alt="" />
          <span class="text">店铺</span>
        </div>
        <div>
          <img src="../../../assets/img/common/收藏.png" alt="" />
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy" @click="buyTocart">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  //方法集合
  methods: {
    addToCart() {
      // 监听加入购物车事件
      this.$emit("addCart");
    },
    buyTocart() {
      // 监听加入购物车事件
      this.$emit("buyNow");
    },
  },
};
</script>
<style lang="less" scoped>
.bottom-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  flex: 1;
  background-color: #fff;
  width: 100%;
  height: 49px;

  // background-color: lawngreen;
}
.bar-item {
  flex: 1;

  display: flex;
  // width: 100%;
}
.bar-left {
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
  div {
    display: table-cell;
    text-align: center;
    img {
    }
  }
}
.bar-right {
  display: flex;
  flex: 1;
  background-color: #dd5246;
  text-align: center;

  line-height: 49px;

  .cart {
    flex: 1;
    background-color:skyblue;
    // line-height: 49px;
    // width: 50%;
  }
  .buy {
    flex: 1;
    background-color: #ff769a;
    // line-height: 49px;
    // width: 50%;
  }
}
.text {
  display: block;
}
img {
  width: 25px;
}
</style>