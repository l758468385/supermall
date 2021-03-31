<template>
  <div class="cartListItem">
    <div class="checkbtn">
      <div class="checkWraper" @click="checkClick">
        <img
          class="select_btn"
          :class="{ checked: product.checked }"
          src="../../../assets/img/common/勾选中.svg"
          alt=""
        />
      </div>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ product.price }}</div>
        <div class="item-count right">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      Type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>
<style lang="less" scoped>
.cartListItem {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  // top: 20px;
  bottom: -10px;
  // left: 10px;
  // right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
.checkbtn {
  width: 30px;

  display: flex;
  align-items: center;
}
.checkbtn .checkWraper {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}
.select_btn {
  //
  width: 20px;
  height: 20px;
  // background-color: #ff8198;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #8c8c8c;
}
.checked {
  background-color: #ff8198;
  border: none;
}
</style>
